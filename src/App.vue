<template>
  <div id="google_translate_element"></div>

  <RouterView />
</template>



<script>
import { RouterLink, RouterView } from 'vue-router';

export default {
  
  }

</script>


<style>


/*mobile view 1 */
@media only screen and (max-width: 600px) {
 
#logo {
  margin-left: -20px;
}

#contact {
margin-left: -20px;
}

nav {
  margin-left: 10px;
}
  #intro {
    font-size: 30px;
    
  }
  #first-img {
    margin-left: 550px;
    width: 300px;
   }

   header {
    margin-left: 30px;
   }

   #tiny-text {
     font-size: 13px;
   }

   
}





</style>
