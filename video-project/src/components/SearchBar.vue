<template>
    <div>
       <!-- <input v-on:input="onInput"/> This is one way to write this event handler, you can write it also like the below -->
       <input @input="onInput"/>
    </div>
</template>


<script>
    export default {
        name: "SearchBar",

        //methods give the ability to change 'data'
        methods: {
            //listen for the user to type in the input, and then use the value inputted to trigger an event that tells the parent component to do smtg with it 
            onInput: function(event){
                this.$emit('termChange', event.target.value) //first argument is called whatever we want
            }
        }
    }
</script>


<style>
</style>