<template>
    <router-link :to="preview.url" tag="v-btn">
        <v-btn rounded dark x-large block color="primary">
            <v-icon x-large>{{ preview.icon }}</v-icon>
            <h5>&nbsp; {{ preview.name }}</h5>
        </v-btn>
    </router-link>
</template>

<script>
    export default {
        props: {
            preview: Object
        },
    };
</script>

<style scoped>
    .v-btn {
        height: 150px !important;
        font-size:large;
        opacity: 0.8;
    }

    .v-btn:hover {
        opacity: 1;
    }
</style>