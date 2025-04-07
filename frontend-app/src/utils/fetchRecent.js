import axios from 'axios';

const targetRoute = 'http://localhost:5260/recent'
export const fetchRecent = async () => {
    try {
        const response = await axios.get(targetRoute);
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
