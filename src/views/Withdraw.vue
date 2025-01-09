<template>
  <Navbar>
    <header class="bg-black text-blue-500 flex items-center justify-between px-4 py-3 shadow-lg">
      <ion-icon class="menu text-2xl cursor-pointer" name="menu-outline" @click="openModal"></ion-icon>
      <ion-icon class="profile text-3xl cursor-pointer" name="person-circle-outline"></ion-icon>
    </header>
  </Navbar>
  <Sidebar v-if="isNavOpen" />

  <div class="min-h-screen flex items-center justify-center bg-black">
    <div class="bg-black shadow-lg rounded-lg p-8 w-full max-w-md border border-blue-700">
      <h2 class="text-2xl font-bold text-center text-blue-500 mb-6">Make a Withdrawal</h2>

      <hr class="mb-6 border-blue-700" />

      <p class="text-sm text-blue-300 text-center mb-6">
        Your minimum withdrawal amount is <span class="font-semibold text-blue-500">$200.00</span>
      </p>

      <form @submit.prevent="handleWithdraw">
        <!-- Amount Input -->
        <div class="mb-4">
          <label for="amount" class="block text-sm font-medium text-blue-300">Amount (USD)</label>
          <input
            type="number"
            id="amount"
            v-model="amountt"
            placeholder="Enter Withdrawal Amount in USD"
            class="mt-1 block w-full rounded-md border-blue-700 bg-black text-blue-500 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <!-- Withdrawal Type -->
        <div class="mb-4">
          <label for="withdrawal-options" class="block text-sm font-medium text-blue-300">Withdrawal Type</label>
          <select
            id="withdrawal-options"
            v-model="withdrawalType"
            class="mt-1 block w-full rounded-md border-blue-700 bg-black text-blue-500 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="crypto">Crypto</option>
          </select>
        </div>

        <!-- Preferred Wallet -->
        <div class="mb-4">
          <label for="wallet-options" class="block text-sm font-medium text-blue-300">Preferred Wallet</label>
          <select
            id="wallet-options"
            v-model="wallet"
            class="mt-1 block w-full rounded-md border-blue-700 bg-black text-blue-500 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="bitcoin">Bitcoin</option>
            <option value="ethereum">Ethereum</option>
            <option value="usdt">USDT</option>
          </select>
        </div>

        <!-- Wallet Address -->
        <div class="mb-6">
          <label for="address" class="block text-sm font-medium text-blue-300">Wallet Address</label>
          <input
            type="text"
            id="address"
            v-model="walletAddress"
            placeholder="Input your Wallet address"
            class="mt-1 block w-full rounded-md border-blue-700 bg-black text-blue-500 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg"
        >
          Withdraw
        </button>
      </form>
    </div>
  </div>

  <br>
  <br>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
import { ref } from 'vue';
import { db } from "@/firebase"; // Adjust path
import { collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

     const amount = ref("");
    const withdrawalType = ref("crypto");
    const wallet = ref("");
    const walletAddress = ref("");
const amountt = ref("");
    const handleWithdraw = async () => {
      if (Number(amountt.value) < 200) {
        alert("Minimum withdrawal amount is $200.00.");
        return;
      }
      if (!walletAddress.value) {
        alert("Wallet address is required.");
        return;
      }

      // Handle withdrawal logic here
      console.log({
        amountt: amount.value,
        withdrawalType: withdrawalType.value,
        wallet: wallet.value,
        walletAddress: walletAddress.value,
      });

      alert(`Withdrawal of $${amount.value} to ${wallet.value} wallet (${walletAddress.value}) submitted!`);

      try {
        const auth = getAuth(); // Firebase Auth instance
        const user = auth.currentUser;

        if (!user) {
          alert("You must be logged in to make a deposit.");
          return;
        }

        const transaction = {
          amountt: parseFloat(amountt.value),
          status: "pending",
          type: "withdraw",
          userId: user.uid, // Attach user's UID
          createdAt: new Date(), // Add timestamp
        };

        await addDoc(collection(db, "transaction"), transaction);
 amountt.value = "";

        alert("Withdraw successful! Your transaction is pending.");
      } catch (error) {
        console.error("Error adding deposit: ", error);
        alert("Failed to process withdraw. Please try again.");
      }
    }

     const isNavOpen = ref(false) 
   
   function openModal(){
  isNavOpen.value = !isNavOpen.value;
}

       

</script>
