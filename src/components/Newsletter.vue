<template>
	<div class="settings">
		<Navbar :isHideMenu="true" />
		<section class="wrapper">
		 	<div class="b-grid__list">
		 		<div class="b-grid__item b-grid__item--1-1">
			 		<div class="content">
		 				<div class="heading">
		 					<h1 class="title">Start Newsletter</h1>
		 				</div>
		 			</div>
		 		</div>

	            <div class="b-grid__item b-grid__item--1-1">
                    <div class="content">
                        <vue-editor v-model="content" />
                    </div>
                </div>

                <div class="b-grid__item b-grid__item--1-1 grid-block">
                    <div class="content save-block">
                        <button @click="sendSletter">Send message</button>
                    </div>
                </div>

                <div class="b-grid__item b-grid__item--1-1" v-if="isNotif">
                    <div class="content notifBlock">
                        <p class="error" :class="{ 'success': isSuccess }">{{ notifText }}</p>
                    </div>
                </div>

                <div class="b-grid__item b-grid__item--1-1" v-if="isLoader">
                    <div class="content notifBlock">
                        <Spinner />
                    </div>
                </div>

		 	</div>

		</section>
	</div>
</template>

<script>
import { VueEditor } from 'vue2-editor';

import Navbar from './layouts/Navbar';
import Spinner from './layouts/Spinner';

export default {
	name: 'Newsletter',
	components: {
		Navbar,
        VueEditor,
        Spinner
	},
    data () {
        return {
            content: '',
            isNotif: false,
            notifText: '',
            isLoader: false,
            isSuccess: false,
            userId: localStorage.getItem('userId'),
            token: localStorage.getItem('token')
        }
    },
	methods: {
		backPage () {
			this.$router.push('/admin');
		},
        sendSletter () {
            this.isSuccess = false;
            this.isLoader = true;
            this.isNotif = false;
            if(this.content === '') {
                this.isNotif = true;
                this.notifText = 'Enter message!';
                this.isLoader = false;
                return false;
            }
            this.$http.post(`${this.$host}/alehub/feedback/new`, {
                "message": this.content,
                "userId": this.userId
            }, {
                headers : {
                    'Content-Type' : 'application/json; charset=UTF-8',
                    'Accept' : 'application/json',
                    'Authorization' : this.token
                }
            }).then(response => {
                this.isLoader = false;
                if(response.body.message == 'Success') {
                    this.isNotif = true;
                    this.isSuccess = true;
                    this.notifText = 'Message success send';
                }
            }, response => {
                this.isLoader = false;
                console.log('E', response);
            })
        }
    },
    created () {
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

    .quillWrapper {
        top: 0;
        padding-bottom: 0;
    }
</style>

<style scoped lang="stylus">
	.content {
		width 100%
		height 100%
		background-color #ffffff
		border-radius 4px
		box-shadow: 0 1px 8px 0 rgba(0,0,0,0.25);

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
	}

	.indexPage {
        padding: 10px 15px 20px;
        .component-name {
            font-size: 20px;
        }
    }

    .edit-form {
        padding: 20px;

        .input-block {
            display: flex;
            flex-direction: column;

            label {
                font-size: 18px;
                margin-bottom: 10px;
            }

            textarea {
                resize: none;
                border-radius: 4px;
                border: 1px solid #ccc;
                font-size: 18px;
                padding: 10px;
                height: 50px;
                width: calc(100% - 20px);
            }

            input {
                font-size: 18px
                padding: 7px 10px
                border-radius: 4px
                border: 1px solid #ccc
                margin-bottom 5px
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

    .save-block {
        display: flex;
        justify-content: center;
        padding-top: 20px;

        button {
            width: 200px;
            background: #ffd24f;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .grid-block {
        margin: 10px 0 20px;
    }

    .notifBlock {
        text-align: center;
        margin-top: 20px;

        p {
            margin: 0;
            font-size: 18px;
            position: relative;
            top: 10px;

            &.error {
                color: red;
            }

            &.success {
                color: green;
            }
        }
    }

</style>