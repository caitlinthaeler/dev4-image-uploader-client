import axios from 'axios';

export const fetchImageData = async () => {
    try {
        const response = await axios.get(`http://localhost:5260/showAll`);
        console.log('Fetched image data:', response.data);
        if (response.status === 200) {
            return response.data;
        } 
    } catch (error) {
        console.error('Error fetching image:', error);
        // handle the various errors
        return null;
    }
}
