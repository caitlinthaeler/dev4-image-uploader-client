<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';

const isDragging = ref(false);
const file = ref(null);
const fileInput = ref(null);
const filePreview = ref(null);
const canUpload = ref(false);
const buttonRef = ref(null);

const fileName = ref('');
const fileSize = ref(0);

const onChange = (e) => {
    console.log('new file selected');
    const selectedFile = e.target.files[0];
    if (selectedFile) {
        console.log('file selected successfully');
        console.log(selectedFile);
        file.value = selectedFile;
        fileName.value = selectedFile.name;
        fileSize.value = selectedFile.size;
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
        fileName.value = selectedFile.name;
        fileSize.value = selectedFile.size;
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
        fileName.value = '';
        fileSize.value = 0;
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

const convertedFileSize = computed(() => {
  const bytes = fileSize.value;
  if (bytes === 0) return '0 Bytes';

  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const size = bytes / Math.pow(1024, i);
  return `${size.toFixed(1)} ${sizes[i]}`;

});

</script>

<template>
    <div class="flex flex-col justify-center items-center w-96 space-y-10">

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
            class="cursor-pointer text-white text-lg w-full h-full"
            @click="onClick">
            Drag & Drop an image or click here to upload.
        </label>


        <div v-if="filePreview" class="mb-4">
            <img :src="filePreview" alt="Image Preview" class="w-32 h-32 object-cover rounded">
        </div>

        <ul v-if="fileSize > 0" class="bg-gray-dark text-white p-5 h-full w-100">
            <li class="text-lg font-bold">File Name: <span class="text-oyster">{{ fileName}}</span></li>
            <li class="text-lg font-bold">File Size: <span class="text-oyster">{{ convertedFileSize }}</span></li>
        </ul>

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

