<template>
  <header>
<h1 id='logo'> Nova Tech </h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/#">product</RouterLink>
        <RouterLink to="/#">pricing</RouterLink>
        <RouterLink to="/#">resources</RouterLink>
        
      </nav>
<RouterLink to="/#">Login</RouterLink>
      <button> Try MycaseFree </button>
  
</header>
  <RouterView />
</template>



<script>
import { RouterLink, RouterView } from 'vue-router'

</script>


<style scoped>

button {
  margin-top: 5px;
  height: 33px;
  width: 200px;
  background-color: blue;
  border-radius: 20px;
  color: white;
  
}


#logo {
  margin-top: -5px;
  margin-right: 50px;
  color: blue;
}

header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  justify-content: space-evenly; 
}

nav {
  font-size: 12px;
  display: flex;
  gap: 28px;
  margin-left: 200px;
  color: black;
}




nav a.router-link-exact-active {
   height: 25px;
}

nav a.router-link-exact-active:hover {
  background-color: rgba(0,0,0,0.5);
}


nav a {
  color: black;
  display: inline-block;
  font-size: 15px;
  text-decoration-line: none;
  margin-top: 300px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

header a {
  margin-top: 10px;
  text-decoration-line: none;
  color: black;
}

header a.router-link-exact-active:hover {
  background-color: rgba(0,0,0,0.5);
  height: 30px;
}

nav a:first-of-type {
  border: 0;
}




</style>
