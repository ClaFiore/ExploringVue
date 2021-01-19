new Vue({
    el: '#app',  //string that identifies the template in html - it's a DOM query selector
    methods: {
        onInput: function(event){    //onInput is a made up name, you can call this method whatever you want
            console.log(event.target.value)
            
        }
    },
})