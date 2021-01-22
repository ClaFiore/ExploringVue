import Vue from 'vue'
// importing Vue library from the dependency installed in node_modules

import App from './App.vue'
//importing component called App at the provided relative path

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')       //calls the mount function on this instance
// this chained on function tells Vue where to display the instance of the App component in the DOM: in the element with id of app


//same thing as the below:

// new Vue({
//    el: '#app',                 //it tells the dom where to display this instance of the App component: in the element with id of app
//   render: function(createElement){   
//     return createElement(App)  //we want to display an instance of App component in the DOM
//   }
// })
