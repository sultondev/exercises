<script lang="ts" setup>
import { URLS } from '~/constants/urls';
import type { ProductItem } from '~/types/apiTypes';


const {getOnServer} = useApi()
const {public: {baseURL}} = useRuntimeConfig()
const {data, status} = await getOnServer(URLS.posts+'?_start=0&_limit=5', {
  onResponse({request, response, options}) {
      console.log(response.headers.get('x-total-count'))
    }
})

</script>

<template>
  <div>
    dwadwa
  </div>
</template>

<style>

</style>