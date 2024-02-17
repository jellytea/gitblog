<script lang="ts" setup>
import {marked} from "marked";
import {ref, watch} from "vue";

const props = defineProps({
  baseurl: String,
  id: Number
})

const content = ref("Fetching content ... ")

function fetchContent() {
  fetch(props.baseurl + "/" + props.id + "/content.md")
      .then(resp => resp.text())
      .then(text => {
        let convertedText = "";
        for (const line of text.split('\n')) {
          convertedText += line.replace("file:", <string>props.baseurl + "/" + props.id + "/") + "\n"
        }
        return marked.parse(convertedText)
      })
      .then(html => {
        content.value = html
      })
      .catch(e => {
        content.value += e.message
      })
}

watch(() => props.id, (newV, oldV) => fetchContent())

fetchContent()

</script>

<template>
  <div v-html="content"/>
</template>

<style scoped>
</style>