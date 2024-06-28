// ErrorComponent.vue
<template>
  <div class="error-page">
    <b-alert variant="danger" show> {{ $t("error") }} </b-alert>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ErrorComponent extends Vue {}
</script>

<style scoped>
.error-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}
</style>
