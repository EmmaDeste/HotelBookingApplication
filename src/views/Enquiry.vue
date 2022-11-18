<template>
    <body>
        <header>
        <nav> 
            <img id="logo" src="../assets/logo.jpg"> 
            <ul class="menu"> 
                <li> <p v-on:click=link_home()> <span id="home"></span></p></li>
                    <li> <p v-on:click=link_rooms()> <span id="rooms"></span></p></li>
                    <li> <p v-on:click=link_booking()> <span id="booking"></span></p></li>
                    <li> <p v-on:click=link_restaurant()> <span id="restaurant"></span></p></li>
                    <li> <p v-on:click=link_about()> <span id="about"></span></p></li>
                    <li> <p><span id="enquiries"></span></p></li>
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
            <h1> <span id="know"></span> </h1>
            <br> 
            
            <form class="review-form">
                <h3> <span id="coord"></span>: </h3>
                <br>
                <label for="name"> <span id="name"></span>: </label>
                <input v-model="name"> 
                <br><br>
                <label for="password"> <span id="password"></span>: </label>
                <input v-model="password"> 

                <br><br><br>

                <h3> <span id="book"></span>: </h3>
                <br>
                <label for="checkinD"> <span id="inD"></span>: </label>
                <input v-model="checkinD"> 
                <br><br>
                <label for="checkoutD"> <span id="outD"></span>: </label>
                <input v-model="checkoutD"> 

                <br><br>

                <h3> <span id="type"></span>: </h3>
                <br>
                <label for="enqui"></label>
                <select v-model="enqui">
                    <option> <span id="billing"></span> </option>
                    <option> <span id="stay"></span> </option>
                    <option> <span id="serv"></span> </option>
                    <option> <span id="other"></span> </option>
                </select>

                <br><br>

                <h3> <span id="message"></span> </h3>
                <br>
                <label for="comment"></label>
                <input v-model="comment"> 
                
            </form>
            
            <br>

            <button id="listButton" v-on:click=listReviews()> SUBMIT </button>
            
            <br><br><br>

            <div readonly id="review_container" v-for="item in reviews">
                <b1>{{item.name}}</b1> : <b2>{{item.checkinD}}</b2> - <b2>{{item.checkoutD}}</b2>
                : <b3>{{item.comment}}</b3>
            </div>

            <br> <br> 

    <footer>
        <p> <b> <span id="follow"></span> </b> </p>
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
    name:'enquiry',
    data(){return {
        name: '',
        password: '',
        checkinD: '',
        checkoutD: '',
        enqui: '',
        comment: '',
        reviews: [],
        
        nLangue:1, 
        listTradHome:["TUIS","HOME","ACCUEIL","HOME","HOME"],
        listTradRooms:["KAMERS","ROOMS","CHAMBRES","ZIMMERS","CUARTO"],
        listTradBooking:["BESPREKING","BOOKING","RÉSERVER","BUCHUNG","RESERVAR"],
        listTradRestaurant:["RESTAURANT","RESTAURANT","RESTAURANT","RESTAURANT","RESTAURANTE"],
        listTradAbout:["OOR","ABOUT","À PROPOS","ÜBER","SOBRE"],
        listTradEnquiries:["NAVRAE","ENQUIRIES","RETOURS","ANFRAGEN","PREGUNTES"],
        listTradFeedbacks:["TERUGVOER","FEEDBACKS","AVIS","FEEDBACKS","CRITICA"],
        listTradContact:["KONTAK","CONTACT","CONTACT","KONTACT","CONTACTO"],
        listTradLanguage:["TAAL","LANGUAGE","LANGUE","SPRACHE","IDIOMA"],
        listTradKnow:["Laat weet ons jou navrae","Let us know your enquiries","Faites-nous savoir vos préoccupations","Teilen Sie uns Ihre Anfragen mit","Háganos saber sus consultas"],
        listTradCoord:["Jou koördinate","Your coordinates","Vos coordonnées","Ihre Koordinaten","Tus coordenadas"],
        listTradName:["Gee jou Naam","Enter your Name","Entrez votre Nom","Gib deinen Namen ein","Introduzca su Nombre"],
        listTradPassword:["Wagwoord","Password","Mot de passe","Passwort","Clave"],
        listTradBook:["Besonderhede van die bespreking","Details of the booking","Détails de votre réservation","Details zur Buchung","Detalles de la reserva"],
        listTradInD:["Voer jou Inklokdatum in","Enter your Check-in date","Entrez votre date de Check-in","Geben Sie Ihr Anreisedatum ein","Introduce tu fecha de Entrada"],
        listTradOutD:["Uitklokdatum","Check-out date","Date de Chack-out","Check-Outs Datum","Echa un Vistazo a la fecha"],
        listTradType:["Tipe navraag","Type of enquiry","Type de requête","Art der Anfrage","Tipo de consulta"],
        listTradBilling:["Fakturering","Billing","Facture","Abrechnung","Facturación"],
        listTradStay:["Jou verblyf","Your stay","Votre séjour","Dein Aufenthalt","Su estancia"],
        listTradServ:["Die dienste","The services","Nos services","Die Dienste","Los servicios"],
        listTradOther:["Ander","Other","Autre","Sonstiges","Otro"],
        listTradMessage:["Los jou boodskap","Leave your message","Rédigez votre message","Hinterlasse deine Nachricht","Deja tu mensaje"],
        listTradFollow:["Volg ons:","Follow us:","Suivez-nous:","Folge uns:","Síganos:"],
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
                document.getElementById("about").innerHTML = this.listTradAbout[this.nLangue];
                document.getElementById("enquiries").innerHTML = this.listTradEnquiries[this.nLangue];
                document.getElementById("feedback").innerHTML = this.listTradFeedbacks[this.nLangue];
                document.getElementById("contact").innerHTML = this.listTradContact[this.nLangue];
                document.getElementById("language").innerHTML = this.listTradLanguage[this.nLangue];

                document.getElementById("know").innerHTML = this.listTradKnow[this.nLangue];
                document.getElementById("coord").innerHTML = this.listTradCoord[this.nLangue];
                document.getElementById("name").innerHTML = this.listTradName[this.nLangue];
                document.getElementById("password").innerHTML = this.listTradPassword[this.nLangue];
                document.getElementById("book").innerHTML = this.listTradBook[this.nLangue];
                document.getElementById("inD").innerHTML = this.listTradInD[this.nLangue];
                document.getElementById("outD").innerHTML = this.listTradOutD[this.nLangue];
                document.getElementById("type").innerHTML = this.listTradType[this.nLangue];
                document.getElementById("billing").innerHTML = this.listTradBilling[this.nLangue];
                document.getElementById("stay").innerHTML = this.listTradStay[this.nLangue];
                document.getElementById("serv").innerHTML = this.listTradServ[this.nLangue];
                document.getElementById("other").innerHTML = this.listTradOther[this.nLangue];
                document.getElementById("message").innerHTML = this.listTradMessage[this.nLangue];

                document.getElementById("follow").innerHTML = this.listTradFollow[this.nLangue];
            },

            listReviews:function(event){
                if (this.name != '' && this.password != '' && this.checkinD != '' && this.checkoutD != '' && this.comment != '' ){
                    console.log("No empty boxes");
                    this.reviews.push({name: this.name, checkinD: this.checkinD, checkoutD: this.checkoutD, comment: this.comment});
                }
                else{
                    console.log("Info missing");
                    alert("Information missing");
                }
            }
            
            
            }}
</script>

<style>
b1{
    font-weight: bold;
    color: lightseagreen;
}
b2{
    font-weight: bold;
    color: green;
}
b3{
    font-weight: bold;
    color: orangered
}
</style>
