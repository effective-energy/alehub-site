<template>
	<section data-v-82b7485c="" id="greeting" class="greeting" style="display: flex; align-items: center;">
	    <div class="b-grid__list" style="padding-top: 0px;">
	        <div class="b-grid__item b-grid__item--1-1">
	            <h1 style="text-align: center; font-size: 50px; color: rgb(255, 255, 255); font-weight: 300;">ICO Alehub началось</h1>
	            <div style="box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10em 5px;">
	                <div>
	                    <div class="ico-greetings" style="display: flex; flex-direction: row; align-items: flex-start;">
	                        <div class="ico-left" style="background: rgb(255, 210, 79);padding: 3em;width: 50%;height: 500px;display: flex;flex-direction: column;justify-content:  space-between;">
	                            <h1 style="text-align: center;font-size: 28px;margin: 0px;font-weight: 300;">Продажа токенов началась!</h1>
	                            <h1 id="countDown" style="text-align: center; font-size: 82px; margin: 0px; font-weight: 300;"></h1> <br>
	                            <h4 style="font-size: 20px;margin-bottom: 5px;">Минимальная сумма средств</h4>


	                            <div class="progress" style="background: #f2f2f2;width: 100%;height: 20px;border-radius: 2px;display: flex;">
	                            	<div class="active" style="width: 25%;background: #2a2d30;"></div>
	                            </div>

	                      <span style="font-size: 16px;margin-top: 6px;text-align:  right;">500/2000 ETH</span> <br>
	                            <h4 style="font-size: 20px;margin-bottom: 5px;">Необходимая сумма средств</h4>

	                            <div class="progress" style="background: #f2f2f2;width: 100%;height: 20px;border-radius: 2px;display: flex;">
	                            	<div class="active" style="width: 15%;background: #2a2d30;"></div>
	                            </div>

	                            <span style="font-size: 16px;margin-top: 6px;text-align:  right;">500/33000 ETH</span> <br>
	                            <h2 style="margin-top: 40px;text-align: center;margin-bottom: 10px;font-size: 28px;font-weight: 300;">Бонус 25% до 15 Марта 2018</h2> <button style="width: 100%;background: rgb(42, 45, 48);color: rgb(255, 255, 255);border-radius: 3px;margin-right: 10px;font-size: 20px;text-transform: none;line-height: 2.5em;height: auto;padding: 0px 25px;font-weight: 400;">Купить токены</button></div>
	                        <div class="ico-right" style="height: 499px;background: rgb(42, 45, 48);padding: 3em;color: rgb(255, 255, 255);width: 50%;border-bottom: 1px solid rgb(71, 75, 75);display: flex;flex-direction: column;justify-content:  space-between;">
	                            <div class="right-inner">
	                                <h2 style="margin-bottom: 20px;font-size: 28px;font-family: MuseoSansCyrl300;">Наши партнеры</h2>
	                                <div class="partners-list" style="display: flex;">



                            <a href="http://www.ifmo.ru/" target="_blank" style="width: 33%;">
                            	<div class="partners-item" style="padding: 0 10px;display: flex;align-items: center;background: rgb(35, 35, 35);margin: 0px 10px;border-radius: 4px;margin-left:  0;"><img src="../../assets/img/partners/itmo.png" alt="" style="width: 100%;border-radius: 2px;height: 90px;object-fit: contain;"></div>
                            </a>

                            <a href="http://cryptob2b.io/ru/" target="_blank" style="width: 33%;">
                            	<div class="partners-item" style="padding: 0px 10px;display: flex;align-items: center;background: rgb(35, 35, 35);border-radius: 4px;">
                            		<img src="../../assets/img/partners/cryptob2blogo.png" alt="" style="width: 100%;border-radius: 2px;height: 90px;object-fit: contain;" />
                            	</div>
                            </a>
                            <a href="https://www.blockchain-spb.org/" target="_blank" style="width: 33%;display: flex;">
                            	<div class="partners-item" style="padding: 0px 10px;display: flex;align-items: center;background: rgb(35, 35, 35);margin: 0px 10px;border-radius: 4px;margin-right:  0;">
                            		<img src="../../assets/img/partners/blockchain-spb.png" alt="" style="width: 100%;border-radius: 2px;height: 50px;object-fit: contain;" />
                            	</div>
                            </a>



                        </div>
                    </div>
                    <h2 style="font-size: 28px;margin-top: 30px;margin-bottom: 0;font-family: MuseoSansCyrl300;">Принимаем к сборам</h2>




    <div class="supported-coins" style="display: flex;justify-content: space-between;font-size: 26px;padding-bottom: 20px;">

    	<div class="icon-container" style="width: 20%;">
    		<div v-if="openCrypto !== 'BTC'" class="icon-item" @click="showAlePrice('BTC')" style="text-align: center;background: rgb(35, 35, 35);padding: 10px;display: flex;align-items: center;justify-content: center;border-radius: 4px;margin: 5px;flex-direction: column;font-size: 16px;margin-left:  0;">
	        	<img src="../../assets/img/crypto/btc.svg" alt="" style="width: 50px;height: 50px;margin: 15px 0px;object-fit: contain;" />
        	<span>BTC</span>
	        </div>
    		<div @click="showAlePrice('')" v-if="openCrypto === 'BTC'" class="icon-item" style="text-align: center;background: rgb(35, 35, 35);display: flex;padding: 10px;margin: 5px 5px 5px 0px;height: calc(100% - 30px);display:  flex;align-items:  center;">
    			<p style="margin: 0;">1 BTC = 13.000 ALE</p>
    		</div>
    	</div>

    	<div class="icon-container" style="width: 20%;">
    		<div v-if="openCrypto !== 'ETH'" class="icon-item" @click="showAlePrice('ETH')" style="text-align: center;background: rgb(35, 35, 35);padding: 10px;display: flex;align-items: center;justify-content: center;border-radius: 4px;margin: 5px;flex-direction: column;font-size: 16px;margin-left:  0;">
	        	<img src="../../assets/img/crypto/eth.svg" alt="" style="width: 50px;height: 50px;margin: 15px 0px;object-fit: contain;" />
        	<span>ETH</span>
	        </div>
    		<div @click="showAlePrice('')" v-if="openCrypto === 'ETH'" class="icon-item" style="text-align: center;background: rgb(35, 35, 35);display: flex;padding: 10px;margin: 5px 5px 5px 0px;height: calc(100% - 30px);display:  flex;align-items:  center;">
    			<p style="margin: 0;">1 ETH = 2.000 ALE</p>
    		</div>
    	</div>

    	<div class="icon-container" style="width: 20%;">
    		<div v-if="openCrypto !== 'BCH'" class="icon-item" @click="showAlePrice('BCH')" style="text-align: center;background: rgb(35, 35, 35);padding: 10px;display: flex;align-items: center;justify-content: center;border-radius: 4px;margin: 5px;flex-direction: column;font-size: 16px;margin-left:  0;">
	        	<img src="../../assets/img/crypto/bch.svg" alt="" style="width: 50px;height: 50px;margin:  15px 0;" />
        	<span>BCH</span>
	        </div>
	        <div @click="showAlePrice('')" v-if="openCrypto === 'BCH'" class="icon-item" style="text-align: center;background: rgb(35, 35, 35);display: flex;padding: 10px;margin: 5px 5px 5px 0px;height: calc(100% - 30px);display:  flex;align-items:  center;">
    			<p style="margin: 0;">1 BCH = 3.000 ALE</p>
    		</div>
    	</div>

    	<div class="icon-container" style="width: 20%;">
    		<div v-if="openCrypto !== 'LTC'" class="icon-item" @click="showAlePrice('LTC')" style="text-align: center;background: rgb(35, 35, 35);padding: 10px;display: flex;align-items: center;justify-content: center;border-radius: 4px;margin: 5px;flex-direction: column;font-size: 16px;margin-left:  0;">
	        	<img src="../../assets/img/crypto/ltc.svg" alt="" style="width: 50px;height: 50px;margin:  15px 0;" />
        	<span>LTC</span>
	        </div>
    		<div @click="showAlePrice('')" v-if="openCrypto === 'LTC'" class="icon-item" style="text-align: center;background: rgb(35, 35, 35);display: flex;padding: 10px;margin: 5px 5px 5px 0px;height: calc(100% - 30px);display:  flex;align-items:  center;">
    			<p style="margin: 0;">1 LTC = 500 LTC</p>
    		</div>
    	</div>

    	<div class="icon-container" style="width: 20%;">
    		<div v-if="openCrypto !== 'DASH'" class="icon-item" @click="showAlePrice('DASH')" style="text-align: center;background: rgb(35, 35, 35);padding: 10px;display: flex;align-items: center;justify-content: center;border-radius: 4px;margin: 5px;flex-direction: column;font-size: 16px;margin-left:  0;">
	        	<img src="../../assets/img/crypto/dash.svg" alt="" style="width: 50px;height: 50px;margin:  15px 0;" />
        	<span>DASH</span>
	        </div>
	        <div @click="showAlePrice('')" v-if="openCrypto === 'DASH'" class="icon-item" style="text-align: center;background: rgb(35, 35, 35);display: flex;padding: 10px;margin: 5px 5px 5px 0px;height: calc(100% - 30px);display:  flex;align-items:  center;">
    			<p style="margin: 0;">1 DASH = 300 ALE</p>
    		</div>
    	</div>

    </div>







	                            <h2 style="font-size: 28px;margin: 0;font-family: MuseoSansCyrl300;">Информация</h2>
	                            <div class="project-info" style="display: flex;justify-content: flex-start;font-size: 20px;font-family: MuseoSansCyrl300;"><a href="#" style="color: rgb(255, 255, 255);margin: 0 10px 0 0;font-size:  18px;">Демо</a> <a href="#" style="color: rgb(255, 255, 255);margin:  0 10px;font-size: 18px;">White paper</a> <a href="" style="color: rgb(255, 255, 255);margin:  0 10px;font-size: 18px;">План разработки</a></div>
	                        </div>
	                    </div>
	                </div>
	                <div class="ico-footer" style="width: 100%; height: 100px; background: rgb(35, 35, 35); display: flex; align-items: center; justify-content: space-between;">
	                    <div class="social-links" style="display: flex; align-items: center; margin-left: 30px;">
	                        <h3 style="margin: 0px;font-size: 18px;color: #dcdcdc;">Наше сообщество</h3>

	                        <div class="social-link" style="display: flex;justify-content: center;margin-left: 10px;">

	                            <div class="social-item" style="width: 30px;height: 30px;margin: 0 5px;font-size: 24px;text-align: center;color: #dcdcdc;border-radius:  4px;">
	                            	<a href="#" target="_blank" style="color: #dcdcdc;">
	                            		<i class="fa fa-btc"></i>
	                            	</a>
	                            </div>
	                            <div class="social-item" style="width: 30px;height: 30px;margin: 0 5px;font-size: 24px;text-align: center;color: #dcdcdc;border-radius:  4px;"><i class="fa fa-github"></i></div>
	                            <div class="social-item" style="width: 30px;height: 30px;margin: 0 5px;font-size: 24px;text-align: center;color: #dcdcdc;border-radius: 4px;">
	                            	<a href="https://www.facebook.com/alehub.io/" target="_blank" style="color: #dcdcdc;">
	                            	  <i class="fa fa-facebook"></i>
	                            	</a>
	                            </div>
	                            <div class="social-item" style="width: 30px;height: 30px;margin: 0 5px;font-size: 24px;text-align: center;color: #dcdcdc;border-radius:  4px;"><i class="fa fa-youtube"></i></div>
	                            <div class="social-item" style="width: 30px;height: 30px;margin: 0 5px;font-size: 24px;text-align: center;color: #dcdcdc;border-radius:  4px;"><i class="fa fa-twitter"></i></div>
	                            <div class="social-item" style="width: 30px;height: 30px;margin: 0 5px;font-size: 24px;text-align: center;color: #dcdcdc;border-radius:  4px;"><i class="fa fa-send"></i></div>
	                            <div class="social-item" style="width: 30px;height: 30px;margin: 0 5px;font-size: 24px;text-align: center;color: #dcdcdc;border-radius:  4px;"><i class="fa fa-vk"></i></div>
	                        </div>
	                    </div>
	                    <div class="actions" style="margin-right: 30px;"><button style="background: rgb(255, 210, 79); border-radius: 2px; margin-right: 10px; font-size: 20px; text-transform: none; line-height: 2.5em; height: auto; padding: 0px 25px; font-weight: 400;">Bounty программа</button>
	                        <button
	                            style="border-radius: 2px;margin-right: 10px;font-size: 20px;text-transform: none;line-height: 2.5em;height: auto;padding: 0px 25px;font-weight: 400;background-color: #e5e6e6;">Реферальная программа</button>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>
	</section>
</template>

<script>
import Countdown from 'vuejs-countdown';
import Spinner from '../layouts/Spinner'

export default {
	name: 'Greeting',
	props: ['content', 'loader'],
	components: {
		Countdown,
		Spinner
	},
	data () {
		return {
			openCrypto: ''
		}
	},
	methods: {
		getTimeRemaining(endtime) {
		  var t = Date.parse(endtime) - Date.parse(new Date());
		  var seconds = Math.floor((t / 1000) % 60);
		  var minutes = Math.floor((t / 1000 / 60) % 60);
		  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
		  var days = Math.floor(t / (1000 * 60 * 60 * 24));
		  return {
		    'total': t,
		    'days': days,
		    'hours': hours,
		    'minutes': minutes,
		    'seconds': seconds
		  };
		},
		showAlePrice (crypto) {
			this.openCrypto = crypto;
		},
		initializeClock (id, endtime) {
			let _this = this;
			var clock = document.getElementById(id);

			function updateClock() {
				var t = _this.getTimeRemaining(endtime);

				document.getElementById('countDown').innerHTML = t.days+':'+('0' + t.hours).slice(-2)+':'+('0' + t.minutes).slice(-2)+':'+('0' + t.seconds).slice(-2)

				if (t.total <= 0) {
					clearInterval(timeinterval);
				}
			}

			updateClock();
			var timeinterval = setInterval(updateClock, 1000);
		}
	},
	mounted() {
		this.initializeClock('countDown', new Date(1522530000000));
	}
}
</script>

<style>
	.partners-item {
		transition: all 200ms ease-in;
		cursor: pointer;
	}

	.partners-item:hover {
		background: #000!important;
	}

</style>

<style lang="stylus">
	.icon-item:hover
		background #000!important
		cursor pointer

	.center-loader
		position absolute
		top 50%
		left 50%

		.icon-item 
			transition all 200ms ease-in
			cursor pointer
			&:hover
				background #000!important
</style>