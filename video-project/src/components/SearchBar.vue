<template>
    <div>
       <!-- <input v-on:input="onInput"/> This is one way to write this event handler, you can write it also like the below -->
       <input @input="onInput"/>
    </div>
</template>


<script>
    export default {
        name: "SearchBar",
        methods: {
            //methods give the ability to change 'data'
            onInput: function(event){
                console.log(event.target.value)
            } ,
        }
    }
</script>


<style>
</style>