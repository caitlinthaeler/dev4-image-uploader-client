<script setup>
import ImageData from '@/components/ImageData.vue';
import Downloadable from './Downloadable.vue';
import { fetchRecent } from '@/utils/fetchRecent.js';
import { ref, reactive, onMounted } from 'vue';
import { viewImage } from '@/utils/viewImage.js';
import { fetchImageData } from '@/utils/fetchImageData';

const entries = ref([]);

const getAllEntries = async () => {
    try {
        console.log('Fetching all entries...');
        const response = await fetchImageData();
        const fetchedEntries = response;
        console.log('Fetched entries:', fetchedEntries.data);
        entries.value = response;
        console.log('All entries:', entries.value);

        const finalEntries = [];
        for (const entry of fetchedEntries) {
            console.log("entry: ", entry.id);
            const [date, time] = entry.uploadDate.split('T');
            const imageUrl = await viewImage(entry.id);
            console.log('Image URL:', imageUrl);
            finalEntries.push({
                ...entry,
                imageId: entry.id,
                fileName: entry.fileName,
                uploadDate: date,
                uploadTime: time,
                fileSize: entry.fileSize,
                imageUrl: imageUrl,
            });
        }
        entries.value = finalEntries;
    } catch (error) {
        console.error('Error fetching image data:', error);
    }
};

onMounted(getAllEntries)
</script>

<template>
    <div>
        <div class="flex flex-col space-y-10">
            <div class="flex flex-col lg:flex-row space-y-10 space-x-10 items-start" v-for="entry in entries" :key="entry.id">
                <ImageData 
                :imageId="entry.imageId" 
                :fileName="entry.fileName" 
                :fileSize="entry.fileSize" 
                :uploadDate="entry.uploadDate" 
                :uploadTime="entry.uploadTime" 
                />
                <Downloadable :imageUrl="entry.imageUrl" :fileName="entry.fileName" :imageId="entry.imageId" />
            </div>
            
        </div>
    </div>
</template>