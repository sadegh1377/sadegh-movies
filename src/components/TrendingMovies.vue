<template>
    <div id="TrendingMovies" class="mx-3">
        <h4>
            <v-icon>mdi-movie</v-icon>
            Trending Movies
        </h4>
        <div class="movieCardContainer row d-flex justify-space-around pb-16">
            <v-card
                v-for="(movie, index) in 10"
                :key="index"
                :loading="loading"
                class="movieCard my-10"
                max-width="250"
            >
                <template slot="progress">
                    <v-progress-linear
                        color="deep-purple"
                        height="10"
                        indeterminate
                    ></v-progress-linear>
                </template>
                <div class="pa-4 pb-0 cardImage">
                    <v-img
                        class="cardImage"
                        height="250"
                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    ></v-img>
                </div>

                <v-card-title>Game Of Thrones</v-card-title>

                <v-row
                    align="center"
                    class="mx-0"
                >
                </v-row>

                <v-card-text>
                    <v-chip-group
                        v-model="selection"
                        active-class="white--text"
                        column
                    >
                        <v-chip color="primary">2011-2019</v-chip>
                        <v-chip color="primary">57m</v-chip>
                    </v-chip-group>
                </v-card-text>

                <v-card-actions>
                    <v-btn
                        color="#E5C41A"
                        class="imdbBtn mx-2 mb-1"
                        elevation="2"
                    >IMDB 8.2</v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>

<script>
export default {
    name: "TrendingMovies"
}

</script>

<style scoped>
.movieCardContainer {
    width: 100%;
}

.movieCard {
    border: 1px solid #2d2d2d;
    border-radius: 30px;
    color: #FBFBFB;
}

.cardImage {
    border-radius: 20px;
}

.imdbBtn {
    color: #000000 !important;
    border-radius: 12px;
    font-size: 13px!important;
}

.d-flex {
//gap:100px 20px
}
</style>