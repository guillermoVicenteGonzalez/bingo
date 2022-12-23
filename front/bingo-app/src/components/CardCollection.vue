<template>

    <h1>Collection</h1>
    <v-container class="d-flex flex-wrap">
        <label
            style="display:inline; margin: 3px;"
            v-for="item of numbers"
        >
            <label>{{item}}</label>
        </label>
    </v-container>
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

    <ControlPanel
        @cardCreated="getAllCards(); getNumbers()"
        style="bottom: 0;"
    >
    </ControlPanel>

    <ErrorModal
        ref="errorModal"
    ></ErrorModal>

    <LoadingDialog
        v-model="loadingDialog"
    ></LoadingDialog>
</template>

<script setup>
    import axios from "axios";
    import {ref} from "vue";
    import BingoGrid from "./bingoGrid.vue";
    import ControlPanel from "./ControlPanel.vue";
    import ErrorModal from "./ErrorModal.vue";
    import LoadingDialog from "./LoadingDialog.vue";

    var cards = ref([]);
    var numbers = ref([]);
    var errorModal = ref();
    var loadingDialog = ref(false);
    
    async function getAllCards(){
        loadingDialog.value = true;
        console.log("getting all cards");
        let promise = await axios.get("http://localhost:3000/api/bingo/cards")
        .then(function(result){
            cards.value = result.data.data;
            //console.log(cards.value);
            console.log("done");
        })
        .catch(function(err){
            errorModal.value.createErrorModal("Error", "connection error", "couldn't connect to the api");
            console.log(err);
        })
        loadingDialog.value = false;
    }

    async function getNumbers(){
        loadingDialog.value = true;
        console.log("getting numbers");
        let promise = await axios.get("http://localhost:3000/api/bingo/values")
        .then(function(result){
            numbers.value = result.data.data;
            console.log("done");
            loadingDialog.value = false;
        })
        .catch(function(err){
            errorModal.value.createErrorModal("Error", "connection error", "couldn't connect to the api");
            console.log(err);
        });
        loadingDialog.value = false;
        //console.log(numbers);
    }

    getNumbers();
    getAllCards();

</script>