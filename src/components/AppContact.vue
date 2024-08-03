<script>

</script>

<template>
<div class="containerPartner">
    <div class="sliderBackground layer1"></div>
    <div class="containerContact">   
        <div class="containerIntestazion">
           <img class="logo" src="/img/logobianco.png" alt="">
        </div>

        <div class="containerInfo">
            <div class="containerMail">
                <p class="font-bold text-white anta-regular text-lg">speedfever@outlook.it</p>
            </div>
            <div class="containerSocial">
                <div class="logosocial">
                    <a href="https://www.instagram.com/speed.fever_/"> <img src="/img/logoinstagram.svg" alt="logo instagram"></a>
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
</div>

</template>

<style scoped>
.containerPartner{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
}
.sliderBackground {
  position: absolute;
  background-color: black;
  top: -1px;
  left: 0;
  width: 100%;
  height: 100%;
}
.layer1{
  opacity: 1;
  clip-path: polygon(0 0, 90% 0, 80% 100%, 0 100%);
  z-index: 2;

}
/**CSS CONTAINER CONTACT */
.containerContact{
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    z-index: 2;
}
.containerIntestazion{
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.containerInfo{
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
}
.containerSocial{
    display: flex;
    height: 100%;
    justify-content: flex-end;
}
.logosocial{
    width: 30px;
    margin-right: 20px;
    cursor: pointer;
}
.containerName{
    height: 100%;
}
.containerMail{
    height: 100%;
}
.lastSocial{
    margin-right: 0;
}
.logo{
    width: 400px;
}

</style>