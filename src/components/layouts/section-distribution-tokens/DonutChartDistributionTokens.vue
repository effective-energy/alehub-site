<template>
    <div id="donut-chart">
    </div>
</template>

<script>
    import {bb} from 'billboard.js';

    export default {
        name: 'DonutChartDistributionTokens',
        data: () => ({
            chart: null
        }),
        mounted() {
            this.chart = bb.generate({
                data: {
                    columns: [
                        ["Продажа на STO", 77],
                        ["Команда", 10],
                        ["Баунти", 2],
                        ["Рефералы, эдвайзеры", 11],
                    ],
                    colors: {
                        "Продажа на STO": '#fc8435',
                        "Команда": '#cc1a6c',
                        "Баунти": '#580f8d',
                        "Рефералы, эдвайзеры": '#ad149c'
                    },
                    type: 'donut',
                    onclick: function (d, i) {
                        // console.log("onclick", d, i);
                    },
                    onover: function (d, i) {
                        // console.log("onover", d, i);
                    },
                    onout: function (d, i) {
                        // console.log("onout", d, i);
                    }
                },

                // onrendered: function() {
                //     // change 3rd data label text color of 'data1'
                //     this.main.select(".bb-texts-data1 .bb-text-2")
                //         .style("fill", "blue");
                // },

                // label: {
                //     show: true,
                //     color: '#ffffff',
                //     format: function(value, ratio, id) {
                //         console.log(value, ratio, id);
                //         return d3.format("$")(value);
                //     },
                //     threshold: 0.1,
                //
                //     // set ratio callback. Should return ratio value
                //     ratio: function(d, radius, h) {
                //         return ratio;
                //     },
                //     // or set ratio number
                //     ratio: 0.5
                // },
                legend: {
                    show: false
                },

                // color: {
                //     pattern: ["#1f77b4", "#aec7e8", '#ffffff', '#cccccc'],
                //
                //     // Set colors' patterns
                //     // it should return an array of SVGPatternElement
                //     tiles: function() {
                //         var pattern = document.createElementNS("http://www.w3.org/2000/svg", "pattern");
                //         var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
                //         var circle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                //
                //         pattern.setAttribute("patternUnits", "userSpaceOnUse");
                //         pattern.setAttribute("width", "32");
                //         pattern.setAttribute("height", "32");
                //
                //         g.style.fill = "#000";
                //         g.style.opacity = "0.2";
                //
                //         circle1.setAttribute("cx", "3");
                //         circle1.setAttribute("cy", "3");
                //         circle1.setAttribute("r", "3");
                //
                //         g.appendChild(circle1);
                //         pattern.appendChild(g);
                //
                //         return [pattern];
                //     }
                // },
                donut: {
                    show: false
                },
                bindto: '#donut-chart'
            });

            // setTimeout(() => {
            //     this.chart.load({
            //         columns: [
            //             ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
            //             ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
            //             ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
            //         ]
            //     });
            // }, 1500);
            //
            // setTimeout(() => {
            //     this.chart.unload({
            //         ids: "data1"
            //     });
            //     this.chart.unload({
            //         ids: "data2"
            //     });
            // }, 2500);
        }
    }
</script>

<style lang="stylus" scoped>

</style>