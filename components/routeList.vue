<template>
    <v-container>
        <v-row v-if="isInit">
            <v-col cols="4" rows="4">
                <RegisterDialog/>
            </v-col>
            <v-col v-for="item in list" cols="4" rows="4">
                <v-card class="my-2" style="white-space:pre-wrap; word-wrap:break-word;">
                    <v-card-title>
                        <div class="d-flex justify-end">
                            <p >{{item.summary}}</p>
                            <v-spacer></v-spacer>
                            <v-btn prepend-icon="mdi-delete" size="small" variant="text" @click="deletePlan(item.id)"></v-btn>
                        </div>
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

const deletePlan = async (id) => {
    const result = await fetch("/api/delete",{
        method: 'POST',
        body: JSON.stringify({id: id}),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => {
        res.json().then((json) => {
            if(json.result > 0){
                reloadNuxtApp()
            }
        })
    })
}

const list = data.value.list

onMounted(async () => {
    isInit.value = true
})
</script>

