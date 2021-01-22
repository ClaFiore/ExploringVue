import Vue from 'vue'
// importing Vue library from the dependency installed in node_modules

import App from './App.vue'
//importing component called App at the provided relative path

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


// new Vue({
//   render: function(createElement){
//     return createElement(App)
//   }
// })
