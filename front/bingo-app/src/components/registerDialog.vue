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
                    ></v-text-field>

                    <v-text-field
                        type="number"
                        variant="outlined"
                        v-model="cardId"
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

    var triggerDialog = ref(false);
    var username = ref();
    var cardId = ref();

    async function processLogin(){
        localStorage.setItem("username",username.value);
        localStorage.setItem("cardId",cardId.value);
        router.push("/card");
        console.log("hola");
    }

    async function createRegisterDialog(){
        triggerDialog.value = true;
    }

    defineExpose({
        createRegisterDialog
    })
</script>