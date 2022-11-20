<template>
    <body id="Feedbacks"> 
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
						<li> <p><span id="feedbacks"></span></p></li>
						<li> <p v-on:click=link_contact()> <span id="contact"></span></p></li>
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

	<!-- Indicate the purpose of the page: Have clients' feedbacks -->
    <h1> <span id="experience"></span> </h1>

	<form> <!-- Create a form easy and quick to fill -->

		<h2> <span id="aspects"></span> </h2>
		<br>
		<!-- Specify the topic: Check-in -->
		<p id="opt"><span id="checkin"></span> </p>
		<!-- Options to select using radiobuttons: 1 to 5 stars here -->
		<div class="rate">
			<input type="radio" id="star5" name="rate" value="5" />
			<label for="star5" title="text">5 stars</label>
			<input type="radio" id="star4" name="rate" value="4" />
			<label for="star4" title="text">4 stars</label>
			<input type="radio" id="star3" name="rate" value="3" />
			<label for="star3" title="text">3 stars</label>
			<input type="radio" id="star2" name="rate" value="2" />
			<label for="star2" title="text">2 stars</label>
			<input type="radio" id="star1" name="rate" value="1" />
			<label for="star1" title="text">1 star</label>
		</div>

		<br><br><br> 

		<!-- Specify the topic: Cleaning -->
		<p id="opt"> <span id="clean"></span> </p>
		<!-- Options to select using radiobuttons: 1 to 5 stars here -->
		<div class="rate">
			<input type="radio" id="star5_2" name="rate_2" value="5" />
			<label for="star5_2" title="text">5 stars</label>
			<input type="radio" id="star4_2" name="rate_2" value="4" />
			<label for="star4_2" title="text">4 stars</label>
			<input type="radio" id="star3_2" name="rate_2" value="3" />
			<label for="star3_2" title="text">3 stars</label>
			<input type="radio" id="star2_2" name="rate_2" value="2" />
			<label for="star2_2" title="text">2 stars</label>
			<input type="radio" id="star1_2" name="rate_2" value="1" />
			<label for="star1_2" title="text">1 star</label>
		</div>

		<br><br><br>  

		<!-- Specify the topic: Staff -->
		<p id="opt"> <span id="staff"></span> </p>
		<!-- Options to select using radiobuttons: 1 to 5 stars here -->
		<div class="rate">
			<input type="radio" id="star5_3" name="rate_3" value="5" />
			<label for="star5_3" title="text">5 stars</label>
			<input type="radio" id="star4_3" name="rate_3" value="4" />
			<label for="star4_3" title="text">4 stars</label>
			<input type="radio" id="star3_3" name="rate_3" value="3" />
			<label for="star3_3" title="text">3 stars</label>
			<input type="radio" id="star2_3" name="rate_3" value="2" />
			<label for="star2_3" title="text">2 stars</label>
			<input type="radio" id="star1_3" name="rate_3" value="1" />
			<label for="star1_3" title="text">1 star</label>
		</div>

		<br><br><br> 

		<!-- Specify the topic: Services -->
		<p id="opt"> <span id="services"></span> </p>
		<!-- Options to select using radiobuttons: 1 to 5 stars here -->
		<div class="rate">
			<input type="radio" id="star5_4" name="rate_4" value="5" />
			<label for="star5_4" title="text">5 stars</label>
			<input type="radio" id="star4_4" name="rate_4" value="4" />
			<label for="star4_4" title="text">4 stars</label>
			<input type="radio" id="star3_4" name="rate_4" value="3" />
			<label for="star3_4" title="text">3 stars</label>
			<input type="radio" id="star2_4" name="rate_4" value="2" />
			<label for="star2_4" title="text">2 stars</label>
			<input type="radio" id="star1_4" name="rate_4" value="1" />
			<label for="star1_4" title="text">1 star</label>
		</div>

		<br><br><br><br><br>

		<!-- Ask a question to the user about: his Stay -->
		<p id="question"> <span id="stay"></span> </p>
		<!-- Options to select using radiobuttons: level of satisfaction here -->
		<input type="radio" value="satisfied">
		<label for="satisfied"> <span id="satisfy"></span> </label><br>
		<input type="radio" value="soso">
		<label for="nots"> <span id="better"></span> </label><br>
		<input type="radio" value="nots">
		<label for="nots"> <span id="unsatisfy"></span> </label><br>

		<br>  

		<!-- Ask a question to the user about: the Restaurant -->
		<p id="question"> <span id="gastronomy"></span> </p>
		<!-- Options to select using radiobuttons: level of satisfaction here -->
		<input type="radio" value="satisfied">
		<label for="satisfied"> <span id="satisfy2"></span> </label><br>
		<input type="radio" value="soso">
		<label for="nots"> <span id="improve"></span> </label><br>
		<input type="radio" value="nots">
		<label for="nots"> <span id="unsatisfy2"></span> </label><br>

		<br>  

		<!-- Ask a question to the user about: the Recommendation to others -->
		<p id="question"> <span id="recommend"></span> </p>
		<!-- Options to select using radiobuttons: communication here -->
		<input type="radio" value="yes">
		<label for="yes"> <span id="yes"></span> </label><br>
		<input type="radio" value="idk">
		<label for="idk"> <span id="idk"></span> </label><br>
		<input type="radio" value="no">
		<label for="no"> <span id="no"></span> </label><br>

		<br> 

		<!-- Ask a question to the user about: their Comeback -->
		<p id="question"> <span id="visit"></span> </p>
		<!-- Options to select using radiobuttons: level of satisfaction here -->
		<input type="radio" value="100">
		<label for="100"> <span id="definitely"></span> </label><br>
		<input type="radio" value="70">
		<label for="70"> <span id="open"></span> </label><br>  
		<input type="radio" value="40">
		<label for="40"> <span id="into"></span> </label><br>
		<input type="radio" value="0">
		<label for="0"> <span id="never"></span> </label><br><br>

		<!-- Submit button to send the feedback, and blank the space for others -->
		<input type="submit" class="submitButton" value="SUBMIT">
	</form>

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
        listTradRooms:["KAMERS","ROOMS","CHAMBRES","ZIMMERS","CUARTO"],
        listTradBooking:["BESPREKING","BOOKING","RÉSERVER","BUCHUNG","RESERVAR"],
        listTradRestaurant:["RESTAURANT","RESTAURANT","RESTAURANT","RESTAURANT","RESTAURANTE"],
        listTradEvents:["GEBEURE","EVENTS","FESTIVITÉS","TERMINE","FIESTA"],
        listTradAbout:["OOR","ABOUT","À PROPOS","ÜBER","SOBRE"],
        listTradEnquiries:["NAVRAE","ENQUIRIES","RETOURS","ANFRAGEN","PREGUNTES"],
        listTradFeedbacks:["TERUGVOER","FEEDBACKS","AVIS","FEEDBACKS","CRITICA"],
        listTradContact:["KONTAK","CONTACT","CONTACT","KONTACT","CONTACTO"],
        listTradLanguage:["TAAL","LANGUAGE","LANGUE","SPRACHE","IDIOMA"],
        listTradExperience:["Vertel ons van jou ervaring","Tell us about your experience","Racontez-nous votre expérience","Erzählen Sie uns von Ihren Erfahrungen","Cuéntenos su experiencia"],
        listTradAspects:["Beoordeel die volgende aspekte","Rate the following aspects","Notez les différents aspects","Beachten Sie die unterschiedlichen Aspekte","Califica los siguientes aspectos"],
        listTradCheckin: ["Inboek","Check-in","Check-in","Einchecken","Registrarse"],
        listTradClean:["Skoonmaak en Netheid","Housekeeping and Cleanliness","Intendance et Propreté","Haushalt und Sauberkeit","Servicio de limpieza"],
        listTradStaff:["Vriendelike en Doeltreffende personeel","Friendly and Efficient staff","Personnel Sympathique et Efficace","Freundliches und Effizientes Personal","Personal Amable y Eficiente"],
        listTradServices:["Dienste algehele kwaliteit","Services overall quality","Qualité globale des services","Gesamtqualität der Dienstleistungen","Calidad general de los servicios"],
        listTradStay:["Het jy jou verblyf by EMA geniet?","Did you enjoy your stay at EMA?","Avez-vous apprécié votre séjour chez EMA ?","Hat Ihnen Ihr Aufenthalt bei EMA gefallen?","¿Disfrutaste tu estadía en EMA?"],
        listTradSatisfy:["Tevrede","Satisfied","Satisfait","Zufrieden","Satisfecho"],
        listTradBetter:["Kon beter gewees het","Could have been better","Cela aurait pu être mieux","Besser sein können","Pudo haber sido mejor"],
        listTradUnsatisfy:["Nie tevrede nie","Not satisfied","Insatisfait","Unzufrieden","Insatisfecho"],
        listTradGastronomy:["Wat van ons gastronomie by die restaurant?","What about our gastronomy at the restaurant?","Qu'avez-vous pensé de notre gastronomie proposée au restaurant ?","Wie sieht es mit unserer Gastronomie im Restaurant aus?","¿Qué tal nuestra gastronomía en el restaurante?"],
        listTradImprove:["Kan verbeter word","Can be improved","Améliorations possibles","Kann verbessert werden","Puede ser mejorado"],
        listTradRecommend:["Sal jy ons by 'n vriend aanbeveel?","Would you recommend us to a friend?","Recommanderiez-vous notre hôtel à un ami/proche ?","Would you recommend us to a friend?","¿Nos recomendarías a una amiga?"],
        listTradYes:["Ja","Yes","Oui","Ja","Sí"],
        listTradIdk:["Ek weet nie","I don't know","Je ne sais pas","Ich weiß nicht","No sé"],
        listTradNo:["Geen","No","Non","Nein","No"],
        listTradVisit:["Wat van om ons binnekort te besoek?","What about visiting us soon?","Pensez-vous revenir bientôt ?","Wie wäre es mit einem baldigen Besuch bei uns?","¿Qué tal si nos visitas pronto?"],
        listTradDefinitely:["Ek sal beslis terugkom","I will definitely come back","Je reviendrais pour sûr","Ich werde auf jeden Fall wiederkommen","Definitivamente regresaré"],
        listTradOpen:["Ek is oop daarvoor","I am open to it","Je suis ouvert à cette perspective","Ich bin offen dafür","Estoy abierta a eso"],
        listTradInto:["Ek is nie daarin nie","I'm not into it","Je ne suis pas enclin à revenir","Ich bin nicht dabei","No estoy en eso"],
        listTradNever:["Ek sal nooit terugkom nie","I will never come back","Je ne reviendrais jamais","Ich werde nie wiederkommen","Nunca volveré"],
        listTradFollow:["Volg ons:","Follow us:","Suivez-nous:","Folge uns:","Síganos:"]
    }},
    methods:{
		//Routing functions
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
		link_restaurant: function(event){
			this.$router.push({path: '/restaurant'})
		},
		link_rooms: function(event){
			this.$router.push({path: '/rooms'})
		},

		//Language settings functions
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

		//Translations settings function
        trad:function(event){
			//associate each text identifier - recognized by ID
			//to its corresponding translation - which index in the array correspond to the identifier of the language
            document.getElementById("home").innerHTML = this.listTradHome[this.nLangue];
            document.getElementById("rooms").innerHTML = this.listTradRooms[this.nLangue];
            document.getElementById("booking").innerHTML = this.listTradBooking[this.nLangue];
            document.getElementById("restaurant").innerHTML = this.listTradRestaurant[this.nLangue];
            document.getElementById("about").innerHTML = this.listTradAbout[this.nLangue];
            document.getElementById("enquiries").innerHTML = this.listTradEnquiries[this.nLangue];
            document.getElementById("feedbacks").innerHTML = this.listTradFeedbacks[this.nLangue];
            document.getElementById("contact").innerHTML = this.listTradContact[this.nLangue];
            document.getElementById("language").innerHTML = this.listTradLanguage[this.nLangue];

            document.getElementById("experience").innerHTML = this.listTradExperience[this.nLangue];
            document.getElementById("aspects").innerHTML = this.listTradAspects[this.nLangue];
            document.getElementById("checkin").innerHTML = this.listTradCheckin[this.nLangue];
            document.getElementById("clean").innerHTML = this.listTradClean[this.nLangue];
            document.getElementById("staff").innerHTML = this.listTradClean[this.nLangue];
            document.getElementById("services").innerHTML = this.listTradServices[this.nLangue];
            document.getElementById("stay").innerHTML = this.listTradStay[this.nLangue];
            document.getElementById("satisfy").innerHTML = this.listTradSatisfy[this.nLangue];
            document.getElementById("better").innerHTML = this.listTradBetter[this.nLangue];
            document.getElementById("unsatisfy").innerHTML = this.listTradUnsatisfy[this.nLangue];
            document.getElementById("gastronomy").innerHTML = this.listTradGastronomy[this.nLangue];
            document.getElementById("satisfy2").innerHTML = this.listTradSatisfy[this.nLangue];
            document.getElementById("improve").innerHTML = this.listTradImprove[this.nLangue];
            document.getElementById("unsatisfy2").innerHTML = this.listTradUnsatisfy[this.nLangue];
            document.getElementById("recommend").innerHTML = this.listTradRecommend[this.nLangue];
            document.getElementById("yes").innerHTML = this.listTradYes[this.nLangue];
            document.getElementById("idk").innerHTML = this.listTradIdk[this.nLangue];
            document.getElementById("no").innerHTML = this.listTradNo[this.nLangue];
            document.getElementById("visit").innerHTML = this.listTradVisit[this.nLangue];
            document.getElementById("definitely").innerHTML = this.listTradDefinitely[this.nLangue];
            document.getElementById("open").innerHTML = this.listTradOpen[this.nLangue];
            document.getElementById("into").innerHTML = this.listTradInto[this.nLangue];
            document.getElementById("never").innerHTML = this.listTradNever[this.nLangue];
                
            document.getElementById("follow").innerHTML = this.listTradFollow[this.nLangue];
    	}
	}
}
</script>

<style>
	
	*{
		margin: 0;
		padding: 0;
	}

	#Feedbacks{ /* body of the Feedbacks page */
		background-image: linear-gradient(to right top, transparent, mistyrose), url("../assets/backgroundFeedback.jpg");

		/*center the questions text*/ 
		text-align: center;
	}

	/* Styling the titles and paragraph */
	h1{
		color: violet;
	}

	h2{
		color: purple ;
	}

	#opt{
		font-weight: bold;
		color: #FF6600;
	}
	#question{
		font-weight: bold;
		color: orangered;
	}


	/* STYLING THE STAR-RATING */
	/* Global instruction */
	.rate {
		float: left;
		height: 46px;
		padding: 0 10px;

		/*center the stars on the page*/
		display: block;
		margin-left: 70px;
		width: 50%;
	}

	/* Styling the non-checked stars */
	.rate:not(:checked) > input {
		position:absolute;
		top:-9999px;
	}
	.rate:not(:checked) > label {
		float:right;
		width:1em;
		overflow:hidden;
		white-space:nowrap;
		cursor:pointer;
		font-size:30px;
		color:#ccc;
	}
	.rate:not(:checked) > label:before {
		content: '★ ';
	}

	/* Styling the checked stars */
	.rate > input:checked ~ label {
		color: #ffc700;    
	}
	.rate:not(:checked) > label:hover,
	.rate:not(:checked) > label:hover ~ label {
		color: #deb217;  
	}
	.rate > input:checked + label:hover,
	.rate > input:checked + label:hover ~ label,
	.rate > input:checked ~ label:hover,
	.rate > input:checked ~ label:hover ~ label,
	.rate > label:hover ~ input:checked ~ label {
		color: #c59b08;
	}


	/* Highlight the options of the form while passing over with the mouse */
	label:hover{
		font-weight: bold;
		color: orange;
	}

	/* Colored and bigged the Submit button while about to click */
	.submitButton:hover{
		background-color: orange;
		color: white;
		font-size: 15x;
		font-weight: bold;
		padding: 8px 15px;
	}
</style>
