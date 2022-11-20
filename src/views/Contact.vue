<template>
    <body id="Contact">
    	<header>
			<!-- add a navigation bar, as the header of each page -->
			<nav>
				<!-- logo of the hotel -->
				<img id="logo" src="../assets/logo.jpg"> 

				<!--  Menu of the navigation bar, constituted of the links to the other pages-->
				<ul class="menu"> 
					<li> <p v-on:click=link_home()> <span id="home"></span></p></li>
					<li> <p v-on:click=link_rooms()> <span id="rooms"></span></p></li>
					<li> <p v-on:click=link_booking()> <span id="booking"></span></p></li>
					<li> <p v-on:click=link_restaurant()> <span id="restaurant"></span></p></li>
					<li> <p v-on:click=link_about()> <span id="about"></span></p></li>
					<li> <p v-on:click=link_enquiry()> <span id="enquiries"></span></p></li>
					<li> <p v-on:click=link_feedbacks()> <span id="feedback"></span></p></li>
					<li> <p><span id="contact"></span></p></li>
				</ul>
				<br><br>
				<ul>
					<!-- Scolling bar to select the language -->
					<li class="roll"> <span id="language"></span> <img id="world" src="../assets/world.jpg">
						<!-- Options of language to read -->
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

		<!-- Here are the informations for the clients to contact the hotel-->
		<h1> <span id="ContactPageL1"></span></h1>
		
		<br><br> 

		<div class="contact">
			<p> <span id="ContactPageL2"></span> </p>
			<br>
			<p> <b1> +27 21 441 0000 </b1> </p>

			<br>

			<p> <span id="ContactPageL3"></span>  </p>
			<br>
			<p> <b1> EMA23@gmail.com </b1> </p>
				
			<br> <br> <br><br>
			
			<p> <span id="ContactPageL4"></span>  </p>
		</div>
		
		<br>
		
		<!-- The localisation of the hotel taken on Google Maps -->
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7104472.142610871!2d21.413728249999995!3d-29.60425199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef6bc8d7b4b35b7%3A0x45758d3beb386408!2sEMA!5e0!3m2!1sen!2sza!4v1668861588930!5m2!1sen!2sza" 
		width="700" height="350" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
		
		<br> <br> 
		
		<footer>
			<!-- indicate our social medias, as the footer of each page -->
			<p> <b> <span id="follow"></span> </b> </p>
			<br>

			<!-- table listing the different social medias, taking the logos from the assets folder -->
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
	//set the identifier name of this page, used in the router file
    name:'home',

	//Here are the arrays that contain the traductions in each language
    data(){return {nLangue:1,  //set the default language to english, which identifier is 1
		listTradHome:["TUIS","HOME","ACCUEIL","HOME","HOME"],
		listTradRooms:["KAMERS","ROOMS","CHAMBRES","ZIMMERS","HABITACIÓN"],
		listTradBooking:["BESPREKING","BOOKING","RÉSERVER","BUCHUNG","RESERVAR"],
		listTradRestaurant:["RESTAURANT","RESTAURANT","RESTAURANT","RESTAURANT","RESTAURANTE"],
		listTradAbout:["OOR","ABOUT","À PROPOS","ÜBER","SOBRE"],
		listTradEnquiries:["NAVRAE","ENQUIRIES","RETOURS","ANFRAGEN","PREGUNTES"],
		listTradFeedbacks:["TERUGVOER","FEEDBACKS","AVIS","FEEDBACKS","CRITICA"],
		listTradContact:["KONTAK","CONTACT","CONTACT","KONTACT","CONTACTO"],
		listTradLanguage:["TAAL","LANGUAGE","LANGUE","SPRACHE","IDIOMA"],
		listTradPageContactL1:["Ons kontakte ","Our contacts ","Nos contacts","Unsere Kontakte","Nuestros contactos"],
		listTradPageContactL2:["Bereik ons telefonies: ","Reach us by phone: ","Joignez-nous par téléphone:","Erreichen Sie uns per Telefon: ","Llámenos por teléfono: "],
		listTradPageContactL3:["Bereik ons per e-pos: ","Reach us by e-mail: ","Nous joindre par e-mail:","Erreichen Sie uns per E-Mail: ","Contacte con nosotros por correo electrónico: "],
		listTradPageContactL4:["Kom geniet 'n wonderlike verblyf!","Come enjoy a marvelous stay!","Venez profiter d'un merveilleux séjour !","Kommen Sie und genießen Sie einen wunderbaren Aufenthalt!","¡Venga a disfrutar de una maravillosa estancia!"],
		listTradFollow:["Volg ons:","Follow us:","Suivez-nous:","Folge uns:","Síganos:"]
		}
	},
    methods:{
		//Here are the functions that allow to switch between the different pages from the navigation bar
      	link_about: function(event){
        	this.$router.push({path: '/about'})
		},
		link_booking: function(event){
			this.$router.push({path: '/booking'})
		},
		link_home: function(event){
			this.$router.push({path: '/'});
		},
		link_enquiry: function(event){
			this.$router.push({path: '/enquiry'})
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

	  	//Here are the functions that allow to change the language
	  	francais: function(event){
        	//set the language to an integer identifier
        	this.nLangue=2;
			//debugging help to know if the translation function is well executed
			console.log("fr");
			//call the function to translate the whole page
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
			
		//Here are the commands that link the texts and the arrays containing the text in all the languages
		trad:function(event){
			document.getElementById("home").innerHTML = this.listTradHome[this.nLangue];
			document.getElementById("rooms").innerHTML = this.listTradRooms[this.nLangue];
			document.getElementById("booking").innerHTML = this.listTradBooking[this.nLangue];
			document.getElementById("restaurant").innerHTML = this.listTradRestaurant[this.nLangue];
			document.getElementById("about").innerHTML = this.listTradAbout[this.nLangue];
			document.getElementById("enquiries").innerHTML = this.listTradEnquiries[this.nLangue];
			document.getElementById("feedback").innerHTML = this.listTradFeedbacks[this.nLangue];
			document.getElementById("contact").innerHTML = this.listTradContact[this.nLangue];
			document.getElementById("language").innerHTML = this.listTradLanguage[this.nLangue];

			document.getElementById("ContactPageL1").innerHTML = this.listTradPageContactL1[this.nLangue];
			document.getElementById("ContactPageL2").innerHTML = this.listTradPageContactL2[this.nLangue];
			document.getElementById("ContactPageL3").innerHTML = this.listTradPageContactL3[this.nLangue];
			document.getElementById("ContactPageL4").innerHTML = this.listTradPageContactL4[this.nLangue];

			document.getElementById("follow").innerHTML = this.listTradFollow[this.nLangue];
		}
	}
}
</script>

<style>
	/* body of the Contact page */
	#Contact{
		background-image: linear-gradient(to right top, transparent, rgb(51, 30, 28)), url("../assets/hotelext.jpg");
		background-repeat: no-repeat;
		background-size:100%;
		color:aliceblue
	}

	b1{
		font-weight: bold;;
		color: yellow;
	}
	#ContactPageL2, #ContactPageL3, #ContactPageL4{
		color: orange;
	}
</style>
