<template>
  
<body>
	<video autoplay muted loop plays-inline id="myVideo">
		<source src="../assets/hotel.mp4" type="video/mp4">
        <source src="../assets/hotel.mp4" type="video/webm">
		Your browser does not support the video tag.
    </video>

	<header>
		<nav> 
			<img id="logo" src="../assets/logo.jpg"> 
			<ul class="menu"> 
					<li> <p><span id="home"></span></p></li>
					<li> <p v-on:click=link_rooms()> <span id="rooms"></span></p></li>
					<li> <p v-on:click=link_booking()> <span id="booking"></span></p></li>
					<li> <p v-on:click=link_restaurant()> <span id="restaurant"></span></p></li>
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
	  link_contact: function(event){
        this.$router.push({path: '/contact'})
      },
	  link_enquiry: function(event){
        this.$router.push({path: '/enquiry'})
      },
	  link_events: function(event){
        this.$router.push({path: '/events'})
      },
	  link_restaurant: function(event){
        this.$router.push({path: '/restaurant'})
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


<style>
* {
	margin: 0;
	padding: 0;
	font-family: sans-serif;
}


/*body{
	EMMA
	width: 100%;
	height: 100vh;
	background-image: linear-gradient(to right top, transparent, mistyrose),
    url("../assests/background.jpg");
	background-size: cover;
	background-position: center; 
	
	background-color: #F2D0CF; 
}*/


#logo {
	width: 120px;
	cursor: pointer;
	object-position: 0px 0px;
}

/*NAVIGATION BAR*/

nav {
	width: 95%;
	margin: auto;
	padding: 35px 0;
	display: flex;
	position: sticky;
	align-items: center;
	justify-content: space-between;
	
	top: 0px;
}

.menu li {
	list-style: none;
	display: inline-block;
	margin: 0 20px;
	position: relative;
	
	text-decoration: none;
	color: #fff;
	
}

.menu li p {
	text-decoration: none;
	color: white;
	
	display: block;
	border-bottom: 2px solid transparent;
	padding: 10px 0px;
}

.menu li:after, .menu li:before {
	content: '';
	height: 3px;
	width: 100%;
	background: orange;
	position: absolute;
	display: block;
	left: 0;
	bottom: -5px;
	transition: all 0.3s ease;
	margin-top: 2px;
	transition: all 300ms ease-in;
}

.menu li:after{
	bottom: 35px;
	left: 0;
}

.menu li::after{
	content: "";
	display: table;
	clear: both;
}

.menu li:before{
	top: 25px;
	right: 0;
}

.menu li:hover::after, .menu li:hover::before {
	width: 100%;
	
	/* add */
	height: 2px;
	bottom: 5px;
	background-color: yellow;
}

nav ul{
	list-style-type: none;
}

nav ul::after{
	content: "";
	display: table;
	clear: both;
}

nav p{
	display: block;
	text-decoration: none;
	color: black;
	border-bottom: 2px solid transparent;
	padding: 10px 0px;
}

/*LANGUAGE BAR*/

.options{
	display: none;
	box-shadow: 0px 1px 2px #CCC;
	background-color: #F7CACA;
	position: absolute;
	width: 100px;
	z-index: 1000;
}

.options{
	text-decoration: none;
}

nav > ul li:hover .options{
	display: block;
}

.options{
	padding: 10px;
	border-bottom: none;
}

#eng:hover, #fr:hover, #ge:hover, #af:hover, #es:hover{
	border-bottom: none;
	color: pink;
	background-color: yellow;
}

.roll {
	list-style: none;
	display: inline-block;
	margin: 0 20px;
	position: relative;
	
	text-decoration: none;
	color: #fff;
	
	/* add */
	float: left;
	width: 25%;
	text-align: center;
	position: relative;
	cursor: pointer;
	
}

.roll:after, .roll:before {
	content: '';
	height: 3px;
	width: 100%;
	background: orange;
	position: absolute;
	display: block;
	left: 0;
	bottom: -5px;
	margin-top: 2px;
}

.roll:after{
	bottom: 45px;
	left: 0;
}

.roll::after{
	content: "";
	display: table;
	clear: both;
}

.roll:before{
	top: 15px;
	right: 0;
}

.roll:hover::after, .roll:hover::before {
	width: 100%;
	
	/* add */
	height: 2px;
	bottom: 1px;
	background-color: yellow;
}

#world{
	width: 22px;
}

/*BACKGROUND VIDEO*/
video {
	position: absolute;
	right: 0;
	bottom: 0;
	z-index: -1;
	
	height: 100%;
	width: 100%;
}


/* FOOTER */

footer{
	background-color: black;
	color: white;
	text-align: center;
}

.socialm{
	margin-left: auto;
	margin-right: auto;
}

#fb, #insta, #in, #snap, #tw, #tk, #yt {
	width: 22px;
}

#fb, #tk {
	color: #1BFAFA;
}

#in, #tw {
	color: #63E5FF;
}

#insta {
	color: #C585F7;
}

#snap {
	color: yellow;
}

#yt {
	color: #FF3632;
}

#fb:hover, #insta:hover, #in:hover, #snap:hover, #tw:hover, #tk:hover, #yt:hover {
	color: white;
}
</style>