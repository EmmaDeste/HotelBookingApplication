<template>
 <body id="about">
	<header>
		<nav> 
			<img id="logo" src="../assets/logo.jpg"> 
			<ul class="menu"> 
					<li> <p v-on:click=link_home()> <span id="home"></span></p></li>
					<li> <p v-on:click=link_rooms()> <span id="rooms"></span></p></li>
					<li> <p v-on:click=link_booking()> <span id="booking"></span></p></li>
					<li> <p v-on:click=link_restaurant()> <span id="restaurant"></span></p></li>
					<li> <p v-on:click=link_events()> <span id="events"></span></p></li>
					<li> <p><span id="about"></span></p></li>
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
	
			 <!-- TODO: To set default language to english english()-->
			
			<h1> OUR STORY </h1>
			
		<p> Welcome to our website, I am Emma, the owner of this hotel.
			I'm 34 years old and i'm about to tell you the story of the famous five-star hotel EMA.

			Let me tell you first about my father Ibrahim, an incredible man that fought for liberty and humans rights.
			He told me how life was in South Africa a few years ago, black people weren't allowed to sit next to white people, nor eat at the same tables or even just be near them.
			They weren't considered as human beings! Then after he met Nelson Mandela, he found the motivation and the bravery to actively help them.
			So he created the hotel EMA in 1988, named after me, since as a baby I represented the hope of a new beginning, just like the hotel.
			Its purpose was to allow all black people to sleep, eat and live normally, while being respected and treated as they should be !
			I grew up in this hotel and eventually fell in love with this place. So, I took care of EMA ever since I became at the legal age to manage it 
			and preserve the values of my father. That way, I make the hotel evolve from a modest one to a five-star one. Now, everyone is welcome to come in and can live peacefully with the other customers.

			Alednam Noslen </p>
		
			<h1> OUR SERVICES </h1>
			
			<br> 
			
			<table class="centertable">
				
				<tr>
					<td colspan="5"> <h2> Includes </h2> </td>
				</tr>
				
				<tr> 
					<td> <img src="../assets/wifi.jpg"></td>
					<th style="border: 3px solid blue"> <span id="wifi"></span> </th>
					<td></td>
					<td> <img src="../assets/tv.jpg">  </td>
					<th style="border: 3px solid blue"> Smart TV - with streaming access </th>
				</tr>
				
				<tr> 
					<td> <img src="../assets/news.png"> </td>
					<th style="border: 3px solid purple"> Daily newspapers </th>
					<td></td>
					<td> <img src="../assets/concierge.jpg">  </td>
					<th style="border: 3px solid purple"> Concierge service </th>
				</tr>
				
				<tr> 
					<td style="filter: saturate(5)"> <img src="../assets/roomservice.jpg">  </td>
					<th style="border: 3px solid red"> <a href="restaurant.html"> Room service </a> </th>
					<td></td>
					<td style="filter: saturate(5)"> <img src="../assets/bar.jpg">  </td>
					<th style="border: 3px solid red"> Mini bar - with cocktail and wine </th>
				</tr>
				
				<tr> 
					<td> <img src="../assets/shoeshine.jpg"> </td>
					<th style="border: 3px solid black"> Shoeshine service </th>
					<td></td>
					<td> <img id="gaming" src="../assets/gaming.jpg">  </td>
					<th style="border: 3px solid black"> Gaming room </th>
				</tr>
				
				<tr> 
					<td style="filter: saturate(3)"> <img id="pool" src="../assets/pool.png"> </td>
					<th style="border: 3px solid aqua"> Pools - cold and warm </th>
					<td></td>
					<td style="filter: saturate(5)"> <img src="../assets/gym.png">  </td>
					<th style="border: 3px solid aqua"> Gym, yoga, and fitness </th>
				</tr>

				<td> <br> </td>
				
				<tr>
					<td colspan="5"> <h2> Extras </h2> </td>
				</tr>
				
				<tr> 
					<td> <img src="../assets/laundry.jpg"> </td>
					<th style="border: 3px solid green"> Laundry service </th>
					<td id="hide"> --------------- </td>
					<td> <img src="../assets/parking.png"> </td>
					<th style="border: 3px solid green"> Parking valet </th>
				</tr>
				
				<tr> 
					<td style="filter: saturate(5)"> <img id="medical" src="../assets/medical.png"> </td>
					<th style="border: 3px solid lightgreen"> Medical team </th>
					<td></td>
					<td style="filter: saturate(5)"> <img src="../assets/spa.jpg">  </td>
					<th style="border: 3px solid lightgreen"> Spa treatments </th>
				</tr>
			
		</table>
		
	<br> <br> <br>
</body>
</template>


<script>
  export default{
    name:'about',
    data(){return {listTradWifi:["Gratis WiFi","Free WiFi","WiFi gratuit","WiFi kostenlos","Gratis WiFi"],
                    nLangue:1}},
    methods:{
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
				document.getElementById("wifi").innerHTML = this.listTradWifi[this.nLangue];
			}}}
		</script>


<style>
* {
	margin: 0;
	padding: 0;
	font-family: sans-serif;
}

#about{
	width: 100%;
	position: absolute;
	text-align: center;
	
	background-image: linear-gradient(to right top, transparent, mistyrose), url("../assets/background.jpg");
	background-size: cover;
	background-position: center;
	background-repeat: repeat-y; 
	
	/*background-color: #F2D0CF; */
}

#logo {
	width: 120px;
	cursor: pointer;
}

nav {
	width: 85%;
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
	bottom: 1px;
	background-color: yellow;
}

/*add*/
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

nav p:hover{
	color: orange;
	border-bottom: 2px solid gold;
}

.options{
	display: none;
	box-shadow: 0px 1px 2px #CCC;
	background-color: pink;
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

#eng:hover, #fr:hover, #ge:hover{
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

/*add END*/


#world{
	width: 22px;
}


h1{
	margin: 20px auto;
	font-weight: bold;
	line-height: 25px;
	color: white;
	text-decoration: underline;
}

table{
	empty-cells: hide;
}

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
	margin-left: auto;
	margin-right: auto;
	
	font-size: 18px;
}


img{
	border-radius: 20px;
	box-shadow: 3px 3px;
	width: 120px;
}

#gaming, #pool {
	width: 100px;
}

#medical{
	width: 90px;
}

#hide{
	color: white;
}

img:hover, .content table th:hover {
	filter: invert(100%);
}
</style>

