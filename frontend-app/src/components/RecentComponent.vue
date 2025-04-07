<script setup>
import ImageData from '@/components/ImageData.vue';
import Downloadable from './Downloadable.vue';
import { fetchRecent } from '@/utils/fetchRecent.js';
import { ref, onMounted } from 'vue';
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
    <div class="flex flex-row">
        <ImageData />
        <div v-if="recentExists">
            <img 
            :src="imageUrl" 
            alt="Recent Upload"
            width="300"
            height="300"
            >
            <!-- <Downloadable/> -->
        </div>
        
    </div>
</template>