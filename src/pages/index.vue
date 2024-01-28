<script setup lang="ts">
import { URLS } from '~/constants/urls';
import type { ProductItem } from '~/types/apiTypes';

const route = useRoute()

</script>

<template>
  <div>
    <h1>Nuxt Routing set up successfully!</h1>
    <p class="">Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
  </div>
</template>
