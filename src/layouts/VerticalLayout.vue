<template>
  <v-layout class="h-screen">
    <!-- <vNavigationDrawer color="grey-darken-2"> </vNavigationDrawer> -->
    <SideBar></SideBar>
    <AppBar></AppBar>
    <MainContent></MainContent>
  </v-layout>
</template>

<script setup lang="ts">
import SideBar from "./SideBar.vue";
import AppBar from './AppBar.vue'
import MainContent from './MainContent.vue'
</script>
