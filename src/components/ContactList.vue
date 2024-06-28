<template>
  <div class="p-3 bg-light rounded">
    <b-container>
      <b-row>
        <b-col>
          <b-input
            v-model="$store.state.contact.searchTerm"
            @input="$store.dispatch('contact/getAllContacts')"
            :placeholder="$t('search')"
            class="mb-3"
          />
        </b-col>
        <b-col class="d-flex justify-content-end align-items-center">
          <b-form-select
            v-model="perPage"
            :options="pageSizes"
            class="mb-3"
            @change="handlePageSizeChange"
          >
          </b-form-select>
        </b-col>
      </b-row>
    </b-container>

    <b-table
      id="my-table"
      :items="contacts"
      :per-page="perPage"
      :fields="localizedFields"
      striped
      bordered
      hover
      responsive
      class="mb-3"
      @sort-changed="onSortChanged"
    >
      <template #cell(actions)="data">
        <b-button size="sm" @click="editContact(data.item)" class="mx-2">{{
          $t("edit")
        }}</b-button>
        <b-button
          size="sm"
          variant="danger"
          @click="deleteContact(data.item.id)"
          >{{ $t("delete") }}</b-button
        >
      </template>
    </b-table>

    <b-pagination
      v-model="currentPage"
      :total-rows="totalItemsNumber"
      :per-page="perPage"
      aria-controls="my-table"
      align="center"
      class="my-3"
      @change="handlePaginationChange"
    ></b-pagination>
    <p class="mt-3 text-center">{{ $t("currentPage") }}: {{ currentPage }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch, Prop } from "vue-property-decorator";
import { mapGetters } from "vuex";
import contactService from "@/services/contactService"; // Adjust the path as per your project structure

@Component({
  computed: {
    ...mapGetters({
      contacts: "contact/allContacts",
    }),
  },
})
export default class ContactTable extends Vue {
  currentPage: number = 1;
  fields: Array<{
    key: string;
    label: string;
    sortable: boolean;
    hideSortIcon: boolean;
  }> = [
    {
      key: "firstName",
      label: this.$t("name") as string,
      sortable: true,
      hideSortIcon: true,
    },
    {
      key: "lastName",
      label: this.$t("surname") as string,
      sortable: true,
      hideSortIcon: true,
    },
    {
      key: "email",
      label: this.$t("email") as string,
      sortable: true,
      hideSortIcon: true,
    },
    {
      key: "actions",
      label: this.$t("actions") as string,
      sortable: false,
      hideSortIcon: true,
    },
  ];
  pageSizes: Array<{ value: number; text: string }> = [
    { value: 5, text: "5" },
    { value: 10, text: "10" },
    { value: 20, text: "20" },
    { value: 50, text: "50" },
    { value: 100, text: "100" },
  ];

  get contacts(): Contact[] {
    return this.$store.getters["contact/allContacts"];
  }

  get totalItemsNumber(): number {
    return this.$store.state.contact.totalItemsNumber;
  }

  get perPage(): number {
    return this.$store.state.contact.perPage;
  }

  get localizedFields() {
    return [
      {
        key: "firstName",
        label: this.$t("name") as string,
        sortable: true,
        hideSortIcon: true,
      },
      {
        key: "lastName",
        label: this.$t("surname") as string,
        sortable: true,
        hideSortIcon: true,
      },
      {
        key: "email",
        label: this.$t("email") as string,
        sortable: true,
        hideSortIcon: true,
      },
      {
        key: "actions",
        label: this.$t("actions") as string,
        sortable: false,
        hideSortIcon: true,
      },
    ];
  }

  mounted() {
    this.$store.dispatch("contact/getAllContacts");
  }

  editContact(contact: Contact) {
    this.$store.commit("contact/editContact", contact);
  }

  deleteContact(id: number) {
    contactService.deleteContact(id).then(() => {
      this.$store.dispatch("contact/getAllContacts");
    });
  }

  handlePaginationChange(newPage: number) {
    this.currentPage = newPage;
    this.$store.state.contact.currentPage = this.currentPage;
    this.$store.dispatch("contact/getAllContacts");
  }

  onSortChanged(ctx: any) {
    const sortField = ctx.sortBy + " " + (ctx.sortDesc ? "Desc" : "Asc");
    this.$store.state.contact.sortField = sortField;
    this.$store.dispatch("contact/getAllContacts");
  }

  handlePageSizeChange(newPageSize: number) {
    this.$store.state.contact.perPage = newPageSize;
    this.$store.dispatch("contact/getAllContacts");
  }
}
</script>

<style scoped>
.sr-only {
  display: none !important;
}
</style>
