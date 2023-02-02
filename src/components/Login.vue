<template>
	<v-layout align-center justify-center>
		<v-dialog persistent v-model="dialog" max-width="600" ref="formDialog">
			<template>
				<v-card>
					<v-toolbar color="primary" dark><span class="text-h5"><v-icon
								class="account-icon">mdi-account-outline</v-icon> Login</span></v-toolbar>
					<v-container>
						<v-form v-model="valid" ref="loginData">
							<v-text-field v-model="username" :rules="requiredUser" label="Username" required
								v-on:keyup.enter="login"></v-text-field>
							<v-row>
								<v-col cols="10" sm="11">
									<v-text-field v-model="password" :rules="requiredPassword" label="Password" required
										:type="visible ? 'text' : 'password'" v-on:keyup.enter="login"></v-text-field>
								</v-col>
								<v-col cols="2" sm="1">
									<v-icon class="eye-con" v-if="visible"
										v-on:click="toggleVisible">mdi-eye-off-outline</v-icon>
									<v-icon class="eye-con" v-else v-on:click="toggleVisible">mdi-eye-outline</v-icon>
								</v-col>
							</v-row>
						</v-form>
					</v-container>
					<v-card-actions class="justify-end">
						<v-btn :disabled="!valid" text @click="login">Login</v-btn>
					</v-card-actions>
				</v-card>
			</template>
		</v-dialog>
	</v-layout>
</template>

<script>
export default {
	props: {
		savingThrows: Object,
		redirect: {
			type: String
		}
	},
	data() {
		return {
			dialog: true,
			visible: false,
			valid: false,
			username: '',
			password: '',
			requiredUser: [v => !!v || 'Please enter your username'],
			requiredPassword: [v => !!v || 'Please enter your Password']
		}
	},
	computed: {
		dark() {
			return this.$vuetify.theme.dark;
		}
	},
	methods: {
		toggleVisible() {
			this.visible = !this.visible;
		},
		checkLogin() {
			if (this.username.length > 0 && this.password.length > 0) {
				let users = this.$store.state.users;
				for (let i = users.length - 1; i >= 0; i--) {
					if (users[i].login == this.username && users[i].password == this.password) {
						this.$store.commit("setRegistered", true);
						this.dialog = false;
						return;
					}
				}
				this.$refs.loginData.reset();
			}
		},
		async login() {

			const response = await this.$axios.post('/users/login', { username: this.username, password: this.password });

			console.log(response);

			localStorage.setItem('jwt', response.data.token)

			localStorage.setItem('refresh_token', response.data.refreshToken);

			if (response.status == 200) {
				this.$store.commit("setRegistered", true);
				this.dialog = false;
				if (this.redirect) {
					this.$router.push(this.redirect);
				}else{
					this.$router.push('/');
				}
			}
			return;
		}
	}
};
</script>

<style scoped>
.eye-con {
	cursor: pointer;
	margin-top: 1rem;
}

.account-icon {
	margin-bottom: 0.25rem;
}
</style>