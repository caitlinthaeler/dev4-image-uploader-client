<script setup>
import { ref, watch } from 'vue';
import axios from 'axios';

const isDragging = ref(false);
const file = ref(null);
const fileInput = ref(null);
const filePreview = ref(null);
const canUpload = ref(false);
const buttonRef = ref(null);

const onChange = (e) => {
    console.log('new file selected');
    const selectedFile = e.target.files[0];
    if (selectedFile) {
        console.log('file selected successfully');
        console.log(selectedFile);
        file.value = selectedFile;
        canUpload.value = true;
        console.log(file.value);
        filePreview.value = URL.createObjectURL(selectedFile);

        if (buttonRef.value) {
            buttonRef.value.disabled = false;
        }
    }
    console.log(canUpload.value);
};

const onDragOver = (e) => {
    e.preventDefault();
    isDragging.value = true;
};

const onDragLeave = () => {
    isDragging.value = false;
};

const onDrop = (e) => {
    e.preventDefault();
    isDragging.value = false;
    const selectedFile = e.dataTransfer.files[0];
    if (selectedFile) {
        file.value = selectedFile;
        filePreview.value = URL.createObjectURL(selectedFile);
        canUpload.value = true;

        if (buttonRef.value) {
            buttonRef.value.disabled = false;
        }
    }
};

const onClick = () => {
    console.log('clicked')
    fileInput.value?.click();
}

const uploadFile = async () => {
    console.log('uploading file');
    console.log(file.value)
    if (!file.value) return;
    
    const formData = new FormData();
    formData.append('file', file.value);
    try {
        const response = await axios.post("http://localhost:5260/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        console.log('File uploaded successfully:', response.data);
        file.value = null;
        filePreview.value = null;
        canUpload.value = false;

        if (buttonRef.value) {
            buttonRef.value.disabled = true;
        }
    }
    catch (error){
        console.error('Error uploading file:', error);
    }
}

</script>

<template>
    <div class="flex flex-col justify-center items-center w-96">

        <div class="flex justify-center items-center border-1 border-dashed rounded p-4 bg-gray-dark w-full"
        @drop.prevent="onDrop"
        @dragover.prevent="onDragOver"
        @dragleave="onDragLeave"
        
        >
        </div>

        <input 
        type="file"
        id="file-upload"
        class="hidden"
        accept=".png, .jpg, .jpeg, .gif"
        @change="onChange" 
        />

        <label 
            for="file-upload"
            class="cursor-pointer text-white text-lg"
            @click="onClick">
            Drag & Drop an image or click here to upload.
        </label>

        
         <div v-if="filePreview" class="mb-4">
            <img :src="filePreview" alt="Image Preview" class="w-32 h-32 object-cover rounded">
         </div>

         <button
         ref="buttonRef"
         class="bg-olivine text-white px-4 py-2 rounded hover:bg-olivine-light disabled:bg-gray disabled:hover:bg-gray"
         @click="uploadFile"
         disabled
         >
         Upload Image
         </button>
    </div>
</template>

