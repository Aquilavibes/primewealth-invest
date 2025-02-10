<template>

  <Navbar>
    <header class="bg-black text-blue-500 flex items-center justify-between px-5 py-3 shadow-lg h-30">
      <ion-icon class="menu text-2xl cursor-pointer" name="menu-outline" @click="openModal"></ion-icon>
      <ion-icon class="profile text-3xl cursor-pointer" name="person-circle-outline"></ion-icon>
    </header>
  </Navbar>
  <br />
  <Sidebar v-if="isNavOpen" />

  <div class="min-h-screen flex items-center justify-center bg-black px-4">
    <div class="bg-black border border-blue-700 shadow-lg rounded-lg p-8 w-full max-w-md">
      <h1 class="text-2xl font-semibold text-blue-500 text-center mb-6">
        KYC Registration
      </h1>
      <form @submit.prevent="submitKYC">
        <!-- Legal Name -->
        <div class="mb-4">
          <label for="legalName" class="block text-sm font-medium text-blue-300 mb-2">
            Legal Name
          </label>
          <input
            type="text"
            id="legalName"
            v-model="legalName"
            class="w-full border border-blue-700 bg-black text-blue-300 rounded-lg p-3"
            required
          />
        </div>
        
        <!-- Address -->
        <div class="mb-4">
          <label for="address" class="block text-sm font-medium text-blue-300 mb-2">
            Address
          </label>
          <input
            type="text"
            id="address"
            v-model="address"
            class="w-full border border-blue-700 bg-black text-blue-300 rounded-lg p-3"
            required
          />
        </div>
        
        <!-- Phone Number -->
        <div class="mb-4">
          <label for="phoneNumber" class="block text-sm font-medium text-blue-300 mb-2">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            v-model="phoneNumber"
            class="w-full border border-blue-700 bg-black text-blue-300 rounded-lg p-3"
            required
          />
        </div>
        
        <!-- Document Upload -->
        <div class="mb-4">
          <label for="document" class="block text-sm font-medium text-blue-300 mb-2">
            Upload Document
          </label>
          <input
            type="file"
            id="document"
            @change="handleFileUpload"
            class="w-full border border-blue-700 bg-black text-blue-300 rounded-lg p-3"
            required
          />
        </div>

        <button type="submit" class="w-full bg-blue-600 text-white py-3 rounded-lg">
          Submit KYC
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { db } from '@/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";


    const legalName = ref('');
    const address = ref('');
    const phoneNumber = ref('');
    const documentBase64 = ref('');
    const isNavOpen = ref(false)

function openModal() {
  isNavOpen.value = !isNavOpen.value;
}
    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (!file) {
        alert('Please upload a valid document.');
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        documentBase64.value = reader.result; // Base64 encoded string
      };
      reader.onerror = (error) => {
        console.error('Error reading file:', error);
        alert('Failed to process the uploaded file.');
      };
      reader.readAsDataURL(file); // Read file as Base64 string
    };

    const submitKYC = async () => {
      if (!documentBase64.value) {
        alert('Please upload a valid document.');
        return;
      }

      try {
        await addDoc(collection(db, 'kyc'), {
          legalName: legalName.value,
          address: address.value,
          phoneNumber: phoneNumber.value,
          documentFile: documentBase64.value, // Save Base64 string
          createdAt: serverTimestamp(),
          status: 'In Revieww',
        });

        alert('KYC submitted successfully.');
        // Reset form fields
        legalName.value = '';
        address.value = '';
        phoneNumber.value = '';
        documentBase64.value = '';
      } catch (error) {
        console.error('Error during KYC submission:', error);
        alert('Failed to submit KYC. Please try again later.');
      }
    };

    
</script>

<style scoped>
/* Add your custom styles here */
</style>
