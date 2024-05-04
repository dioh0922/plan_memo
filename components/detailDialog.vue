<template>
    <v-dialog v-model="props.active">
        <v-card>
            <v-card-text style="white-space:pre-wrap; word-wrap:break-word;">
                <h3>{{ props.summary }}</h3>
                <div>{{ props.detail }}</div>
            </v-card-text>
            <v-card-actions>
                <v-btn @click="close">close</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup>
    const emit = defineEmits(["close"])
    const props = defineProps({
        active: Boolean,
        summary: String,
        detail: String
    })
    const close = () => {
        emit("close")
    }
</script>