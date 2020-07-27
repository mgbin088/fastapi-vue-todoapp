<template>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Anadir Nota</p>
    </header>
    <section class="modal-card-body">
      <b-field label="Título">
        <b-input v-model="note.title" required />
      </b-field>
      <b-field label="Texto">
        <b-input v-model="note.text" maxlength="200" type="textarea" required />
      </b-field>
    </section>
    <footer class="modal-card-foot">
      <button class="button" type="button" @click="$parent.close()">
        Cancelar
      </button>
      <button class="button is-primary" @click="saveNote">
        Anadir Nota
      </button>
    </footer>
  </div>
</template>

<script lang="ts">
import { NoteType } from "@/types";
import Vue from "vue";
import { BModalComponent } from "buefy/types/components";

export default Vue.extend({
  name: "AddNoteModal",
  data(): {
    note: NoteType;
    enableLimit: boolean;
    date: Date;
    minDatetime: Date;
  } {
    return {
      note: {
        title: "",
        text: "",
      },
      enableLimit: false,
      date: new Date(),
      minDatetime: new Date(),
    };
  },
  methods: {
    saveNote() {
      this.$axios
        .post("/users/1/notes", this.note)
        .then((response) => {
          if (response.status === 200) {
            this.note = response.data;
            this.$emit("addedNote");
          } else {
            alert("Error!");
          }
        })
        .finally(() => {
          (this.$parent as BModalComponent).close();
        });
    },
  },
});
</script>
