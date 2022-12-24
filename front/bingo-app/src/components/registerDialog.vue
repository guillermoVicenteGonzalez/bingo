<template>
    <v-dialog
        v-model="triggerDialog"
        width="500px"
        class="text-center"
        transition="dialog-transition">
            <v-card class="ma-5 pa-5"
                title="Register">
                    <v-text-field
                        variant="outlined"
                        v-model="username"
                        label="username"
                    ></v-text-field>



                    
            <v-card-actions class="justify-center">
                <v-btn
                    @click="processLogin()">
                    Accept
                </v-btn>
            </v-card-actions>
            </v-card>
    </v-dialog>
</template>

<script setup>
    import {ref} from "vue";
    import router from "@/router";
    import axios from "axios"


    var triggerDialog = ref(false);
    var username = ref();
    var cardId = ref();

    async function processLogin(){
        let card;
        localStorage.setItem("username",username.value);
        card = await axios.post("http://localhost:3000/api/bingo/cards/name/"+username.value);
        console.log(card);
        localStorage.setItem("cardId",card.data.data.id);
        //localStorage.setItem("card",card);
        router.push("/card");
    }

    async function createRegisterDialog(){
        triggerDialog.value = true;
    }

    defineExpose({
        createRegisterDialog
    })
</script>