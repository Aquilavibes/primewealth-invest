<template>
  <div class="min-h-screen flex items-center justify-center bg-blue-50">
    <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
      <h2 class="text-2xl font-bold text-center text-blue-600 mb-6">Sign Up</h2>

      <form @submit.prevent="register">
        <!-- Full Name Input -->
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            id="name"
            v-model="name"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your full name"
          />
        </div>

        <!-- Email Input -->
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>

        <!-- Phone Number Input -->
        <div class="mb-4">
          <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="text"
            id="phone"
            v-model="phone"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your phone number"
          />
        </div>

        <!-- Country Selector -->
        <div class="mb-4">
          <label for="country" class="block text-sm font-medium text-gray-700">Country</label>
          <select
            id="country"
            v-model="country"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled>Select your country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="India">India</option>
          </select>
        </div>

        <!-- Address Line Input -->
        <div class="mb-4">
          <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            id="address"
            v-model="address"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your address"
          />
        </div>

        <!-- Password Input -->
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password"
          />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg"
        >
          Sign Up
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';

const router = useRouter();
const name = ref('');
const email = ref('');
const password = ref('');
const phone = ref('');
const country = ref('');
const address = ref('');

const register = async () => {
  const auth = getAuth();
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;

    // Send email verification
    await sendEmailVerification(user);
    alert('Registration successful. Please check your email to verify your account.');

    // Navigate to login page
    router.push('/login');
  } catch (error) {
    console.error(error.code);
    alert(error.message);
  }
};
</script>

<style scoped>
h1 {
  margin-left: 70px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: black;
}

hr {
  margin-left: -55px;
  width: 400px;
}

#signup {
  width: 250px;
  height: 30px;
  border-radius: 20px;
  margin-left: 20px;
  color: white;
  background-color: black;
}

#login {
  width: 250px;
  height: 30px;
  border-radius: 20px;
  margin-left: 20px;
  color: black;
  font-weight: bold;
  background-color: white;
  border: solid black;
}

input {
  width: 280px;
  height: 50px;
}

.login-signup {
  padding-top: 30px;
  margin-left: 500px;
  background-color: white;
  box-shadow: 0px 0px 10px #000;
  width: 350px;
  height: 700px;
  padding-left: 55px;
  margin-top: 35px;
  padding-bottom: 50px;
}
</style>
