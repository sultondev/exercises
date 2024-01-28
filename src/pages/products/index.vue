<script setup lang="ts">
import { URLS } from '~/constants/urls';
import type { ProductItem } from '~/types/apiTypes';

const {getOnServer} = useApi()

const {data} = await getOnServer<ProductItem[]>(URLS.posts+'?_start=0&_limit=5')
console.log(data.value)

</script>

<template>
    <ul>
      <li v-for="item in data" class="py-2">
        {{ item.title }}
      </li>
    </ul>
</template>
