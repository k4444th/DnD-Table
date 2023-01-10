<template>
    <div>
        <div v-if="loading"><v-skeleton-loader class="mx-auto" max-width="300" type="card"></v-skeleton-loader></div>
        <div v-else>
            <v-card v-if="!loading" class="mx-auto" max-width="300">
                <v-card-title>{{ item.name }}</v-card-title>
                <v-card-text>{{ item.description }}</v-card-text>
            </v-card>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "ItemDetails",
    props: {
        itemId: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            item: {},
            loading: true,
        };
    },
    created() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
                const response = await axios.get(`http://localhost:3000/items/id/${this.itemId}`);
                this.item = response.data;
                this.loading = false;
            } catch (error) { 
                console.error(error);
            }
        },
    },
};
</script>
