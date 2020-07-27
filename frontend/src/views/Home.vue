<template>
  <div>
    <div class="container mt-5">
      <div class="level">
        <b-button icon-left="plus" @click="showNewNoteModal"
          >Añadir Nota</b-button
        >
      </div>
      <div class="columns is-multiline">
        <div v-for="note in notes" :key="note.id" class="column is-half">
          <note
            :id="note.id"
            :text="note.text"
            :limit="note.limit"
            :completed="note.completed"
            @complete-note="
              note.completed = true;
              note.limit = 0;
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Note from "@/components/Note.vue";
import { NoteType } from "@/types";
import AddNoteModal from "@/components/AddNoteModal.vue";

export default Vue.extend({
  name: "Home",
  components: { Note },
  data(): {
    notes: NoteType[];
    modalOpen: boolean;
  } {
    return {
      modalOpen: false,
      notes: this.$store.state.notes,
    };
  },
  methods: {
    showNewNoteModal() {
      this.$buefy.modal.open({
        parent: this,
        component: AddNoteModal,
        hasModalCard: true,
        ariaModal: true,
        ariaRole: "dialog",
        width: "auto",
        trapFocus: true,
        events: {
          sendNote: (note: NoteType) => {
            this.$store.dispatch("addNote", note);
          },
        },
      });
    },
  },
});
</script>

<style scoped></style>
