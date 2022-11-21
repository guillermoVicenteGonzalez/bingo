<template>
    <v-btn @click="this.$router.push('/')">Home</v-btn>
    <v-btn @click="this.$router.push('/collection')">collection</v-btn>

</template>

<script setup>
    import router from "../router/index.js";
</script>