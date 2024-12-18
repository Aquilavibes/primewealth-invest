<template>
<Navbar>
  <header>
    <ion-icon class='menu' name="menu-outline" @click='openModal'></ion-icon>
    <ion-icon class='profile' name="person-circle-outline"></ion-icon>
    </header>
</Navbar>
<Sidebar
v-if='isNavOpen'
/>
    <div class='withdraw-cont'>
<p id='make'>Make a Withdrawal</p>
<hr>
<h1 id='withdrawals'>Withdrawals</h1>
<p id='minimum'> Your Minimum withdrawal amount is $200.00</p>
<form>
    <label>Amount</label><br>
    <input type='number' id='amount' placeholder='Enter Withdrawal Amount In USD'><br>
    <label for="withdraw-options">Withdrawal Type: </label><br>
<select id="withdrawal-options"><br>
  <option value="with-option">Crypto</option>
  </select><br>
  <label for="wallet-options">Preferred Wallet: </label><br>
<select id="wallet-options">
  <option value="option1">Bitcoin</option>
   <option value="option2">Ethereum</option>
    <option value="option3">USDT</option>
</select><br>
    <label> Wallet Address </label><br>
    <input type='text' id='address' placeholder="Input your Wallet address"><br>
    <button type='submit' id='withdraw-btn'>Withdraw</button>

</form>
<br>
<br>
 </div>
    <br>
<br>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
import { ref } from 'vue';
export default {

    components:{ Navbar, Sidebar },
    setup(){
     const isNavOpen = ref(false) 
   
   function openModal(){
  isNavOpen.value = !isNavOpen.value;
}

        return { isNavOpen,  openModal}
    }
}
</script>

<style scoped>
#withdraw-btn {
    width: 900px;
    margin-left: 3px;
    height: 40px;
    font-size: 16px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: blue;
    color: white;
    border-radius: 20px;
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
label {
    font-size: 20px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
form {
    margin-left: 50px;
    display: grid;
    
}
#withdrawals {
    font-size: 20px;
        margin-left: 50px;
}
#minimum {
    background-color: rgb(235, 124, 124);
        margin-left: 50px;
        height: 40px;
        width: 850px;
        border-radius: 5px;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        padding-left: 40px;
        padding-top: 20px;
}
#make {
    font-size: 16px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-top: -20px;
    margin-left: 50px;
}
.withdraw-cont {
    margin-top: 70px;
    margin-left: 200px;
    width: 1000px;
    border-radius: 5px;
    box-shadow: #050505 0px 0px 3px;
    padding-top: 50px;
    
}

hr {
    width: 900px;
}
</style>