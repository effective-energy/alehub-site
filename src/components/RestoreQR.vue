<template>
	<div class="restore">
		<Navbar :isHideMenu="true" :isHideLogouticon="true" />
		<section v-if="step === 1" class="wrapper style2">
		 	<div class="b-grid__list">
		 		<div class="inner b-grid__item b-grid__item--1-1">
		 			<section class="spotlights">
		 				<article>
		 					<header class="major">
		 						<h2>Restore authentificator</h2>
		 					</header>

		 					<div class="form-group">
		 						<div class="row">
									<input type="text" class="form-control" placeholder="Email" v-model="email" />
									<input type="password" class="form-control" placeholder="Password" v-model="password" />
		 							<input type="text" class="form-control" placeholder="Secret key" v-model="secret" />
			 						<button class="btn btn-yellow" @click="restore" :disabled="loader">Restore</button>
		 						</div>
		 						<router-link :to="{ path: '/admin/reg' }" class="subformlink">
		 							Create new account
		 						</router-link>
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
		 						<h2>New 2 factor autentificator</h2>
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
			 						
			 						<button class="btn btn-yellow" @click="login">Login</button>
		 						</div>

								<router-link :to="{ path: '/admin/reg' }" class="subformlink">
		 							Create new account
		 						</router-link>
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
	name: 'Restore',
	components: {
		Navbar,
		Spinner
	},
	data () {
		return {
			secret: '',
			loader: false,
			isError: false,
			errorText: '',
			step: 1,
			email: '',
			password: '',
			qrPath: ''
		}
	},
	methods: {
		restore () {
			if(this.email === '') {
				this.isError = true;
				this.errorText = 'Enter email!';
				return false;
			};
			if(this.password === '') {
				this.isError = true;
				this.errorText = 'Enter password!';
				return false;
			};
			if(this.secret === '') {
				this.isError = true;
				this.errorText = 'Enter secret key!';
				return false;
			};
			this.loader = true;
			this.isError = false;
			this.$http.post(`${this.$host}/alehub/admin/restore/2fa`, {
				"email": this.email,
				"password": this.password,
				"secret": this.secret
			}, {
				headers : {
					'Content-Type' : 'application/json; charset=UTF-8',
					'Accept' : 'application/json'
				}
			}).then(response => {
				this.loader = false;
				this.step = 2;
				this.qrPath = decodeURIComponent(response.body.qrPath);
				this.secret = response.body.secret;
			}, response => {
				this.loader = false;
				this.isError = true;
				this.errorText = 'User not found!';
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

			.qrqode {
				margin auto
				margin-bottom 20px	
			}
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