<template>
	<div class="settings">
		<Navbar :isHideMenu="true" />
		<section class="wrapper">
		 	<div class="b-grid__list">
	 			<div class="b-grid__item b-grid__item--1-1">
			 		<div class="content">
		 				<div class="heading">
		 					<h1 class="title">Account Settings</h1>
		 				</div>
		 			</div>
		 		</div>

				<div class="indexPage">
                    <span class="component-name">Change Username</span>
                </div>

				<div class="b-grid__item b-grid__item--1-1">
					<div class="content">
						<div class="edit-form">
							<div class="input-block">
								<label>Username</label>
								<input type="text" placeholder="Enter your userName" v-model="content.name" />
							</div>
						<p class="errorText" v-if="isUserNameError">Please, enter new username!</p>
						<p class="successText" v-if="isUserNameSuccess">Username successfully changed!</p>
						</div>
						<button @click="changeUserName">Change username</button>
						<Spinner v-if="isLoaderUserName" />
					</div>

				</div>

                <div class="indexPage">
                    <span class="component-name">Change email address</span>
                </div>

                <div class="b-grid__item b-grid__item--1-1">
					<div class="content">
						<div class="edit-form">
							<div class="input-block" v-if="emailStep == 1">
								<label>Email</label>
								<input type="text" placeholder="Enter your e-mail" v-model="userEmail" />
							</div>
							<div class="input-block" v-if="emailStep == 2">
								<label>Секретный ключ, отправленный на ваш текущий email</label>
								<input type="text" placeholder="Секретный ключ" v-model="secretKey" />
							</div>
							<p class="errorText" v-if="isErrorEmail">Email already exist!</p>
						<p class="successText" v-if="isEmailSuccess">Email successfully changed!</p>
						</div>
						<button @click="changeEmail" v-if="emailStep == 1">Change email address</button>
						<button @click="checkSecretKey" v-if="emailStep == 2">Check secret key</button>
						<Spinner v-if="isLoaderEmail" />
					</div>
				</div>

				<div class="indexPage">
                    <span class="component-name">Change password</span>
                </div>

				<div class="b-grid__item b-grid__item--1-1">
					<div class="content">
						<div class="edit-form">
							<div class="input-block">
								<label>Old password</label>
								<input type="password" v-model="password.old" placeholder="Enter your old password" />
							</div>
							<div class="input-block">
								<label>New password</label>
								<input type="password" v-model="password.new" placeholder="Enter your new password" />
							</div>
							<div class="input-block">
								<label>Repeat password</label>
								<input type="password" v-model="password.repeat" placeholder="Repeat new password" />
							</div>
							<Spinner v-if="isLoader" />
							<p class="errorText" v-if="isError">{{ errorText }}</p>
						</div>
						<button @click="changePassword">Change password</button>
					</div>
				</div>

		 	</div>
		</section>
	</div>
</template>

<script>
import Navbar from './layouts/Navbar';
import Spinner from './layouts/Spinner';

export default {
	name: 'AccountSetting',
	components: {
		Navbar,
		Spinner
	},
	data () {
		return {
			userEmail: '',
			content: [],
			password: {
				old: '',
				new: '',
				repeat: ''
			},
			isError: false,
			errorText: '',
			isLoader: false,
			isLoaderUserName: false,
			isUserNameError: false,
			isUserNameSuccess: false,
			isLoaderEmail: false,
			isErrorEmail: false,
			isEmailSuccess: false,
			emailStep: 1,
			secretKey: '',
			token: localStorage.getItem('token'),
			userId: localStorage.getItem('userId')
		}
	},
	methods: {
		checkSecretKey () {
			if(this.secretKey === '') return false;
			this.isLoaderEmail = true;

			this.$http.post(`${this.$host}/alehub/admin/user/new/email/checkCode`, {
				"email": this.content.email,
				"secretKey": this.secretKey,
				"userId": localStorage.getItem('userId'),
				"newEmail": this.userEmail
			}, {
				headers : {
					'Content-Type' : 'application/json; charset=UTF-8',
					'Accept' : 'application/json',
					'Authorization' : this.token
				}
            }).then(response => {
            	this.isLoaderEmail = false;
            	this.isEmailSuccess = true;
            	setTimeout(()=>{
				   this.isEmailSuccess = false;
				   this.emailStep = 1;
				}, 1500);
            }, response => {
            	this.isLoaderEmail = false;
            	console.log('E', response);
            })
		},
		changeEmail () {
			this.isErrorEmail = false;
			this.isEmailSuccess = false;
			if(this.userEmail === '') {
				this.isErrorEmail = true;
				return false;
			}

			let re = /\S+@\S+\.\S+/;
            if(re.test(this.userEmail) === false) {
                this.isErrorEmail = true;
				return false;
            }

			this.isLoaderEmail = true;
			this.$http.post(`${this.$host}/alehub/admin/user/new/email`, {
				"email": this.userEmail,
				"userId": localStorage.getItem('userId')
			}, {
				headers : {
					'Content-Type' : 'application/json; charset=UTF-8',
					'Accept' : 'application/json',
					'Authorization' : this.token
				}
            }).then(response => {
            	this.isLoaderEmail = false;
            	this.emailStep = 2;
            }, response => {
            	this.isLoaderEmail = false;
            	this.isErrorEmail = true;
            })
		},
		changeUserName () {
			this.isUserNameError = false;
			if(this.content.name === '') {
				this.isUserNameError = true;
				return false;
			}
			this.isLoaderUserName = true;
			this.$http.post(`${this.$host}/alehub/admin/user/new/username`, {
				"userId": localStorage.getItem('userId'),
				"userName": this.content.name
			}, {
				headers : {
					'Content-Type' : 'application/json; charset=UTF-8',
					'Accept' : 'application/json',
					'Authorization' : this.token
				}
            }).then(response => {
            	this.isLoaderUserName = false;
            	this.isUserNameSuccess = true;
            	setTimeout(()=>{
				   this.isUserNameSuccess = false;
				}, 1500);
            }, response => {
            	this.isLoaderUserName = true;
            })
		},
		backPage () {
			this.$router.push('/admin');
		},
		getUserInfo () {
			this.$http.get(`${this.$host}/alehub/admin/user/${localStorage.getItem('userId')}`, {
                headers : {
                    'Content-Type' : 'application/json; charset=UTF-8',
                    'Accept' : 'application/json',
					'Authorization' : this.token
                }
            }).then(response => {
            	this.content = response.body[0]
            	this.userEmail = this.content.email;
            }, response => {
                console.log('E', response)
            })
		},
		changePassword () {
			this.isError = false;
			this.isLoader = false;
			if(this.password.old === '') {
				this.isError = true;
				this.errorText = 'Please, enter your password';
				return false;
			}
			if(this.password.new === '') {
				this.isError = true;
				this.errorText = 'Please, enter new password';
				return false;
			}
			if(this.password.repeat === '') {
				this.isError = true;
				this.errorText = 'Please, repeat new password';
				return false;
			}
			if(this.password.new !== this.password.repeat) {
				this.isError = true;
				this.errorText = 'New passwords do not match';
				return false;
			}


			this.isLoader = true;

			this.$http.post(`${this.$host}/alehub/admin/newpassword`, {
				"email": this.content.email,
				"new": this.password.new,
				"repeat": this.password.repeat,
				"old": this.password.old,
				"userId" : this.userId
			}, {
				headers : {
					'Content-Type' : 'application/json; charset=UTF-8',
					'Accept' : 'application/json',
					'Authorization' : this.token
				}
            }).then(response => {
            	this.isLoader = false;
            }, response => {
            	this.isLoader = false;
            	if(response.body.message === 'Passwords is incorrect') {
            		this.isError = true;
            		this.errorText = 'Old passwords is incorrect';
            	}
            })
		}
	},
	created () {
        this.getIndexPage();
        if (!this.token) {
            this.$router.push('/admin/login')
        }
        this.$http.post(`${this.$host}/alehub/admin/checkToken`, 
            {
                "token" : this.token,
                "userId" : this.userId
            }, {
            headers : {
                'Content-Type' : 'application/json; charset=UTF-8',
                'Accept' : 'application/json'
            }
        }).then(response => {

        }, response => {
            localStorage.clear()
            this.$router.push('/admin/login')
        })
    }
}
</script>

<style src="../assets/less/style.css"></style>

<style lang="stylus">
body {
	background-color #f7f7f7
}
</style>

<style scoped lang="stylus">

	.content {
		width 100%
		height 100%
		background-color #ffffff
		border-radius 4px
		box-shadow 0 1px 8px 0 rgba(0,0,0,0.25)

		.heading {
			display grid
			.title {
				text-align center
				font-family MuseoSansCyrl500
				font-size 26px
				color #333333
				margin 20px
			}
		}

		button {
            width: 200px;
            background: #ffd24f;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 0 20px 20px;
        }
	}

	.indexPage {
        padding: 10px 15px 20px;
        .component-name {
            font-size: 20px;
        }
    }

    .errorText {
    	color: red;
    	margin-bottom: 0;
    }

    .successText {
    	color: green;
    	margin-bottom: 0;
    }

    .save-grid {
    	margin: 10px 0 20px;
    }

	.edit-form {
        padding: 20px;

        .input-block {
            display: block;
            flex-direction: column;

            label {
                font-size: 18px;
                margin-bottom: 10px;
				margin-right: 15px;
				display inline-block
				text-align right
            }

            input {
				font-size: 18px;
				padding: 7px 10px;
				border-radius: 4px;
				border: 1px solid #ccc;
				width: calc(100% - 20px);
            }

            .b-grid__list {
                width 100%

                .b-grid__item {
                    padding: 0 10px

                    &:first-child {
                        padding-left: 0
                    }

                    &:last-child {
                        padding-right: 0
                    }

                    @media screen and (max-width: 760px) {
                        padding 15px 0 0 0    
                    }
                }
            }
        }

        .input-block:not(:first-child) {
            margin-top: 20px;
        }
    }

	@media screen and (max-width: 1280px) {
		.b-grid__list {
			max-width 920px
		}

		.row {
			width 920px
		}
	}

	@media screen and (max-width: 1024px) {
		.b-grid__list {
			max-width 700px
		}

		.row {
			width 700px
		}
	}

	@media screen and (max-width: 760px) {
		.b-grid__list {
			max-width 100%
		}

		.row {
			width 100%
			border-radius: 0px
		}
	}

</style>