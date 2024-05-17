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
                            <p>{{item.summary}}</p>
                            <v-spacer></v-spacer>
                            <v-btn prepend-icon="mdi-delete" size="small" variant="text" @click="deletePlan(item.id)"></v-btn>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <DetailDialog 
                        :summary="item.summary"
                        :detail="item.detail"
                        :id="item.id"/>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
const isInit = ref(false)

const {data, pending, error, refresh} = await useAsyncData(
    "list",
    () => $fetch("/api/plans")
)

const deletePlan = async (id) => {
    const result = await fetch("/api/plans/" + id ,{
        method: 'DELETE',
        body: JSON.stringify({id: id}),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => {
        if(res.status != 200){
            showError({statusCode: res.status, statusMessage: res.statusText })
        }else{
            res.json().then((json) => {
                if(json.result > 0){
                    reloadNuxtApp()
                }
            })
        }
    })
}

const list = data.value.list

onMounted(async () => {
    isInit.value = true
})
</script>

