<template>
  <b-container>
    <b-row class="d-flex justify-content-end">
      <b-col>
        <b-button
          v-if="!showForm"
          @click="addContact"
          variant="primary"
          class="mt-3 mb-3 w-25"
        >
          {{ $t("add") }}
        </b-button>
      </b-col>
      <b-col class="d-flex justify-content-end">
        <LanguageSwitcher />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <ContactForm v-if="showForm" />
        <ContactList v-else />
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { mapState } from "vuex";
import ContactList from "@/components/ContactList.vue";
import ContactForm from "@/components/ContactForm";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";

@Component({
  components: {
    ContactList,
    ContactForm,
    LanguageSwitcher,
  },
  computed: {
    ...mapState({
      showForm: (state: any) => state.contact.showForm,
      selectedContact: (state: any) => state.contact.selectedContact,
      isEdit: (state: any) => state.contact.isEdit,
    }),
  },
})
export default class ContactPage extends Vue {
  get showForm(): boolean {
    return this.$store.state.contact.showForm;
  }

  get selectedContact(): Contact {
    return this.$store.state.contact.selectedContact;
  }

  get isEdit(): boolean {
    return this.$store.state.contact.isEdit;
  }

  addContact() {
    this.$store.dispatch("contact/addContact");
  }
}
</script>

<style>
.sr-only {
  display: none;
}
</style>
