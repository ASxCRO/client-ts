<template>
  <b-dropdown id="dropdown-1" :text="$t('chooseLanguage')" class="m-3">
    <b-dropdown-item @click="changeLanguage('en')">English</b-dropdown-item>
    <b-dropdown-item @click="changeLanguage('hr')">Hrvatski</b-dropdown-item>
  </b-dropdown>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class LanguageSwitcher extends Vue {
  changeLanguage(lang: string) {
    this.$i18n.locale = lang;
  }
}
</script>

<style scoped>
#dropdown-1 {
  margin-top: 10px;
}
</style>
