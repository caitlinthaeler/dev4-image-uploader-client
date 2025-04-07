
export const uploadImage = async (file) => {
    try {
        const response = await axios.post("http://localhost:5260/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        console.log('File uploaded successfully:', response.data);
    }
    catch (error)
    {
        console.error('Error uploading file:', error);
    }
}