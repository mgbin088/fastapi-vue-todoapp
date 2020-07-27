import Home from "@/views/Home.vue";
import NoteDetails from "@/views/NoteDetails.vue";
import AddNote from "@/components/AddNoteModal.vue";
import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/detail/:id",
    name: "NoteDetail",
    component: NoteDetails
  },
  {
    path: "/addnote/",
    name: "AddNote",
    component: AddNote
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes
});

export default router;
