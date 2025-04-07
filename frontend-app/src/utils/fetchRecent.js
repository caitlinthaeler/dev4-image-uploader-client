import axios from 'axios';

export const fetchRecent = async () => {
    try {
        const response = await axios.get('http://localhost:5260/recent');
        if (response.status === 200) {
            return response.data;
        } else {
            return;
        }
    } catch (error) {
        console.error('Error fetching image:', error);
        // handle the various errors
        return null;
    }
}
