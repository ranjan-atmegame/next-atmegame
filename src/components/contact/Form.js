"use client"
import Input from "../common/Input";
import Select from "../common/Select";
import { useState } from "react";
import TextArea from "../common/TextArea";
import Button from "../common/Button";
import { validateForm, validateField } from "../../utils/Validation";
import { contactUs } from "../../api/enquiry";
import { useRouter } from 'next/navigation';

export default function Form({
    handleTopicImgCB
}) {
    const router = useRouter();

    const reasons = [
        { name: "General query", id: "1" },
        { name: "Business Enquiry", id: "2" },
        { name: "Game Submission", id: "3", url: "/" },
        { name: "Advertising", id: "4" },
    ]

    const [state, setState] = useState({
        topic: "General query",
        name: "",
        mobile: "",
        email: "",
        companyName: "",
        website: "",
        problems: "",
        compNameField: false,
        webUrlField: false,
        successMsg: "",
        errorMsg: ""
    });

    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);


    function handleChange(e) {
        const { name, value } = e.target;
        setState(prev => ({ ...prev, successMsg: "", errorMsg: "", [name]: value }));
        setError({});
    }

    function handleSelect(e) {
        const topic = e.target?.value;
        let compNameField = false;
        let webUrlField = false;
        switch (topic) {
            case "Business Enquiry":
                compNameField = true;
                webUrlField = false;
                break;
            case "Game Submission":
                redirectToGameSubPage();
                break;
            case "Advertising":
                compNameField = true;
                webUrlField = true;
                break;
            default:
                compNameField = false;
                webUrlField = false;
                break;
        }
        setState(prev => ({ ...prev, topic, compNameField, webUrlField }))
        if (typeof handleTopicImgCB === "function") {
            let param = topic.replace(/\s/g, '').toLowerCase();
            handleTopicImgCB(param)
        }
    }

    function redirectToGameSubPage() {
        router.push('/submit-game');
    }

    function handleKeyUp(e) {
    }

    async function sumbitForm(e) {

        let validateFld = { name, mobile, email, companyName, website, problems }
        e.preventDefault();
        const errors = validateForm(validateFld);
        if (Object.keys(errors).length === 0) {
            setLoading(true);
            const resp = await contactUs(validateFld);
            if (resp) {
                setLoading(false);
                setState({
                    successMsg: resp.res && resp.res.error ? "" : resp.msg,
                    errorMsg: resp.res && resp.res.error ? resp.res.error : "",
                });
                setError();
            }
        } else {
            setError(errors);
            setLoading(false);
        }
    }

    const { topic, name, mobile, email, companyName, website,
        problems, compNameField, webUrlField, successMsg, errorMsg } = state;

    return (
        <div>
            {successMsg !== "" && <div className="success-msg" style={{ marginBottom: "30px" }} >{successMsg}</div>}
            {errorMsg !== "" && <div className="errorMsg" style={{ marginBottom: "30px" }}>{errorMsg}</div>}
            <form>
                <Select
                    value={topic}
                    onChange={(e) => handleSelect(e)}
                    reasons={reasons}
                    title="Select a Topic*"
                />
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
                <Input
                    type="tel"
                    value={mobile}
                    onChange={handleChange}
                    onKeyUp={handleKeyUp}
                    name="mobile"
                    title="Mobile"
                    validation={["required", "mobile"]}
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
                {compNameField && <Input
                    type="text"
                    value={companyName}
                    onChange={handleChange}
                    name="companyName"
                    title="Company Name"
                    validation={["required"]}
                    error={error}
                />}
                {webUrlField && <Input
                    type="text"
                    value={website}
                    onChange={handleChange}
                    name="website"
                    title="Website/App URL"
                    validation={["required"]}
                    error={error}
                />}
                <TextArea
                    name="problems"
                    value={problems}
                    onChange={handleChange}
                    validation={["required"]}
                    error={error}
                />
                <Button
                    label="Send Message"
                    onClick={sumbitForm}
                    loading={loading}
                />
            </form>
        </div>

    )
} 