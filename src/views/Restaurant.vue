<template>
    <body id="Restaurant">
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
						<li> <p><span id="restaurant"></span></p></li>
						<li> <p v-on:click=link_about()> <span id="about"></span></p></li>
						<li> <p v-on:click=link_enquiry()> <span id="enquiries"></span></p></li>
						<li> <p v-on:click=link_feedbacks()> <span id="feedback"></span></p></li>
						<li> <p v-on:click=link_contact()> <span id="contact"></span></p></li>
				</ul>
				<br> <br>
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
			
		<br><br><br>
		
		<div  id="resto">
			<div class="contour"><b>	
				<a class="btn-primary" @click="scrollToAnchorPoint('1')"> <h2 id="title2"><span id="speciality1"></span></h2></a>
				<br>
				<ol><a class="btn-primary" @click="scrollToAnchorPoint('2')"> <h2 id="title2"><span id="fullM1"></span>:</h2> </a></ol>
				<li><a class="btn-primary" @click="scrollToAnchorPoint('2')"> <span id="dishes1"></span> </a></li>
				<li><a class="btn-primary" @click="scrollToAnchorPoint('3')"> <span id="desserts1"></span> </a></li>
				<br>
				<a class="btn-primary" @click="scrollToAnchorPoint('4')"> <h2 id="title2"><span id="info1"></span></h2> <br></a></b>
			</div>
		</div>

		<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>  

    	<br><br><br>
	
		<div ref="1" class="container">  
			<div class="sod">
				<img id="dayS" src="../assets/Specialityoftheday.jpg">
			</div>

			<div class="sotd">
				<h2 id="title2"> <span id="speciality"></span> </h2>
				<br>
				<h3 id="title3"> <span id="four"></span> </h3>
				<br><br>
				<p id="dayDish">
					<span id="dayDesc0"></span> <br>
					<span id="dayDesc1"></span>! <br><br>
					<span id="dayDesc2"></span>. <br>
					<span id="dayDesc3"></span> <br>
					<span id="dayDesc4"></span>, <br>
					<span id="dayDesc5"></span> <br>
					<span id="dayDesc6"></span> <br>
					<span id="dayDesc7"></span>.
				</p>
			</div>
		</div>

		<br> <br> <br> <br> <br> <br> <br>  

		<div ref="2" class="Plates">
			<h2 id="title2"><span id="fullM"></span></h2>
			<br>
			<h3 id="title3"><span id="dishes"></span>:</h3>
		</div>
			
		<br> 

		<img src="../assets/food1.jpg" id="food1">
		<img src="../assets/food7.jpg" id="food7">
		<img src="../assets/food2.jpg" id="food2">
		<br><br>

		<img src="../assets/food13.jpg" id="food13">
		<img src="../assets/food3.jpg" id="food3">
		<img src="../assets/food6.jpg" id="food6">
		<br><br>
	
		<img src="../assets/food11.jpg" id="food11">
		<img src="../assets/food12.jpg" id="food12">
		<img src="../assets/food8.jpg" id="food8">
		<br><br><br><br>


		<div ref="3" class="Desserts"> 
			<h3 id="title3"><span id="desserts"></span>:</h3>
		</div>
		<img src="../assets/dessert3.jpg" id="dessert3">
		<img src="../assets/dessert2.jpg" id="dessert2">
		<img src="../assets/dessert4.jpg" id="dessert4">
		<br><br>
	
		<img src="../assets/dessert5.jpg" id="dessert5">
		<img src="../assets/dessert7.jpg" id="dessert7">
				
		<br><br><br><br><br><br><br>
			 
		<div ref="4" class="Infos"> 
			<h2 id="title2"><span id="info"></span></h2>
			<br>
			<span id="number"></span> : <b>+27 6 67 74 36 85</b>
			<br>
			<span id="email"></span> : <b>EMAsrestaurant@gmail.com</b>
			<br><br>
			<span id="open"></span> : 
			<li> <span id="m_t"></span> : <b>12h - 21h</b></li>
			<li> <span id="f_s"></span> : <b>12h - 23h</b></li>
			<br><br>
		</div>	

		<br>
    
		<footer>
			<!-- indicate our social medias, as the footer of each page -->
			<br>
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


    data(){return {
		nLangue:1, //set the default language to english, which identifier is 1

		//The arrays containing the traductions in each 5 languages
		listTradHome:["TUIS","HOME","ACCUEIL","HOME","HOME"],
		listTradRooms:["KAMERS","ROOMS","CHAMBRES","ZIMMERS","HABITACIÓN"],
		listTradBooking:["BESPREKING","BOOKING","RÉSERVER","BUCHUNG","RESERVAR"],
		listTradRestaurant:["RESTAURANT","RESTAURANT","RESTAURANT","RESTAURANT","RESTAURANTE"],
		listTradAbout:["OOR","ABOUT","À PROPOS","ÜBER","SOBRE"],
		listTradEnquiries:["NAVRAE","ENQUIRIES","RETOURS","ANFRAGEN","PREGUNTES"],
		listTradFeedbacks:["TERUGVOER","FEEDBACKS","AVIS","FEEDBACKS","CRITICA"],
		listTradContact:["KONTAK","CONTACT","CONTACT","KONTACT","CONTACTO"],
		listTradLanguage:["TAAL","LANGUAGE","LANGUE","SPRACHE","IDIOMA"],
		listTradSpeciality:["Spesialiteit van die dag","Speciality of the day","Specialité du jour","Spezialität des Tages","Especialidad del día"],
		listTradFour:["Viergang spyskaart Le Saint-Martin","Four course menu le Saint-Martin","Menu quatre plats Le Saint-Martin","Vier-Gänge-Menü Le Saint-Martin","Menú de cuatro platos Le Saint-Martin"],
		listTradDayDesc0:["Die fynproewersgereg van die dag in ons sterrestaurant wat nie ","The gastronomic dish of the day is our starred restaurant which will not","Le plat gastronomique du jour dans notre restaurant étoilé qui ne saura ","Das Gourmetgericht des Tages in unserem Sternerestaurant, das Sie nicht enttäuschen wird","El plato gastronómico del día en nuestro restaurante con estrellas que no defraudará"],
		listTradDayDesc1:["sal weet nie stel jou teleur. Vertrou die sjef en jou smaakknoppies sal verheug ","disappoint you. Trust the chef and your taste buds will be delighted","vous décevoir. Faites confiance au chef et vos papilles se délecteront","vertrauen Sie dem Küchenchef und Ihre Geschmacksknospen werden sich freuen","decepcionarle. Confíe en el chef y sus papilas gustativas quedarán encantadas"],
		listTradDayDesc2:["Die Saint-Martin, geniet 'n benydenswaardige reputasie onder fynproewers","The Saint-Martin, enjoys an enviable reputation among gourmets","Le Saint-Martin, jouit d’une réputation enviable auprès des gourmets","Das Saint-Martin, genießt bei Feinschmeckern einen beneidenswerten Ruf","El Saint-Martin tiene una reputación envidiable entre los gastrónomos"],
		listTradDayDesc3:["Hierdie gereg fokus op die spesiale geure van plaaslike produkte ","This dish emphasizes the particular flavors of local products","Ce plat met l’accent sur les saveurs particulières des produits locaux","Dieses Gericht betont die besonderen Aromen der lokalen Produkte","Este plato resalta los sabores particulares de los productos locales de temporada"],
		listTradDayDesc4:["Seisoenale. Sit in 'n warm en lekker chique atmosfeer","of the season. Seated in a warm and deliciously chic atmosphere","de saison. Assis dans une ambiance chaleureuse et délicieusement chic","der jeweiligen Jahreszeit. In einer warmen und herrlich stilvollen Atmosphäre sitzend","de la temporada. Sentado en un ambiente cálido y deliciosamente elegante"],
		listTradDayDesc5:["Gaste geniet hul middagete of aandete terwyl hulle die uitsig oorweeg ongelooflik","guests enjoy their lunch or dinner while contemplating the incredible view","les hôtes savourent leur déjeuner ou leur dîner en contemplant la vue","genießen die Gäste ihr Mittag- oder Abendessen, während sie den Blick auf den","los huéspedes disfrutan de su almuerzo o cena mientras contemplan la increíble vista"],
		listTradDayDesc6:["op Tafelberg, simbool van die wonderlike","of Table Mountainn, the symbol of the wonderful","incroyable sur la Table Mountain, symbole de la merveilleuse ","unglaublichen Blick auf den Tafelberg, das Wahrzeichen der wunderbaren","la increíble vista de la Montaña de la Mesa, el símbolo de la maravillosa"],
		listTradDayDesc7:["stad wat Kaapstad is","city of Cape Town","ville qu'est Cape Town","Stadt Kapstadt","ciudad que es Ciudad del Cabo"],
		listTradFullM:["Volledige spyskaart ","Full menu","Menu complet ","Vollständige Speisekarte","Menú completo"],
		listTradDishes:["Plate ","Dishes","Plats","Gang","Platos"],
		listTradDesserts:["Nageregte","Desserts","Desserts","Nachspeisen","Postres"],
		listTradInfo:["Inligting","Informations","Informations","Informationen","Información"],
		listTradNumber:["As jy die restaurant wil kontak, hier is die telefoonnommer","If you want to contact the restaurant, here is the phone number","Si vous voulez contacter le restaurant, voici le numéro de téléphone","Wenn Sie das Restaurant kontaktieren möchten, hier ist die Telefonnummer","Si quieres contactar con el restaurante, este es el número de teléfono"],
		listTradEmail:["Hier is die e-pos","Here is the email","Voici l'email","Hier ist die E-Mail","Aquí está el correo electrónico"],
		listTradOpen:["Ons is elke dag oop op hierdie ure","We are open everyday at these hours","Nous sommes ouverts tous les jours aux heures suivantes","Wir sind täglich zu folgenden Zeiten geöffnet","Estamos abiertos todos los días en este horario"],
		listTradM_T:["Maandag - Donderdag","Monday - Thursday","Lundi - Jeudi","Montag - Donnerstag","Lunes - Jueves"],
		listTradF_S:["Vrydag - Sondag","Friday - Sunday","Vendredi - Dimanche","Freitag - Sonntag","Viernes - Domingo"],
		listTradFollow:["Volg ons:","Follow us:","Suivez-nous:","Folge uns:","Síganos:"]
	}},
    methods:{
		//ROUTING FUNCTIONS
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
	  	link_rooms: function(event){
        	this.$router.push({path: '/rooms'})
      	},
	  	link_feedbacks: function(event){
        	this.$router.push({path: '/feedbacks'})
     	},

		//LANGUAGE SETTINGS FUNCTIONS
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

		//TRANSLATIONS SETTINGS FUNCTION
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

			document.getElementById("speciality1").innerHTML = this.listTradSpeciality[this.nLangue];
			document.getElementById("fullM1").innerHTML = this.listTradFullM[this.nLangue];
			document.getElementById("dishes1").innerHTML = this.listTradDishes[this.nLangue];
			document.getElementById("desserts1").innerHTML = this.listTradDesserts[this.nLangue];
			document.getElementById("info1").innerHTML = this.listTradInfo[this.nLangue];

			document.getElementById("speciality").innerHTML = this.listTradSpeciality[this.nLangue];
			document.getElementById("four").innerHTML = this.listTradFour[this.nLangue];
			document.getElementById("dayDesc0").innerHTML = this.listTradDayDesc0[this.nLangue];
			document.getElementById("dayDesc1").innerHTML = this.listTradDayDesc1[this.nLangue];
			document.getElementById("dayDesc2").innerHTML = this.listTradDayDesc2[this.nLangue];
			document.getElementById("dayDesc3").innerHTML = this.listTradDayDesc3[this.nLangue];
			document.getElementById("dayDesc4").innerHTML = this.listTradDayDesc4[this.nLangue];
			document.getElementById("dayDesc5").innerHTML = this.listTradDayDesc5[this.nLangue];
			document.getElementById("dayDesc6").innerHTML = this.listTradDayDesc6[this.nLangue];
			document.getElementById("dayDesc7").innerHTML = this.listTradDayDesc7[this.nLangue];

			document.getElementById("fullM").innerHTML = this.listTradFullM[this.nLangue];
			document.getElementById("dishes").innerHTML = this.listTradDishes[this.nLangue];
			document.getElementById("desserts").innerHTML = this.listTradDesserts[this.nLangue];

			document.getElementById("info").innerHTML = this.listTradInfo[this.nLangue];
			document.getElementById("number").innerHTML = this.listTradNumber[this.nLangue];
			document.getElementById("email").innerHTML = this.listTradEmail[this.nLangue];
			document.getElementById("open").innerHTML = this.listTradOpen[this.nLangue];
			document.getElementById("m_t").innerHTML = this.listTradM_T[this.nLangue];
			document.getElementById("f_s").innerHTML = this.listTradF_S[this.nLangue];

			document.getElementById("follow").innerHTML = this.listTradFollow[this.nLangue];
		},

		scrollToAnchorPoint(refName) {
			const el = this.$refs[refName]
			el.scrollIntoView({ behavior: 'smooth'})
        }
	}
}
</script>

<style>
	#Restaurant{ /* body of the Restaurant page */
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
	#title2{ 
		font-weight: bold;
		font-size: 30px;
		color: purple;
	}
	#title3 {
		font-weight: bold;
		font-size: 26px;
		color: orange;
	}
	#dayDish{
		color: brown;
	}

	.sod {
		flex-basis:40%;
	}
	.sotd {
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	font-size: large;
	color: rgb(122, 72, 11);
	}
	#dayS{
		display: block;
		margin-left: -30px;
		width: 95%;
	}

	/* Style Plates and Desserts part */
	.Plates,.Desserts{
		font-size:x-large;
	}

	/* Images fit the size to each of our screen */
	#food1,#food7,#food2,#food3,#food6,#food11,#food13,#food8,#food12{
		/* Asma's screen
		width:500px;
		height:300px; */

		/* Emma'screen*/
		width:450px;
		height:250px;
	}
	#dessert2,#dessert3,#dessert4,#dessert5,#dessert7{
		/* Asma's screen
		padding: 1%;
		width:400px;
		height:300px; */

		/* Emma'screen*/
		width:450px;
		height:250px;
	}

	/* Style Information part */
	.Infos{
		font-size: large;
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	}
</style>
