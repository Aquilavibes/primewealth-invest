<template>
  <Navbar>
    <header class="bg-black text-blue-500 flex items-center justify-between px-4 py-3 shadow-lg">
      <ion-icon class="menu text-2xl cursor-pointer" name="menu-outline" @click="openModal"></ion-icon>
      <ion-icon class="profile text-3xl cursor-pointer" name="person-circle-outline"></ion-icon>
    </header>
  </Navbar>
  <Sidebar v-if="isNavOpen" />

  <div class="min-h-screen flex items-center justify-center bg-black">
    <div class="bg-black border border-blue-700 shadow-lg rounded-lg p-8 w-full max-w-md">
      <h2 class="text-2xl font-bold text-center text-blue-500 mb-6">Reset Password</h2>

      <form @submit.prevent="handleChangePassword">
        <!-- Old Password -->
        <div class="mb-4">
          <label for="old-password" class="block text-sm font-medium text-blue-300">Old Password</label>
          <input
            type="password"
            id="old-password"
            v-model="oldPassword"
            placeholder="Enter your old password"
            class="mt-1 block w-full rounded-md border-blue-700 bg-black text-blue-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <!-- Confirm Old Password -->
        <div class="mb-4">
          <label for="confirm-old-password" class="block text-sm font-medium text-blue-300">Confirm Old Password</label>
          <input
            type="password"
            id="confirm-old-password"
            v-model="confirmOldPassword"
            placeholder="Re-enter your old password"
            class="mt-1 block w-full rounded-md border-blue-700 bg-black text-blue-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <!-- New Password -->
        <div class="mb-6">
          <label for="new-password" class="block text-sm font-medium text-blue-300">New Password</label>
          <input
            type="password"
            id="new-password"
            v-model="newPassword"
            placeholder="Enter your new password"
            class="mt-1 block w-full rounded-md border-blue-700 bg-black text-blue-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg"
        >
          Change Password
        </button>
      </form>
    </div>
  </div>
</template>


<script>
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
import { ref } from 'vue'
import { getAuth, reauthenticateWithCredential, updatePassword, EmailAuthProvider } from "firebase/auth";

export default {
    components: {Navbar, Sidebar},
    setup () {
    const oldPassword = ref("");
    const confirmOldPassword = ref("");
    const newPassword = ref("");

         const isNavOpen = ref(false)
function openModal(){
  isNavOpen.value = !isNavOpen.value;
}

 const handleChangePassword = async () => {
      if (oldPassword.value !== confirmOldPassword.value) {
        alert("Old password and confirmation do not match.");
        return;
      }
      if (newPassword.value.length < 6) {
        alert("New password must be at least 6 characters long.");
        return;
      }

      try {
        const auth = getAuth();
        const user = auth.currentUser;
        if (!user) {
          alert("No user is currently logged in.");
          return;
        }

        // Reauthenticate the user with the old password
        const credential = EmailAuthProvider.credential(user.email, oldPassword.value);
        await reauthenticateWithCredential(user, credential);

        // Update the password
        await updatePassword(user, newPassword.value);
        alert("Password successfully updated!");
      } catch (error) {
        console.error("Error updating password:", error);
        alert("Failed to update password. Please check your old password and try again.");
      }
    };
        return {isNavOpen, openModal, oldPassword,
      confirmOldPassword,
      newPassword,
      handleChangePassword,}
    }
}
</script>

<style scoped>
header {
display: flex;
margin-top: 20px;
gap: 80%;
}
input {
width: 900px;
height: 55px;
font-size: 18px;
}

label {
    font-size: 16px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
form {
    margin-left: 50px;
}

#change-btn {
    width: 900px;
    margin-left: 3px;
    height: 40px;
    font-size: 16px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: blue;
    color: white;
    border-radius: 20px;
}


#change-txt {
    font-size: 17px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-top: -20px;
    margin-left: 50px;
}

.change-cont {
    margin-top: 70px;
    margin-left: 200px;
    width: 1000px;
    height: 370px;
    border-radius: 5px;
    box-shadow: #050505 0px 0px 3px;
    padding-top: 50px;
    
}

</style>