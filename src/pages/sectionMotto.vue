<script>

</script>

<template>
    <div class="containerGeneral">
        <div class="wrapperContainer">
            <div class="containerTitleMotto">
                <p class="text-white testStyle titleStyle">OUR STAFF</p>
            </div>
            <div class="wrapperTitleContainer">
                <div class="containerLogo">
                    <img class="logo" src="/img/biancoSuRosso.webp" alt="">
                </div>
                <div class="containerMotto">
                    <p class=" anta-regular text-white text-2xl styleDescription ">"Speed Fever concept is Quality. Helping the community, drivers and engineers to get better performance is our goal."</p>
                </div>
            </div>
           
        </div>
    </div>

</template>

<style scoped>
.containerGeneral{
    width: 100%;
    height: 100%;
    padding: 40px;

}
.wrapperContainer{
    width: 90%;
    margin: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.containerLogo{
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.containerMotto{
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px;
}
.containerTitleMotto{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
img{
    width: 200px;
}
.wrapperTitleContainer{
    display: flex;
    width: 100%;
    margin-top: 50px;
}
.testStyle{
    font-family: 'test';
}
.titleStyle{
    font-size: 70px;
}
/**MEDIA QUERY TABLET */
@media (max-width: 950px) {
    .wrapperContainer{
    width: 90%;
    margin: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.containerLogo{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.containerMotto{
    width: 100%;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 10px;
}
img{
    width: 200px;
    padding-bottom: 40px;
}
.wrapperTitleContainer{
    flex-direction: column;
    padding: 40px;
}
.titleStyle{
    font-size: 40px;
}
.styleDescription{
    font-size: 18px;
}
}
</style>