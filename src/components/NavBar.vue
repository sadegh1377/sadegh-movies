<template>
    <div id="NavBar">
        <v-app-bar
            class="mt-5"
            color="primary"
            dark
        >
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
            <v-app-bar-nav-icon
                v-if="$vuetify.breakpoint.mdAndDown"
                @click.stop="toggleNavbar"></v-app-bar-nav-icon>
            <div v-else>
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
            <v-navigation-drawer
                class="navigationDrawer"
                v-model="drawer"
                absolute
                right
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
                        <v-list-item class="loginBtnBg">
                            <v-list-item-title class="loginBtn text-center">Login</v-list-item-title>
                        </v-list-item>
                        <v-list-item class="signUpBtnBg">
                            <v-list-item-title class="signUpBtn text-center">Sign Up</v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-navigation-drawer>
        </v-app-bar>
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

.loginBtnBg {
    background-color: #141414;
}

.loginBtn {
    color: #888888;
}

.signUpBtnBg {
    background-color: #ffffff;
}

.navigationDrawer {
    height: 100vh !important;
    margin-top: -20px;
}

@media (max-width: 1264px) {
    .navigation {
        margin-left: auto;
        margin-right: auto;
    }

}

</style>