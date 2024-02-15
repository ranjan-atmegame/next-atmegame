import { API_URL } from "@/config";

export const contactUs = async (data) => {
    return fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then(res => res.json())
        .then(json => {
            return {
                res: json,
                msg: "Thank you for getting in touch!",
            };
        }).catch((err) => {
            console.log("Error: ", err);
            return { status: 500, error: "Something went wrong" };
        });
};

export const submitGame = async (formData) => {
    return fetch(`${API_URL}/user-game`, {
        method: "POST",
        body: formData,
    }).then(res => res.json())
        .then(json => {
            return {
                res: json,
                msg: "We have reported issue to our QA team",
            };
        }).catch((err) => {
            console.log("Error: ", err);
            return { status: 500, error: "Something went wrong" };
        });
}
