import Vue from "vue";
import Vuex from "vuex";
import { NoteType } from "@/types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: [
      { id: 1, text: "Ir a comprar pan", completed: true, limit: null },
      { id: 2, text: "Terminar el Zelda", completed: false, limit: 7200 },
      { id: 3, text: "Aprenwder Vue", completed: false, limit: null },
      { id: 4, text: "Terminar el Semestre", completed: false, limit: null },
      { id: 5, text: "Derrocar a Dani", completed: false, limit: null },
      {
        id: 6,
        text: "Crear una máquina para viajar en el tiempo",
        completed: false,
        limit: 0
      }
    ]
  },
  mutations: {
    addNote(state, note: NoteType) {
      state.notes.push(note);
    }
  },
  actions: {
    addNote({ commit }, note: NoteType) {
      commit("addNote", note);
    }
  }
});
