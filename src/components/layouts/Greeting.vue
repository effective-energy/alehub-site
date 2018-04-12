<template>
	<b-jumbotron class="greeting">
	  <b-row>
          <b-col md="6">
            <h1 class="title">Welcome to the future of the HR industry</h1>
            
            <div class="timer-block">
              <p>Round 1 will begin:</p>

              <div class="countdown">
                <div class="num">
                  <span class="time">01</span>
                  <span class="type">Days</span>
                </div>

                <div class="num">
                  <span class="time">24</span>
                  <span class="type">Hours</span>
                </div>

                <div class="num">
                  <span class="time">59</span>
                  <span class="type">Minutes</span>
                </div>

                <div class="num">
                  <span class="time">48</span>
                  <span class="type">Seconds</span>
                </div>
              </div>

            </div>

            <button class="btn btn-buy">Buy tokens</button>
          </b-col>

          <b-col md="6">
            <img src="../../assets/img/brain.png" alt="" width="100%">
          </b-col>

        </b-row>
	</b-jumbotron>
</template>

<script>
	export default {
		name: 'Greeting'
	}
</script>

<style lang="stylus" scoped>
	.greeting
		background linear-gradient(270deg,#ffd35a,#ffb326)
		margin-top 60px
		box-shadow 0px 15px 5em 0px rgba(0,0,0,.3)
		margin-bottom 0

		.title
			font-weight 300
			font-size 48px
			letter-spacing 2px

	.timer-block
		margin 40px 0

		.countdown
			display flex
			align-items center

			.num
				display flex
				flex-direction column
				padding 0 10px

			.num:first-child
				padding-left 0px

			.num:last-child
				padding-right 0px

			.time
				background #333947
				padding 10px
				color #fff
				border-radius 4px
				width 65px
				height 65px
				font-size 30px
				letter-spacing 2px
				text-align center
				margin-bottom 5px

			.type 
				text-align center

			.separator
				padding 0 5px
</style>