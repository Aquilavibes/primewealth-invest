<template>
 
 <Navbar>
    <header>
    <!-- Logo Section -->
    <p>WealthFusion</p>

    <!-- Hamburger Icon -->
    <span class="menu-icon" @click='openSide'>&#9776;</span> <!-- Unicode for Hamburger -->
  </header>

</Navbar><br>

 <div
    v-if="isToastVisible"
    class="fixed bottom-5 right-5 bg-gray-800 text-white px-4 py-3 rounded-lg shadow-lg flex items-center justify-between"
  >
    <div class="flex items-center">
      <div class="toast-content text-sm font-medium">
        {{ toastMessage }}
      </div>
    </div>
    <div class="ml-3">
      <svg
        class="w-5 h-5 fill-current text-white"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path
          d="M15.795 8.342l-5.909 9.545a1 1 0 0 1-1.628 0l-3.182-4.909a1 1 0 0 1 1.629-1.165l2.556 3.953L14.165 7.51a1 1 0 0 1 1.63 1.165z"
        ></path>
      </svg>
    </div>
  </div>

<div class='sidebar' v-if='isSideOpen'>
  
  
  <a href='#home' id='sidee' @click='openSide'>Home</a><br>
  <a href='#about' id='sidee' @click='openSide'>About Us</a><br>
  <a href='#contact' id='sidee' @click='openSide'>Contact</a><br>
  <RouterLink to='/login' id='sidee' @click='openSide'>Signin</RouterLink><br>
<RouterLink to='/signup' id='sidee' @click='openSide'>SignUp</RouterLink>
 
      
  </div>
  
  <section class="bg-black text-white py-12">
  
    <div class="container mx-auto text-center">
      <h1 class="text-4xl lg:text-6xl font-bold mb-6" data-aos="fade-right">Empower Your Investments with AI Crypto Trading</h1>
      <p class="text-lg lg:text-xl mb-8">
        Harness the power of artificial intelligence in your crypto trading. Optimize your portfolio with precision and confidence.
      </p>
      <div class="flex justify-center space-x-4">
        <button class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md">

         <a href='#'>Join Channel </a> </button>
        <button class="bg-transparent border border-blue-500 text-blue-500 px-6 py-3 rounded-md hover:bg-blue-500 hover:text-white"  @click='getStart'>
          Get Started
        </button>
       
      </div>
      <img
        src="../assets/trading.png"
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
              <h3 class="font-semibold">Enhanced Tools</h3>
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

        <h1 class='text-center text-2xl font-bold mb-4'>Investment Packages</h1>
        <div class="bg-gray-900 p-6 rounded-lg shadow-lg max-w-md mx-auto mb-12" data-aos="flip-up">
          <h2 class="text-xl font-bold text-center mb-4">Starter Package</h2>
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
              <span class="font-semibold">USD 5,000</span>
            </li>
            <li class="flex justify-between bg-gray-800 p-4 rounded-md" data-aos="fade-up" data-aos-delay="500">
              <span class="text-gray-400">Maximum Deposit</span>
              <span class="font-semibold">USD 10,999</span>
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
         
          <div class="bg-gray-900 p-6 rounded-lg shadow-lg max-w-md mx-auto mb-12" data-aos="flip-up">
           <h2 class="text-xl font-bold text-center mb-4">Lite Package</h2>
          <ul class="space-y-4">
            <li class="flex justify-between bg-gray-800 p-4 rounded-md" data-aos="fade-up">
              <span class="text-gray-400">ROI</span>
              <span class="font-semibold">5%</span>
            </li>
            <li class="flex justify-between bg-gray-800 p-4 rounded-md" data-aos="fade-up" data-aos-delay="100">
              <span class="text-gray-400">Duration</span>
              <span class="font-semibold">30 Days</span>
            </li>
            <li class="flex justify-between bg-gray-800 p-4 rounded-md" data-aos="fade-up" data-aos-delay="200">
              <span class="text-gray-400">Affiliate Bonus</span>
              <span class="font-semibold">10.00%</span>
            </li>
            <li class="flex justify-between bg-gray-800 p-4 rounded-md" data-aos="fade-up" data-aos-delay="300">
              <span class="text-gray-400">Risk Ratio</span>
              <span class="font-semibold">30%</span>
            </li>
            <li class="flex justify-between bg-gray-800 p-4 rounded-md" data-aos="fade-up" data-aos-delay="400">
              <span class="text-gray-400">Minimum Deposit</span>
              <span class="font-semibold">USD 10,000</span>
            </li>
            <li class="flex justify-between bg-gray-800 p-4 rounded-md" data-aos="fade-up" data-aos-delay="500">
              <span class="text-gray-400">Maximum Deposit</span>
              <span class="font-semibold">USD 20,000</span>
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

          <div class="bg-gray-900 p-6 rounded-lg shadow-lg max-w-md mx-auto mb-12" data-aos="flip-up">
           <h2 class="text-xl font-bold text-center mb-4">Premium Package</h2>
          <ul class="space-y-4">
            <li class="flex justify-between bg-gray-800 p-4 rounded-md" data-aos="fade-up">
              <span class="text-gray-400">ROI</span>
              <span class="font-semibold">10%</span>
            </li>
            <li class="flex justify-between bg-gray-800 p-4 rounded-md" data-aos="fade-up" data-aos-delay="100">
              <span class="text-gray-400">Duration</span>
              <span class="font-semibold">50 Days</span>
            </li>
            <li class="flex justify-between bg-gray-800 p-4 rounded-md" data-aos="fade-up" data-aos-delay="200">
              <span class="text-gray-400">Affiliate Bonus</span>
              <span class="font-semibold">20.00%</span>
            </li>
            <li class="flex justify-between bg-gray-800 p-4 rounded-md" data-aos="fade-up" data-aos-delay="300">
              <span class="text-gray-400">Risk Ratio</span>
              <span class="font-semibold">50%</span>
            </li>
            <li class="flex justify-between bg-gray-800 p-4 rounded-md" data-aos="fade-up" data-aos-delay="400">
              <span class="text-gray-400">Minimum Deposit</span>
              <span class="font-semibold">USD 15,000</span>
            </li>
            <li class="flex justify-between bg-gray-800 p-4 rounded-md" data-aos="fade-up" data-aos-delay="500">
              <span class="text-gray-400">Maximum Deposit</span>
              <span class="font-semibold">USD 50,000</span>
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
        <div class="bg-gray-800 py-12" data-aos="fade-up" id='about'>
          <div class="container mx-auto text-center">
            <h2 class="text-2xl font-bold mb-4">About Us</h2>
            <p class="text-lg leading-relaxed max-w-2xl mx-auto">
              We are a team of passionate innovators and trading enthusiasts committed to empowering our users with the tools, knowledge, and confidence to navigate the financial markets. Our mission is to make trading accessible and profitable for everyone by combining cutting-edge AI technology with user-friendly solutions.
            </p>

          </div>
        
          
        </div>
        <br><br>
<h1 class='text-center text-2xl font-bold mb-4'>Testimonials</h1>
 <div class="bg-black text-white py-10 px-4">
    <div class="max-w-3xl mx-auto text-center">
      <div class="relative overflow-hidden">
        <div 
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div v-for="(testimonial, index) in testimonials" :key="index" class="w-full flex-shrink-0">
            <div class="flex flex-col items-center">
              <span class="text-6xl text-gray-400">&#8220;</span>
              <p class="text-lg italic max-w-xl">{{ testimonial.text }}</p>
              <div class="mt-4">
                <img :src="testimonial.image" class="w-16 h-16 rounded-full border-2 border-gray-400" />
                <p class="mt-2 font-semibold">{{ testimonial.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-6 space-x-2">
        <button 
          v-for="(testimonial, index) in testimonials" :key="index"
          class="w-3 h-3 rounded-full" 
          :class="currentIndex === index ? 'bg-white' : 'bg-gray-500'"
          @click="currentIndex = index"
        ></button>
      </div>
    </div>
  </div>
<br><br>
 <div class="bg-black text-white py-10 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-6">Top Investors</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div v-for="(investor, index) in investors" :key="index" class="p-6 bg-gray-800 rounded-xl shadow-lg text-center">
          <img :src="investor.image" class="w-24 h-24 mx-auto rounded-full border-4 border-gray-500 mb-4" />
          <h3 class="text-xl font-semibold">{{ investor.name }}</h3>
          <p class="text-gray-400 text-sm mt-2">{{ investor.about }}</p>
        </div>
      </div>
      <div class="mt-8 text-2xl font-bold text-yellow-400">The Bright Minds Behind Success</div>
    </div>
  </div>
         <br><br> 
         <h1 class='text-center text-2xl font-bold mb-4'>Why Choose Us</h1>
         <img src='/executive.jpg' 
          class="mt-12 mx-auto rounded-lg shadow-lg lg:w-90 lg:h-100 sm:w-90 sm:h-100" />
      <p class="text-lg text-center mb-12" data-aos="fade-up" data-aos-delay="200">
         We Got you covered with well equiped assistance, tools and support such as:
        </p>

        <!-- Features -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div class="flex items-center space-x-4" data-aos="fade-right">
            <div class="bg-blue-600 text-white p-4 rounded-full">
              <i class="fas fa-robot"></i>
            </div>
            <div>
              <h3 class="font-semibold">Trading Tools</h3>
            </div>
          </div>
          <div class="flex items-center space-x-4" data-aos="fade-left" data-aos-delay="100">
            <div class="bg-blue-600 text-white p-4 rounded-full">
              <i class="fas fa-chart-line"></i>
            </div>
            <div>
              <h3 class="font-semibold">Customer Support</h3>
            </div>
          </div>
          <div class="flex items-center space-x-4" data-aos="fade-right" data-aos-delay="200">
            <div class="bg-blue-600 text-white p-4 rounded-full">
              <i class="fas fa-bolt"></i>
            </div>
            <div>
              <h3 class="font-semibold">Investment bonuses</h3>
            </div>
          </div>
          <div class="flex items-center space-x-4" data-aos="fade-left" data-aos-delay="300">
            <div class="bg-blue-600 text-white p-4 rounded-full">
              <i class="fas fa-percent"></i>
            </div>
            <div>
              <h3 class="font-semibold">Secured and encrypted transactions</h3>
            </div>
          </div>
        </div>
               </div>
      
 
    </section>
    
  </div>
  
    </div>
    
   <Footer foot='&copy; Copyright <b>PrimeWealth </b> all well reserved' />
  </section>

  
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import Footer from '../components/Footer.vue' 

const isSideOpen = ref(false)
// Toast visibility and message state
const isToastVisible = ref(false);
const toastMessage = ref("");
const currentIndex = ref(0); 
    const investors = ref([
      {
        name: 'John Werner',
        about: 'Top 1 Investor',
        image: 'https://randomuser.me/api/portraits/men/10.jpg'
      },
      {
        name: 'Warren Buffett',
        about: 'Top 2 Investor',
        image: 'https://randomuser.me/api/portraits/men/11.jpg'
      },
      {
        name: 'Robin Greg',
        about: 'Top 3 Investor',
        image: 'https://randomuser.me/api/portraits/men/12.jpg'
      }
    ]);


    const testimonials = ref([
      {
        text: 'Three Years with PrimeWealth and my Investments keep growing.trust them completely!',
        name: 'Thomas James',
        image: 'https://randomuser.me/api/portraits/men/1.jpg'
      },
      {
        text: 'PrimeWealth made Investing simple and stress-free.',
        name: 'Jane Smith',
        image: 'https://randomuser.me/api/portraits/women/2.jpg'
      },
      {
        text: 'I invested with PrimeWealth and saw my money grow faster than i expected.',
        name: 'Alice Brown',
        image: 'https://randomuser.me/api/portraits/women/3.jpg'
      }
    ]);

    onMounted(() => {
      setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % testimonials.value.length;
      }, 5000);
    });

const route = useRouter();

const getStart = () => {
  route.push('/signup')
}



// Random name and amount generator
const randomNames = ["John", "Sarah", "Michael", "Emily", "Jessica", "Daniel", "Jacob"];
const getRandomName = () => randomNames[Math.floor(Math.random() * randomNames.length)];
const getRandomAmount = () => (Math.random() * 1000).toFixed(2); // Generate random amount up to $1000

// Function to generate a random toast message
const generateToastMessage = () => {
  const randomName = getRandomName();
  const randomAmount = getRandomAmount();
  toastMessage.value = `${randomName} cashed out $${randomAmount} just now!`;
  isToastVisible.value = true;

  // Hide the toast after 3 seconds
  setTimeout(() => {
    isToastVisible.value = false;
  }, 3000);
};

// Start interval on component mount
let interval;
onMounted(() => {
  generateToastMessage(); // Show an initial toast message
  interval = setInterval(generateToastMessage, 10000); // Show every 10 seconds
});

// Clear interval on component unmount
onBeforeUnmount(() => {
  clearInterval(interval);
});
const openSide = () => {
  isSideOpen.value = !isSideOpen.value
}
</script>

<style scoped>
#sidee {
  color: white;
  text-align: center;
  font-size: 20px;
  margin-top: 20px;
  margin-left: 30px;
}
.sidebar {
  background-color: black;
  border-radius: 10px;
  box-shadow: #eee 0px 0px 10px;
  margin-left: 210px;
  margin-top: -10px;
  width:  150px;
  height: 250px;
  position: fixed;
  display: block;
  gap: 30%;
  padding-top: 30px;
  z-index: 1000;
}
 * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
    }

    /* Header Styles */
    header {
      background-color: black;
      color: #3b82f6; /* Blue color */
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 1.5rem;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }

    header p {
      font-size: 1.5rem;
      cursor: pointer;
    }

    /* Hamburger Icon Styles */
    .menu-icon {
      font-size: 2rem;
      cursor: pointer;
      color: #3b82f6; /* Blue color */
    }

    /* Responsive Behavior (Optional for Toggling) */
    @media (max-width: 768px) {
      header {
        padding: 0.8rem 1.2rem;
      }

      header p {
        font-size: 1.3rem;
      }

      .menu-icon {
        font-size: 1.8rem;
        margin-left: -100px
      }
    }
</style>
