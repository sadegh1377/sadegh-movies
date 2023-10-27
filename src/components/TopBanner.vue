<template>
    <div id="TopBanner" class="text-center">
        <div class="mt-16">
            <h1 class="text-uppercase bannerTitle">
                feel the movie: take our quiz to determine your mood
                <span class="emoji ">🤩</span> for the perfect viewing experience
            </h1>
            <v-btn
                color="#F8754C"
                class="text-none mt-10 quizBtn px-10 py-8"
                large
                rounded
            >
                Take The<span class="text-uppercase">&nbsp;Quiz</span>
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: "TopBanner"
}

</script>

<style scoped>
.bannerTitle {
    margin-right: 20%;
    margin-left: 20%;
    line-height: 35px;
    text-align: center;
}

.quizBtn {
}

.emoji {
    /*border-radius: 50%;*/
//-webkit-box-shadow: 0px 0px 3px 23px rgba(221, 111, 233, 0.73); //box-shadow: 0px 0px 3px 23px rgba(221, 111, 233, 0.73);
}
</style>