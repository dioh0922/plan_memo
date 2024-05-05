<template>
    <v-container>
        <v-btn prepend-icon="mdi-pencil" color="success" variant="flat">
            新規登録
            <v-dialog v-model="active" activator="parent">
                <v-card>
                    <v-card-text>
                        <v-text-field v-model="summary" label="タイトル"></v-text-field>
                        <v-textarea v-model="detail" label="内容"></v-textarea>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="success" @click="addIdea">add</v-btn>
                        <v-btn @click="active = false">close</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-btn>
    </v-container>
</template>
<script setup>
    const active = ref(false)
    const summary = ref("")
    const detail = ref("")
    const addIdea = async () => {
        const result = await fetch("/api/add",{
            method: 'POST',
            body: JSON.stringify({summary: summary.value, detail: detail.value}),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => {
        })
    }
</script>