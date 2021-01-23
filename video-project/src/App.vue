<!-- html of this component inside <template> tag -->

<template>
<!-- only one div, which can contain other elements -->
  <div id="app" class="container">
    <SearchBar @termChange="onTermChange"></SearchBar>
    <VideoList v-bind:videos="videos" />
    <!-- <VideoList :videos="videos"> </VideoList> same thing as the above -->
          <!-- v-bind:props name as available in child component = "name of state to pass down" -->
    <!-- every time state of videos is updated, v-bind rerenders the VideoList component sending down the updated props  -->
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
        }).catch(error => console.log(error))
    }
  }
  
}
</script>





<!-- css of this component inside <style> tag -->
<style>

</style>
