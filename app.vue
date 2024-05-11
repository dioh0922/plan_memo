<template>
  <div>
    <v-app>
      <v-app-bar app absolute color="primary">
        <v-app-bar-title>
          実現機能ネタまとめ
        </v-app-bar-title>
      </v-app-bar>
      <v-main>
          <RouteList />
      </v-main>
    </v-app>
  </div>
</template>

<script setup>
onMounted(() => {
  // TODO: APIをRESTに
  // TODO: 編集時の変数の保持の仕方をリファクタリング
})
</script>
