<!-- html of this component inside <template> tag -->

<template>
<!-- only one div, which can contain other elements -->
  <div id="app">
    Hi There!
  </div>
</template>




<!-- javascript of this component inside <script> tag -->
<script>

// export default contains vue properties that customize this Vue component and how it behaves 
// the below properties can be added to the components, if needed, but "name" is always needed, also for debugging purposes 
//  data: {},
//  computed: {},
//  methods:{},

export default {
  name: 'App',

  
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
