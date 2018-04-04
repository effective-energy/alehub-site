<template>
	<footer>
        <div class="b-grid__list">
            <div class="b-grid__item b-grid__item--1-3">
                <span>Effective Energy LLC © 2018 All rights reserved.</span>
                <div class="social-links">
                	<div class="item" v-for="info in content.footer.social.links">
                		<a :href="info.link" target="_blank">
                			<i class="fa" :class="'fa-'+info.type"></i>
                		</a>
                	</div>
                </div>
            </div>
            <div class="b-grid__item b-grid__item--1-3">
                <ul class="footer-menu">
                	<li v-for="(link, indexLink) in links[lang]" :key="indexLink" :data-target="link.to" @click="scrollToElement(link.to)">
                		<a href="#">{{ link.title}}</a>
                	</li>
                	<li>
                		<a href="http://presale.alehub.io/user/login">Cabinet</a>
                	</li>
                </ul>
            </div>
            <div class="b-grid__item b-grid__item--1-3">
                <div class="subscribe-block">
                	<label>Subscribe to news</label>
                	<div class="subscribe-form">
                		<input type="text" placeholder="Enter your email" v-model="subscribeEmail" @keyup.enter="subscribe">
                		<button @click="subscribe">Send</button>
                	</div>
                	<Spinner v-if="isLoader" />
                	<p class="subscribe-status" :class="subscribeStatus" v-if="isShowSubscribeStatus">{{ subscribeText }}</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import Spinner from './Spinner';

export default {
	name: 'Footer',
	props: ['content', 'lang'],
	components: {
        Spinner
    },
    data () {
    	return {
			isLoader: false,
			subscribeStatus: '',
			subscribeText: '',
			isShowSubscribeStatus: false,
			subscribeEmail: '',
			links: {
                en: [
                    {title: 'Home', to: 'greeting'},
                    {title: 'Description', to: 'about'},
                    {title: 'Advantages', to: 'solution'},
                    {title: 'Features', to: 'documentations'},
                    {title: 'Team', to: 'teams'}
                ],
                ru: [
                    {title: 'Домой', to: 'greeting'},
                    {title: 'Описание', to: 'about'},
                    {title: 'Преимущества', to: 'solution'},
                    {title: 'Особенности', to: 'documentations'},
                    {title: 'Команда', to: 'teams'}
                ],
                cn: [
                    {title: 'Home', to: 'greeting'},
                    {title: 'Description', to: 'about'},
                    {title: 'Advantages', to: 'solution'},
                    {title: 'Features', to: 'documentations'},
                    {title: 'Team', to: 'teams'}
                ]
            }
    	}
    },
    methods: {
    	subscribe () {
    		this.isLoader = true;

    		let re = /\S+@\S+\.\S+/;
            if(re.test(this.subscribeEmail) === false) {
                this.isLoader = false;
                this.subscribeText = 'Enter your E-mail';
                this.isShowSubscribeStatus = true;
                return this.subscribeStatus = 'subscribe-error';
            }

    		this.subscribeText = 'At this time, the subscription form does not work.';
    		this.isShowSubscribeStatus = true;
    		this.subscribeStatus = 'subscribe-error';
    		return this.isLoader = false;
    	},
    	currentYPosition() {
            if (self.pageYOffset) return self.pageYOffset;
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        },
        elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        },
    	scrollToElement (eID) {
            var startY = this.currentYPosition();
            var stopY = this.elmYPosition(eID) - 64;
            var distance = stopY > startY ? stopY - startY : startY - stopY;
            if (distance < 100) {
                scrollTo(0, stopY); return;
            }
            var speed = Math.round(distance / 50);
            if (speed >= 20) speed = 15;
            var step = Math.round(distance / 25);
            var leapY = stopY > startY ? startY + step : startY - step;
            var timer = 0;
            if (stopY > startY) {
                for ( var i=startY; i<stopY; i+=step ) {
                    setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                    leapY += step; if (leapY > stopY) leapY = stopY; timer++;
                } return;
            }
            for ( var i=startY; i>stopY; i-=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
	.b-grid__list
		width 100%

	footer
		display flex
		justify-content space-between
		padding 1.5em
		align-items center
		background-color #2a2d30
		color #ffffff
		margin-top 50px
		padding 50px
		flex-direction column
		padding-bottom 30px

		.social-links
			margin-top 20px
			display flex
			justify-content center

			.item
				border-radius 2px
				width 40px
				min-width 40px
				height 40px
				background #f4b604
				font-size 24px
				line-height 40px
				color #fff

				a
					color #2a2d30

			.item:not(:last-child)
				margin-right 15px

		.footer-menu
			list-style none
			margin 0
			padding 0

			li
				margin-bottom 10px

				a
					color #fff

		.subscribe-block
			text-align left

			label
				font-size 20px

			.subscribe-success
				color #8bc34a

			.subscribe-error
				color #f44336

			.subscribe-form
				position relative
				display flex
				width 100%
				margin-top 15px

				input
					display block
					width 100%
					padding .375rem .75rem
					font-size 1rem
					line-height 1.5
					color #495057
					background-color #fff
					background-clip padding-box
					border 1px solid #ced4da
					border-radius .25rem 0 0 .25rem
					height 24px
					outline none

				button
					background #f3b604
					border-radius 0 0.25rem 0.25rem 0
					display inline-block
					font-weight 400
					text-align center
					white-space nowrap
					vertical-align middle
					font-size 1rem
					color #2a2d30
					line-height 1.5
					height 37px
					font-weight bold
					outline none

	@media(max-width: 1024px)
		.b-grid__item
			&.b-grid__item--1-3:last-child
				margin 0 0 30px 0
		.b-grid__item
			&.b-grid__item--1-3:last-child
				min-width 80% !important

		footer
			.subscribe-block
				margin 0 auto

	@media(max-width: 760px)
		.b-grid__item
			&.b-grid__item--1-3
				margin-bottom 30px
		
		footer 
			.subscribe-block
				max-width 325px

	@media(max-width: 425px)
		footer
			padding-bottom 30px

			.subscribe-block
				text-align center

		.b-grid__item
			&.b-grid__item--1-3
				margin-bottom 30px

		.b-grid__item:nth-child(1)
			order 0

		.b-grid__item:nth-child(2)
			order 2

		.b-grid__item:nth-child(3)
			order 1
			

	@media(max-width: 375px)
		.b-grid__item
			&.b-grid__item--1-3:first-child
				margin-bottom 15px	

		footer
			.subscribe-block
				.subscribe-form
					button 
						padding-right 20px
						padding-left 20px

			.social-links
				flex-wrap wrap

				.item
					margin-bottom 15px

				.item:first-child
					margin-left 15px

</style>