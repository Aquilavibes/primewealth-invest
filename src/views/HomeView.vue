<template>

  <div class='homy'>

 <p id='cases'>{{cases}} </p>

<h1 id='intro'>Nova Tech for Easy, P2p Buying <br>and Selling Of goods <br>and services.</h1>

<p id='tiny-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem quis ut<br>Lorem ipsum dolor, sit amet consectetur adipisicing<br>Lorem ipsum dolor, sit amet consectetur quo</p>
 <br>
 <button id='get-started'> Get Started > </button>

<img src='../assets/money.png' id='first-img'>

</div>
<br>
<h2 id='support-text'>We support different financial solutions.</h2>

<div class='support-flex'>
<img src='../assets/mastercard.png' id='cards-1'> <img src='../assets/maestro.png' id='cards-2'> <img src='../assets/visa.png' id='cards-3'>

</div>
<br><br>
<div class='client'>
<img src='../assets/executive.JPG' id='execute'>

<div class='writing'>
  <p id='red'>BUILDING CONNECTIONS</p>
  <h3 id='person'>Personalized Client Interactions</h3>
  <p id='person-text'> By embracing on individualized approach, businesses can <br>forge deeper Conections with their clients</p>
</div>
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

#person-text {
  font-size: 15px;
  margin-top: -20px;
}

#person {
  font-size: 30px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin-top: -15px;
}

.writing {
  margin-left: 700px;
  margin-top: -330px;
  
}

#red {
color: orange;

}


#execute {
  width: 450px;
  border-radius: 20px;
  margin-left: 130px;
  height: 300px;
}

.support-flex {
  display: flex;
  margin-left: 300px;
  gap: 10%;
}

#cards-1 {
  width: 200px;
  height: 150px;
  margin-top: -25px;
  
}
#cards-2 {
  width: 150px;
  height: 100px;
  
}
#cards-3 {
  width: 150px;
  height: 100px;
  
}

#support-text {
  text-align: center;
  font-size: 30px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#get-started {
  background-color: blue;
  color: white;
  width: 130px;
  height: 40px;
  margin-left: 130px;
  border-radius: 20px;
  margin-top: -10px;
  
  
}


#first-img {
  width: 500px;
  margin-left: 800px;
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

