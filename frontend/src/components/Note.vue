<template>
  <b-message :type="noteColor(localLimit)">
    <div class="level">
      <span>{{ text }}</span>
      <span v-if="localLimit && !completed">{{ timestr(localLimit) }}</span>
      <div class="level-right">
        <b-tooltip label="Completar" type="is-light">
          <b-button
            v-if="!completed"
            type="is-success"
            size="is-small"
            @click="$emit('complete-note')"
          >
            <b-icon icon="check" />
          </b-button>
        </b-tooltip>

        <b-tooltip label="Detalles" type="is-light">
          <b-button
            v-if="!completed"
            type="is-light"
            size="is-small"
            @click="noteDetail"
          >
            <b-icon icon="dots-horizontal" />
          </b-button>
        </b-tooltip>
      </div>
    </div>
  </b-message>
</template>

<script lang="ts">
import Vue from "vue";
import router from "@/router";

export default Vue.extend({
  name: "Note",
  props: {
    id: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    limit: {
      type: Number,
      default: 1,
    },
  },
  data(): {
    localLimit: number;
  } {
    return {
      localLimit: this.$props.limit,
    };
  },
  created() {
    if (this.localLimit) {
      setInterval(() => {
        this.localLimit--;
      }, 1000);
    }
  },
  methods: {
    timestr(time: number): string {
      const hours = Math.floor(time / 3600).toString(),
        minutes = Math.floor((time % 3600) / 60).toString(),
        seconds = Math.floor((time % 3600) % 60).toString();
      return `${hours.length == 2 ? hours : "0" + hours}:${
        minutes.length == 2 ? minutes : "0" + minutes
      }:${seconds.length == 2 ? seconds : "0" + seconds}`;
    },
    noteColor(time: number): string {
      if (this.completed) return "is-success";
      const hoursleft = time / 3600;
      if (hoursleft > 24) return "is-dark";
      if (6 < hoursleft && hoursleft <= 24) return "is-warning";
      if (hoursleft <= 6 && hoursleft > 0) return "is-danger";
      return "is-light";
    },
    noteDetail() {
      router.push({
        name: "NoteDetail",
        params: {
          id: this.$props.id,
        },
      });
    },
  },
});
</script>

<style scoped></style>
