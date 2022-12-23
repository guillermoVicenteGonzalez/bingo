<template>
    <v-dialog
        persistent :overlay="false"
        max-width="500px"
        transition="dialog-transition"
    >
    <v-card class="text-center">
            <v-card-title>LOADING</v-card-title>
            <v-container justify-center>
                <v-progress-circular
                indeterminate
                class="my-5 text-center"
                color="primary"></v-progress-circular>
            </v-container>

        </v-card>

    </v-dialog>
</template>

<script setup>
</script>