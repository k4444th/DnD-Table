<template>
	<v-container>
		<v-row>
			<router-link to="/admin/items">
				<v-col>
					<v-card class="mx-auto" outlined>
						<v-list-item three-line>
							<v-list-item-content>
								<div class="text-overline mb-4">
									Items
								</div>
								<v-list-item-subtitle>Items</v-list-item-subtitle>
							</v-list-item-content>
						</v-list-item>

						<v-card-actions>
							<v-btn outlined rounded text>View</v-btn>
						</v-card-actions>
					</v-card>
				</v-col>
			</router-link>
			<router-link to="/admin/characters">
				<v-col>
					<v-card class="mx-auto" outlined>
						<v-list-item three-line>
							<v-list-item-content>
								<div class="text-overline mb-4">
									Characters
								</div>
								<v-list-item-subtitle>Items</v-list-item-subtitle>
							</v-list-item-content>
						</v-list-item>

						<v-card-actions>
							<v-btn outlined rounded text>View</v-btn>
						</v-card-actions>
					</v-card>
				</v-col>
			</router-link>
			<router-link to="/admin/users">
				<v-col>
					<v-card class="mx-auto" outlined>
						<v-list-item three-line>
							<v-list-item-content>
								<div class="text-overline mb-4">
									Users
								</div>
								<v-list-item-subtitle>Items</v-list-item-subtitle>
							</v-list-item-content>
						</v-list-item>

						<v-card-actions>
							<v-btn outlined rounded text>View</v-btn>
						</v-card-actions>
					</v-card>
				</v-col>
			</router-link>

		</v-row>
	</v-container>
</template>

<script>

export default {
  name: "Admin",
};
</script>


<style scoped>
a {
	text-decoration: none;
}
</style>