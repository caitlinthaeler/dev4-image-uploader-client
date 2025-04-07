<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { useNavClasses } from '@/composables/navClasses';

const { getNavIconClass, getNavTextClass } = useNavClasses();
</script>

<template>
    <div>
        <nav class="h-screen flex items-center-safe justify-center">
            <div class="w-screen flex flex-col p-4 justify-center text-white sm:flex-row space-x-4 space-y-4">
               
                <RouterLink to="/recent" class="hover:text-gray-400">
                    <svg :class="getNavIconClass('/recent')" viewBox="0 0 512 512" width="128" height="128" xmlns="http://www.w3.org/2000/svg"><path d="M478,256A222,222,0,0,1,99,413,220.55,220.55,0,0,1,34,256H63.92c0,105.91,86.17,192.08,192.08,192.08S448.08,361.91,448.08,256,361.91,63.92,256,63.92A191.8,191.8,0,0,0,116.58,124H175v29.92H70V49H99.93v49.3A221.93,221.93,0,0,1,478,256ZM250,139V280H373V250H280V139Z"/></svg>
                    <p class="w-[150px]">Retrieve the most recently uploaded image.</p>
                    
                </RouterLink>
                <RouterLink to="/upload" class="hover:text-gray-400">
                    <svg :class="getNavIconClass('/upload')" fill="gray-dark" width="128" height="128" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,13a1,1,0,0,0-1,1v.38L16.52,12.9a2.79,2.79,0,0,0-3.93,0l-.7.7L9.41,11.12a2.85,2.85,0,0,0-3.93,0L4,12.6V7A1,1,0,0,1,5,6h7a1,1,0,0,0,0-2H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V14A1,1,0,0,0,19,13ZM5,20a1,1,0,0,1-1-1V15.43l2.9-2.9a.79.79,0,0,1,1.09,0l3.17,3.17,0,0L15.46,20Zm13-1a.89.89,0,0,1-.18.53L13.31,15l.7-.7a.77.77,0,0,1,1.1,0L18,17.21ZM22.71,4.29l-3-3a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-3,3a1,1,0,0,0,1.42,1.42L18,4.41V10a1,1,0,0,0,2,0V4.41l1.29,1.3a1,1,0,0,0,1.42,0A1,1,0,0,0,22.71,4.29Z"/></svg>
                    <p class="w-[150px]">Upload an image to the server.</p>
                </RouterLink>
                
                <RouterLink to="/browse" class="hover:text-gray-400">
                    <svg :class="getNavIconClass('/browse')" width="128" height="128" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.1369 2.87306C4.04902 3.06383 4 3.27619 4 3.5V14.1278C4 15.1614 4.63601 16.0884 5.60032 16.4603L9.96019 18.142C10.3148 18.2788 10.6792 18.2717 11 18.1574V6.56815C11 5.94953 10.6202 5.39436 10.0437 5.17014L4.1369 2.87306Z"/>
                        <path d="M4.93446 2.11027L10.4061 4.23813C11.367 4.61183 12 5.53711 12 6.56815V16H13.5C14.3284 16 15 15.3284 15 14.5V11.5616L15.9552 7.7407C15.985 7.62172 16 7.49954 16 7.37689V3.5C16 2.67157 15.3284 2 14.5 2H5.5C5.29992 2 5.10899 2.03917 4.93446 2.11027Z"/>
                    </svg>
                    <p class="w-[150px]">Browse uploaded images.</p>
                </RouterLink>
            </div>
        </nav>
    </div>

</template>