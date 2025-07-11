<template>
    <div class="overlay">
      <div class="modal">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          alt="Google Logo"
          class="logo"
        />
        <h2>This site has been temporarily blocked</h2>
        <p>
          Google has detected unusual traffic or suspicious activity from this site. As a
          precautionary measure, access has been temporarily restricted.
        </p>
        <p class="note">
          If you believe this was a mistake, please try again later.
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  
  onMounted(() => {
    document.body.style.overflow = 'hidden'
  })
  </script>
  
  <style scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
  
  .modal {
    width: 90%;
    max-width: 400px;
    background-color: #fff;
    border: 1px solid #e57373;
    border-radius: 8px;
    padding: 24px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    font-family: Arial, sans-serif;
  }
  
  .logo {
    width: 92px;
    height: auto;
    margin-bottom: 16px;
  }
  
  h2 {
    font-size: 20px;
    color: #d32f2f;
    margin-bottom: 12px;
  }
  
  p {
    font-size: 14px;
    color: #333;
    margin-bottom: 8px;
  }
  
  .note {
    font-size: 12px;
    color: #666;
    margin-top: 16px;
  }
  </style>
  