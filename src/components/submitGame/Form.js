"use client";
import Input from "../common/Input";
import { useState } from "react";
import TextArea from "../common/TextArea";
import Button from "../common/Button";
import { validateForm } from "../../utils/Validation";
import DragnDrop from "../common/DragDrop";
import { submitGame } from "../../api/enquiry";
import MobileNo from "../common/Mobile/MobileNo";
import { isValidPhoneNumber } from 'libphonenumber-js';

export default function Form() {
  const [state, setState] = useState({
    name: "",
    mobile: "",
    email: "",
    companyName: "",
    website: "",
    gameUrl: "",
    problems: "",
    file: "",
    fileName: "",
    successMsg: "",
    errorMsg: "",
    clearFiles: false,
    countryCode: "",
    phoneNo: "",
    dailCode: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [disabled, setDisabled] = useState(false);
  const [fileErr, setFileErr] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setState((prev) => ({
      ...prev,
      successMsg: "",
      errorMsg: "",
      [name]: value,
    }));
    setError({});
  }

  function handleChangeMobileNo(mobileNo, data) {
    const countryCode = data.dialCode;
    const phone = mobileNo.slice(countryCode.length);
    const dailCode = data.countryCode;
    setState(prev => ({
      ...prev,
      mobile: mobileNo,
      phoneNo: phone,
      countryCode,
      dailCode,
      successMsg: "",
      errorMsg: "",
    }));
  }

  function handleFile(data, error) {
    if (error) {
      const errors = {};
      errors["file"] = error;
      setError(errors);
      setFileErr(error)
    }
    setState((prev) => ({ ...prev, file: data, fileName: data.name }));
  }

  function handleKeyUp(e) { }



  const {
    name,
    mobile,
    email,
    companyName,
    website,
    problems,
    gameUrl,
    successMsg,
    errorMsg,
    file,
    fileName,
    countryCode,
    phoneNo,
    dailCode
  } = state;


  function validateMobileNoWithCountryCode(mobile, dialCode) {
    let mobilNo = mobile.toString();
    let mobiWithPlusCode = `+${mobilNo}`
    let countryCode = dialCode.toUpperCase();
    try {
      return isValidPhoneNumber(mobiWithPlusCode, countryCode);
    } catch (error) {
      return false;
    }
  };

  async function sumbitForm(e) {
    e.preventDefault();
    let validateFld = {
      name,
      // phoneNo,
      email,
      companyName,
      website,
      problems,
      gameUrl,
      // file,
    };
    const errors = validateForm(validateFld);
    const mobiVerification = validateMobileNoWithCountryCode(mobile, dailCode);

    if(!mobiVerification){
      errors["phoneNo"] = "Please enter valid mobile number";
    }

    if (fileErr !== "") {
      errors["file"] = fileErr;
    }

    if (Object.keys(errors).length === 0 && fileErr == "" && mobiVerification) {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", name);
      formData.append("mobile", phoneNo);
      formData.append("email", email);
      formData.append("companyName", companyName);
      formData.append("website", website);
      formData.append("problems", problems);
      formData.append("gameURL", gameUrl);
      formData.append("file", file);
      formData.append("fileName", fileName);
      formData.append("countryCode", countryCode);

      const resp = await submitGame(formData);
      if (resp) {
        setLoading(false);
        if (resp.res && resp.res.error) {
          setState(prev => ({
            ...prev,
            successMsg: resp.res && resp.res.error ? "" : resp.msg,
            errorMsg: resp.res && resp.res.error ? resp.res.error : "",
            clearFiles: true,
          }))
        } else {
          setState({
            successMsg: resp.res && resp.res.error ? "" : resp.msg,
            errorMsg: resp.res && resp.res.error ? resp.res.error : "",
            clearFiles: true,
          });
        }
        setError({});
      }
    } else {
      setError(errors);
      setLoading(false);
    }
  }

  return (
    <div>
      {errorMsg !== "" && (
        <div className="errorMsg" style={{ marginBottom: "30px" }}>
          {errorMsg}
        </div>
      )}
      <form id="form">
        <Input
          type="text"
          value={name}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          name="name"
          title="Name"
          validation={["required"]}
          error={error}
        />
        {/* <Input
          type="tel"
          value={mobile}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          name="mobile"
          title="Mobile"
          validation={["required"]}
          error={error}
          maxL="10"
        /> */}

        <MobileNo
          type="tel"
          value={mobile}
          onChange={handleChangeMobileNo}
          onKeyUp={handleKeyUp}
          name="phoneNo"
          title="Mobile"
          validation={["mobile"]}
          error={error}
          maxL="10"
        />
        <Input
          type="email"
          value={email}
          onChange={handleChange}
          name="email"
          title="Email"
          validation={["required", "email"]}
          error={error}
        />
        <Input
          type="text"
          value={companyName}
          onChange={handleChange}
          name="companyName"
          title="Company Name"
          validation={["required"]}
          error={error}
        />
        <Input
          type="text"
          value={website}
          onChange={handleChange}
          name="website"
          title="Website/App URL"
          validation={["required", "url"]}
          error={error}
        />
        <Input
          type="text"
          value={gameUrl}
          onChange={handleChange}
          name="gameUrl"
          title="Game URL"
          validation={["required", "url"]}
          error={error}
        />
        <DragnDrop
          handleFileCB={handleFile}
          fileError={error && error["file"]}
          supportedFileType=".zip"
          clearFiles={state.clearFiles}
        />
        <TextArea
          name="problems"
          value={problems}
          onChange={handleChange}
          validation={["required"]}
          error={error}
        />
        <Button
          label="Submit your Game"
          onClick={sumbitForm}
          loading={loading}
          disabled={disabled}
        />
        {successMsg !== "" && (
          <div className="success-msg" style={{ marginTop: "30px" }}>
            {successMsg}
          </div>
        )}
      </form>
    </div>
  );
}
