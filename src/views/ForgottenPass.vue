<template>
  <div class="min-h-screen flex items-center justify-center bg-blue-50 px-4">
    <!-- Container -->
    <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
      <!-- Header -->
      <h1 class="text-2xl font-semibold text-blue-600 text-center mb-6">
        Reset Password
      </h1>

      <!-- Form -->
      <form @submit.prevent="sendResetLink">
        <!-- Email Input -->
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Enter your email"
            class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Send Reset Link
        </button>
      </form>

      <!-- Back to Login Link -->
      <div class="mt-6 text-center">
        <p class="text-sm text-gray-600">
          Remembered your password?
          <button
            @click="redirectToLogin"
            class="text-blue-600 font-medium hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const router = useRouter();
const email = ref('');

const sendResetLink = () => {
  const auth = getAuth();
  sendPasswordResetEmail(auth, email.value)
    .then(() => {
      alert('A password reset link has been sent to your email. Please check your inbox.');
    })
    .catch((error) => {
      console.error(error.code);
      switch (error.code) {
        case 'auth/invalid-email':
          alert('The email address is not valid.');
          break;

        case 'auth/user-not-found':
          alert('No account found with this email address.');
          break;

        default:
          alert('An error occurred. Please try again later.');
          break;
      }
    });
};

const redirectToLogin = () => {
  router.push('/login');
};
</script>

<style scoped>
/* General styling for the container and form */
.container {
  max-width: 500px;
  margin: auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background: white;
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

label {
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0px 0px 5px rgba(0, 123, 255, 0.5);
}
</style>
