<template>
  <v-app>

    <v-app-bar>
      <NavBar></NavBar>
    </v-app-bar>

    <v-main app>
      <router-view>
      </router-view>
    </v-main>
  </v-app>
</template>

<script setup>
 import router from "@/router/index.js"
import NavBar from "./components/NavBar.vue";
 //provide('router',router);
</script>