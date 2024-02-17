<script setup>
import MarkdownView from "@/components/MarkdownView.vue";
import {Index} from "@/components/gitblog.js";

const props = defineProps({
  baseurl: String
})

let index: Index

FetchIndex(baseurl).then(i => index = i)

</script>

<template>

  <li v-for="log in index.logs">
    {{ log.title }}
  </li>
  <MarkdownView baseurl="http://127.0.0.1:8888" id="1"/>
</template>

<style scoped>

</style>