<template>
  <div>
    <v-app>
      <v-main>
        <v-app-bar color="primary">
          <v-app-bar-title>
            実現機能ネタまとめ
          </v-app-bar-title>
          <template v-slot:append>
            <RegisterDialog/>
          </template>
        </v-app-bar>
        <RouteList @open="openIdea"/>
        <DetailDialog 
        @close="closeDialog" 
        :active="dialog.disp"
        :summary="dialog.summary"
        :detail="dialog.detail"/>
      </v-main>
    </v-app>
  </div>
</template>

<script setup>
  const dialog = ref({
    disp: false,
    summary: "",
    detail: ""
  });
  const openIdea = (e) => {
    dialog.value.summary = e.summary
    dialog.value.detail = e.detail
    dialog.value.disp = true
  }
  const closeDialog = () => {
    dialog.value.disp = false
  }
</script>
