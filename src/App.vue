<template>
  <AppHeader />
  <router-view>
    
  </router-view>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue';
import { RouterView } from 'vue-router'
</script>

<style>
body {
  font-family: Helvetica,Arial,sans-serif;
}

.section-header {
  font-size: 42px;
  line-height: 120%;
}

.open-font {
  font-family: Open Sans, Arial;
}

.inter-font {
  font-family: Inter, Arial;
}
</style>