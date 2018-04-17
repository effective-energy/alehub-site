<template>
    <div class="app">
        <Header />
        <Screen1 />
        <Screen2 />
        <Screen3 />
        <Screen4 />
        <Screen5 />
        <Screen6 />
        <Screen7 />
        <Footer />
    </div>
</template>

<script>
import Header from './layouts/Header'
import Screen1 from './Screen1'
import Screen2 from './Screen2'
import Screen3 from './Screen3'
import Screen4 from './Screen4'
import Screen5 from './Screen5'
import Screen6 from './Screen6'
import Screen7 from './Screen7'
import Footer from './layouts/Footer'

export default {
    name: 'Index',
    components: {
        Header,
        Screen1,
        Screen2,
        Screen3,
        Screen4,
        Screen5,
        Screen6,
        Screen7,
        Footer
    }
}
</script>