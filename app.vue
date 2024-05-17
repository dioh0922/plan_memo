<template>
  <div>
    <v-app>
      <v-app-bar app absolute color="primary">
        <v-app-bar-title>
          実現機能ネタまとめ
        </v-app-bar-title>
      </v-app-bar>
      <v-main>
        <LoadingOverlay :disp="!isInit"/>
        <RouteList />
      </v-main>
    </v-app>
  </div>
</template>

<script setup>
  const isInit = ref(false)
  onMounted(() => {
    isInit.value = true
  })
</script>
