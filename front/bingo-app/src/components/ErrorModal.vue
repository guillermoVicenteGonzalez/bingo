<style>



</style>

<template>
    <v-dialog
        v-model="triggerDialog"
        persistent :overlay="false"
        width="500px"
        class="text-center" 
        transition="dialog-transition"
    >
        <v-card
            :title="cardTitle"
            :subtitle="cardSubtitle"
            :text="cardText"
            :class="cardClass"
        >
            <v-card-actions class="justify-center">
                <v-btn
                    @click="triggerDialog = false;"
                >close</v-btn>
            </v-card-actions>  
        </v-card>
    </v-dialog>
</template>

<script setup>
    import {ref} from "vue";

    var triggerDialog = ref(false);
    var cardTitle = ref();
    var cardSubtitle = ref();
    var cardText = ref();
    var cardClass = ref();

    function createErrorModal(title, subtitle, text, success){
        triggerDialog.value = true;
        cardTitle.value = title;
        cardSubtitle.value = subtitle;
        cardText.value = text;
        if(success){
            cardClass = "text-success";
        }else{
            cardClass = "text-error";
        }
    }

    defineExpose({
        createErrorModal
    });

</script>