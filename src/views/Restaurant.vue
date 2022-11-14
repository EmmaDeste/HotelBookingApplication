<template>
    <body>
    	<header>
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
				<br>
				<br>
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
	</header>
			<h1> ... </h1>
			<br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> 
			<br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> 
	<footer>
		<p> <b> Follow us on: </b> </p>
		<br>
		<table class="socialm"> 
			<tr> 
				<td> <img id="fb" src="../assets/facebook.png">  </td>
				<td id="fb"> EMAhotel </td>
			</tr>
			<tr>
				<td> <img id="insta" src="../assets/instagram.png">  </td>
				<td id="insta"> EMAhotel </td>
			</tr>
			<tr>
				<td> <img id="in" src="../assets/LinkedIn.png">  </td>
				<td id="in"> EMAhotel </td>
			</tr>
			<tr>
				<td> <img id="snap" src="../assets/snapchat.png">  </td>
				<td id="snap"> EMAhotel </td>
			</tr>
			<tr>
				<td> <img id="tw" src="../assets/twitter.png"> </td>
				<td id="tw"> EMAhotel </td>
			</tr>
			<tr>
				<td> <img id="yt" src="../assets/youtube.png"> </td>
				<td id="yt"> EMAhotel </td>
			</tr>
			<tr>
				<td> <img id="tk" src="../assets/TikTok.png"> </td>
				<td id="tk"> EMAhotel </td>
			</tr>
		</table>
	</footer>
</body>
</template>

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
		listTradLanguage:["TAAL","LANGUAGE","LANGUE","SPRACHE","IDIOMA"]}},
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
			}}}
</script>