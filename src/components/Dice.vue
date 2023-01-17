<template>
    <div>
        <div class="overlay" @click="hide"></div>
        <v-btn fab dark small color="primary" @click="rollDice">
            <v-icon dark>mdi-dice-5-outline</v-icon>
        </v-btn>
        <div class="dice-container">
            <img :src="'/dice/' + number + '.png'" :alt="number" class="dice" @click="hide">
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                dialog: false,
                number: 0
            }
        },
        methods: {
            rollDice() {
                this.number = Math.floor(Math.random() * 20 + 1);

                let img = document.querySelector(".dice");
                let overlay = document.querySelector(".overlay");
                img.style.opacity = 1;
                overlay.style.display = "block";
                overlay.style.opacity = 1;
                img.style.width = "500px";
            },
            hide() {
                let img = document.querySelector(".dice");
                let overlay = document.querySelector(".overlay");
                img.style.opacity = 0;
                overlay.style.opacity = 0;
                overlay.style.display = "none";
                img.style.width = "0px";
            }
        }
    };
</script>

<style scoped>
.dice {
    z-index: 10;
    position: relative;
    left: -40px; 
    right: 0; 
    top: 0;
    bottom: 0;
    margin: auto; 

    opacity: 0;
    -webkit-transition: opacity 1s ease;
    -moz-transition: opacity 1s ease;
    -ms-transition: opacity 1s ease;
    -o-transition: opacity 1s ease;
    transition: opacity 1s ease;

    width: 0px;
    -webkit-transition: width 1s ease;
    -moz-transition: width 1s ease;
    -ms-transition: width 1s ease;
    -o-transition: width 1s ease;
    transition: width 1s ease;
}

.overlay {
    position: fixed;
    display: none;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 9;
    cursor: pointer;

    opacity: 0;
    -webkit-transition: opacity 1s ease;
    -moz-transition: opacity 1s ease;
    -ms-transition: opacity 1s ease;
    -o-transition: opacity 1s ease;
    transition: opacity 1s ease;
}
</style>