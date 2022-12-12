<template>
    <v-container class="justify-content text-center">
        <h1>Landing</h1>
        <v-btn
            @click="loginDialog.createLoginDialog()"
        >Log in</v-btn>
    </v-container>

    <login-dialog-vue
        ref="loginDialog"
    ></login-dialog-vue>
</template>

<script setup>
    import loginDialogVue from './loginDialog.vue';
    import {ref} from "vue";

    var loginDialog = ref();


</script>