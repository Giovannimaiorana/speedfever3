<script>
export default {
  data() {
    return {
      // Indice dell'immagine attualmente visibile
      currentImage: 0,
      // Array di immagini
      images: [
        {
            image:"/img/astonmartin.png",
            title:'ASTON MARTIN',
            model:'Vantage'
        },
        {
            image:"/img/bmw.png",
            title:'BMW',
            model:'Serie 4'
        },
        {
            image:"/img/ferrari.png",
            title:'FERRARI',
            model:'296 GTB'
        },
        {
            image: "/img/mclaren.png",
            title:'MCLAREN',
            model:'765 LT'
        },
        {
            image: "/img/mercedes.png",
            title:'MERCEDES',
            model:'AMG GT'
        },
        {
            image: "/img/porsche.png",
            title:'PORSCHE',
            model:'911 GTS'
        },
        
       ]
    };
  },

  methods: {
    // Passa alla prossima immagine
    nextImage() {
      this.currentImage = (this.currentImage + 1) % this.images.length;
    },
    prevImage() {
        this.currentImage = (this.currentImage - 1 + this.images.length) % this.images.length;
    }
  }
};
</script>

<template>
    <div class="wrapperLivree">
        <div class="imgPosition">
            <img :src="images[currentImage].image"  alt="">
        </div>
        <div class="halfCOntainerLivree">
            <div>

            </div>
            <div class="secondContainer">
                <div >

                </div>

            </div>
            <div class="firstTn" >
                <p @click="nextImage" class=" poppins-semibold text-white text-left spacing cursor-pointer">- PREV </p>
            </div>
        </div>




        <div class="halfCOntainerLivree">
            <div class="thirdContainer">
                <div class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" stroke="white" viewBox="0 0 24 24" stroke-width="1.5"  class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                    </svg>
                    <p class=" poppins-semibold text-white text-left spacing cursor-pointer ml-3"> SHARE</p>
                </div>

            </div>
            <div class="secondContainer">
                <div>
                    <p  class=" poppins-semibold text-white text-left spacing cursor-pointer text-5xl"> {{ images[currentImage].title }} </p>
                    <p  class=" poppins-light text-white text-left spacing cursor-pointer text-xl"> {{ images[currentImage].model }} </p>

                </div>

            </div>
            <div class="thirdContainer">
                <p @click="nextImage" class=" poppins-semibold text-white text-left spacing cursor-pointer"> NEXT - </p>
            </div>
        </div>
        
    </div>
    <!--<div class="wrapperInformation">
            <p @click="prevImage" class=" poppins-semibold text-white text-left spacing cursor-pointer"> - PREV </p>
            <p @click="nextImage" class=" poppins-semibold text-white text-left spacing cursor-pointer"> NEXT - </p>
        </div>-->
</template>

<style scoped>
.wrapperLivree{
    position: relative;
    width: 100%;
    height: 500px;
    background-image: url(/img/DESIGN2.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 20px;
    display: flex;
}
.sezioneTitle{
    width: 100%;
}
.imgPosition{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.wrapperInformation{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 20px;
}
.spacing{
    letter-spacing: 3px;
}
.halfCOntainerLivree{
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.secondContainer{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    padding-left: 250px;
}
.thirdContainer{
    width: 100%;
    display: flex;
    justify-content: end;
}
.iconwid{
    width: 20px;
}
.thirdContainer p:hover{
    color: #9d191d;
}
.firstTn{
    width: 100%;
    display: flex;
    justify-content: start;
}
.firstTn p:hover{
    color: #9d191d;
}
</style>