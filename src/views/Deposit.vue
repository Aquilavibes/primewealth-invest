<template>
  <Navbar>
    <header class="bg-black text-blue-500 flex items-center justify-between px-5 py-3 shadow-lg h-30">
      <ion-icon class="menu text-2xl cursor-pointer" name="menu-outline" @click="openModal"></ion-icon>
      <ion-icon class="profile text-3xl cursor-pointer" name="person-circle-outline"></ion-icon>
    </header>
  </Navbar>
  <br />
  <Sidebar v-if="isNavOpen" />

  <div class="min-h-screen flex items-center justify-center bg-black">
    <div class="bg-black shadow-lg rounded-lg p-8 w-full max-w-md border border-blue-700">
      <h2 class="text-2xl font-bold text-center text-blue-500 mb-6">Make a Deposit</h2>

      <hr class="mb-6 border-blue-700" />

      <p class="text-sm text-blue-300 text-center mb-6">
        Your minimum deposit is <span class="font-semibold text-blue-500">$200.00</span>
      </p>

      <form @submit.prevent="handleDeposit">
      

        <!-- Amount Input -->
        <div class="mb-4">
          <label for="input-amnt" class="block text-sm font-medium text-blue-300">Amount (USD)</label>
          <input
            type="number"
            id="input-amnt"
            v-model="amountt"
            placeholder="Input Amount in USD"
            class="mt-1 block w-full rounded-md border-blue-700 bg-black text-blue-500 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <!-- Crypto Preference -->
        <div class="mb-6">
          <label for="crypto-pref" class="block text-sm font-medium text-blue-300">Preferred Crypto</label>
          <select
            id="crypto-pref"
            v-model="crypto"
            required
            class="mt-1 block w-full rounded-md border-blue-700 bg-black text-blue-500 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="bitcoin">Bitcoin</option>
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

    <div
      v-if="showAddress"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-black rounded-lg p-8 w-full max-w-sm shadow-lg border border-blue-700">
        <h3 class="text-lg font-bold text-center text-blue-500 mb-4">Confirm Deposit</h3>
        <p class="text-sm text-blue-300 mb-4">
          <span class="font-semibold">Amount:</span> ${{ amountt }}
        </p>
        <p class="text-sm text-blue-300 mb-4">
          <span class="font-semibold">Type:</span> {{ preferredCrypto }}
        </p>
        <p class="text-sm text-blue-300 mb-6">
          <span class="font-semibold">Wallet Address:</span>
          <span class="text-blue-500">{{ walletAddress }}</span>
        </p>
        <button
          @click="handleDeposited"
          class="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-lg"
        >
          I've Sent It
        </button>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import { getAuth } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { db } from "@/firebase"; // Adjust path
import { collection, addDoc } from "firebase/firestore";
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';



// Declare reactive variables
const amountt = ref("");
const userEmail = ref(""); // You will bind this to the email input field
const isNavOpen = ref(false);
const showAddress = ref(false);
const walletAddress = ref("");
const preferredCrypto = ref("bitcoin");
const router = useRouter();
 

 function openModal(){
  isNavOpen.value = !isNavOpen.value;
}

// Function to handle deposit
const handleDeposit = () => {
  const walletAddresses = {
    bitcoin: "bc1qakvyg0mv6c0xacx3p0pyj8vp64zklk46rvgzdz",
    usdt: "0x12345USDTwalletAddress",
    ethereum: "0x12345ETHwalletAddress",
  };

  if (amountt.value < 200) {
    alert("Minimum deposit is $200.00.");
    return;
  }

  // Set the wallet address dynamically based on selected crypto
  walletAddress.value = walletAddresses[preferredCrypto.value];
  showAddress.value = true;
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
      amountt: parseFloat(amountt.value),
      status: "pending",
      type: "deposit",
      userId: user.uid, // Attach user's UID
      createdAt: new Date(), // Add timestamp
    };

    // Add transaction to Firestore
    await addDoc(collection(db, "transaction"), transaction);

   

    if (data.status === 'success') {
      amountt.value = "";
      alert("Deposit successful! Your transaction is pending. Redirecting to history...");
      router.push("/history");
    } 
  } catch (error) {
    console.error("Error processing deposit: ", error);
    alert("Failed to process deposit. Please try again.");
  }
};


</script>