<!-- html of this component inside <template> tag -->

<template>
<!-- only one div, which can contain other elements -->
  <div id="app">
    <SearchBar @termChange="onTermChange"></SearchBar>
    <VideoList/>
    {{videos.length}}
  </div>
</template>




<!-- javascript of this component inside <script> tag -->
<script>

// export default contains vue properties that customize this Vue component and how it behaves 
// the below properties can be added to the components, if needed, but "name" is always needed, also for debugging purposes 
//  data: {},
//  computed: {},
//  methods:{},

//import components inside <script> tag

import SearchBar from './components/SearchBar'   
import VideoList from './components/VideoList'
import axios from 'axios'

// const API_KEY = process.env.API_KEY


export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList
  },
  data(){
    return { videos: []}
  },
  methods:{
    onTermChange(searchTerm) {
        axios.get('https://www.googleapis.com/youtube/v3/search', {
          params:{
            key: API_KEY ,
            type: 'video',
            part: 'snippet', //what type of information we want to get back from the youtube api
            q: searchTerm
          }
        })
        .then(res => {
          this.videos = res.data.items
        })
    }
  }
  
}
</script>





<!-- css of this component inside <style> tag -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
