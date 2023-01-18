<template>
    <div>
		<v-list-item-subtitle class="cash">
            <v-icon>mdi-cash-multiple</v-icon> 
            <div class="mr-5 mt-1 ml-2">
                Copper: {{ money.copper }}
            </div>
            <div class="mr-5 mt-1">
                Silver: {{ money.silver }}
            </div>
            <div class="mr-5 mt-1">
                Electrum: {{ money.electrum }}
            </div>
            <div class="mr-5 mt-1">
                Gold: {{ money.gold }}
            </div>
            <div class="mr-5 mt-1">
                Platinum: {{ money.platinum }}
            </div>
		</v-list-item-subtitle>
    </div>
</template>

<script>
export default {
	props: {
		money: Object
	},
};

</script>

<style scoped>
.cash {
	display: flex !important;
}
</style>