<style>

.grid-container{
    display: grid;

    grid-template-columns: repeat(9, auto);
    background-color: #2196F3;
}

</style>

<template>
    <div class="grid-container" v-for="(line, lineindex) in values">
        <div v-for="(cell, columnIndex) in line">
            <label v-if="acquiredValues[lineindex][columnIndex]" style="color:white; background-color:red">{{cell}}</label>
            <label v-else>{{cell}}</label>

        </div>
    </div>    
</template>

<script setup>
    import {ref} from "vue";
    
    const props = defineProps({
        values:Array,
        acquiredValues:Array
    }); 

    let array = new Array();
    array =  [
        [0,1,6,5,7,4,2,8,3],
        [14,18,11,17,12,13,16,15,10],
        [21,20,28,22,26,24,27,23,25]
    ]


    
</script>