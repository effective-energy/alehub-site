<template>

    <div class="circle mirror col-xs-6 col-lg-3 col-md-4 col-sm-6 col-6">
        <div class="progress first">
                <span class="progress-left">
                    <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                    <span class="progress-bar"></span>
                </span>
            <!--1-->
                    <div class="progress second progress-value">
                        <span class="progress-left"></span>
                        <span class="progress-right">
                            <span class="progress-bar"></span>
                        </span>
                        <!--2-->
                        <div class="progress third progress-value">
                            <span class="progress-left"></span>
                            <span class="progress-right">
                                <span class="progress-bar"></span>
                            </span>
                            <!--3-->
                            <div class="progress four progress-value">
                                    <span class="progress-left"></span>
                                    <span class="progress-right">
                                        <span  class="progress-bar"></span>
                                    </span>
                            <!--4-->
                            </div>
                        </div>
                    </div>
            <div :style="{color: $parent.activeDistribution.color}" class="mirror progress-value">{{ $parent.activeDistribution.count ? $parent.activeDistribution.count + "%" : "100%"  }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Circle1"
    }
</script>

<style scoped>
    .mirror{
        transform: scale(-1, 1)
    }
    .progress{
        width: 160px;
        height: 160px;
        line-height: 150px;
        background: none;
        margin: 0 auto;
        box-shadow: none;
        position: relative;
    }
    .progress:after{
        content: "";
        width: 100%;
        height: 100%;
        border: solid 0.5px #324f64;
        border-radius: 60%;
        position: absolute;
        top: 0;
        left: 0;
    }
    .progress > span{
        width: 50%;
        height: 100%;
        overflow: hidden;
        position: relative;
        top: 0;
        z-index: 1;
    }
    .progress .progress-left{
        left: 0;
    }
    .progress .progress-bar{
        width: 100%;
        height: 100%;
        background: none;
        border-width: 2px;
        border-style: solid;
        position: absolute;
        top: 0;
    }
    .progress .progress-left .progress-bar{
        left: 100%;
        border-top-right-radius: 80px;
        border-bottom-right-radius: 80px;
        border-left: hidden;
        -webkit-transform-origin: center left;
        transform-origin: center left;
    }
    .progress .progress-right{
        right: 0;
    }
    .progress .progress-right .progress-bar{
        left: -100%;
        border-top-left-radius: 80px;
        border-bottom-left-radius: 80px;
        border-right: hidden;
        -webkit-transform-origin: center right;
        transform-origin: center right;
    }
    .progress .progress-value{
        width: 85%;
        height: 85%;
        border-radius: 50%;
        font-size: 24px;
        line-height: 550%;
        text-align: center;
        position: absolute;
        top: 7.5%;
        left: 7.5%;
    }


    .progress.first .progress-left .progress-bar{
        animation: loading-1-1 1.5s linear forwards 1.8s;
    }
    .progress.first .progress-bar{
        border-color: #139ac9;
    }
    .progress.first .progress-value{
        color: #139ac9;
    }
    .progress .progress-right .progress-bar{
        animation: loading-1 1.8s linear forwards;
    }

    .progress.second .progress-right .progress-bar{
        animation: loading-2 1.8s linear forwards;
    }
    .progress.second .progress-bar{
        border-color: #6187fc;
    }
    .progress.second .progress-value{
        color: #6187fc;
    }

    .progress.third .progress-right .progress-bar{
        animation: loading-3 1.8s linear forwards;
    }
    .progress.third .progress-bar{
        border-color: #80ff89;
    }
    .progress.third .progress-value{
        color: #80ff89;
    }

    .progress.four .progress-right .progress-bar{
        animation: loading-4 1.8s linear forwards;
    }
    .progress.four .progress-bar{
        border-color: #fab604;
    }
    .progress.four .progress-value{
        color: #fab604;

    }

    @keyframes loading-1{
        0%{
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100%{
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
        }
    }
    @keyframes loading-1-1{
        0%{
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100%{
            -webkit-transform: rotate(97.2deg);
            transform: rotate(97.2deg);
        }
    }
    @keyframes loading-2{
        0%{
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100%{
            -webkit-transform: rotate(39.6deg);
            transform: rotate(39.6deg);
        }
    }
    @keyframes loading-3{
        0%{
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100%{
            -webkit-transform: rotate(36deg);
            transform: rotate(36deg);
        }
    }
    @keyframes loading-4{
        0%{
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100%{
            -webkit-transform: rotate(7.2deg);
            transform: rotate(7.2deg);
        }
    }
    @media only screen and (max-width: 990px){
        .progress{ margin-bottom: 20px; }
    }

</style>