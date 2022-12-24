<template>
    <v-dialog
        v-model="triggerDialog"
        width="500px"
        class="text-center"
        transition="dialog-transition">
            <v-card class="ma-5 pa-5"
                title="Log in">
                    <v-text-field
                        variant="outlined"
                        v-model="username"
                        label="name"
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
        v-model="loadingDialog"
    ></LoadingDialog>
</template>

<script setup>
    import {ref} from "vue";
    import router from "@/router";
    import axios from "axios"
    import settings from "../settings.json"
    import ErrorModal from "./ErrorModal.vue";
    import LoadingDialog from "./LoadingDialog.vue";

    var triggerDialog = ref(false);
    var username = ref();
    var errorModal = ref();
    var loadingDialog = ref();

    async function processLogin(){
        loadingDialog.value = true;
        let result = await axios.get(settings.host + settings.cardWithName + username.value)
        .then(function (response){
            localStorage.setItem("username",username.value);
            console.log(response.data)
            localStorage.setItem("cardId",response.data.data.id);
            router.push("/card");
        })
        .catch(function(error){
            console.log(error);
            errorModal.value.createErrorModal("Error","Login unsuccesfull","user does not exist");
        });
        loadingDialog.value = false;
    }

    async function createLoginDialog(){
        triggerDialog.value = true;
    }

    defineExpose({
        createLoginDialog
    })
</script>