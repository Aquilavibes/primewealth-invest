<template>
  <Navbar>
    <header class="bg-black text-blue-500 flex items-center justify-between px-4 py-3 shadow-lg">
      <ion-icon class="menu text-2xl cursor-pointer" name="menu-outline" @click="openModal"></ion-icon>
      <ion-icon class="profile text-3xl cursor-pointer" name="person-circle-outline"></ion-icon>
    </header>
  </Navbar>
  <br>
  <Sidebar v-if="isNavOpen" />
  <div class="min-h-screen  items-center justify-center bg-gray-900 px-4">
    <p id="before-dash" class="text-md text-blue-300 font-sans mb-4">Home > Dashboard > Home</p>
    <h1 class="text-2xl font-mono font-semibold text-blue-500">Dashboard</h1><br>

    <!-- Dashboard Grid -->
    <div class="grid lg:grid-cols-2 gap-5 lg:grid-rows-2 sm:mt-5">
      <!-- Account Balance -->
      <div class="acct-balance bg-blue-700 rounded-xl p-5 shadow-md">
        <p id="avail-balance" class="text-white">Available Balance</p>
        <p id="balance" class="text-white text-xl font-bold">$0.00</p>
      </div>

      <!-- Bonus Earned -->
      <div class="bg-blue-800 rounded-xl p-5 shadow-md">
        <p id="bonus-txt" class="text-blue-100">Bonus Earned</p>
        <p id="bonus" class="text-white text-xl font-bold">$0.00</p>
      </div>

      <!-- Active Investment -->
      <div class="investment-cont border border-blue-600 bg-black rounded-xl p-5 shadow-md">
        <ion-icon class="iconn text-blue-500 text-2xl mb-2" name="document-text-outline"></ion-icon>
        <p id="active-txt" class="text-blue-300">Active Investment</p>
        <p id="invest-balance" class="text-white text-xl font-bold">$0.00</p>
      </div>

      <!-- AI Trading Balance -->
      <div class="robot-cont border border-blue-600 bg-black rounded-xl p-5 shadow-md">
        <ion-icon class="iconn text-blue-500 text-2xl mb-2" name="analytics-outline"></ion-icon>
        <p id="active-txt" class="text-blue-300">AI Trading Balance</p>
        <p id="robot-balance" class="text-white text-xl font-bold">$0.00</p>
      </div>

      <!-- Total Profit -->
      <div class="profit-cont border border-blue-600 bg-black rounded-xl p-5 shadow-md">
        <ion-icon class="iconn text-blue-500 text-2xl mb-2" name="document-text-outline"></ion-icon>
        <p id="active-txt" class="text-blue-300">Total Profit</p>
        <p id="profit-balance" class="text-white text-xl font-bold">$0.00</p>
      </div>
    </div>
    <br>

    <!-- AI Trading Chart -->
    <div class="chart-cont bg-black rounded-xl p-5 shadow-lg">
      <h1 id="chart-text" class="text-lg font-mono font-semibold text-blue-500 mb-4">AI Trading Chart</h1>
      <TradingChart :data="chartData" />
    </div>
    <br>

    <!-- Referral Section -->
    <h1 id="user-det" class="text-xl font-mono font-semibold text-blue-500">Referral</h1>
    <div class="overview-cont mt-4">
      <div class="referral-cont bg-black rounded-xl p-5 shadow-lg flex items-center justify-between">
        <p id="ref-link" class="text-blue-300">{{ textToCopy }}</p>
        <button
          id="copy-ref"
          @click="copyToClipboard"
          class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          {{ buttonText }}
        </button>
      </div>
    </div>
    <br><br>
  </div>
</template>


<script setup>
/*<ion-icon name="document-text-outline"></ion-icon>
<ion-icon name="analytics-outline"></ion-icon>
*/
import TradingChart from '../components/TradingChart.vue';
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
import { ref } from 'vue';
  

  const isNavOpen = ref(false);
  const textToCopy = ref("https://investment-club.pro");
    const buttonText = ref("Copy");
    // Sample data (Time and Value)
    const chartData = ref([
      { time: '2023-10-01', value: 100 },
      { time: '2023-10-02', value: 105 },
      { time: '2023-10-03', value: 102 },
      // Add more data points as needed
    ]);
function openModal(){
  isNavOpen.value = !isNavOpen.value;
}

    

    const copyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(textToCopy.value); // Copy text to clipboard
        buttonText.value = "Copied!"; // Change button text
        setTimeout(() => {
          buttonText.value = "Copy"; // Revert button text after 2 seconds
        }, 2000);
      } catch (error) {
        console.error("Failed to copy text: ", error);
        buttonText.value = "Error!";
        setTimeout(() => {
          buttonText.value = "Copy";
        }, 2000);
      }

   

  
} 
</script>

<style scoped>



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

#before-dash {
  color: rgb(94, 94, 94);
  font-weight: bold;
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.iconn {
 margin-top: 20px;
  font-size: 26px;
  color: rgb(26, 92, 235);
  background-color: rgb(165, 193, 252);
}

#active-txt {
 font-size: 20px;
 font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 font-weight: bold;
 
 
}

.color-chart {
  background-color: rgb(68, 66, 66);
}



#bonus-txt {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

</style>