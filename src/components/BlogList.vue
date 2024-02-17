<script lang="ts" setup>
import {Index} from "@/components/gitblog";

const props = defineProps({
  index: Index
})

</script>

<template>
  <li v-for="(log, i) in props.index?.logs" class="list-item" v-on:click="$emit('blog-select', i)">
    {{ log.title }}
  </li>
</template>

<style scoped>

</style>