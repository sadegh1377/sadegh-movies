<template>
    <v-app style="background-color: #000000">
        <NavBar/>
        <v-main>
            <router-view/>
        </v-main>
    </v-app>
</template>

<script>

import NavBar from "@/components/NavBar.vue";

export default {
    name: 'App',
    components: {NavBar},

    data: () => ({
        //
    }),
};
</script>
