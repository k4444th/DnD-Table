<template>
    <div>
        <v-select :items="maps" label="Select Map" v-model="selected" @change="changeMap" return-object></v-select>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: ''
        }
    },
    methods: {
        changeMap() {
            for (let i = 0; i < this.maps.length; i++) {
                if (this.selected == this.maps[i]) {
                    this.selected = i;
                }
            }
            this.$store.commit("setCurrentMap", this.selected);
        }
    },
    computed: {
        maps() {
			return this.$store.state.maps
        },
        currentMap() {
			return this.$store.state.currentMap
        }
    }
}
</script>