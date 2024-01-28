<script setup lang="ts">
import { SidebarItemsList } from '~/constants/menuItems';

</script>

<template>
    <div class="min-h-screen bg-blue-500">
        <nav class="">
            <ul class="">
                <li v-for="item in SidebarItemsList" :key="item.key" class="">
                    <nuxt-link :to="item.url">
                        {{ item.title }}
                    </nuxt-link>
                </li>
            </ul>
        </nav>
    </div>
</template>