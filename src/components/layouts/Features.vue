<template>
	<b-jumbotron class="features">
	  <b-row>
          <b-col md="4">
          	<h1>Image</h1>
          </b-col>

          <b-col md="8">
          	<h1 class="title">The main distinguishing  features of ALE</h1>

          	<b-row>
          		<b-col md="12" class="features-block">
                    <div class="features-item">
                        <p>Increase of reliability and quality of concluded contracts of the contract and reliability of received results, simplification of mutual settlements, capitalization of success. </p>
                    </div>

                    <div class="features-item">
                        <p>Staining investments and liabilities with the possibility of their monitoring and control (in subsequent versions).</p>
                        </div>
                </b-col>

				<b-col md="12" class="features-block">
					<div class="features-item">
						<p>Fixing the processes of negotiation and execution of contractual terms in the Blockchain.</p>
					</div>

					<div class="features-item">
						<p>Own protocols of contracts executed on the ALE blockchain.</p>
					</div>
				</b-col>

				<b-col md="12" class="features-block">
					<div class="features-item">
						<p>Making payments, prepayments and guarantees by participants in contractual relations in the monetary system ALE.</p>
					</div>

					<div class="features-item">
						<p>Making payments, prepayments and guarantees by participants in contractual relations in the monetary system ALE.</p>
					</div>
				</b-col>

				<b-col md="12" class="features-block">
					<div class="features-item">
						<p>The flexibility of project management is the changing of conditions under the consensus of financial and management decisions.</p>
					</div>

					<div class="features-item">
						<p>The possibility of having two additional parties in the contract.</p>
					</div>
				</b-col>

          		<b-col md="12">
          			<button class="btn btn-show-more" style="background-color: #051634; color: #fff; font-weight: lighter; padding-right: 25px; padding-left: 25px; text-transform: uppercase; padding-top: 8px; padding-bottom: 8px; font-size: 14px;">Show more</button>
          		</b-col>

      		</b-row>
          </b-col>

        </b-row>
	</b-jumbotron>
</template>

<script>
	export default {
		name: 'Features'
	}
</script>

<style lang="stylus" scoped>
	.features
		background linear-gradient(270deg,#ffd35a,#ffb326)
		margin-top 60px
		box-shadow 0px 15px 5em 0px rgba(0,0,0,.3)
		margin-bottom 0

		.title
			font-size 60px
			letter-spacing 1.12px
			color #152038
			font-weight 400
			margin-bottom 30px

		.features-block
			display flex
			justify-content space-between

			.features-item
				margin-bottom 25px
				width 46%
				border-bottom 1px solid #fbfbfb

		.features-block:nth-last-child(2)
			.features-item
				border-bottom none

	@media(max-width: 1199px)
		.features
			.title
				font-size 50px

	@media(max-width: 425px)
		.features
			.features-block
				flex-direction column

				.features-item
					width 100%

			.features-block:nth-last-child(2)
				.features-item:first-child
					border-bottom 1px solid #fbfbfb
			
			.title
				font-size 36px

	@media(max-width: 375px)
		.features
			button 
				width 100%

</style>