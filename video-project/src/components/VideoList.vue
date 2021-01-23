<template>
    <div>
        <ul>
            <VideoListItem 
                v-for="video in videos" 
                v-bind:video="video"
                v-bind:key="video.etag" 
            />
        </ul>
    </div>
</template>

// :key="video.id" and v-bind:key="video.id" are the same



<script>

import VideoListItem from './VideoListItem'

export default {
    name: "VideoList",
    props: ['videos',], //this is an array with the names of all props being received 
    components: {
        VideoListItem,
    }
    // alternatively you can (optionally) speciffy what type of data your props is like the below
    // props: {
    //     videos: Array
    // }
}
</script>

<style scoped>

</style>