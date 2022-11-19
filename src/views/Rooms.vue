<template>
    <body class="room_page">
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
			  <!-- ************************************************************** standard room part **************************************************************-->


			  <div class="banner">
      <div class="banner_room">
        <img class="eco_room_banner" src="../assets/eco_room1.jpeg" alt="economy_room1">
      </div>
    </div>

      <div class="booking_selection">
        <form class="date" action="">
          <label for="calendar">Check-in date : </label>
          <input type="date" id="checkin" name="checkin">
        </form>
        <form class="date" action="">
          <label for="calendar">Check-out date: </label>
          <input type="date" id="checkout" name="checkout">
        </form>
        <form class="nb_adult" action="">
          <label for="adult">Adults :</label>
          <input type="number" id="adult" name="adult" step="1">
        </form>
        <form class="nb_kids" action="">
          <label for="kids">Children :</label>
          <input type="number" id="kids" name="kids" step="1">
          <input type="submit">
        </form>
        </div>

    <div class="room_info">

    	<div class="room_intro">
        	<h2>Standard Room N01 </h2>
      	</div>

    	<div class="eco_desc">
			<div class="room_info_left">
				<p>View: Center of the city </p>
				<p>Size: 462 ft² / 43 m² </p>
				<p>Bedding: 2 beds </p>
				<p>Occupancy: up to 2 people</p>
			</div>
        	<div class="room_desc_right">
				<p>If you're in search of an enjoyable time, come choose our standard room. This room offers enough space for you to spend quality time. We are honored of your presence
				so we want to make sure to repay you your trust. Therefore, enjoy all the different amenities that we offer you. Find the following list of everything that
				is at your disposition. </p>
			</div>

    	</div>

		<div class="room_amenities">
			<h3>Amenities: </h3>
			<img src="../assets/standard.jpg" style=" width: 100%; height: 70%; border: 0; decoration : none;" alt="double_bed"> 
			
		</div>



    </div>

    <!-- ************************************************************** economy room part **************************************************************-->

    <div class="banner_economy_room">
      <div class="economy_room_pic_banner">
        <img src="../assets/eco_room_banner.png" style="width:100%;" alt="king_bed">
      </div>
    </div>

    <div class="booking_selection">
      <form class="date" action="">
        <label for="calendar">Check-in date : </label>
        <input type="date" id="checkin" name="checkin">
      </form>
      <form class="date" action="">
        <label for="calendar">Check-out date: </label>
        <input type="date" id="checkout" name="checkout">
      </form>
      <form class="nb_adult" action="">
        <label for="adult">Adults :</label>
        <input type="number" id="adult" name="adult" step="1">
      </form>
      <form class="nb_kids" action="">
        <label for="kids">Children :</label>
        <input type="number" id="kids" name="kids" step="1">
        <input type="submit">
      </form>
    </div>

  <div class="room_info">

    <div class="room_intro">
      <h2>Economy Room N02 </h2>
    </div>

    <div class="eco_desc">

      <div class="room_info_left">
        <p>View: Center of the city </p>
        <p>Size: 538 ft² / 50 m² </p>
        <p>Bedding: 2 beds </p>
        <p>Occupancy: up to 2 people</p>

      </div>
      <div class="room_desc_right">
        <p>A modern and classy room.
          Embodying the spirit of hospitality, the interior design is an
          harmonious blend of modern elements. The bathing area features a spacious bathtub hewn from stone.
           A graceful and tranquil space to return to after your serene and delightful city adventures.
         </p>
      </div>

    </div>

	<div class="room_amenities">
		<h3>Amenities: </h3>
		<img src="../assets/economy.jpg" style=" width: 100%; height: 70%; border: 0; decoration : none;" alt="double_bed"> 
	</div>

  </div>

 <!-- ************************************************************** suite room part **************************************************************-->

 <div class="banner_economy_room">
   <div class="economy_room_pic_banner">
     <img src="../assets/suite_home.jpeg" style="width:100%;height: 800px;" alt="king_bed">
   </div>
 </div>

 <div class="booking_selection">
   <form class="date" action="">
     <label for="calendar">Check-in date : </label>
     <input type="date" id="checkin" name="checkin">
   </form>
   <form class="date" action="">
     <label for="calendar">Check-out date: </label>
     <input type="date" id="checkout" name="checkout">
   </form>
   <form class="nb_adult" action="">
     <label for="adult">Adults :</label>
     <input type="number" id="adult" name="adult" step="1">
   </form>
   <form class="nb_kids" action="">
     <label for="kids">Children :</label>
     <input type="number" id="kids" name="kids" step="1">
     <input type="submit">
   </form>
 </div>

<div class="room_info">

 <div class="room_intro">
   <h2>Suite Room N03 </h2>
 </div>

 <div class="eco_desc">

   <div class="room_info_left">
     <p>View: Garden </p>
     <p>Size: 1087–1194 ft² / 101–111m² </p>
     <p>Bedding: 1 King </p>
     <p>Occupancy: 3 </p>

   </div>
   <div class="room_desc_right">
     <p>Measuring over 100m² and consisting of separate living room and bedroom areas,
        the Suite room is the perfect place to enjoy the four seasons – the breathtaking beauty of nature in the spring,
        in summer the garden is resplendently verdant,
        the colors of autumn are so striking, and in winter the snowscape is a wonder to behold. </p>
   </div>
   </div>

 </div>
      <div class="room_amenities">
        <h3>Amenities: </h3>
		<img src="../assets/suite.jpg" style=" width: 100%; height: 70%; border: 0; decoration : none;" alt="double_bed">   
	</div>

    
</body>

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

</template>


<style scoped>
		/*border: 2px solid black;*/

	.eco_room_banner{
	width: 100%;
	height: 10%;
	}

	.booking_selection{
	background-color: white;
	display: flex;
	flex-direction: row;
	font-size: 20px;
	padding: 15px;
	margin-left: 25%;
	margin-bottom: 5%;
	width: 1000px;
	height: 70px;
	position: relative;
	opacity: 0.95;
	justify-content: center;
	align-items: center;
	}

	p{
	font-size: 20px;
	}

	.eco_desc{
	display: flex;
	flex-direction: row;
	height: 300px;
	margin-bottom: 5%;
	}

	.room_intro{
	display: flex;
	flex-direction: column;
	text-align: center;
	margin-top: auto;
	border-bottom : solid 1px black;
	}

	.room_info_left{
	width: 50%;
	height: 100%;
	border-right : solid 1px black;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	}

	.room_desc_right{
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 30px;

	}

	.room_page{
	background-color: #e6e2d3;
	}

	.booking_select{
	display: flex;
	flex-direction: row;
	align-items: center;
	font-size: 40px;
	}

	.room_amenities{
	width: 50%;
	margin-bottom: 100px;
	}




	img{
	border-radius: 0px;
	box-shadow: 0px 0px;

	}

	img:hover {
	filter: invert(0%);
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
	  link_restaurant: function(event){
        this.$router.push({path: '/restaurant'})
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