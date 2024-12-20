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
<Addresses v-if="showAddress">
<div class='address-cont'>
<p id='makee'>Make a deposit</p>
<hr>
<p id='type'>Wallet type:{{type}} </p>
<p id='address'>Wallet Address:{{address}}</p>
<p id='amount'>Amount to send: ${{amountt}}</p>
<button @click='handleDeposited'>I have sent it</button>
    </div>
</Addresses>

   <div class="min-h-screen flex items-center justify-center bg-blue-50">
    <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
      <h2 class="text-2xl font-bold text-center text-blue-600 mb-6">Make a Deposit</h2>
      
      <hr class="mb-6">

      <p class="text-sm text-gray-600 text-center mb-6">Your minimum deposit is <span class="font-semibold text-blue-600">$200.00</span></p>

      <form @submit.prevent="handleDeposit">
        <!-- Amount Input -->
        <div class="mb-4">
          <label for="input-amnt" class="block text-sm font-medium text-gray-700">Amount (USD)</label>
          <input
            type="number"
            id="input-amnt"
            v-model="amountt"
            placeholder="Input Amount in USD"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <!-- Crypto Preference -->
        <div class="mb-6">
          <label for="crypto-pref" class="block text-sm font-medium text-gray-700">Preferred Crypto</label>
          <select
            id="crypto-pref"
            v-model="crypto"
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="bitcoin">Bitcoin</option>
            <option value="usdt">USDT</option>
            <option value="ethereum">Ethereum</option>
          </select>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg"
        >
          Deposit
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
import Addresses from '../components/Addresses.vue'
import { db } from "@/firebase"; // Adjust path
import { collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";


import { ref } from 'vue'
       const type = ref('')
       const amount = ref('')
       const isNavOpen = ref(false)
       const showAddress = ref(false)
       const address = ref('')
       
    
function openModal(){
  isNavOpen.value = !isNavOpen.value;
}

function toggleBtc (){
   address.value =  "OGHSTARW5663HDGGTS6SBGTED"
   type.value = 'Bitcoin'
}

function toggleUsdt (){
   address.value =  "90tgwybsgtwtwhhujajsgdfet"
   type.value = 'USDT'
}

function toggleEth (){
   address.value =  "wrtsg67289why3tfwtyw662g"
   type.value = 'Ethereum'
}



function handleSubmit (){
    showAddress.value = !showAddress.value
    
   
}


const amountt = ref("");

    const handleDeposit = () => {


 if (amountt.value < 200) {
        alert("Minimum deposit is $200.00.");
        return;
      }
      // Handle deposit logic here
      console.log({
        amount: amount.value,
        crypto: crypto.value
      });
      showAddress.value = true

    };

const handleDeposited = async () => {
  try {
        const auth = getAuth(); // Firebase Auth instance
        const user = auth.currentUser;

        if (!user) {
          alert("You must be logged in to make a deposit.");
          return;
        }

        const transaction = {
          amountt: parseFloat(amount.value),
          status: "pending",
          type: "deposit",
          userId: user.uid, // Attach user's UID
          createdAt: new Date(), // Add timestamp
        };

        await addDoc(collection(db, "transaction"), transaction);

        amountt.value = "";
        alert("Deposit successful! Your transaction is pending.");
      } catch (error) {
        console.error("Error adding deposit: ", error);
        alert("Failed to process deposit. Please try again.");
      }
}



   
</script>

