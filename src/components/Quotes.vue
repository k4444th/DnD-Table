<template>
    <v-row>
        <v-col v-for="quote in quotes" :key="quote.name" class="col-12 col-sm-6 col-md-4">
            <v-card>
                <v-card-subtitle>
                    {{ quote.name }}
                </v-card-subtitle>
                <v-card-title class="title">
                    {{ quote.quote }}
                </v-card-title>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: {
        quotes: Array
    },
};

</script>

<style scoped>
    .title {
        padding-top: 0px;
    }
</style>