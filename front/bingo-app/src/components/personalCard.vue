<template>
    <v-container>
        <bingoGridVue
            :values="card"
            :acquired-values="values"
        >
        </bingoGridVue>
    </v-container>
</template>

<script setup>
    import axios from "axios";
    import {ref} from "vue";
    import settings from "../settings.json";
    import bingoGridVue from "./bingoGrid.vue";


    /*
    const props =  defineProps({
        name:String,
        id:Number
    });*/

    var id = localStorage.getItem("cardId");
    var card = ref();
    var values = ref();

    async function getPersonalCard(){
        //console.log(settings.host + settings.getCard + id);
        let mYcard = await axios.get(settings.host + settings.getCard + id);
        //console.log(mYcard.data.data.values);
        card.value = mYcard.data.data.values;
        console.log(card.value);
        values.value = mYcard.data.data.acquiredValues;
        console.log(values.value);
    }

    getPersonalCard();

</script>