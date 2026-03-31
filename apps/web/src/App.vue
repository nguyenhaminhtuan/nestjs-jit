<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { add } from "@workspace/shared"
</script>

<template>
  <HelloWorld />
  <div>{{ add(1, 2) }}</div>
</template>
