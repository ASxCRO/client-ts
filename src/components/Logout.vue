<template>
  <div></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import authService from "@/services/authService"; // Adjust the path as per your project structure

@Component
export default class LogoutComponent extends Vue {
  created() {
    authService.logout();
    this.$router.push("/login");
  }
}
</script>

<style></style>
