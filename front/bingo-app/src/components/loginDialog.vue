<template>
    <v-dialog
        v-model="triggerDialog"
        width="500px"
        class="text-center"
        transition="dialog-transition">
            <v-card
                title="Log in">
                    <v-text-field
                        v-model="username"
                    ></v-text-field>

                    <v-text-field
                        v-model="cardId"
                    ></v-text-field>
            
            </v-card>
    </v-dialog>
</template>

<script setup>
    import {ref} from "vue";
    import router from "@/router";

    var triggerDialog = ref(false);
    var username = ref();
    var cardId = ref();

    async function processLogin(){

    }
</script>