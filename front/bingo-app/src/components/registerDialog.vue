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

    <ErrorModal
        ref="errorModal"
    ></ErrorModal>

    <LoadingDialog
        ref="loadingDialog"
    ></LoadingDialog>
</template>

<script setup>
    import {ref} from "vue";
    import router from "@/router";
    import axios from "axios"
    import ErrorModal from "./ErrorModal.vue";
    import LoadingDialog from "./LoadingDialog.vue";

    var loadingDialog = ref();
    var errorModal = ref();
    var triggerDialog = ref(false);
    var username = ref();
    var cardId = ref();

    async function processLogin(){
        let card;
        loadingDialog.value = true;
        card = axios.post("http://localhost:3000/api/bingo/cards/name/"+username.value)
        .then(function(card){
            localStorage.setItem("username",username.value);
            console.log(card.data.data);
            localStorage.setItem("cardId",card.data.data.id);
            //localStorage.setItem("card",card);
            router.push("/card");
        })
        .catch(function(error){
            let myError;
            console.log(error);
            if((myError = error.response.data.message) == undefined){
                myError = "unknown Error";
            }
            errorModal.value.createErrorModal("Error","an error ocurred while registering",myError);
        });
        loadingDialog.value = false;
    }

    async function createRegisterDialog(){
        triggerDialog.value = true;
    }

    defineExpose({
        createRegisterDialog
    })
</script>