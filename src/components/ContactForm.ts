import { Component, Vue } from "vue-property-decorator";
import contactService from "@/services/contactService";

@Component({
  template: `
    <b-container>
      <h2>{{ isEdit ? $t("edit") : $t("add") }}</h2>
      <b-form @submit.prevent="saveContact">
        <b-form-group :label="$t('name')">
          <b-form-input
            v-model="$store.state.contact.selectedContact.firstName"
            required
          />
        </b-form-group>
        <b-form-group :label="$t('surname')">
          <b-form-input
            v-model="$store.state.contact.selectedContact.lastName"
            required
          />
        </b-form-group>
        <b-form-group :label="$t('email')">
          <b-form-input
            type="email"
            v-model="$store.state.contact.selectedContact.email"
            required
          />
        </b-form-group>
        <br />
        <b-button type="submit" variant="primary" class="px-2 mx-2">
          {{ isEdit ? $t("edit") : $t("add") }}
        </b-button>
        <b-button @click="cancel" variant="secondary">
          {{ $t("cancel") }}
        </b-button>
      </b-form>
    </b-container>
  `,
})
export default class ContactForm extends Vue {
  private firstName = "";
  private lastName = "";
  private email = "";
  private id = 0;

  get isEdit(): boolean {
    return this.$store.state.contact.isEdit;
  }

  private saveContact(): void {
    const selectedContact = this.$store.state.contact.selectedContact;

    if (this.isEdit) {
      contactService
        .updateContact(selectedContact.id, selectedContact)
        .then(() => {
          this.showContactList();
          this.$store.commit("contact/resetContact");
        });
    } else {
      contactService.addContact(selectedContact).then(() => {
        this.showContactList();
        this.$store.commit("contact/resetContact");
      });
    }
  }

  private showContactList(): void {
    this.$store.state.contact.showForm = false;
    this.$store.dispatch("contact/getAllContacts");
  }

  private cancel(): void {
    this.$store.state.contact.showForm = false;
    this.$store.dispatch("contact/getAllContacts");
  }
}
