<script setup>
import { RouterLink, useRoute } from 'vue-router'
import NavbarSmall from '@/components/NavbarSmall.vue';
</script>

<template>
    <div class="bg-oyster min-h-screen h-full flex flex-row">
        <div class="flex-3 flex flex-col justify-between items-center p-4">
            <div class="w-full text-center">
                <h1 class="text-white font-bold text-5xl">
                    Dev4 Image API
                </h1>
            </div>
            <RouterView/>
        </div>
        <NavbarSmall/>
        
    </div>

</template>