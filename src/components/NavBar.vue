<template>
    <div id="NavBar">
        <v-app-bar
            class="mt-5"
            color="primary"
            dark
        >
            <v-app-bar-nav-icon
                v-if="$vuetify.breakpoint.mdAndDown"
                @click.stop="toggleNavbar">
            </v-app-bar-nav-icon>
            <v-toolbar-title class="font-italic">Sadegh Movies</v-toolbar-title>

            <v-spacer/>
            <div v-if="$vuetify.breakpoint.smAndUp" class="navigation">
                <v-btn text
                       class="text-none navigation-btn"
                > Home
                </v-btn>
                <v-btn text
                       class="text-none navigation-btn"
                > Movies
                </v-btn>
                <v-btn text
                       class="text-none navigation-btn"
                > Tv Shows
                </v-btn>
                <v-btn text
                       class="text-none navigation-btn"
                > Explore
                </v-btn>
            </div>
            <v-spacer/>
            <div v-if="!$vuetify.breakpoint.mdAndDown">
                <v-btn
                    color="secondary"
                    fab
                    dark
                >
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn
                    color="secondary"
                    class="text-none py-7 px-8 ml-3"
                    rounded
                    large>
                    Login
                </v-btn>

                <v-btn
                    color="#ffffff"
                    class="text-none signUpBtn py-7 px-8 ml-3"
                    rounded
                    large>
                    Sign Up
                </v-btn>
            </div>
        </v-app-bar>
        <v-navigation-drawer
            class="navigationDrawer"
            v-model="drawer"
            absolute
            temporary
        >
            <v-list
                nav
                dense
            >
                <v-list-item-group
                    active-class="deep-purple--text text--accent-4"
                >
                    <v-list-item>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title>Movies</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title>Tv Shows</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title>Explore</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
            <template v-slot:append>
                <div class="px-2 py-1">
                    <v-btn
                        color="secondary"
                        class="text-none"
                        block>
                        Login
                    </v-btn>
                </div>
                <div class="px-2 py-1 ">
                    <v-btn
                        color="#ffffff"
                        class="text-none signUpBtn"
                        block>
                        Sign Up
                    </v-btn>
                </div>
            </template>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    data() {
        return {
            drawer: false
        }
    },
    methods: {
        toggleNavbar() {
            this.drawer = !this.drawer;
        }
    }
}

</script>

<style scoped>
.navigation {
    background-color: #141414;
    border-radius: 30px;
    padding: 10px 20px 10px 20px;
    margin-left: 180px;
}

.navigation-btn {
    color: #888888 !important;
    font-size: small;
}

.signUpBtn {
    color: #141414 !important;
}


@media (max-width: 1264px) {
    .navigation {
        margin-left: auto;
        margin-right: auto;
    }

}

</style>