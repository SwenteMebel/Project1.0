<template class="">
  <headerVue title="Onze gerechten" subtitle="Lijst van Anne & Swen"/>
  <router-view></router-view>
</template>

<script setup>
import headerVue from './components/header.vue';
import { RouterView } from 'vue-router'; //Hoeft niet, dit is om ook om je router-view te regelen. 
</script>

