<template>
<Navbar>
  <header>
    <ion-icon class='menu' name="menu-outline" @click='openModal'></ion-icon>
    <ion-icon class='profile' name="person-circle-outline"></ion-icon>
    </header>
</Navbar><br>
<Sidebar
v-if='isNavOpen'
/>

  <div class="min-h-screen flex items-center justify-center bg-blue-50 px-4">
    
    <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
      <!-- Header -->
      <h1 class="text-2xl font-semibold text-blue-600 text-center mb-6">
        KYC Registration
      </h1>

      <!-- Form -->
      <form @submit.prevent="submitKYC">
        <!-- Legal Name -->
        <div class="mb-4">
          <label for="legalName" class="block text-sm font-medium text-gray-700 mb-2">
            Legal Name
          </label>
          <input
            type="text"
            id="legalName"
            v-model="legalName"
            placeholder="Enter your legal name"
            class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <!-- Email -->
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Enter your email address"
            class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <!-- Date of Birth -->
        <div class="mb-4">
          <label for="dob" class="block text-sm font-medium text-gray-700 mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            v-model="dob"
            class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <!-- Address -->
        <div class="mb-4">
          <label for="address" class="block text-sm font-medium text-gray-700 mb-2">
            Address
          </label>
          <input
            type="text"
            id="address"
            v-model="address"
            placeholder="Enter your address"
            class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <!-- ID Type Selector -->
        <div class="mb-4">
          <label for="idType" class="block text-sm font-medium text-gray-700 mb-2">
            ID Type
          </label>
          <select
            id="idType"
            v-model="idType"
            class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="" disabled>Select ID Type</option>
            <option value="Passport">Passport</option>
            <option value="Drivers License">Driver's License</option>
            <option value="National ID">National ID</option>
          </select>
        </div>

        <!-- Document Upload -->
        <div class="mb-4">
          <label for="document" class="block text-sm font-medium text-gray-700 mb-2">
            Upload Document
          </label>
          <input
            type="file"
            id="document"
            @change="handleFileUpload"
            class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Submit KYC
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from 'emailjs-com';
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';

const isNavOpen = ref(false);
const legalName = ref('');
const email = ref('');
const dob = ref('');
const address = ref('');
const idType = ref('');
const documentFile = ref(null);

function openModal(){
  isNavOpen.value = !isNavOpen.value;
}

const handleFileUpload = (event) => {
  documentFile.value = event.target.files[0];
};

const submitKYC = () => {
  if (!documentFile.value) {
    alert('Please upload a valid document.');
    return;
  }

  const formData = new FormData();
  formData.append('legalName', legalName.value);
  formData.append('email', email.value);
  formData.append('dob', dob.value);
  formData.append('address', address.value);
  formData.append('idType', idType.value);
  formData.append('documentFile', documentFile.value);

  const serviceId = 'your_service_id'; // Replace with your Email.js service ID
  const templateId = 'your_template_id'; // Replace with your Email.js template ID
  const userId = 'your_user_id'; // Replace with your Email.js user ID (public key)

  emailjs
    .sendForm(serviceId, templateId, formData, userId)
    .then(() => {
      alert('KYC submitted successfully. Check your email for confirmation.');
    })
    .catch((error) => {
      console.error(error);
      alert('Failed to submit KYC. Please try again later.');
    });
};
</script>

<style scoped>
h1 {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: black;
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

input, select {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

input:focus, select:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0px 0px 5px rgba(0, 123, 255, 0.5);
}
</style>
