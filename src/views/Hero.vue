<template>
 
 <Navbar>
  <header>
  <p> Investment Club</p>
    <ion-icon class='menu' name="menu-outline" @click='openModal'></ion-icon>
    
    </header>
</Navbar><br>
  <section class="bg-black text-white py-12">
  
    <div class="container mx-auto text-center">
      <h1 class="text-4xl lg:text-6xl font-bold mb-6">Empower Your Investments with AI Crypto Trading</h1>
      <p class="text-lg lg:text-xl mb-8">
        Harness the power of artificial intelligence in your crypto trading. Optimize your portfolio with precision and confidence.
      </p>
      <div class="flex justify-center space-x-4">
        <button class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md">
          Start Trading
        </button>
        <button class="bg-transparent border border-blue-500 text-blue-500 px-6 py-3 rounded-md hover:bg-blue-500 hover:text-white">
          Get Started
        </button>
      </div>
      <img
        src="https://via.placeholder.com/600x300"
        alt="Chart example"
        class="mt-12 mx-auto rounded-lg shadow-lg"
      />
<div>
       <section class="bg-black text-white py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-center mb-8" data-aos="fade-up">
          Welcome to Our Platform
        </h1>
        <p class="text-lg text-center mb-12" data-aos="fade-up" data-aos-delay="200">
          Unlock the potential of trading with advanced AI tools, guides, and more.
        </p>

        <!-- Features -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div class="flex items-center space-x-4" data-aos="fade-right">
            <div class="bg-blue-600 text-white p-4 rounded-full">
              <i class="fas fa-robot"></i>
            </div>
            <div>
              <h3 class="font-semibold">AI Trading Bots</h3>
            </div>
          </div>
          <div class="flex items-center space-x-4" data-aos="fade-left" data-aos-delay="100">
            <div class="bg-blue-600 text-white p-4 rounded-full">
              <i class="fas fa-chart-line"></i>
            </div>
            <div>
              <h3 class="font-semibold">Trading Guides</h3>
            </div>
          </div>
          <div class="flex items-center space-x-4" data-aos="fade-right" data-aos-delay="200">
            <div class="bg-blue-600 text-white p-4 rounded-full">
              <i class="fas fa-bolt"></i>
            </div>
            <div>
              <h3 class="font-semibold">Fast Execution</h3>
            </div>
          </div>
          <div class="flex items-center space-x-4" data-aos="fade-left" data-aos-delay="300">
            <div class="bg-blue-600 text-white p-4 rounded-full">
              <i class="fas fa-percent"></i>
            </div>
            <div>
              <h3 class="font-semibold">0% Commission</h3>
            </div>
          </div>
        </div>

        <!-- Additional Information -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div class="bg-gray-900 p-6 rounded-lg shadow-lg" data-aos="zoom-in">
            <h3 class="text-xl font-bold mb-4">User-Friendly Interface</h3>
            <p>
              Our intuitive platform is designed with simplicity and usability in mind,
              ensuring a seamless experience for both novice and experienced investors alike.
            </p>
          </div>
          <div class="bg-gray-900 p-6 rounded-lg shadow-lg" data-aos="zoom-in" data-aos-delay="100">
            <h3 class="text-xl font-bold mb-4">480,000+ Clients</h3>
            <p>
              Our team of experienced analysts and researchers continuously monitor the
              crypto market, providing you with timely insights and expert advice to make
              informed investment decisions.
            </p>
          </div>
        </div>

        <!-- Lite Robot Package -->
        <div class="bg-gray-900 p-6 rounded-lg shadow-lg max-w-md mx-auto mb-12" data-aos="flip-up">
          <h2 class="text-xl font-bold text-center mb-4">Lite Robot</h2>
          <ul class="space-y-4">
            <li class="flex justify-between bg-gray-800 p-4 rounded-md" data-aos="fade-up">
              <span class="text-gray-400">ROI</span>
              <span class="font-semibold">3%</span>
            </li>
            <li class="flex justify-between bg-gray-800 p-4 rounded-md" data-aos="fade-up" data-aos-delay="100">
              <span class="text-gray-400">Duration</span>
              <span class="font-semibold">14 Days</span>
            </li>
            <li class="flex justify-between bg-gray-800 p-4 rounded-md" data-aos="fade-up" data-aos-delay="200">
              <span class="text-gray-400">Affiliate Bonus</span>
              <span class="font-semibold">5.00%</span>
            </li>
            <li class="flex justify-between bg-gray-800 p-4 rounded-md" data-aos="fade-up" data-aos-delay="300">
              <span class="text-gray-400">Risk Ratio</span>
              <span class="font-semibold">24%</span>
            </li>
            <li class="flex justify-between bg-gray-800 p-4 rounded-md" data-aos="fade-up" data-aos-delay="400">
              <span class="text-gray-400">Minimum Deposit</span>
              <span class="font-semibold">USDT 200</span>
            </li>
            <li class="flex justify-between bg-gray-800 p-4 rounded-md" data-aos="fade-up" data-aos-delay="500">
              <span class="text-gray-400">Maximum Deposit</span>
              <span class="font-semibold">USDT 1,999</span>
            </li>
          </ul>
          <!-- Get Started Button -->
          <div class="mt-6 text-center" data-aos="fade-up" data-aos-delay="600">
            <button class="text-blue-500 hover:text-blue-600 font-semibold flex items-center justify-center space-x-1">
              <span>Get Started</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- About Us Section -->
        <div class="bg-gray-800 py-12" data-aos="fade-up">
          <div class="container mx-auto text-center">
            <h2 class="text-2xl font-bold mb-4">About Us</h2>
            <p class="text-lg leading-relaxed max-w-2xl mx-auto">
              We are a team of passionate innovators and trading enthusiasts committed to empowering our users with the tools, knowledge, and confidence to navigate the financial markets. Our mission is to make trading accessible and profitable for everyone by combining cutting-edge AI technology with user-friendly solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
    </div>
  </section>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import { ref } from 'vue';
</script>

<style scoped>
header {
display: flex;
margin-top: 20px;
gap: 80%;

}
</style>
