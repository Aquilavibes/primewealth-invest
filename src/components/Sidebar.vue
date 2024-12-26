<template>
  <div class='sidebar'>
  <p id='userName'>{{userName}}</p>
  <hr>
  <RouterLink to='/dashboard'><p id='dashboard'>Dashboard</p></RouterLink>
  <RouterLink to='/deposit'><p id='Deposit'> Deposit</p></RouterLink>
   <RouterLink to='/withdraw'><p id='withdraw'>Withdraw</p></RouterLink>
   <RouterLink to='/history'><p id='history'> History</p></RouterLink>
   <RouterLink to='aitrading'><p id='ai-bot'>Buy AI trading bot</p></RouterLink>
   <RouterLink to='/changepassword'><p id='change-pass'> Change Password </p></RouterLink>
      
  </div>
  
</template>

<script>
 import { defineComponent, ref } from 'vue';


export default defineComponent ({
  props: {
    userName: {
      type: String,
      required: true,
    },
    deposit: {
      type: String,
      required: true,
    },
    withdraw: {
      type: String,
      required: true,
    },
     history: {
      type: String,
      required: true,
    }
  }

  
    })
     
   

</script>

<style scoped>
p {
  color: black;
  text-align: center;
  font-size: 15px;
  margin-top: 20px;
}
.sidebar {
  background-color: white;
  border-radius: 10px;
  box-shadow: #000 0px 0px 10px;
  margin-left: 50px;
  margin-top: -10px;
  width:  200px;
  height: 300px;
  position: fixed;
  gap: 30%;
}
</style>