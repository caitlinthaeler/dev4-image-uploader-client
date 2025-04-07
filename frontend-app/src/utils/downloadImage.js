import axios from 'axios';


export const downloadImage = async (imageId) => {
    try {
        const response = await axios.get(`http://localhost:5260/download/${imageId}`, {
            responseType: 'blob',
            withCredentials: false
        });
        return response.data;
    } catch (error) {
        console.error('Error downloading image:', error);
        // handle the various errors
        return null;
    }
}
