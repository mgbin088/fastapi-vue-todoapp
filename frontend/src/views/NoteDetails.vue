<template>
  <div class="container mt-5">
    <b-button icon-left="arrow-left" tag="router-link" :to="{ name: 'Home' }">
      Volver
    </b-button>
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <b-field label="Texto">
          <b-input v-model="note.text" maxlength="200" type="textarea" />
        </b-field>
        <b-checkbox v-model="note.completed"> Completado </b-checkbox>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { NoteType } from "@/types";

export default Vue.extend({
  name: "NoteDetails",
  data(): {
    note: NoteType;
  } {
    return {
      note: {} as NoteType,
    };
  },
  created() {
    const noteIdx = this.$route.params.id;
    this.note = this.$store.state.notes[noteIdx];

    if (!this.note) {
      this.$router.push({ name: "Home" });
    }
  },
});
</script>

<style scoped></style>
