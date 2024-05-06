<template>
    <v-container>
        <v-row v-if="isInit">
            <v-col cols="4" rows="4">
                <RegisterDialog/>
            </v-col>
            <v-col v-for="item in list" cols="4" rows="4">
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
const isInit = ref(false)
const emit = defineEmits(["open"])
const ideaOpen = (item) => {
    emit("open", item)
}

const {data, pending, error, refresh} = await useAsyncData(
    "list",
    () => $fetch("/api/list")
)

const list = data.value.list

onMounted(async () => {
    isInit.value = true
})
</script>

