<template>
    <body>
    	<header id="resto">
		<nav> 
			<img id="logo" src="../assets/logo.jpg"> 
			<ul class="menu"> 
                <li> <p v-on:click=link_home()> <span id="home"></span></p></li>
					<li> <p v-on:click=link_rooms()> <span id="rooms"></span></p></li>
					<li> <p v-on:click=link_booking()> <span id="booking"></span></p></li>
                    <li> <p><span id="restaurant"></span></p></li>
					<li> <p v-on:click=link_events()> <span id="events"></span></p></li>
					<li> <p v-on:click=link_about()> <span id="about"></span></p></li>
					<li> <p v-on:click=link_enquiry()> <span id="enquiries"></span></p></li>
					<li> <p v-on:click=link_feedbacks()> <span id="feedback"></span></p></li>
					<li> <p v-on:click=link_contact()> <span id="contact"></span></p></li>
			</ul>
				<br> <br>
			<ul> 
				<li class="roll"> <span id="language"></span> <img id="world" src="../assets/world.jpg">
					<ul class="options"> 
						<li id="af" v-on:click=afrikaans()> Afrikaans </li>
						<li id="eng" v-on:click=english()> English </li>
						<li id="fr" v-on:click=francais()> French </li>
						<li id="ge" v-on:click=deutsch()> Deutsch </li>
						<li id="es" v-on:click=espanol()> Español </li>
					</ul> 
				</li>
			</ul>
		</nav> 
		
			<p> <br> <br><br>
		
		<div class="contour"><b>	
			<a class="btn-primary" @click="scrollToAnchorPoint('1')">Speciality of the day<br><br></a>
			<ol><a class="btn-primary" @click="scrollToAnchorPoint('2')">Full menu :</a></ol>
				<li><a class="btn-primary" @click="scrollToAnchorPoint('2')">Plates </a></li>
				<li><a class="btn-primary" @click="scrollToAnchorPoint('3')">Desserts</a></li>
				<br>
			<a class="btn-primary" @click="scrollToAnchorPoint('4')">Informations<br></a></b>
		</div>
	
		
		<br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br><br> <br><br><br>  
	
		
		<div ref="1" class="container">  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
			<div class="sod">
				<img src="../assets/Specialityoftheday.jpg">
			</div>
			<div class="sotd">
				<pre><h2>     Speciality of the day :</h2><br><h3>          Menu quatre plats Le Saint-Martin</h3>
<h4>
		Le plat gastronomique du jour dans notre restaurant étoilé qui ne saura 
		vous décevoir. Faites confiance au chef et vos papilles se délecteront ! 

		Le Saint-Martin, jouit d’une réputation enviable auprès des gourmets. 
		Ce plat met l’accent sur les saveurs particulières des produits locaux
		de saison. Assis dans une ambiance chaleureuse et délicieusement chic, 
		les hôtes savourent leur déjeuner ou leur dîner en contemplant la vue      
		incroyable sur la Table Mountain, symbole de la merveilleuse 
		ville qu'est Cape Town.
		</h4></pre>
			</div>
		</div>
		<br> <br> <br> <br> <br> <br> <br>  
		<div ref="2" class="Plates">Full menu <br><br>Plates :</div><br> 
			
			<img src="../assets/food1.jpg" id="food1">
			<img src="../assets/food7.jpg" id="food7">
			<img src="../assets/food2.jpg" id="food2"><br>

			<img src="../assets/food13.jpg" id="food13">
			<img src="../assets/food3.jpg" id="food3">
			<img src="../assets/food6.jpg" id="food6"><br>

			
			<img src="../assets/food11.jpg" id="food11">
			<img src="../assets/food12.jpg" id="food12">
			<img src="../assets/food8.jpg" id="food8"><br><br><br><br>


			<div ref="3" class="Desserts">Desserts :</div>
			<img src="../assets/dessert3.jpg" id="dessert3">
			<img src="../assets/dessert2.jpg" id="dessert2">
			<img src="../assets/dessert4.jpg" id="dessert4"><br>

			
			<img src="../assets/dessert5.jpg" id="dessert5">
			<img src="../assets/dessert7.jpg" id="dessert7"><br>
			<br><br><br><br><br><br>
			 
			<div ref="4" class="Infos">Informations <br><br>
				If you want to contact the restaurant, here is the phone number : +27 6 67 74 36 85<br>
			Here is the email : emasrestaurant@gmail.com<br><br>
			We are open everyday at these hours : <li>Monday-Thursday : 12h-21h</li>
												  <li>Friday-Sunday : 12h-23h</li><br><br></div>
	</p>
	</header>
</body>
</template>


<style>
#resto{
	width: 100%;
	height: 100%;
	position: absolute;
	
	background-image: url("../assets/resto.jpg");
	background-size: cover;
	background-position: center;
}

.contour{
		opacity: 0.9;
        margin-left: 76.5%;
        text-align: center;
        background-color: white;
        border:1px solid #000000;
        width: 15.7%;
        text-align: left;
        font-size:x-large;
        font-family:'Gill Sans', cursive;
        color:rgb(188, 117, 36);
		padding: 0.25%;
    }

.container {
  display: flex;
  align-items: center;
  justify-content: center
}

.sod {
	flex-basis:40%;
}
img{
	width: 560px;
}
.sotd {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: large;
  color: rgb(122, 72, 11);
}

#food1,#food7,#food2,#food3,#food6,#food11,#food13,#food8,#food12{
	width:500px;
	height:300px;	
}
#dessert2,#dessert3,#dessert4,#dessert5,#dessert7{
	padding: 1%;
	width:400px;
	height:300px;
}
.Plates,.Desserts{
	font-size:x-large;
}

.Infos{
	font-size: large;
	font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
#phone,#mail{
	width: 70px;
}
</style>



<script>
  export default{
    name:'home',
    data(){return {nLangue:1, 
		listTradHome:["TUIS","HOME","ACCUEIL","HOME","HOME"],
		listTradRooms:["KAMERS","ROOMS","CHAMBRES","ZIMMERS","HABITACIÓN"],
		listTradBooking:["BESPREKING","BOOKING","RÉSERVER","BUCHUNG","RESERVAR"],
		listTradRestaurant:["RESTAURANT","RESTAURANT","RESTAURANT","RESTAURANT","RESTAURANTE"],
		listTradEvents:["GEBEURE","EVENTS","FESTIVITÉS","TERMINE","FIESTA"],
		listTradAbout:["OOR","ABOUT","À PROPOS","ÜBER","SOBRE"],
		listTradEnquiries:["NAVRAE","ENQUIRIES","RETOURS","ANFRAGEN","PREGUNTES"],
		listTradFeedbacks:["TERUGVOER","FEEDBACKS","AVIS","FEEDBACKS","CRITICA"],
		listTradContact:["KONTAK","CONTACT","CONTACT","KONTACT","CONTACTO"],
		listTradLanguage:["TAAL","LANGUAGE","LANGUE","SPRACHE","IDIOMA"]
	
		
	}},
    methods:{
      link_about: function(event){
        this.$router.push({path: '/about'})
      },
	  link_booking: function(event){
        this.$router.push({path: '/booking'})
      },
      link_home: function(event){
        this.$router.push({path: '/'})
      },
	  link_contact: function(event){
        this.$router.push({path: '/contact'})
      },
	  link_enquiry: function(event){
        this.$router.push({path: '/enquiry'})
      },
	  link_events: function(event){
        this.$router.push({path: '/events'})
      },
	  link_rooms: function(event){
        this.$router.push({path: '/rooms'})
      },
	  link_feedbacks: function(event){
        this.$router.push({path: '/feedbacks'})
      },
	  francais: function(event){
        	this.nLangue=2;
			console.log("fr");
			this.trad();
        },
        afrikaans: function(event){
			this.nLangue=0;
				console.log("af");
				this.trad();
			},
			english:function(event){
				this.nLangue=1;
				console.log("eng");
				this.trad();
			},
			deutsch:function(event){
				this.nLangue=3;
				console.log("ge");
				this.trad();
			},
			espanol:function(event){
				this.nLangue=4;
				console.log("es");
				this.trad();
			},			
			trad:function(event){
				document.getElementById("home").innerHTML = this.listTradHome[this.nLangue];
				document.getElementById("rooms").innerHTML = this.listTradRooms[this.nLangue];
				document.getElementById("booking").innerHTML = this.listTradBooking[this.nLangue];
				document.getElementById("restaurant").innerHTML = this.listTradRestaurant[this.nLangue];
				document.getElementById("events").innerHTML = this.listTradEvents[this.nLangue];
				document.getElementById("about").innerHTML = this.listTradAbout[this.nLangue];
				document.getElementById("enquiries").innerHTML = this.listTradEnquiries[this.nLangue];
				document.getElementById("feedback").innerHTML = this.listTradFeedbacks[this.nLangue];
				document.getElementById("contact").innerHTML = this.listTradContact[this.nLangue];
				document.getElementById("language").innerHTML = this.listTradLanguage[this.nLangue];


			},
			scrollToAnchorPoint(refName) {
            const el = this.$refs[refName]
            el.scrollIntoView({ behavior: 'smooth'})
        }
	}
}
</script>