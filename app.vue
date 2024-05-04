<template>
  <div>
    <h1>実現機能ネタまとめ</h1>
    <RouteList @open="openIdea"/>
    <DetailDialog 
    @close="closeDialog" 
    :active="dialog.disp"
    :summary="dialog.summary"
    :detail="dialog.detail"/>
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
