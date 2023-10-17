import axios from "axios";

const axiosAPI = axios.create({
    baseURL: "https://1738api.lessinlaw.com/",
});

export const getPracticeAreasData = async () => {
    try {
        return await axiosAPI.post("misc/getcontent/");
    } catch (err) {
        console.log("Error Adding Code", err);
    }
};
