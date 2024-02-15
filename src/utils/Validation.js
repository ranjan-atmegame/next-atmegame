
const validationRules = {
    required: {
        rule: /.+/,
        message: 'This field is required.',
    },
    email: {
        rule: /^\S+@\S+\.\S+$/,
        message: 'Please enter a valid email address.',
    },
    mobile: {
        rule: /^(?![9]{10})(?:[6|7|8|9][0-9]{9})$/,
        message: 'Please enter valid mobile number',
    },
    url: {
        rule: /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i,
        message: 'Please enter valid url',
    },
    minLengthThree: {
        rule: /^.{3,}$/,
        message: 'Please enter atleast 3 character.'
    },

    minLengthSix: {
        rule: /^.{6,}$/,
        message: 'Please enter atleast 6 character.'
    }
};

function validateField(value, validations) {
    for (const validation of validations) {
        const rule = validationRules[validation];
        if (rule) {
            if (!rule.rule.test(value)) {
                return rule.message;
            }
        }
    }
    return null;
}

export function validateForm(formData) {

    const errors = {};
    for (const fieldName in formData) {
        if (formData.hasOwnProperty(fieldName)) {
            const value = formData[fieldName];
            const selector = document.getElementById(fieldName);
            let inputType = selector?.getAttribute("type");
            let validations = selector?.getAttribute("data-validation-type");
            let type = validations?.split(",");

            if (inputType == "checkbox") {
                if (!selector.checked) {
                    errors[fieldName] = "Please accept the term and condition.";
                }
            }
            //file
            if (fieldName == "file") {
                if (selector.files.length === 0) {
                    errors[fieldName] = "This field is required.";
                }
            }
            if (type && type.length > 0) {
                const error = validateField(value, type);
                if (error) {
                    errors[fieldName] = error;
                }
            }
            if(fieldName == "phoneNo"){
                const error = validateField(value, ["mobile"]);
                if (error) {
                    errors[fieldName] = error;
                } 
            }
        }
    }

    return errors;
}

export function validateRadioBtn(fieldName, msg) {
    let error = "";
    const radios = document.querySelectorAll(`input[name=${fieldName}]`);
    const selected = [...radios].some(radio => radio.checked);
    if (!selected) {
        error = msg ? msg : "Please select your gender";
    }
    return error;
}

// export function validateCheck(fieldName){
//     const checkbox = document.getElementById
// }


