<template>
  <Navbar>
    <header class="bg-black text-blue-500 flex items-center justify-between px-4 py-3 shadow-lg">
      <ion-icon class="menu text-2xl cursor-pointer" name="menu-outline" @click="openModal"></ion-icon>
      <ion-icon class="profile text-3xl cursor-pointer" name="person-circle-outline"></ion-icon>
    </header>
  </Navbar>
  <Sidebar v-if="isNavOpen" />

  <div class="min-h-screen bg-black p-6">
    <h2 class="text-3xl font-bold text-center text-blue-500 mb-8">
      Buy AI Trading Bot
    </h2>

    <!-- Bot Plans -->
    <div class="grid gap-6 md:grid-cols-3 sm:grid-cols-1">
      <!-- Starter Plan -->
      <div class="bg-black shadow-lg rounded-lg p-6 flex flex-col items-center border border-blue-700">
        <h3 class="text-xl font-bold text-blue-500 mb-4">Starter Plan</h3>
        <p class="text-sm text-blue-300 mb-2">ROI: 5%</p>
        <p class="text-sm text-blue-300 mb-2">Duration: 1 Month</p>
        <p class="text-sm text-blue-300 mb-2">Affiliate Bonus: 2%</p>
        <p class="text-sm text-blue-300 mb-2">Risk Ratio: Low</p>
        <p class="text-lg font-semibold text-blue-500 mb-4">Price: $1000</p>
        <button
          @click="purchaseBot('Starter Plan')"
          class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg"
        >
          Purchase
        </button>
      </div>

      <!-- Pro Plan -->
      <div class="bg-black shadow-lg rounded-lg p-6 flex flex-col items-center border border-blue-700">
        <h3 class="text-xl font-bold text-blue-500 mb-4">Pro Plan</h3>
        <p class="text-sm text-blue-300 mb-2">ROI: 10%</p>
        <p class="text-sm text-blue-300 mb-2">Duration: 3 Months</p>
        <p class="text-sm text-blue-300 mb-2">Affiliate Bonus: 5%</p>
        <p class="text-sm text-blue-300 mb-2">Risk Ratio: Medium</p>
        <p class="text-lg font-semibold text-blue-500 mb-4">Price: $5000</p>
        <button
          @click="purchaseBot('Pro Plan')"
          class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg"
        >
          Purchase
        </button>
      </div>

      <!-- Premium Plan -->
      <div class="bg-black shadow-lg rounded-lg p-6 flex flex-col items-center border border-blue-700">
        <h3 class="text-xl font-bold text-blue-500 mb-4">Premium Plan</h3>
        <p class="text-sm text-blue-300 mb-2">ROI: 15%</p>
        <p class="text-sm text-blue-300 mb-2">Duration: 6 Months</p>
        <p class="text-sm text-blue-300 mb-2">Affiliate Bonus: 10%</p>
        <p class="text-sm text-blue-300 mb-2">Risk Ratio: High</p>
        <p class="text-lg font-semibold text-blue-500 mb-4">Price: $10000</p>
        <button
          @click="purchaseBot('Premium Plan')"
          class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg"
        >
          Purchase
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
export default {
    components: {
    Sidebar,
    Navbar
  },
  setup() {
    const isNavOpen = ref(false);

    function openModal(){
  isNavOpen.value = !isNavOpen.value;
}
    
    const purchaseBot = (plan) => {
      alert(`Insufficient funds to purchase the ${plan}.`);
    };


    return {
      purchaseBot,
       openModal,
      isNavOpen,
    };
  },
};
</script>

<style>
/* Optional: Add custom styles if needed */
.profile {
  font-size: 30px;
}
.menu {
  font-size: 30px;
}
header {
display: flex;
margin-top: 20px;
gap: 80%;
}
</style>
