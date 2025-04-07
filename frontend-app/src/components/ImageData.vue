<script setup>
import { ref, onMounted, defineProps, computed } from 'vue';

const props = defineProps({
    imageId: {
        type: Number,
        required: true
    },
    fileName: {
        type: String,
        required: true
    },
    uploadDate: {
        type: String,
        required: true
    },
    uploadTime: {
        type: String,
        required: true
    },
    fileSize: {
        type: Number,
        required: true
    },
    
});

const convertedFileSize = computed(() => {
  const bytes = props.fileSize;
  if (bytes === 0) return '0 Bytes';

  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const size = bytes / Math.pow(1024, i);
  return `${size.toFixed(1)} ${sizes[i]}`;

});
</script>

<template>
    <div>   
        <ul class="bg-gray-dark text-white p-5 h-full w-100">
            <li class="text-lg font-bold">Image ID: <span class="text-oyster">{{ props.imageId }}</span></li>
            <li class="text-lg font-bold">File Name: <span class="text-oyster">{{ props.fileName }}</span></li>
            <li class="text-lg font-bold">Upload Date: <span class="text-oyster">{{ props.uploadDate }}</span></li>
            <li class="text-lg font-bold">Upload Time: <span class="text-oyster">{{ props.uploadTime }}</span></li>
            <li class="text-lg font-bold">File Size: <span class="text-oyster">{{ convertedFileSize }}</span></li>
        </ul>
    </div>
</template>