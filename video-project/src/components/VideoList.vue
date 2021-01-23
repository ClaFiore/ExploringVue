<template>
    <div>
        <ul>
            <VideoListItem />
        </ul>
    </div>
</template>


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