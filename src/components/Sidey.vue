<template>
  <div
    v-if="open"
    class="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end"
  >
    <div class="bg-gray-800 text-white w-64 h-full p-4">
      <button @click="$emit('close')" class="mb-6 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <nav class="flex flex-col space-y-4">
        <a href="#" class="hover:text-blue-400">Home</a>
        <a href="#about" class="hover:text-blue-400">About Us</a>
        <a href="#login" class="hover:text-blue-400">Login</a>
        <a href="#signup" class="hover:text-blue-400">Sign Up</a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    open: Boolean,
  },
};
</script>
