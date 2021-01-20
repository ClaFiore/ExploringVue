// initial state => data
// functions to update state, change data => methods
// computed => renders data to the page; anytime you want to 'consume' the data(state) and use it inside a template, to show it on the screen, you use a computed property


new Vue({
    el: '#app',  //string that identifies the template in html - it's a DOM query selector
    data: { //key value pairs
        textInput: ''
    },
    computed: { //contains functions that turn data into viewable values
        identicon: function(){
           return jdenticon.toSvg(this.textInput, 200)  //200 is the px height and width
        },
    },
    methods: {
        onInput: function(event){    //onInput is a made up name, you can call this method whatever you want
            this.textInput = event.target.value     //updates data with key of 'textInput'
            
        }
    },
    template: `
    <div>
        <div>
            Input:
            <input v-on:input="onInput"/> 
        </div>
        <div>
            Output:
            <div v-html="identicon" ></div>
        </div>
    </div>
    `
})