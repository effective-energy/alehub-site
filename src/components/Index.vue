<template>
	<div class="index">
		<Navbar />
		<b-container>
			<Greeting />
			<Partners />
			<About />
			<Solutions />
			<Distribution />
			<News />
			<Footer />
		</b-container>
	</div>
</template>

<script>
import Navbar from './layouts/Navbar';
import Greeting from './layouts/Greeting';
import Partners from './layouts/Partners';
import About from './layouts/About';
import Solutions from './layouts/Solutions';
import Distribution from './layouts/Distribution';
import News from './layouts/News';
import Footer from './layouts/Footer';

export default {
	name: 'Index',
	components: {
		Navbar,
		Greeting,
		Partners,
		About,
		Solutions,
		Distribution,
		News,
		Footer
	}
}
</script>