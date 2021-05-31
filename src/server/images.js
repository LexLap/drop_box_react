import Axios from "axios";

const url = "http://localhost:3030/";

export const uploadImage = async (formData, token) => {
    try {
        const result = await Axios.post(url + "upload-image", formData, {
            headers: {
                "Content-Type": 'multipart/form-data'
            },
            params: {
                token
            }
        });

        return result.data;
    } catch (err) {
        console.log(err);
    }
};

export const getIamgesData = async (token) => {
    try {
        const result = await Axios.get(url + "get-images", {
            params:{
                token
            }
        });
        return result.data;
    } catch (err) {
        console.log(err);
    }
};

export const deleteImage = async (id, key) => {
    try {
        await Axios.delete(url + "delete-images", {
            data: { id, key }
        });
        return;
    } catch (err) {
        console.log(err);
    }
};
