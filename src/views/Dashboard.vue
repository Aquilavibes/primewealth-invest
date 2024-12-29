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
  <div class='dash-cont lg:ml-12 lg:-mt-5 md:ml-10 md:-mt-4 sm:ml-6 sm:-mt-3 w-full max-w-[1200px] px-4'>
    <br><br><br>
    <p id='before-dash' class='text-md text-gray font-sans'> Home > Dashboard > Home </p><br>
  <h1 class='text-lg font-mono font-semibold text-2xl'>Dashboard</h1><br>
  <div class="grid lg:grid lg:grid-cols-2 gap-5 lg:grid-rows-2  md:block sm:block">
  <div class='acct-balance bg-blue-500 w-200 rounded-xl px-0 pl-5'>
  <p id='avail-balance' class='text-white'>Available Balance</p>
  <p id='balance' class='text-white'>$0.00</p>
  </div>
  
  
  <div class=' bg-gray-500 w-200 rounded-xl px-0 pl-5'>
  <p id='bonus-txt' class='text-white'>Bonus Earned</p>
  <p id='bonus' class='text-white'>$0.00</p>
  </div>

<div class='investment-cont border border-black bg-white-500 w-200 rounded-xl px-0 pl-5'>
     <ion-icon class='iconn' name="document-text-outline"></ion-icon>
  <p id='active-txt'> Active Investment </p>
  <p id='invest-balance'>$0.00</p>
  </div>


  <div class='robot-cont border border-black bg-white-500 w-200 rounded-xl px-0 pl-5'>
    <ion-icon class='iconn' name="analytics-outline"></ion-icon>
  <p id='active-txt'>AI Trading Balance</p>
  <p id='robot-balance'>$0.00</p>
  </div>

   <div class='profit-cont border border-black bg-white-500 w-200 rounded-xl px-0 pl-5'>
     <ion-icon class='iconn' name="document-text-outline"></ion-icon>
  <p id='active-txt'>Total Profit</p>
  <p id='profit-balance'>$0.00</p>
  </div>
  </div>
  <br>
  <div class='chart-cont'>
  <h1 id='chart-text' class='text-lg font-mono font-semibold'> AI Trading Chart</h1>
   <TradingChart :data="chartData" />
  
  <div class='chart'>

  </div>
  </div>
<br>
<h1 id='user-det'>Referral</h1>
  <div class='overview-cont'>
    
  <div class='referral-cont'>
  <p id='ref-link'>{{textToCopy}}</p>
  <button id='copy-ref' @click='copyToClipboard'>{{buttonText}}</button>
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
#ref-link {
  font-size: 16px;
}
#copy-ref {
width: 300px;
height: 30px;
border-radius: 20px;
background-color: blue;
color: white;
font-weight: bold;
margin-left: -80px;
}
.overview-cont {
  background-color: white;
  box-shadow: #000 0px 0px 2px;
  width: 90%;
  padding-left: 90px;
  border-radius: 10px;
  display: block;
  gap: 20%;
  height: 90px;
  color: black;
}
.color-chart {
  background-color: rgb(68, 66, 66);
}



#bonus-txt {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

</style>