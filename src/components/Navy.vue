<template>
  <header class="bg-black text-white py-4">
    <div class="container mx-auto flex justify-between items-center">
      <a href="#" class="text-lg font-bold">FXCntrl</a>
      <button
        class="lg:hidden text-white"
        @click="toggleSidebar"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      <nav class="hidden lg:flex space-x-6">
        <a href="#" class="hover:text-blue-400">Home</a>
        <a href="#about" class="hover:text-blue-400">About Us</a>
        <a href="#login" class="hover:text-blue-400">Login</a>
        <a href="#signup" class="hover:text-blue-400">Sign Up</a>
      </nav>
    </div>
    <Sidey :open="isSidebarOpen" @close="toggleSidebar" />
  </header>
</template>

<script>
import { ref } from "vue";
import Sidey from "./Sidey.vue";

export default {
  components: { Sidey },
  setup() {
    const isSidebarOpen = ref(false);
    const toggleSidebar = () => (isSidebarOpen.value = !isSidebarOpen.value);

    return { isSidebarOpen, toggleSidebar };
  },
};
</script>
