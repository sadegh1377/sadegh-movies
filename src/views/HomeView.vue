<template>
    <div>
        <TopBanner/>
        <TrendingMovies/>
    </div>
</template>

<script>

import TopBanner from "@/components/TopBanner.vue";
import TrendingMovies from "@/components/TrendingMovies.vue";

export default {
    name: 'HomeView',

    components: {TrendingMovies, TopBanner},
}
</script>
