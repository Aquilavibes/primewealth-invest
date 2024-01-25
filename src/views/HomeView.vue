<template>

  <div class='homy'>

 <p id='cases'>{{cases}} </p>

<h1 id='intro'>Nova Tech for Easy, P2p Buying <br>and Selling Of goods <br>and services.</h1>

<p id='tiny-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem quis ut<br>Lorem ipsum dolor, sit amet consectetur adipisicing<br>Lorem ipsum dolor, sit amet consectetur quo</p>
 <br>
<input type='email' id='newletter' placeholder="Email address"> <button id='send' type='submit'> > </button>

<img src='../assets/man.png' id='first-img'>

</div>




</template>


<script>

export default {
data(){
  return {
    cases: 'CASES FOR PEAK EFFICIENCY.',
     
  }
}
}
</script>

<style scoped>

#newletter {
  margin-left: 130px;
   height: 30px;
   border-radius: 20px;
   width: 230px;
}


  

#send {
  background-color: blue;
  color: white;
  margin-left: -35px;
  border-radius: 80px;
  font-size: 20px;
  
}


#first-img {
  width: 600px;
  margin-left: 700px;
  margin-top: -500px;
}

#tiny-text {
font-size: 15px;
margin-left: 130px;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#intro {
  margin-left: 130px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 50px;
}

#cases {
  color: orange;
  margin-top: 80px;
  margin-left: 130px;
}
</style>

