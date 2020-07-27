<template>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Anadir Nota</p>
    </header>
    <section class="modal-card-body">
      <b-field label="ID">
        <b-input v-model="note.id" required pattern="\d+"></b-input>
      </b-field>

      <b-field label="Texto">
        <b-input
          v-model="note.text"
          maxlength="200"
          type="textarea"
          required
          pattern=".+"
        ></b-input>
      </b-field>

      <div class="field">
        <b-switch v-model="enableLimit">Fecha de vencimiento</b-switch>
      </div>
      <b-field label="Fecha de vencimiento">
        <b-datetimepicker
          v-model="date"
          :disabled="!enableLimit"
          rounded
          placeholder="Clickea para seleccionar"
          :min-datetime="minDatetime"
          icon="calendar-today"
          :timepicker="{ enableSeconds: true, hourFormat: '24' }"
          horizontal-time-picker
          :append-to-body="true"
        >
        </b-datetimepicker>
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
        id: 0,
        text: "",
        completed: false,
        limit: null,
      },
      enableLimit: false,
      date: new Date(),
      minDatetime: new Date(),
    };
  },
  methods: {
    saveNote() {
      if (this.enableLimit) {
        this.note.limit = Math.floor((this.date.getTime() - Date.now()) / 1000);
      }
      this.$emit("sendNote", this.note);
      (this.$parent as BModalComponent).close();
    },
  },
});
</script>
