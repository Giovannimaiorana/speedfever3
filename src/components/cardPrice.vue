<script>

</script>
<template>
    <div class="cardPriceContainer">
        <div class="sezioneTitle">
            <p class="poppins-semibold text-white text-4xl text-left ">SCEGLI IL TUO PIANO</p>
        </div>
        <div class="wrapperCard mt-10">
            <div class="cardSmall">
                <div class="titleCard">
                    <p class="poppins-semibold text-white text-2xl text-left ">MENSILE</p>
                </div>
                <div class="bodyCard">
                    <p class=" poppins-light  text-white text-left mt-3 text-sm"> - ACCESSO A TUTTI GLI OVERLAY</p> 
                    <p class=" poppins-light  text-white text-left mt-2 text-sm"> - NESSUN LIMITE DI FPS</p> 
                    <p class=" poppins-light  text-white text-left mt-2 text-sm"> - NESSUN LIMITE DI PERSONALIZZAZIONE</p> 
                </div>
                <div class="bodyPrice">
                    <p class=" poppins-semibold  text-white text-left mt-5 text-2xl"> 4.90€</p> 
                </div>
                <div class="bodyPrice mt-5">
                    <button class="button type1">
                         <span class="btn-txt poppins-semibold">DOWNLOAD</span>
                      </button>
                </div>
            </div>
            <div class="cardBig">
                <div class="titleCard">
                    <p class="poppins-semibold text-white text-2xl text-left evidenceColor">TRIMESTRALE</p>
                </div>
                <div class="bodyCard">
                    <p class=" poppins-light  text-white text-left mt-3 text-sm"> - ACCESSO A TUTTI GLI OVERLAY</p> 
                    <p class=" poppins-light  text-white text-left mt-2 text-sm"> - NESSUN LIMITE DI FPS</p> 
                    <p class=" poppins-light  text-white text-left mt-2 text-sm"> - NESSUN LIMITE DI PERSONALIZZAZIONE</p> 
                </div>
                <div class="bodyPrice">
                    <p class=" poppins-semibold  text-white text-left mt-5 text-2xl evidenceColor"> 13.50€</p> 
                </div>
                <div class="bodyPrice mt-12">
                    <button class="button type1">
                         <span class="btn-txt poppins-semibold">DOWNLOAD</span>
                      </button>
                </div>
                
            </div>
            <div class="cardSmall">
                <div class="titleCard">
                    <p class="poppins-semibold text-white text-2xl text-left ">ANNUALE</p>
                </div>
                <div class="bodyCard">
                    <p class=" poppins-light  text-white text-left mt-3 text-sm"> - ACCESSO A TUTTI GLI OVERLAY</p> 
                    <p class=" poppins-light  text-white text-left mt-2 text-sm"> - NESSUN LIMITE DI FPS</p> 
                    <p class=" poppins-light  text-white text-left mt-2 text-sm"> - NESSUN LIMITE DI PERSONALIZZAZIONE</p> 
                </div>
                <div class="bodyPrice">
                    <p class=" poppins-semibold  text-white text-left mt-5 text-2xl"> 49.90€</p> 
                </div>
                <div class="bodyPrice mt-5">
                    <button class="button type1">
                         <span class="btn-txt poppins-semibold">DOWNLOAD</span>
                      </button>
                </div>
            </div>
        </div>

        <div>


        </div>

    </div>
</template>
<style scoped>
.cardPriceContainer{
    height: 100%;
    width: 100%;
    padding: 20px;
}
.wrapperCard{
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-between;
}
.cardSmall{
    width: 25%;
    height: auto;
    border-radius: 10px;
    padding: 20px;
    padding-bottom: 50px;
    background-color: rgba(0, 0, 0, 0.476);
    backdrop-filter: blur(2px);
    box-shadow: 0 0 5px 1px rgba(255, 255, 255, 0.18);


}
.cardBig{
    width: 30%;
    height: auto;
    padding: 20px;
    padding-bottom: 50px;

    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.476);
    backdrop-filter: blur(2px);
    box-shadow: 0 0 5px 1px rgba(255, 255, 255, 0.18);
}
.evidenceColor{
    color: #9d191d;
}
.titleCard{
    width: 100%;
}
.bodyPrice{
    width: 100%;
    display: flex;
    justify-content: center;
}
.sezioneTitle{
    width: 100%;
    display: flex;
    justify-content: center;
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

@media (max-width: 767px) {
    .wrapperCard{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    justify-content: space-between;
}
.cardSmall{
    width: 100%;
    height: auto;
    border-radius: 10px;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.476);
    backdrop-filter: blur(2px);
    box-shadow: 0 0 5px 1px rgba(255, 255, 255, 0.18);


}
.cardBig{
    width: 100%;
    height: auto;
    padding: 20px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.476);
    backdrop-filter: blur(2px);
    box-shadow: 0 0 5px 1px rgba(255, 255, 255, 0.18);
}
}
</style>