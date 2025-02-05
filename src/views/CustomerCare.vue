<template>
 <Navbar>
    <header class="bg-black text-blue-500 flex items-center justify-between px-4 py-3 shadow-lg">
      <ion-icon class="menu text-2xl cursor-pointer" name="menu-outline" @click="openModal"></ion-icon>
      <ion-icon class="profile text-3xl cursor-pointer" name="person-circle-outline"></ion-icon>
    </header>
  </Navbar>

<Sidebar v-if="isNavOpen" />
  <div class="bg-black shadow-lg rounded-lg p-8 w-full max-w-md border border-blue-700 mx-auto">
    <h2 class="text-2xl font-bold text-blue-700 mb-4 text-center">Customer Support</h2>

    <form @submit.prevent="sendEmail" class="space-y-4">
      <div>
        <label for="name" class="block text-sm font-medium text-blue-900">Name</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          required
          placeholder="Your Name"
          class="w-full mt-1 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-blue-900">Email</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          required
          placeholder="Your Email"
          class="w-full mt-1 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

       <div>
        <label for="subject" class="block text-sm font-medium text-blue-900">Subject</label>
        <input
          type="text"
          id="subject"
          v-model="form.subject"
          required
          placeholder="Subject"
          class="w-full mt-1 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-blue-900">Message</label>
        <textarea
          id="message"
          v-model="form.message"
          required
          placeholder="Your Message"
          rows="4"
          class="w-full mt-1 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
      </div>

      <button
        type="submit"
        :disabled="loading"
        class="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
      >
        {{ loading ? "Sending..." : "Send Message" }}
      </button>

      <p v-if="successMessage" class="text-green-600 text-sm mt-2">{{ successMessage }}</p>
      <p v-if="errorMessage" class="text-red-600 text-sm mt-2">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "emailjs-com";
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';

    const form = ref({ name: "", email: "", message: "", subject: "" });
    const loading = ref(false);
    const successMessage = ref("");
    const errorMessage = ref("");
const isNavOpen = ref(false);

function openModal(){
  isNavOpen.value = !isNavOpen.value;
}
    const sendEmail = async () => {
      loading.value = true;
      successMessage.value = "";
      errorMessage.value = "";

      try {
        const serviceID = "service_mg0rfjo"; 
        const templateID = "template_qwl7eii"; 
        const publicKey = "J4_a9mFxQmLh"; 

        const templateParams = {
          name: form.value.name,
          email: form.value.email,
          subject: form.value.subject,
          message: form.value.message,
        };

        await emailjs.send(serviceID, templateID, templateParams, publicKey);
        successMessage.value = "Your message has been sent successfully!";
        form.value = { name: "", email: "", message: "", subject: "" };
      } catch (error) {
        console.error("Failed to send email:", error);
        errorMessage.value = "Failed to send the message. Please try again later.";
      } finally {
        loading.value = false;
      }
    };

</script>

<style scoped>
/* Additional styles for better aesthetics */
textarea:focus,
input:focus {
  outline: none;
}
</style>
