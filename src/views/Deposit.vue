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
<p id='amount'>Amount to send: ${{amount}}</p>
<button @click='handleDeposit'>I have sent it</button>
    </div>
</Addresses>

    <div class='deposit-cont'>
<p id='make-depo'>Make a Deposit
</p>
<hr>
<p id='minimum-depo'>Your Minimum deposit is $200.00</p>

<form @submit.prevent='handleSubmit'>
<label for='input-amnt'>Amount</label><br>
<input type='number' id='input-amnt' placeholder='Input Amount In USD' v-model='amount'><br>
<label for='crypto-pref'>Preferred Crypto</label><br>
<select id='crypto-pref' required>
<option id='crypt-1' @click='toggleBtc'> Bitcoin </option>
<option id='crypt-2' @click='toggleUsdt'>USDT</option>
<option id='crypt-3' @click='toggleEth'>Ethereum</option>

</select> <br><br>
<button type='submit' id='deposit-btn'>Deposit</button>
</form>
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

    const handleDeposit = async () => {
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
    };




   
</script>

<style scoped>
.address-cont {
    background-color: white;
    color: black;
    position: fixed;
    width: 400px;
    height: 300px;
}
#deposit-btn {
    width: 900px;
    margin-left: 3px;
    height: 40px;
    font-size: 16px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: blue;
    color: white;
    border-radius: 20px;
}


form {
    margin-left: 50px;
}
select{
    width: 900px;
height: 55px;
font-size: 18px;

}
input {
width: 900px;
height: 55px;
font-size: 18px;
}

#minimum-depo {
    background-color: rgb(235, 183, 124);
        margin-left: 50px;
        height: 40px;
        width: 850px;
        border-radius: 5px;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        padding-left: 40px;
        padding-top: 20px;
}
.deposit-cont {
    margin-top: 70px;
    margin-left: 200px;
    width: 1000px;
    height: 370px;
    border-radius: 5px;
    box-shadow: #050505 0px 0px 3px;
    padding-top: 50px;
    
}

label {
    font-size: 20px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#make-depo {
    font-size: 16px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-top: -20px;
    margin-left: 50px;
}


</style>