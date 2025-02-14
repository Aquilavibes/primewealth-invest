<template>
  <Navbar>
    <header class="bg-black text-blue-500 flex items-center justify-between px-4 py-3 shadow-lg">
      <ion-icon class="menu text-2xl cursor-pointer" name="menu-outline" @click="openModal"></ion-icon>
      <ion-icon class="profile text-3xl cursor-pointer" name="person-circle-outline"></ion-icon>
    </header>
  </Navbar>
  <Sidebar v-if="isNavOpen" />

  <div class="min-h-screen bg-black p-6">
    <p class='text-center text-blue-500 '>Balance: {{balanceState.balance}}.00</p>
    <h2 class="text-3xl font-bold text-center text-blue-500 mb-8">
    Investment Plans
    </h2>

    <!-- Bot Plans -->
    <div class="grid gap-6 md:grid-cols-3 sm:grid-cols-1">
      <!-- Starter Plan -->
      <div class="bg-black shadow-lg rounded-lg p-6 flex flex-col items-center border border-blue-700">
        <h3 class="text-xl font-bold text-blue-500 mb-4">Starter Plan</h3>
        <p class="text-sm text-blue-300 mb-2">ROI: 5%</p>
        <p class="text-sm text-blue-300 mb-2">Duration: 14 Days</p>
        <p class="text-sm text-blue-300 mb-2">Affiliate Bonus: 2%</p>
        <p class="text-sm text-blue-300 mb-2">Risk Ratio: Loww</p>
        <p class="text-lg font-semibold text-blue-500 mb-4">Price: $1000</p>
        <button
       
         @click="handleInvestment(1000, 400, 1, 14)"
          class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg"
        >
          Invest
        </button>
      </div>

      <!-- Pro Plan -->
      <div class="bg-black shadow-lg rounded-lg p-6 flex flex-col items-center border border-blue-700">
        <h3 class="text-xl font-bold text-blue-500 mb-4">Pro Plan</h3>
        <p class="text-sm text-blue-300 mb-2">ROI: 10%</p>
        <p class="text-sm text-blue-300 mb-2">Duration: 20 Days</p>
        <p class="text-sm text-blue-300 mb-2">Affiliate Bonus: 5%</p>
        <p class="text-sm text-blue-300 mb-2">Risk Ratio: Medium</p>
        <p class="text-lg font-semibold text-blue-500 mb-4">Price: $5000</p>
        <button
         @click="handleInvestment(5000, 600, 1, 20)"
          class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg"
        >
          Invest
        </button>
      </div>

      <!-- Premium Plan -->
      <div class="bg-black shadow-lg rounded-lg p-6 flex flex-col items-center border border-blue-700">
        <h3 class="text-xl font-bold text-blue-500 mb-4">Premium Plan</h3>
        <p class="text-sm text-blue-300 mb-2">ROI: 15%</p>
        <p class="text-sm text-blue-300 mb-2">Duration: 30 Days</p>
        <p class="text-sm text-blue-300 mb-2">Affiliate Bonus: 10%</p>
        <p class="text-sm text-blue-300 mb-2">Risk Ratio: High</p>
        <p class="text-lg font-semibold text-blue-500 mb-4">Price: $10000</p>
        <button
          @click="handleInvestment(10000, 1000, 100, 10)"
          class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg"
        >
          Invest
        </button>
      </div>
    </div>
 </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
import { balanceState } from '@/GlobalState';
 
    const isNavOpen = ref(false);

    function openModal(){
  isNavOpen.value = !isNavOpen.value;
}
 // Fetch balance & investments when the component loads
onMounted(() => {
  balanceState.fetchBalance();
});

const handleInvestment = (amount, initialInvestBal, dailyIncrement, duration) => {
  balanceState.invest(amount, initialInvestBal, dailyIncrement, duration);
 if (balanceState.balance = balanceState.balance--){
  
  alert("Investment is now active")
 } else {
  alert("insufficient funds to invest")
 }
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
