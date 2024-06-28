<template>
  <b-container>
    <h2>{{ $t("login") }}</h2>
    <b-form @submit.prevent="login">
      <b-form-group :label="$t('username')" label-for="username" class="my-2">
        <b-form-input
          v-model="user.username"
          type="text"
          id="username"
          required
          autofocus
        ></b-form-input>
      </b-form-group>

      <b-form-group :label="$t('password')" label-for="password">
        <b-form-input
          v-model="user.password"
          type="password"
          id="password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" class="m-2">{{
        $t("login")
      }}</b-button>
      <b-button
        type="button"
        variant="secondary"
        class="m-2"
        v-on:click="$router.push('/register')"
        >{{ $t("register") }}</b-button
      >
    </b-form>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import authService from "@/services/authService"; // Adjust the path as per your project structure

@Component
export default class LoginComponent extends Vue {
  private user: User = { username: "", password: "", fullName: "" };

  private async login() {
    try {
      const response = await authService.login(this.user);
      console.log("Login successful:", response);

      localStorage.setItem("token", response.token);

      this.$router.push("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
    }
  }
}
</script>
