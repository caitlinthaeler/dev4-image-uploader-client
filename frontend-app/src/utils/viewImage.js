import axios from 'axios';


export const viewImage = async (imageId) => {
    try {
        const response = await axios.get(`http://localhost:5260/view/${imageId}`, {
            responseType: 'blob',
            withCredentials: false
        });
        return URL.createObjectURL(response.data);
    } catch (error) {
        console.error('Error viewing image:', error);
        // handle the various errors
        return null;
    }
}
