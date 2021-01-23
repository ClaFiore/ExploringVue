<template>
    <li>
        <img :src="thumbnailUrl" />
    {{ video.snippet.title }}
    </li>
</template>

<script>
export default {
    name: "VideoListItem",
    props: ["video"],
    computed: {
        thumbnailUrl(){
            return this.video.snippet.thumbnail.default.url
        }
    }
}
</script>