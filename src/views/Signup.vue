<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-900">
    <div class="bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
      <h2 class="text-2xl font-bold text-center text-white mb-6">Sign Up</h2>

      <form @submit.prevent="register">
        <!-- Full Name Input -->
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-300">Full Name</label>
          <input
            type="text"
            id="name"
            v-model="name"
            class="mt-1 block w-full rounded-md border-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-gray-200"
            placeholder="Enter your full name"
          />
        </div>

        <!-- Email Input -->
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-300">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="mt-1 block w-full rounded-md border-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-gray-200"
            placeholder="Enter your email"
          />
        </div>

        <!-- Phone Number Input -->
        <div class="mb-4">
          <label for="phone" class="block text-sm font-medium text-gray-300">Phone Number</label>
          <input
            type="text"
            id="phone"
            v-model="phone"
            class="mt-1 block w-full rounded-md border-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-gray-200"
            placeholder="Enter your phone number"
          />
        </div>

        <!-- Country Selector -->
        <div class="mb-4">
          <label for="country" class="block text-sm font-medium text-gray-300">Country</label>
          <select
            id="country"
            v-model="country"
            class="mt-1 block w-full rounded-md border-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-gray-200"
          >
            <option value="" disabled>Select your country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="India">India</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <!-- Address Line Input -->
        <div class="mb-4">
          <label for="address" class="block text-sm font-medium text-gray-300">Address</label>
          <input
            type="text"
            id="address"
            v-model="address"
            class="mt-1 block w-full rounded-md border-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-gray-200"
            placeholder="Enter your address"
          />
        </div>

        <!-- Password Input -->
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-300">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="mt-1 block w-full rounded-md border-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-gray-200"
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
import { db } from '@/firebase';
import { doc, updateDoc, collection, addDoc } from 'firebase/firestore';
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
    
    // Save user details to Firestore before navigation
    await addDoc(collection(db, 'peeps'), {
      name: name.value,
      email: email.value,  // Added email for reference
      address: address.value,
      phone: phone.value,
      country: country.value, // Include country
      email: email.value,
      userId: user.uid,
    });

    alert('Registration successful. Please check your email to verify your account.');
    
    // Reset form fields
    name.value = '';
    email.value = '';
    password.value = '';
    phone.value = '';
    country.value = '';
    address.value = '';
    email.value = '';
    // Navigate to login page
    router.push('/login');

  } catch (error) {
    console.error('Error:', error.code, error.message);
    alert(error.message);
  }
};
</script>
