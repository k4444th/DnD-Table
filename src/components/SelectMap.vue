<template>
    <div>
        <v-select :items="maps" label="Select Map" v-model="selected" @change="changeMap"></v-select>
        {{ selected }}
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