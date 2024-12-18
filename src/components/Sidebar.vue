<template>
  <div class='sidebar'>
  <p id='userName'>{{userName}}</p>
  <hr>
  <RouterLink to='/dashboard'><p id='dashboard'>Dashboard</p></RouterLink>
  <RouterLink to='/deposit'><p id='Deposit'> Deposit</p></RouterLink>
   <RouterLink to='/withdraw'><p id='withdraw'>Withdraw</p></RouterLink>
   <RouterLink to='/history'><p id='history'> History</p></RouterLink>
   <p id='ai-bot'>AI Trading Bot</p>
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
  color: white;
}
.sidebar {
  background-color: black;
  margin-left: 50px;
  margin-top: -10px;
  width:  250px;
  height: 300px;
  position: fixed;
}
</style>