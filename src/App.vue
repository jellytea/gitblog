<script lang="ts" setup>
import MarkdownView from "./components/MarkdownView.vue"
import BlogList from "@/components/BlogList.vue";
import {FetchIndex, Index} from "@/components/gitblog";
import {ref} from "vue";

const index = ref<Index>()
const blogId = ref(0)

FetchIndex("http://127.0.0.1:8888").then(i => {
  index.value = i
})

function updateId(id: number) {
  blogId.value = id
}

</script>

<template>
  <main class="content">
    <div>
      <ul class="float-menu">
        <BlogList :index="index" class="list" @blog-select="(selectedId: number) => updateId(selectedId)"/>
      </ul>
      <MarkdownView :id="blogId" baseurl="http://127.0.0.1:8888"/>
    </div>
  </main>
</template>

<style scoped>
</style>
