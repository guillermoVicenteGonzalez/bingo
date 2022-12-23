<style>

.grid-container{
    display: grid;

    grid-template-columns: repeat(9, auto);
    background-color: #2196F3;
}

</style>

<template>
    <v-card>
        <div class="grid-container" v-for="(line, lineindex) in values">
            <div v-for="(cell, columnIndex) in line">
                <v-btn>v-if="acquiredValues[lineindex][columnIndex]" style="color:white; background-color:red">{{cell}}</v-btn>
                <v-btn>v-else>{{cell}}</v-btn>

            </div>
        </div>   

        <v-card-actions>
            <v-btn>checkAcquired</v-btn>
        </v-card-actions>
    </v-card> 
</template>

<script setup>
    import axios from "axios";
    import {ref} from "vue";
    
    const props = defineProps({
        values:Array,
        acquiredValues:Array
    }); 

    console.log(props.acquiredValues);



    
</script>