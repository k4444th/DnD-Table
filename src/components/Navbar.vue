<template>
    <div>
        <v-app-bar app color="primary" dark height="75">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <router-link to="/">
                <!-- <v-toolbar-title class="white--text">D&D-Table</v-toolbar-title> -->
              <!--   <v-btn class="red accent-1" height="52" width="40">
                </v-btn> -->
                <img src="../../public/img/logo_white.png" height="70">
            </router-link>
            <v-spacer></v-spacer>
            <v-btn icon @click="toggleDarkTheme()">
                <v-icon>mdi-theme-light-dark</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" temporary app width="165">
            <v-list nav dense>
                <img src="../../public/img/logo.png" width="150px">
                <br><br><hr><br>

                <v-list-item-group v-model="group" active-class="deep-orange--text text--darken-4">
                <router-link to="/">
                    <v-list-item> 
                        <v-list-item-icon>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>Home</v-list-item-content>
                    </v-list-item>  
                </router-link>

                <router-link to="/gamemaster">
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-pencil-outline</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>Create</v-list-item-content>
                    </v-list-item>
                </router-link>

                <router-link to="/player">
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-account-plus-outline</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>Join</v-list-item-content>
                    </v-list-item>
                </router-link>

                <router-link to="/tv">
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-television</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>TV</v-list-item-content>
                    </v-list-item>
                </router-link>

                <router-link to="/about">
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-application-braces-outline</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>About</v-list-item-content>
                    </v-list-item>
                </router-link>

				<router-link to="/admin">
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-wrench</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>Admin</v-list-item-content>
                    </v-list-item>
                </router-link>

                <br><hr><br>

                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>Thesis: DnD-Table</v-list-item-title>
                        <v-list-item-subtitle>Livia Löw</v-list-item-subtitle>
                        <v-list-item-subtitle>Tobias Herbitschek</v-list-item-subtitle>
                        <v-list-item-subtitle>Katharina Weinberger</v-list-item-subtitle>
                        <v-list-item-subtitle>© 2022 - 2023</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
  export default {
    data: () => ({
        drawer: false,
        group: null,
    }),

    watch: {
        group () {
        this.drawer = false
        },
    },

    methods: {
        toggleDarkTheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        },
    }
  };
</script>

<style scoped>
    a {
        text-decoration: none;
    }
</style>