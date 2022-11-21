<template>

    <h1>Collection</h1>

    <v-container class="d-flex flex-wrap justify-center">
        <v-card
            width="500"
            class="ma-5"
            v-for="item of cards"
            :title="item.id.toString()"
        >
        <BingoGrid
        :values="item.values"
        :acquired-values="item.acquiredValues"></BingoGrid>
        </v-card>
    </v-container>
</template>

<script setup>
    import axios from "axios";
    import {ref} from "vue";
    import BingoGrid from "./bingoGrid.vue";

    var cards = ref([]);

    async function getAllCards(){
        let promise = axios.get("http://localhost:3000/api/bingo/cards")
        .then(function(result){
            cards.value = result.data.data;
            //console.log(cards.value);
            console.log("done");
        })
        .catch(function(err){
            console.log(err);
        })
    }

    getAllCards();

</script>