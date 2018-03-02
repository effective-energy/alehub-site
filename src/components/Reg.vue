<template>
	<div class="login">
		<Navbar :isHideMenu="true" :isHideLogouticon="true" />
		<section v-if="step === 1" class="wrapper style2">
		 	<div class="b-grid__list">
		 		<div class="inner b-grid__item b-grid__item--1-1">
		 			<section class="spotlights">
		 				<article>
		 					<header class="major">
		 						<h2>Register new account</h2>
		 					</header>

		 					<div class="form-group">
		 						<div class="row">
		 							<input type="text" class="form-control" placeholder="Your email" v-model="email" />
									<input type="text" class="form-control" placeholder="Username" v-model="name" />
			 						<input type="password" class="form-control" placeholder="Your password" v-model="password" />
									<input type="password" class="form-control" placeholder="Repeat password" v-model="password2" />
			 						<button class="btn btn-yellow" @click="signup">Sign up</button>
		 						</div>

								<div class="links">

									<router-link :to="{ path: '/admin/login' }" class="subformlink">
										Already have account?
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
		<section v-if="step === 2" class="wrapper style2">
		 	<div class="b-grid__list">
		 		<div class="inner b-grid__item b-grid__item--1-1">
		 			<section class="spotlights">
		 				<article>
		 					<header class="major">
		 						<h2>2 factor autentification</h2>
		 					</header>

		 					<div class="form-group">
		 						<div class="row">
									<div class="qrqode">
										<qrcode :value="qrPath" :options="{ size: 300 }"></qrcode>
									</div>
									<div class="secretKey">
										<h4>Be sure to save this key for recovery!</h4>
										{{ secret }}
									</div>
		 							<input type="number" max="999999" class="form-control" placeholder="Code" v-model="code" />
			 						
			 						<button class="btn btn-yellow" @click="signup2fa">Sign up</button>
		 						</div>

								<div class="links">

									<router-link :to="{ path: '/admin/login' }" class="subformlink">
										Already have account?
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
		<section v-if="step === 3" class="wrapper style2">
		 	<div class="b-grid__list">
		 		<div class="inner b-grid__item b-grid__item--1-1">
		 			<section class="spotlights">
		 				<article>
		 					<header class="major">
		 						<h2>Success!</h2>
		 					</header>

		 					<div class="form-group">
		 						<div class="row">
									<div style="width:100%;text-align:center;">Account successfully created</div>
									<br><br><br>
			 						
			 						<button class="btn btn-yellow" @click="login">Login</button>
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
	name: 'Reg',
	components: {
		Navbar,
		Spinner
	},
	data () {
		return {
			loader: false,
			email: '',
			password: '',
			password2: '',
			isError: false,
			errorText: '',
			step: 1,
			qrPath: '',
			secret: '',
			code: '',
			name: ''
		}
	},
	methods: {
		// email: "vasya@pupka.com"
		// password: "GzKeIjnrbUqZXSx"
		signup () {
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
			if(this.password2 === '') {
				this.isError = true;
				this.errorText = 'Repeat password';
				return false;
			}
			if(this.password !== this.password2) {
				this.isError = true;
				this.errorText = 'Wrong password';
				return false;
			}
			if(this.name === '') {
				this.isError = true;
				this.errorText = 'Enter username';
				return false;
			}
			this.loader = true;
			this.$http.post(`${this.$host}/alehub/admin/user/new`, {
				"email": this.email
			}, {
				headers : {
					'Content-Type' : 'application/json; charset=UTF-8',
					'Accept' : 'application/json'
				}
			}).then(response => {
				this.loader = false;
				this.qrPath = decodeURIComponent(response.body.qrPath);
				console.log(this.qrPath)
				this.secret = response.body.secret;
				this.step = 2;
			}, response => {
				this.loader = false;
				this.isError = true;
				this.errorText = 'User not found';
			})
		},
		signup2fa () {
			this.isError = false;
			if(this.code === '') {
				this.isError = true;
				this.errorText = 'Enter code';
				return false;
			}
			if(this.code.length !== 6) {
				this.isError = true;
				this.errorText = 'Enter 6 numbers';
				return false;
			}
			this.loader = true;
			this.$http.post(`${this.$host}/alehub/admin/login/2fa`, {
				"email": this.email,
				"secret": this.secret,
				"token": this.code,
				"password": this.password,
				"name": this.name
			}, {
				headers : {
					'Content-Type' : 'application/json; charset=UTF-8',
					'Accept' : 'application/json'
				}
			}).then(response => {
				if (response.body.message == "Failed to verify") {
					this.loader = false;
					this.isError = true;
					this.errorText = 'Wrong code';
					return false;
				}
				this.loader = false
				this.step = 3
			}, response => {
				this.loader = false;
				this.isError = true;
				this.errorText = 'User not found';
			})
		},
		login() {
			this.$router.push('/admin/login')
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
			text-align center
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

		.qrqode {
			text-align center
			width 100%
		}

		.secretKey {
			text-align center
			width 100%
			margin 2em
			color red

			h4 {
				color black
			}
		}
	}
</style>