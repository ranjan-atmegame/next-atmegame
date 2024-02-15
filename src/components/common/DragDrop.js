"use client"
import { useEffect, useState } from "react";
import styles from "./dragdrop.module.css";
import Image from "next/image";

const DragnDrop = ({
    msg = "Drag & Drop file or",
    msg1 = "Browse File",
    img = "https://www.atmegame.com/img/upload-game-icon.svg",
    limitMsg = "Maximum file size 5 MB",
    supportFileMsg = "Only Zip* File supported",
    handleFileCB,
    fileError = "",
    supportedFileType = "",
    clearFiles = false,
}) => {

    const [state, setState] = useState({
        name: "",
        size: "",
        error: ""
    })

    useEffect(() => {
        setState(prev => ({ ...prev, error: fileError }));
    }, [fileError])

    useEffect(() => {
        if (clearFiles) {
            setState({});
        }
    }, [clearFiles])


    function handleDrop(e) {
        e.preventDefault();
        const file = e.dataTransfer?.files[0];
        manageFile(file, e);
    }

    function handleChange(e) {
        e.preventDefault();
        const file = e.target?.files[0];
        manageFile(file, e)
    }


    function manageFile(file, e) {
        let name = file.name;
        let fileType = name.split('.').pop();

        let size = `${parseFloat(file.size / (1024 * 1024)).toFixed(2)} mb`;
        let error = "";
        if ((fileType != "zip" && file.size > (1024 * 1024 * 5)) || fileType != "zip") {
            error = "Please choose correct file type."
        } else if (file.size > (1024 * 1024 * 5)) {
            error = "File size exeeds."
        }
        setState(prev => ({ ...prev, name, size, error }))
        if (typeof handleFileCB === "function") {
            handleFileCB(file, error);
        }

    }

    return (
        <div className="pos-rel">
            <div onDrop={(e) => handleDrop(e)} className={styles.gameUpload}>
                <input
                    type="file"
                    name="file"
                    className={styles.fileUpload}
                    onChange={handleChange}
                    data-validation-type="required"
                    id="file"
                    accept={supportedFileType}
                />
                <div className={styles.dragText}>
                    <Image src={img} height={30} width={30} alt="upload-game-icon" loading="lazy" unoptimized={true} />
                    <h4 className="">{msg} <span> {msg1}</span></h4>
                    <span>{limitMsg}</span>
                    <span style={{ display: "block" }}>{supportFileMsg}</span>
                </div>
            </div>
            {state.name && <div className={styles.fileName}>Name: {state.name}</div>}
            {state.size && <div className={styles.fileSize}>Size: {state.size}</div>}
            {state.error && <div className={`error-msg ${styles.errorMsg}`}>{state.error}</div>}
        </div>
    )
}

export default DragnDrop;