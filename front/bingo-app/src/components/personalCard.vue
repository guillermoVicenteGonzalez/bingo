<template>
    <v-container>
        <v-text-field></v-text-field>
    </v-container>
</template>

<script setup>
    import axios from "axios";
    import {ref} from "vue";
    import setttings from "../settings.json";

    const props =  defineProps({
        name:String,
        id:Number
    });

    var card = ref();

    async function getPersonalCard(){
        card = axios.get(setttings.host + setttings.getPersonalCard + id);
    }

</script>