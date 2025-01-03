<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-900 px-4">
    <!-- Container -->
    <div class="bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md sm:max-w-sm lg:max-w-lg">
      <!-- Header -->
      <h1 class="text-2xl font-semibold text-white text-center mb-6">
        Kindly Input Your Access Code
      </h1>

      <!-- Form -->
      <form @submit.prevent="handleRoute">
        <!-- Access Code Input -->
        <div class="mb-4">
          <label for="accessCode" class="block text-sm font-medium text-gray-300 mb-2">
            Input Your Access Code
          </label>
          <input
            type="text"
            id="accessCode"
            v-model="accessCode"
            placeholder="Enter your access code"
            class="w-full border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-200"
          />
        </div>
        <p class="text-red-500">{{ errMsg }}</p>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter}  from 'vue-router'
const errMsg = ref('')
const accessCode = ref('')
const route = useRouter()

const handleRoute = () => {
  if (accessCode.value == 't15689fffr34') {
    route.push('/hero')
  } else {
    errMsg.value = 'Wrong access code'
    route.push('/')
  }
}

</script>

<style scoped>
#errMsg {
    background-color: rgb(219, 114, 114);
    width: 230px;
    height: 25px;
    border-radius: 5px;
    padding-top: 10px;
    
}



</style>