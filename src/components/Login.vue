<template>
	<div class="login">
		<Navbar :isHideMenu="true" :isHideLogouticon="true" />
		<section class="wrapper style2" v-if="step === 1">
		 	<div class="b-grid__list">
		 		<div class="inner b-grid__item b-grid__item--1-1">
		 			<section class="spotlights">
		 				<article>
		 					<div class="form-group">
								<div class="control" @click="focusInput('email')">
									<label for="email">e-mail</label>
									<input type="text" id="email" autofocus="autofocus" readonly onfocus="this.removeAttribute('readonly');" 
										contenteditable="true" autocomplete="off" class="form-control" placeholder="Your email" v-model="email" 
										@keyup.enter="focusInput('password')" @input="resetError()" />
								</div>
								<div class="control" @click="focusInput('password')">
									<label for="password">password</label>
									<input type="password" id="password" readonly onfocus="this.removeAttribute('readonly');" 
										class="form-control" contenteditable="true" autocomplete="off" placeholder="Your password" v-model="password" 
										@keyup.enter="signin" @input="resetError()" />
								</div>
								<button class="btn btn-black" @click="signin">Login</button>
								<div class="links">
									Forget password?
									<router-link :to="{ path: '/admin/restore' }" class="subformlink">
										Recovery.
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
		 					<div class="form-group">
								<div class="control noline">
									<label for="pin">2fa pin code</label>
									<input type="number" id="pin" class="form-control" placeholder="code" v-model="code" />
								</div>
								<div class="btn-control">
									<button class="btn btn-default" @click="step=1">Back</button>
									<button class="btn btn-black" @click="signin2fa">Confirm</button>
								</div>
								<div class="links">
									<router-link :to="{ path: '/admin/restore/qr' }" class="subformlink">
										Recovery authenticator
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
				this.focusInput('email')
				return false;
			}
			if(this.password === '') {
				this.isError = true;
				this.errorText = 'Enter password';
				this.focusInput('password')
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
		},
		focusInput (id) {
			document.getElementById(id).focus()
		},
		resetError() {
			this.isError = false;
		}
	}
}
</script>

<style src="../assets/less/style.css"></style>

<style lang="stylus">
	body {
    	background-color #f7f7f7
    }
</style>

<style lang="stylus" scoped>
	body
		background #f7f7f7
	.wrapper
		display flex
		justify-content center
		height calc(100vh - 88px)
		padding 0
		margin-top 88px

	.spotlights
		margin-bottom 0

		article
			box-shadow none
			background #f0f0f0
			display flex
			justify-content center
			padding 16px
			height auto
			border-radius 4px
			flex-direction column
			width 426px
			margin 0 auto

			.control
				display flex
				justify-content space-between
				width 100%
				align-items baseline
				border-bottom 1px solid #d1d1d1
				padding-bottom 18px
				padding-left 0
				position relative
				cursor pointer
				font-size 12px
				font-family MuseoSansCyrl500
				line-height 1.7
				&:first-child
					margin-top 22px
				&:not(:last-child)
					margin-bottom 20px
				&.noline
					border none
				
				label
					font-family MuseoSansCyrl700
					font-size 13px
					font-weight bold
					line-height 1.08
					color #34343e
					text-transform uppercase
					margin 0
					white-space pre
					margin-left 16px
					margin-right 12px
					cursor pointer

				input
					width 100%
					font-size 14px
					background inherit
					border none
					text-align right
					outline none
					margin-right 16px
					position relative
					z-index 1
					opacity 1

			.btn
				display block
				width 100%
				font-size 16px
				padding 12px
				font-weight 400
				height auto
				text-transform none
				line-height 1.42857143
				text-align center
				white-space nowrap
				vertical-align middle
				touch-action manipulation
				cursor pointer
				user-select none
				background-image none
				border 1px solid transparent
				border-radius 4px
				&.btn-black
					background-color #0d1717
					color #ffffff
				&.btn-default
					background rgba(13, 23, 23, 0.08)

			.links
				font-family MuseoSansCyrl300
				font-size 14px
				font-weight 300
				line-height 1.29
				text-align center
				margin 18px 0 0
				color #0d1717

				a
					font-family MuseoSansCyrl700
					font-weight bold
					color #0d1717
					border-bottom 1px solid #000
					text-decoration none
					padding-bottom 1px

			.btn-control
				display flex
				justify-content space-between
				& button
					width 50%
					height 44px
					border-radius 2px
					border none
					font-size 16px
					color #34343e
					margin-bottom 12px
					font-family MuseoSansCyrl500
					&:first-child
						margin-right 8px

			h3
				text-align center
</style>