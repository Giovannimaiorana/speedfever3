<script>
import AppLoading from './components/AppLoading.vue';
import sectionMotto from './pages/sectionMotto.vue';
import sectionLivree from './pages/sectionLivree.vue';
import AppSlider from './components/AppSlider.vue';
import AppPayment from './components/AppPayment.vue';
import AppPartner from './components/AppPartner.vue';
import AppContact from './components/AppContact.vue';
import { useHead } from 'unhead'
import AppAbbonamenti from './components/abbonamentiComponent.vue';
import cardPrice from './components/cardPrice.vue';
import carouselLivree from './components/caroselloLivree.vue';

export default {

  components: {
    AppLoading,
    AppSlider,
    AppContact,
    AppPartner,
    AppPayment,
    sectionMotto,
    sectionLivree,
    AppAbbonamenti,
    carouselLivree,

    cardPrice
  },
  setup() {
    useHead({
        title: 'SpeedFever',
        meta: [
            {
            name: 'description',
            content: 'SpeedFever offre un servizio di telemetria live e overlays (widgets) con massima performance per il simracing. Studiato meticolosamente dagli ingegneri informatici per favorire le prestazioni hardware e assisterti nelle gare.',
            },
        ],
    })
},
  
}

</script>

<template>
   <!-- <div class="containerGeneral">

            <div class="containerStart"  id="primaSezione">
                <div class="video-overlay"></div>
ì                <video class="fullscreen-video" autoplay loop muted>
                <source src="/img/speedFeverBannerVideo.mp4" type="video/mp4">
                Your browser does not support the video tag.
                </video>
                 <a href="#primaSezione" class="logoWhite" @click="scrollToPrimaSezione">
                    <img class="logo" src="/img/biancoSuRosso.webp"  alt="">
                 </a>
                <div class="textLogo">
                    <p class="poppins-semibold text-white text-4xl">SPEED FEVER</p>
                    <p class="fonttitle poppins-light  text-white text-left  letteringSpace0 text-center">BE A BETTER  DRIVER</p> 
                </div>
                <div class="sezioneChangeLanguage">
                    <p class="text-white text-left text-sm"> <span class="activeLang">EN</span> / <span class="notActive">IT</span></p>

                </div>
              
                <div class="texTitle">
                    <p class=" poppins-semibold text-white md:text-2xl text-left"> <span class="text-7xl">SPEED FEVER </span>  </p>
                    <p class=" poppins-semibold text-white md:text-2xl text-left"> <span class="text-7xl  ">BE A  <span class="letteringSpaceBetter">BETTER </span></span> </p>
                    <p class=" poppins-semibold text-white md:text-2xl text-left">  <span class="text-7xl">DRIVER </span> </p>
                    <p class="poppins-light text-white text-left testoExtra letteringSpace0"> The Highest-Performing<br>  <span class=""> overlay application designed</span> <br> <span class=""> specifically for enhancing </span> <br> <span> the sim racing experience</span></p> 
                </div>
                <div class="texTitleMobile">
                    <p class=" poppins-semibold text-white text-7xl text-left">THE MOST </p>
                    <p class=" poppins-semibold text-white text-5xl text-left"> PERFORMING OVERLAY APP</p>
                    <p class=" poppins-semibold text-white text-3xl text-left"> FOR SIM RACING </p>


                </div>
          
                <div class="containerButton">
                      <button class="button type1">
                         <span class="btn-txt  poppins-semibold">DOWNLOAD</span>
                      </button>
                </div>
                <div class="containerButtonTest">
                    <div class="flex">
                        <p class=" poppins-medium text-white text-left letteringSpace0"> SCROLL TO EXPLORE  </p>
                        <img class="arrowDown" src="/img/arrow-down-solid.svg" alt="">
                    </div>
                </div>
                
               
            </div>
            

            <div class="containerWidget">
                <AppSlider></AppSlider>
            </div>      

        <div class="containerGeneralLivree">
            <div class="sezioneTitle">
               <p class="poppins-semibold text-white text-4xl text-center ">LIVREE DESIGN</p>
            </div>
            <carouselLivree/>
        </div>

        <div class="containerMotto">
               <sectionMotto/>
        </div>    


        <div class="containerPrice">
               <cardPrice/>
        </div>    
 
      
        <div class="containerContact">
            <AppContact/>
         </div>    
    </div>-->
    <div class="pageComing">
        <div class="wrapperComingLogo">
            <img src="/img/biancoSuRosso.webp" alt="">
            <p class=" poppins-light  text-white letteringSpace0 text-center text-xs">BE A BETTER  DRIVER</p> 

        </div>
        <div class="wrapperTextComing">
            <p class="poppins-semibold text-white text-5xl text-center">COMING SOON...</p>
        </div>

        <div class="wrapperSocialComing">
            <p class="poppins-semibold text-white text-xl text-center">FOLLOW US ON</p>

            <div class="containerSocial">
                <div class="logosocial">
                    <a href="https://www.instagram.com/speedfever_?igsh=bHBldXMxNGlkMHRm"> <img src="/img/logoinstagram.svg" alt="logo instagram"></a>
                </div>
                <div class="logosocial">
                    <a href="https://www.tiktok.com/@speed.fever"><img src="/img/logotiktok.svg" alt="logo tik tok"></a>
                </div>
                <div class="logosocial lastSocial">
                    <a href="https://www.youtube.com/channel/UCQw9VWJCOZsdcMFXKt6Ow1g"><img src="/img/logoyoutube.svg" alt="logo tik tok"></a>
                </div>
            </div>
        </div>

    </div>
    <AppLoading/>
</template>

<style scoped>
/**CSS PRIMA SEZIONE */
.containerGeneral{
    width: 100%;
    height: 100%;
}
.wrapperOne{
    width: 100%;
    height: 100%;
}
.containerStart{
    width: 100%;
    height: 100vh;
    position: relative;
}
.fullscreen-video {
  width: 100%; 
  height: 100%;
  object-fit: cover; 
}
.logoWhite{
    position: fixed;
    top: 13px; 
    left: 20px; 
    z-index: 1000; 
}
.logo{
    width: 70px;
    cursor: pointer;
}
.textLogo{
text-align: center;
position: absolute;
top: 19px;
left: 50%;
transform: translate(-50%);
z-index: 900;
}
.sezioneChangeLanguage{
text-align: center;
position: absolute;
top: 19px;
right: 2%;
z-index: 900;
}
.activeLang{
    color: #9d191d;
    cursor: pointer;
}
.notActive{
    cursor: pointer;
    color: white;
    font-size: 10px;
}
.texTitle{
text-align: center;
position: relative;
position: absolute;
bottom: 17%;
left: 1%;
z-index: 900;
}
.texTitleMobile{
    display: none;
}
.testoExtra{
    position: absolute;
    top: 70%;
    right: 4%;
    font-size: 8px;
}
.letteringSpace0{
    letter-spacing: 2px;
}
.letteringSpace{
    letter-spacing: 2px;
}
.letteringSpaceBetter{
    letter-spacing: 4px;
}
.overlayWritten{
    position: absolute;
    width: 820px;
    height: 257px;
    background-color: rgba(0, 0, 0, 0.646);
    left: 0;
    bottom: 8%;
}
.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,5.5),rgba(0,0,0,0.5), rgba(0,0,0,0));
}
.fonttitle{
    font-size: 7px
}
.buttonTest{
    width: 110px;
    height: 110px;
    border-radius: 50%;
    border: 2px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.5s ease; 
}
.buttonTest:hover{
    background-color: #9d191d;
}
.containerButtonTest{
    position: absolute;
    bottom: 5%;
    right: 2%;
}
.arrowDown{
    width: 15px;
    margin-left: 8px;
}
/**CSS SECONDA SEZIONE */
.containerWidget{
    width: 100%;
    height: 100vh;
    background-color: #9d191d;
    min-height: 500px;
}
/**CSS TERZA SEZIONE */
.containerMotto{
    width: 100%;
    height: auto;
    background-color: black;
}
.containerPrice{
    width: 100%;
    height: auto;
    background-color: black;
    background-image: url(/img/pattern2.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
/**CSS QUARTA SEZIONE */
.containerLivree{
    width: 100%;
    height: auto;
 
}

/**CSS QUINTA SEZIONE */
.containerPlan{
    width: 100%;
    height: auto;
    background-color: black;   
}

/**CSS SETTIMA SEZIONE */
.containerContact{
    width: 100%;
    height: auto;
    background-color:black;  
}
.containerGeneralLivree{
    width: 100%;
    height: auto;
    background-color:black;  
    padding-top: 20px;
}
/**BUTTON STYLE */
.containerButton{
    position: absolute;
    bottom: 70px;
    left: 50%;
    transform: translate(-50%);
}
.button {
  height: 50px;
  width: 200px;
  position: relative;
  background-color: transparent;
  cursor: pointer;
  border: 3px solid #9d191d;
  overflow: hidden;
  border-radius: 10px;
  color:#9d191d;
  transition: all 0.5s ease-in-out;
}

.btn-txt {
  z-index: 1;
  letter-spacing: 5px;
}

.type1::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  transition: all 0.5s ease-in-out;
  background-color:  #9d191d;
  border-radius: 30px;
  visibility: hidden;
  height: 10px;
  width: 10px;
  z-index: -1;
}

.button:hover {
  box-shadow: 1px 1px 200px #252525;
  color: #fff;
  border: none;
}

.type1:hover::after {
  visibility: visible;
  transform: scale(100) translateX(2px);
}
.pageComing{
    width: 100%;
    height: 100vh;
    background-color: black;
    background-image: url(/img/pattern2.png);
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.wrapperComingLogo{
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.wrapperComingLogo img{
    height: 20vh;
}
.wrapperTextComing{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.wrapperTextComing img{
    width: 15vw;
}
.wrapperSocialComing{
    width: 100%;
    display: flex;
    flex-direction: column;

}
.containerMail{
    width: 50%;
    display: flex;
    justify-content: flex-end;
    padding: 10px;
}
.containerSocial{
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;
    padding-bottom: 20px;
}
.logosocial img{
height: 30px;
}
.wrapperComingLogo p{
    margin-top: -40px;
}
/**MEDIA QUERY TABLET */
@media (max-width: 950px) {
    .containerPlan{
    width: 100%;
    height: 100vh;
    background-color: black;   
}
}
/**MEDIA QUERY MOBILE */
@media (max-width: 767px) {
.texTitle{
display: none;
}
.sezioneChangeLanguage{
    display: none;
}
.logoWhite{
display: none;
}
.containerButtonTest{
    position: absolute;
    bottom: 2%;
    right: 2%;
    font-size: 10px;
}
.arrowDown{
    width: 10px;
    margin-left: 5px;
}
.texTitleMobile{
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 2%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.containerButton{
    display: none;
}
.wrapperTextComing img{
    width: 50vw;
}
}
</style>
