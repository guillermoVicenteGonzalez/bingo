<template>
    <v-container class="justify-content text-center">
        <h1>Landing</h1>
        <v-btn
            @click="loginDialog.createLoginDialog()"
        >Log in</v-btn>
        
        <v-btn
            @click="registerDialog.createRegisterDialog()">
        Register</v-btn>
        
    </v-container>

    <login-dialog-vue
        ref="loginDialog"
    ></login-dialog-vue>

    <register-dialog-vue
        ref="registerDialog"
    ></register-dialog-vue>
</template>

<script setup>
    import loginDialogVue from './loginDialog.vue';
    import registerDialogVue from './registerDialog.vue';
    import {ref} from "vue";

    var loginDialog = ref();
    var registerDialog = ref();

</script>