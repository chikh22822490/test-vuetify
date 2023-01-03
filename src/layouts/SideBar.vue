<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="sidebarToggled"
    permanent
    @click="openSidebar"
  >
    <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
      title="John Leider"
      nav
    >
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-home"
        title="Home"
        value="home"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account"
        title="My Account"
        value="account"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-group-outline"
        title="Users"
        value="users"
      ></v-list-item>
    </v-list>
    <template v-slot:append>
      <v-btn
        variant="text"
        :icon="sidebarToggled ? 'mdi-chevron-right' : 'mdi-chevron-left'"
        @click.stop="toggleSideBar"
      ></v-btn>
    </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useDisplay } from "vuetify";

const { name } = useDisplay();

const drawer = ref(true);
const sidebarToggled = ref(name.value === "xs");

const items = ref([
  { title: "Home", icon: "$home" },
  { title: "My Account", icon: "$account" },
  { title: "Users", icon: "mdi-account-group-outline" },
]);

function toggleSideBar() {
  sidebarToggled.value = !sidebarToggled.value;
}

function openSidebar() {
  sidebarToggled.value = false;
}
</script>
