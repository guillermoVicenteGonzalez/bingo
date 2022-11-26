<template>
    <v-container>
        <v-btn
            @click="addCard()"
        >add card</v-btn>
        <v-btn
            @click="addNumber()"
        >add number</v-btn>

        <v-btn
            @click="changeColor()"
        >color</v-btn>
    </v-container>
</template>

<script setup>
    import axios from "axios";
//import { emit } from "process";
    import { defineEmits } from 'vue'

    let emit = defineEmits(['cardCreated']);
    async function addCard(){
        let result = await axios.post("http://localhost:3000/api/bingo/cards");
        emit("cardCreated");
    }

    async function addNumber(){
        let result = await axios.post("http://localhost:3000/api/bingo/values");
        console.log(result);
        emit("cardCreated");
    }

    async function changeColor(){
        let result = await axios.get("http://192.168.0.121/V");
        if(result){
            console.log(result);
        }else{
            console.log(error);
        }
    }
</script>