<template>
  <AppHeader />
  <AppBanner />
  <AppSale />
  <AppFilmlist />
  <AppAbout />
  <AppContacts />
</template>

<script setup>
import AppHeader from './components/AppHeader.vue';
import AppBanner from './components/AppBanner.vue';
import AppSale from './components/AppSale.vue';
import AppFilmlist from './components/AppFilmlist.vue';
import AppAbout from './components/AppAbout.vue';
import AppContacts from './components/AppContacts.vue';
</script>

<style>
body {
  font-family: Helvetica,Arial,sans-serif;
}

.section-header {
  font-size: 42px;
  line-height: 120%;
}

.inter-font {
  font-family: Inter, Arial;
}
</style>