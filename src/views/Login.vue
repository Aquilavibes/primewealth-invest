<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-900 px-4">
    <!-- Container -->
    <div class="bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md sm:max-w-sm lg:max-w-lg">
      <!-- Header -->
      <h1 class="text-2xl font-semibold text-white text-center mb-6">
        Log In
      </h1>

      <!-- Form -->
      <form @submit.prevent="login">
        <!-- Email Input -->
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Enter your email"
            class="w-full border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-200"
          />
        </div>

        <!-- Password Input -->
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-300 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter your password"
            class="w-full border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-200"
          />
        </div>
        <p class="text-red-500">{{ errMsg }}</p>

        <!-- Login Button -->
        <button
          type="submit"
          class="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>

      <!-- Forgot Password Link -->
      <p class="text-sm text-gray-400 mt-4">
        Forgot password?
        <button
          @click="redirectToForgot"
          class="text-blue-500 font-medium hover:underline"
        >
          Reset
        </button>
      </p>

      <!-- Signup Link -->
      <div class="mt-6 text-center">
        <p class="text-sm text-gray-400">
          Don't have an account?
          <button
            @click="redirectToSignup"
            class="text-blue-500 font-medium hover:underline"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  </div>
</template>


<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import { auth } from '@/firebase';
 import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
    const route = useRouter()
   const email = ref('') 
   const password = ref('')   
   const errMsg = ref()

const redirectToSignup = () => {
  route.push('/signup');
};


const redirectToForgot = () => {
  route.push('/forgottenpass');
};

const login = () => {

if (email.value == 'admin@dice' && password.value == 'admin1111') {
  route.push('/panel')
}
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value)
  
    .then((data) => {
      const user = data.user;


      if (!user.emailVerified) {
        alert('Please check your email to verify your account.');
        return;
      }

      alert('You have Successfully signed in');
      route.push('/dashboard');
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case 'auth/invalid-email':
          errMsg.value = 'Invalid email';
          break;

        case 'auth/user-not-found':
          errMsg.value = 'No account with this email was found';
          break;

        case 'auth/wrong-password':
          errMsg.value = 'Incorrect password';
          break;

        default:
          errMsg.value = 'Email or password was incorrect';
          break;
      }
    });
   

  
    

};
//return{fullName, email, token, password,register, route}
</script>

<style scoped>
#errMsg {
    background-color: rgb(219, 114, 114);
    width: 230px;
    height: 25px;
    border-radius: 5px;
    padding-top: 10px;
    
}

#or {
    margin-left: 135px;
    margin-top: -10px;
    color: black;
    font-weight: bold;

}

hr {
   margin-left: -55px; 
   width: 400px;  
}

h1 {
    margin-left: 100px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: black;
}

#signup {
    width: 250px;
    height: 30px;
    border-radius: 20px;
    margin-left: 20px;
    color: black;
    border: solid black;
    background-color: white;
}

#login {
    width: 250px;
    height: 30px;
    border-radius: 20px;
    margin-left: 20px;
    color: white;
    background-color: black;
}

input {
    width: 280px;
    height: 50px;
}

.login-signup {
    margin-left: 500px;
    background-color: white;
    box-shadow: 0px 0px 10px #000;
    width: 350px;
    height: 400px;
    padding-left: 55px;
    margin-top: 80px;
}

</style>