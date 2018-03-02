<template>
	<div class="login">
		<Navbar :isHideMenu="true" :isHideLogouticon="true" />
		<section class="wrapper style2" v-if="step === 1">
		 	<div class="b-grid__list">
		 		<div class="inner b-grid__item b-grid__item--1-1">
		 			<section class="spotlights">
		 				<article>
		 					<header class="major">
		 						<h2>Login to admin account</h2>
		 					</header>

		 					<div class="form-group">
		 						<div class="row">
		 							<input type="text" class="form-control" placeholder="Your email" v-model="email" />

			 						<input type="password" class="form-control" placeholder="Your password" v-model="password" />
			 						<button class="btn btn-yellow" @click="signin">Login</button>
		 						</div>
								
								<div class="links">
									<router-link :to="{ path: '/admin/reg' }" class="subformlink">
										Create new account
									</router-link>
									<router-link :to="{ path: '/admin/restore' }" class="subformlink">
										Forget password?
									</router-link>
								</div>
		 						<Spinner v-if="loader" />
		 					</div>
		 				</article>
		 			</section>

		 			<section class="spotlights" v-if="isError">
		 				<article>
		 					<h3>{{ errorText }}</h3>
		 				</article>
		 			</section>
		 		</div>
		 	</div>
		</section>
		<section class="wrapper style2" v-if="step === 2">
		 	<div class="b-grid__list">
		 		<div class="inner b-grid__item b-grid__item--1-1">
		 			<section class="spotlights">
		 				<article>
		 					<header class="major">
		 						<h2>Step 2: two factor authentification</h2>
		 					</header>

		 					<div class="form-group">
		 						<div class="row">
		 							<input type="number" class="form-control" placeholder="Code" v-model="code" />
			 						<button class="btn btn-yellow" @click="signin2fa">Login</button>
		 						</div>
								
								<div class="links">
									<router-link :to="{ path: '/admin/reg' }" class="subformlink">
										Create new account
									</router-link>
									<router-link :to="{ path: '/admin/restore/qr' }" class="subformlink">
										Can not access authenticator?
									</router-link>
								</div>
		 						<Spinner v-if="loader" />
		 					</div>
		 				</article>
		 			</section>

		 			<section class="spotlights" v-if="isError">
		 				<article>
		 					<h3>{{ errorText }}</h3>
		 				</article>
		 			</section>
		 		</div>
		 	</div>
		</section>
	</div>
</template>

<script>
import Navbar from './layouts/Navbar';
import Spinner from './layouts/Spinner';

export default {
	name: 'Login',
	components: {
		Navbar,
		Spinner
	},
	data () {
		return {
			loader: false,
			email: '',
			password: '',
			isError: false,
			errorText: '', 
			step: 1,
			code: '',
			token: ''
		}
	},
	methods: {
		signin () {
			this.isError = false;
			if(this.email === '') {
				this.isError = true;
				this.errorText = 'Enter email';
				return false;
			}
			if(this.password === '') {
				this.isError = true;
				this.errorText = 'Enter password';
				return false;
			}
			this.loader = true;
			this.$http.post(`${this.$host}/alehub/admin/login`, {
				"email": this.email,
				"password": this.password
			}, {
				headers : {
					'Content-Type' : 'application/json; charset=UTF-8',
					'Accept' : 'application/json'
				}
			}).then(response => {
				this.loader = false;
				this.step = 2;
			}, response => {
				this.loader = false;
				this.isError = true;
				this.errorText = 'User not found';
			})
		},
		signin2fa () {
			this.isError = false;
			if(this.code === '') {
				this.isError = true;
				this.errorText = 'Enter code';
				return false;
			}
			if(this.code.length !== 6) {
				this.isError = true;
				this.errorText = 'Enter 6 number';
				return false;
			}
			this.loader = true;
			this.$http.post(`${this.$host}/alehub/admin/login/confirm`, {
				"email": this.email,
				"password": this.password,
				"token": this.code
			}, {
				headers : {
					'Content-Type' : 'application/json; charset=UTF-8',
					'Accept' : 'application/json'
				}
			}).then(response => {
				this.loader = false;
				localStorage.setItem('token', response.body.token);
				localStorage.setItem('userId', response.body.userId);
				this.$router.push('/admin/changeIndex');
			}, response => {
				this.loader = false;
				this.isError = true;
				this.errorText = 'User not found';
			})
		}
	}
}
</script>

<style src="../assets/less/style.css"></style>

<style lang="stylus">
	body {
    	background-color #f5f8fa
    }
</style>

<style lang="stylus" scoped>
    
    .spotlights {
    	margin-bottom 0
    }

	.form-group {
		display flex
		flex-direction column

		.row {
			display -webkit-box
			display -ms-flexbox
			display flex
			-ms-flex-wrap wrap
			flex-wrap wrap
			margin-right -15px
			margin-left -15px
		}

		.form-control {
			display block
			width 100%
			padding .375rem .75rem
			font-size 1rem
			line-height 1.5
			color #495057
			background-color #fff
			background-clip padding-box
			border 1px solid #ced4da
			border-radius .25rem
			transition border-color .15s ease-in-out,box-shadow .15s ease-in-out
			margin-bottom 15px
		}

		.btn {
			display inline-block
			font-weight 400
			text-align center
			white-space nowrap
			vertical-align middle
			-webkit-user-select none
			-moz-user-select none
			-ms-user-select none
			user-select none
			border 1px solid transparent
			padding .375rem .75rem
			font-size 1rem
			line-height 1.5
			border-radius .25rem
			transition color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out
		}

		.btn-yellow {
			color #474b4b
			background-color #ffd24f
			border-color #ffd24f
			display block
			width 100%
			font-weight 500
		}

		.subformlink {
			text-align: right;
			margin: 20px -10px -5px;
			color: #333333;
			font-family: MuseoSansCyrl500;
		}

		.links {
			display flex 
			justify-content space-between	
		}
	}
</style>