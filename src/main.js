//main.js

import { createApp } from 'vue';
import './assets/main.css';
import App from './App.vue';
import router from './router';
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


// Create Vue app instance
const app = createApp(App);
AOS.init();
app.use(router);

app.mount('#app');

// Export Firebase services for use in other part
