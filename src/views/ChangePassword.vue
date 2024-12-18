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
    <div class='change-cont'>
<p id='change-txt'>Change Password</p>
<hr>
<form>
    <label for='input-old'>Old Password</label><br>
    <input type='password' id='input-old'><br>

    <label for='new-pass'> New password</label><br>
        <input type='password' id='new-pass'><br>

         <label for='confirm-pass'>Confirm new password</label><br>
        <input type='password' id='confirm-pass'><br><br>
        <button id='change-btn'>Change password</button>
    </form>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
import { ref } from 'vue'
export default {
    components: {Navbar, Sidebar},
    setup () {
         const isNavOpen = ref(false)
function openModal(){
  isNavOpen.value = !isNavOpen.value;
}
        return {isNavOpen, openModal}
    }
}
</script>

<style scoped>
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