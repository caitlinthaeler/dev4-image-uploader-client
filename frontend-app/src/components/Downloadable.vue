<script setup>
import { ref, defineProps } from 'vue';
import { downloadImage } from '@/utils/downloadImage';

const props = defineProps({
    imageId: {
        type: Number,
        required: true
    },
    fileName: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
})

const download = async () => {
    console.log('Downloading image with ID:', props.imageId);
    const response = await downloadImage(props.imageId);
    console.log(response);

    if (!response) return;
    const blob = response;
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = props.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    console.log('Image downloaded successfully');


}

</script>

<template>
    <div class="flex flex-col space-y-10">

        <!-- recent image -->
        <img 
            :src="props.imageUrl" 
            alt="Recent Upload"
            class="max-h-[400px] max-w-[400px] w-auto h-auto object-contain"
            >

        <!-- Download button -->
        <button @click="download" class="bg-seagull rounded p-5 w-100 hover:bg-seagull-dark">Download</button>
    </div>
</template>