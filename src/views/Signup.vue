<template>


<div class="min-h-screen flex items-center justify-center bg-blue-50">
    <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
      <h2 class="text-2xl font-bold text-center text-blue-600 mb-6">Sign Up</h2>
      
      <form @submit.prevent="handleSubmit">
        <!-- Name Input -->
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            id="name"
            v-model="name"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your full name"
          />
        </div>

        <!-- Email Input -->
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>

        <!-- Password Input -->
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password"
          />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg"
        >
          Sign Up
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {username } from '../GlobalState'
import {useRouter} from 'vue-router'
import { auth } from '@/firebase'
 import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
    const route = useRouter()
   const name = ref('')
   const email = ref('') 
   const password = ref('')   
const register = () => {
createUserWithEmailAndPassword(getAuth(), email.value, password.value)
.then((data) => {
alert('Registeration Successful')
route.push('/dashboard')
fullName.value = username.value


})

.catch((error) => {
    console.log(error.code)
    alert(error.message)
})
}
//return{fullName, email, token, password,register, route}
</script>

<style scoped>

h1 {
    margin-left: 70px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: black;
}

hr {
   margin-left: -55px; 
   width: 400px;  
}

#signup {
    width: 250px;
    height: 30px;
    border-radius: 20px;
    margin-left: 20px;
    color: white;
    background-color: black;
   
}

#login {
    width: 250px;
    height: 30px;
    border-radius: 20px;
    margin-left: 20px;
    color: black;
    font-weight: bold;
     background-color: white;
      border: solid black;
}

input {
    width: 280px;
    height: 50px;
}

.login-signup {
    padding-top: 30px;
    margin-left: 500px;
    background-color: white;
    box-shadow: 0px 0px 10px #000;
    width: 350px;
    height: 700px;
    padding-left: 55px;
    margin-top: 35px;
    padding-bottom: 50px;
}



</style>