<script setup>
import ImageData from '@/components/ImageData.vue';
import Downloadable from './Downloadable.vue';
import { fetchRecent } from '@/utils/fetchRecent.js';
import { ref, reactive, onMounted } from 'vue';
import { viewImage } from '@/utils/viewImage.js';

const imageId = ref(0)
const fileName = ref('');
const fileSize = ref(0);
const uploadDate = ref('');
const uploadTime = ref('');

const imageUrl = ref(null);
const recentExists = ref(false);

const getRecent = async () => {
    try {
        console.log('Fetching recent data...');
        const response = await fetchRecent();
        console.log('Recent response:', response);
        imageId.value = response.id;
        fileName.value = response.fileName;
        fileSize.value = response.fileSize;
        let dateTime = response.uploadDate.split('T');
        uploadDate.value = dateTime[0];
        uploadTime.value = dateTime[1];
        console.log('fetching image data successful');
        const image = await viewImage(imageId.value);
        console.log('Image URL:', image);
        if (image) {
            imageUrl.value = image;
            recentExists.value = true;
        }
        console.log('Recent data:', response);
    } catch (error) {
        console.error('Error fetching recent data:', error);
    }
};

onMounted(getRecent)
</script>

<template>
    <div class="flex flex-col md:flex-row space-y-10 space-x-10 items-start">
        <ImageData :imageId="imageId" :fileName="fileName" :fileSize="fileSize" :uploadDate="uploadDate" :uploadTime="uploadTime"/>
        <div v-if="recentExists">
            <Downloadable :imageUrl="imageUrl" :fileName="fileName" :imageId="imageId" />
        </div>
        
    </div>
</template>