<template>
    <div class="section economy-section">
    	<div class="container">
	    	<h1 class="section-title is-center">
	    		Economy of ICO
	    	</h1>
	    	<p class="section-subtitle is-center">
	    		<span class="bold">ALE</span> — security token. To ensure liquidity and fast placement on exchanges, the <span class="bold">ALE</span> protocol is mirrored to the Ethereum according to the ERC20 standard
	    	</p>

	    	<div class="row figures-panel">
	    		<div class="col-4 is-center is-white">
	    			<h1 class="figures-title">Emission</h1>
	    			<h3 class="figures-subtitle">100,500,000,000 ALE</h3>
	    		</div>
	    		<div class="col-4 is-center is-white">
	    			<h1 class="figures-title">Hardcap</h1>
	    			<h3 class="figures-subtitle">77,000 ETH</h3>
	    		</div>
	    		<div class="col-4 is-center is-white">
	    			<h1 class="figures-title">Softcap</h1>
	    			<h3 class="figures-subtitle">4,500 ETH</h3>
	    		</div>
	    	</div>

	    	<div class="row distribution">
	    		<div class="col-6">
	    			<div class="steep-statis">
	    				
	    			</div>
	    		</div>
	    		<div class="col-6">
	    			<h1 class="section-title is-white is-right">Distribution of tokens</h1>
	    			<div class="divider"></div>
	    			<p class="small">
	    				The ALE product is primarily a service for consumers to find counterparties for projects in the IT field and to manage these projects at the management and financial level. On the one hand, they are programmers or their associations, and on the other hand, they are IT Customers.
	    			</p>
	    		</div>
	    	</div>
	    </div>
    </div>
</template>

<script>
export default {
    name: 'Economy'
}
</script>

<style lang="stylus" scoped>

    .section
    	padding 71px 0
    	padding-bottom 130px

    .economy-section
    	background-color #343a49

    .is-center
    	text-align center

    .divider
    	width 120px
    	height 2px
    	background-color #ffffff
    	margin-bottom 30px

    .is-white
    	color #ffffff

    .is-right
    	text-align left

    .section-title
    	font-family MuseoSansCyrl300
    	font-size 3em
    	font-weight 300
    	font-style normal
    	font-stretch normal
    	line-height normal
    	letter-spacing normal
    	color #ffffff
    	margin 24px 0

    .section-subtitle
    	font-family MuseoSansCyrl300
    	font-size 1.4em
    	font-weight 300
    	font-style normal
    	font-stretch normal
    	line-height 1.5
    	letter-spacing normal
    	text-align center
    	color #ffffff
    	padding 12px 0 24px 0

    	.bold
    		font-family MuseoSansCyrl500
    		font-weight bold

    .figures-panel
    	padding 24px 0 71px 0

    	.figures-title
    		font-family MuseoSansCyrl500
    		font-size 24px
    		font-weight 500
    		font-style normal
    		font-stretch normal
    		line-height 1.5
    		letter-spacing normal
    		text-align center
    		color #ffffff
    		margin 0 0 24px 0

    	.figures-subtitle
    		font-family MuseoSansCyrl300
    		font-size 32px
    		font-weight 300
    		font-style normal
    		font-stretch normal
    		line-height 0.82
    		letter-spacing normal
    		text-align center
    		color #ffffff

    .distribution
    	.small
    		font-family MuseoSansCyrl300
    		font-size 14px
    		font-weight 300
    		font-style normal
    		font-stretch normal
    		line-height 1.67
    		letter-spacing normal
    		text-align left
    		color #ffffff

    	.steep-statis
    		width 280px
    		height 280px
    		background-color red
    		border-radius 50%
</style>