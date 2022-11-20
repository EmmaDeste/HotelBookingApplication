<template>
	<body id="About">
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
					   <li> <p><span id="about"></span></p></li>
					   <li> <p v-on:click=link_enquiry()> <span id="enquiries"></span></p></li>
					   <li> <p v-on:click=link_feedbacks()> <span id="feedback"></span></p></li>
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
	   
	   <!-- Title for STORY part -->
		<h1 id="title"> <span id="story"></span> </h1>

		<br>
			   
		<!-- Display the different translations -->
		<p> <span id="storyTell0"></span>. <br>
			<span id="storyTell1"></span>. <br><br>
			<span id="storyTell2"></span>. <br>
			<span id="storyTell3"></span>. <br>
			<span id="storyTell4"></span>. <br>
			<span id="storyTell5"></span>. <br>
			<span id="storyTell6"></span>! <br>
		    <span id="storyTell7"></span> <br>
			<span id="storyTell8"></span>.  <br>
			<span id="storyTell9"></span>. <br><br><br>
   
		   <b>Alednam Noslen </b> <!-- Read on the reverse order ;) -->
		</p>

		<br><br>
		   
		<!-- Title for SERVICES part -->
		<h1 id="title"> <span id="service"></span> </h1>
			   
		<br> 

		<div>
			   
			<table class="centertable">
				   
				<tr> <!-- Title for Includes subpart -->
					<td colspan="5"> <h2> <span id="includes"></span> </h2> </td>
				</tr>
				   
				<br> 

				<tr> 
					<!-- Display the logo of the cell -->
					<td> <img id="wifiI" src="../assets/wifi.jpg"></td>
					<!-- Display the text of the cell -->
				   <th style="border: 3px solid blue"> <span id="wifi"></span> </th>
				   <td></td>
				   <td> <img id="tvI" src="../assets/tv.jpg">  </td>
				   <th style="border: 3px solid blue"> <span id="tv"></span> </th>
				</tr>
				   
				<tr> 
				   <td> <img id="newsI" src="../assets/news.png"> </td>
				   <th style="border: 3px solid purple"> <span id="news"></span>  </th>
				   <td></td>
				   <td> <img id="conciergeI" src="../assets/concierge.jpg">  </td>
				   <th style="border: 3px solid purple"> <span id="concierge"></span>  </th>
				</tr>
				   
				<tr> 
				   <td style="filter: saturate(5)"> <img id="roomserviceI" src="../assets/roomservice.jpg">  </td>
				   <th style="border: 3px solid red"> <p v-on:click=link_restaurant()> <span id="roomservice"></span></p> </th>
				   <td></td>
				   <td style="filter: saturate(5)"> <img id="barI" src="../assets/bar.jpg">  </td>
				   <th style="border: 3px solid red"> <span id="bar"></span>  </th>
			   </tr>
				   
			   <tr> 
				   <td> <img id="shoeshineI" src="../assets/shoeshine.jpg"> </td>
				   <th style="border: 3px solid black"> <span id="shoeshine"></span>  </th>
				   <td></td>
				   <td> <img id="gamingI" src="../assets/gaming.jpg">  </td>
				   <th style="border: 3px solid black"> <span id="gaming"></span>  </th>
			   </tr>
				   
				 <tr> 
				   <td style="filter: saturate(3)"> <img id="poolI" src="../assets/pool.png"> </td>
				   <th style="border: 3px solid aqua"> <span id="pool"></span>  </th>
					<td></td>
				   <td style="filter: saturate(5)"> <img id="gymI" src="../assets/gym.png">  </td>
				   <th style="border: 3px solid aqua"> <span id="gym"></span>  </th>
				</tr>
   
				<td> <br> </td>
				   
				<tr> <!-- Title for Extras subpart -->
					<td colspan="5"> <h2> <span id="extras"></span> </h2> </td>
				</tr>
				   
				<br> 

				<tr> 
					<!-- Display the logo of the cell -->
				   <td> <img id="laundryI" src="../assets/laundry.jpg"> </td>
				   <!-- Display the logo of the cell -->
				   <th style="border: 3px solid green"> <span id="laundry"></span> </th>
				   <!-- separation to hide, but to display clearly -->
				   <td id="hide"> --------------- </td>
				   <td> <img id="parkingI" src="../assets/parking.png"> </td>
				   <th style="border: 3px solid green"> <span id="parking"></span> </th>
				</tr>
				   
				<tr> 
					<td style="filter: saturate(5)"> <img id="medicalI" src="../assets/medical.png"> </td>
					<th style="border: 3px solid lightgreen"> <span id="medical"></span> </th>
				   <td></td>
				   <td style="filter: saturate(5)"> <img id="spaI" src="../assets/spa.jpg">  </td>
				   <th style="border: 3px solid lightgreen"> <span id="spa"></span> </th>
				</tr>
		   </table>
		</div>
		   
	   <br> <br> <br>
    
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
	   	name:'about',

		//Here are the arrays that contain the traductions in each language
	   	data(){return {nLangue:1,  //set the default language to english, which identifier is 1
			listTradHome:["TUIS","HOME","ACCUEIL","HOME","HOME"],
			listTradRooms:["KAMERS","ROOMS","CHAMBRES","ZIMMERS","HABITACIÓN"],
			listTradBooking:["BESPREKING","BOOKING","RÉSERVER","BUCHUNG","RESERVAR"],
			listTradRestaurant:["RESTAURANT","RESTAURANT","RESTAURANT","RESTAURANT","RESTAURANTE"],
			listTradEvents:["GEBEURE","EVENTS","FESTIVITÉS","TERMINE","FIESTA"],
			listTradAbout:["OOR","ABOUT","À PROPOS","ÜBER","SOBRE"],
			listTradEnquiries:["NAVRAE","ENQUIRIES","RETOURS","ANFRAGEN","PREGUNTES"],
			listTradFeedbacks:["TERUGVOER","FEEDBACKS","AVIS","FEEDBACKS","CRITICA"],
			listTradContact:["KONTAK","CONTACT","CONTACT","KONTACT","CONTACTO"],
			listTradLanguage:["TAAL","LANGUAGE","LANGUE","SPRACHE","IDIOMA"],
			listTradStory: ["ONS STORIE","OUR STORY","NOTRE HISTOIRE","UNSERE GESCHICHTE","NUESTRA HISTORIA"],
			listTradStoryTell0: ["Welkom by ons webwerf, ek is Emma, ​​die eienaar van hierdie hotel","Welcome to our website, I am Emma, the owner of this hotel","Bienvenue sur notre site, je suis Emma, ​​la propriétaire de cet hôtel","Willkommen auf unserer Website, ich bin Emma, ​​die Besitzerin dieses Hotels","Bienvenido a nuestro sitio web, soy Emma, ​la propietaria de este hotel"],
			listTradStoryTell1: ["Ek is 34 jaar oud en ek is op die punt om vir jou die storie van die beroemde vyfsterhotel EMA te vertel","I'm 34 years old and i'm about to tell you the story of the famous five-star hotel EMA","J'ai 34 ans et je vais vous raconter l'histoire du célèbre hôtel cinq étoiles EMA","Ich bin 34 Jahre alt und erzähle Ihnen jetzt die Geschichte des berühmten Fünf-Sterne-Hotels EMA","Tengo 34 años y les voy a contar la historia del famoso hotel cinco estrellas EMA"],
			listTradStoryTell2: ["Laat ek jou eers vertel van my pa Ibrahim, 'n ongelooflike man wat geveg het vir vryheid en menseregte","Let me tell you first about my father Ibrahim, an incredible man that fought for liberty and humans rights","Permettez-moi de vous parler d'abord de mon père Ibrahim, un homme incroyable qui s'est battu pour la liberté et les droits de l'homme","Lassen Sie mich Ihnen zuerst von meinem Vater Ibrahim erzählen, einem unglaublichen Mann, der für Freiheit und Menschenrechte gekämpft hat","Déjame contarte primero sobre mi padre Ibrahim, un hombre increíble que luchó por la libertad y los derechos humanos."],
			listTradStoryTell3: ["Hy het 'n paar jaar gelede vir my vertel hoe die lewe in Suid-Afrika was, swart mense mag nie langs wit mense sit, nie aan dieselfde tafels eet of selfs net naby hulle wees nie","He told me how life was in South Africa a few years ago, black people weren't allowed to sit next to white people, nor eat at the same tables or even just be near them","Il m'a raconté comment était la vie en Afrique du Sud il y a quelques années, les Noirs n'avaient pas le droit de s'asseoir à côté des Blancs, ni de manger aux mêmes tables ou même juste d'être près d'eux","Er erzählte mir, wie das Leben in Südafrika vor ein paar Jahren war, Schwarze durften nicht neben Weißen sitzen, nicht an denselben Tischen essen oder auch nur in ihrer Nähe sein","Me contó cómo era la vida en Sudáfrica hace unos años, a los negros no se les permitía sentarse junto a los blancos, ni comer en las mismas mesas, ni siquiera estar cerca de ellos."],
			listTradStoryTell4: ["Hulle is nie as mense beskou nie! Toe hy Nelson Mandela ontmoet het, het hy die motivering en die dapperheid gevind om hulle aktief te help","They weren't considered as human beings! Then after he met Nelson Mandela, he found the motivation and the bravery to actively help them","Ils n'étaient pas considérés comme des êtres humains ! Puis après avoir rencontré Nelson Mandela, il a trouvé la motivation et le courage de les aider activement","Sie wurden nicht als Menschen betrachtet! Dann, nachdem er Nelson Mandela kennengelernt hatte, fand er die Motivation und den Mut, ihnen aktiv zu helfen","¡No eran considerados como seres humanos! Luego, después de conocer a Nelson Mandela, encontró la motivación y la valentía para ayudarlos activamente."],
			listTradStoryTell5: ["Hy het dus die hotel EMA in 1988 geskep, na my vernoem, aangesien ek as baba die hoop op 'n nuwe begin verteenwoordig het, net soos die hotel","So he created the hotel EMA in 1988, named after me, since as a baby I represented the hope of a new beginning, just like the hotel","Il a donc créé l'hôtel EMA en 1988, qui porte mon nom, car bébé je représentais l'espoir d'un nouveau départ, tout comme l'hôtel","So schuf er 1988 das nach mir benannte Hotel EMA, da ich als Baby ebenso wie das Hotel die Hoffnung auf einen Neuanfang repräsentierte","Así creó el hotel EMA en 1988, que lleva mi nombre, ya que de bebé representaba la esperanza de un nuevo comienzo, al igual que el hotel"],
			listTradStoryTell6: ["Die doel daarvan was om alle swart mense toe te laat om normaal te slaap, eet en lewe, terwyl hulle gerespekteer en behandel word soos hulle behoort te word","Its purpose was to allow all black people to sleep, eat and live normally, while being respected and treated as they should be","Son but était de permettre à tous les Noirs de dormir, de manger et de vivre normalement, tout en étant respectés et traités comme il se doit.","Sein Zweck war es, allen Schwarzen zu ermöglichen, normal zu schlafen, zu essen und zu leben, während sie respektiert und behandelt werden, wie sie sein sollten","Su propósito era permitir que todas las personas negras duerman, coman y vivan normalmente, siendo respetadas y tratadas como deben ser."],
			listTradStoryTell7: ["Ek het in hierdie hotel grootgeword en het uiteindelik op hierdie plek verlief geraak. So, ek het gesorg vir EMA vandat ek op die wettige ouderdom geword het om dit te bestuur","I grew up in this hotel and eventually fell in love with this place. So, I took care of EMA ever since I became at the legal age to manage it","J'ai grandi dans cet hôtel et je suis finalement tombé amoureux de cet endroit. Donc, je me suis occupé de l'EMA depuis que j'ai eu l'âge légal pour le gérer","Ich bin in diesem Hotel aufgewachsen und habe mich schließlich in diesen Ort verliebt. Also habe ich mich um die EMA gekümmert, seit ich volljährig war, um sie zu leiten","Crecí en este hotel y finalmente me enamoré de este lugar. Entonces, me ocupé de EMA desde que tuve la edad legal para administrarlo."],
			listTradStoryTell8: ["en bewaar die waardes van my pa. Op dié manier laat ek die hotel ontwikkel van 'n beskeie een na 'n vyfster-een","and preserve the values of my father. That way, I make the hotel evolve from a modest one to a five-star one","et préserver les valeurs de mon père. Comme ça, je fais évoluer l'hôtel d'un modeste à un cinq étoiles","und die Werte meines Vaters bewahren. So entwickle ich das Hotel von einem bescheidenen zu einem Fünf-Sterne-Hotel","y preservar los valores de mi padre. Así hago evolucionar el hotel de uno modesto a uno de cinco estrellas"],
			listTradStoryTell9: ["Nou is almal welkom om in te kom en kan rustig saam met die ander kliënte leef","Now, everyone is welcome to come in and can live peacefully with the other customers","Désormais, tout le monde est le bienvenu et peut vivre en paix avec les autres clients","Jetzt ist jeder herzlich eingeladen, hereinzukommen und friedlich mit den anderen Kunden zusammenzuleben","Ahora, todos son bienvenidos a entrar y pueden vivir en paz con los otros clientes."],
			listTradService: ["ONS DIENSTE","OUR SERVICES","NOS SERVICES","UNSERE LEISTUNGEN","NUESTROS SERVICIOS"],
			listTradIncludes: ["Includes","Includes","Inclus","Beinhaltet","Incluye"],
			listTradWifi:["Gratis WiFi","Free WiFi","WiFi gratuit","WiFi kostenlos","Gratis WiFi"],
			listTradTv: ["Smart TV - with streaming toegang","Smart TV - with streaming access","Smart TV - avec accès streaming","Smart TV - mit Streaming Zugriff","Smart TV - con acceso a streaming"],
			listTradNews: ["Daaglikse koerante","Daily newspapers","Journaux quotidiens","Tägliches Zeitung","Periódicos diarios"],
			listTradConcierge: ["Portier diens","Concierge service","Conciergerie","Türsteher","Servicio de conserjería"],
			listTradRoomservice: ["Kamer diens","Room service","Room service","Zimmerservice","Servicio de habitaciones"],
			listTradBar: ["Mini kroeg - met cocktail en wyn","Mini bar - with cocktail and wine","Mini bar - avec cocktails et vins","Minibar - mit Cocktails und Wein","Mini bar - con cóctel y vino"],
			listTradShoeshine: ["Shoeshine diens","Shoeshine service","Cordonnerie","Schuhputzservice","Servicio de limpiabotas"],
			listTradGaming: ["Speelkamer","Gaming room ","Salle de jeux","Spielraum","Sala de juegos"],
			listTradPool: ["Peule - koud en warm","Pools - cold and warm","Piscines - froides et chaudes","Schwimmbecken - kalt und warm","Piscinas - frías y calientes"],
			listTradGym: ["Gimnasium, joga en fiksheid","Gym, yoga, and fitness","Gym, yoga et fitness","Sportraum, Yoga und Fitness","Gimnasio, yoga y fitness"],
			listTradExtras: ["Ekstras","Extras","Extras","Extras","Extras"],
			listTradLaundry: ["Wasgoed diens","Laundry service","Laverie","Wäscherei","Servicio de lavandería"],
			listTradParking: ["Parkering valet","Parking valet","Voiturier","Parkservice","Aparcacoches"],
			listTradMedical: ["Mediese span","Medical team","Équipe médicale","Medizinsgruppe","Equipo médico"],
			listTradSpa: ["Spa behandelingsan","Spa treatments","Spa","Heilbad","Tratamientos de spa"],
			listTradFollow:["Volg ons:","Follow us:","Suivez-nous:","Folge uns:","Síganos:"]
		}},
	   	methods:{
			//Here are the functions that allow to switch between the different pages from the navigation bar
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

				document.getElementById("story").innerHTML = this.listTradStory[this.nLangue];
				document.getElementById("storyTell0").innerHTML = this.listTradStoryTell0[this.nLangue];
				document.getElementById("storyTell1").innerHTML = this.listTradStoryTell1[this.nLangue];
				document.getElementById("storyTell2").innerHTML = this.listTradStoryTell2[this.nLangue];
				document.getElementById("storyTell3").innerHTML = this.listTradStoryTell3[this.nLangue];
				document.getElementById("storyTell4").innerHTML = this.listTradStoryTell4[this.nLangue];
				document.getElementById("storyTell5").innerHTML = this.listTradStoryTell5[this.nLangue];
				document.getElementById("storyTell6").innerHTML = this.listTradStoryTell6[this.nLangue];
				document.getElementById("storyTell7").innerHTML = this.listTradStoryTell7[this.nLangue];
				document.getElementById("storyTell8").innerHTML = this.listTradStoryTell8[this.nLangue];
				document.getElementById("storyTell9").innerHTML = this.listTradStoryTell9[this.nLangue];
				document.getElementById("service").innerHTML = this.listTradService[this.nLangue];
				document.getElementById("includes").innerHTML = this.listTradIncludes[this.nLangue];
				document.getElementById("wifi").innerHTML = this.listTradWifi[this.nLangue];
				document.getElementById("tv").innerHTML = this.listTradTv[this.nLangue];
				document.getElementById("news").innerHTML = this.listTradNews[this.nLangue];
				document.getElementById("concierge").innerHTML = this.listTradConcierge[this.nLangue];
				document.getElementById("roomservice").innerHTML = this.listTradRoomservice[this.nLangue];
				document.getElementById("bar").innerHTML = this.listTradBar[this.nLangue];
				document.getElementById("shoeshine").innerHTML = this.listTradShoeshine[this.nLangue];
				document.getElementById("gaming").innerHTML = this.listTradGaming[this.nLangue];
				document.getElementById("pool").innerHTML = this.listTradPool[this.nLangue];
				document.getElementById("gym").innerHTML = this.listTradGym[this.nLangue];
				document.getElementById("extras").innerHTML = this.listTradExtras[this.nLangue];
				document.getElementById("laundry").innerHTML = this.listTradLaundry[this.nLangue];
				document.getElementById("parking").innerHTML = this.listTradParking[this.nLangue];
				document.getElementById("medical").innerHTML = this.listTradMedical[this.nLangue];
				document.getElementById("spa").innerHTML = this.listTradSpa[this.nLangue];

				document.getElementById("follow").innerHTML = this.listTradFollow[this.nLangue];
			}
		}
	}
</script>
   
   
<style>
   * {
	   margin: 0;
	   padding: 0;
	   font-family: sans-serif;
   }
   #About{ /* body of the About page */
		background-image: linear-gradient(to right top, transparent, mistyrose), url("../assets/background.jpg");
		background-size: cover;
	   background-position: center;
	   background-repeat: repeat-y; 
	   /*background-color: #F2D0CF; */
   }
   p {
	text-align: center;
   }

	/* Display the titles of the page */   
   #title{ 
	   margin: 20px auto;
	   font-weight: bold;
	   line-height: 25px;
	   color: white;
	   text-decoration: underline;
   }
   
   /* Style of the table */
   table td h2{
	   margin: 20px auto;
	   font-weight: bold;
	   line-height: 20px;
	   color: white;
	   text-decoration: underline;
   }
   
   table th{
	   color: black;
	   background-color: white;
   }
   
   .centertable{
	/* center the table */
	   margin-left: auto;
	   margin-right: auto;
	   
	   font-size: 18px;
   }
   
   /* DISPLAY THE IMAGES IN THE TABLE */
   
   #wifiI, #tvI, #newsI, #conciergeI, #roomserviceI, #barI, #shoeshineI, #gymI, #laundryI, #parkingI, #spaI {
	   border-radius: 20px;
	   box-shadow: 3px 3px;
	   width: 120px;
   }
   #gamingI, #poolI {
	   width: 100px;
   }
   
   #medicalI {
	   width: 90px;
   }
   
   #hide{
	/* to separate the different cells - pure esthetic (little hint) */
	   color: transparent;
   }
   
   /* Style of images, dark mode when hovering */
   .content table th:hover {
	   filter: invert(100%);
   }
</style>
   
