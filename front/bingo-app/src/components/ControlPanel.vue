<template>
    <v-container class="d-flex justify-center">
        <v-btn
            class="mr-2 ml-2"
            @click="addCard()"
        >add card</v-btn>
        <v-btn
            class="mr-2 ml-2"
            @click="addNumber()" 
        >add number</v-btn>

    </v-container>
</template>

<script setup>
    import axios from "axios";

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
</script>