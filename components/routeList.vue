<template>
    <v-container>
        <v-row>
            <v-col v-for="item in list" cols="4">
                <v-card class="my-2" style="white-space:pre-wrap; word-wrap:break-word;">
                    <v-card-title>
                        {{item.summary}}
                    </v-card-title>
                    <v-card-actions>
                        <v-btn @click="ideaOpen(item)">開く</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
const list = ref([])
const emit = defineEmits(["open"])
const ideaOpen = (item) => {
    emit("open", item)
}
onMounted(async () => {
 const result = await $fetch("/api/stub")
 list.value = result.list
})
</script>

