<template>
  <div class='sidebar'>
  <p id='userName'>{{userName}}</p>
  <hr>
  <RouterLink to='/dashboard'><p id='dashboard'>Dashboard</p></RouterLink>
  <RouterLink to='/deposit'><p id='Deposit'> Deposit</p></RouterLink>
   <RouterLink to='/withdraw'><p id='withdraw'>Withdraw</p></RouterLink>
   <RouterLink to='/history'><p id='history'> History</p></RouterLink>
   <RouterLink to='aitrading'><p id='ai-bot'>Investment</p></RouterLink>
   <RouterLink to='/changepassword'><p id='change-pass'> Change Password </p></RouterLink>
      <RouterLink to='/kyc'><p id='kyc'> KYC </p></RouterLink>
      <RouterLink to='/'><p id='logout'> log Out </p></RouterLink>
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
#logout {
  color: red;
}
p {
  color: white;
  text-align: center;
  font-size: 15px;
  margin-top: 20px;
}
.sidebar {
  background-color: black;
  border-radius: 10px;
  box-shadow: #eee 0px 0px 10px;
  margin-left: 50px;
  margin-top: -10px;
  width:  200px;
  height: 400px;
  position: fixed;
  gap: 30%;
}
</style>