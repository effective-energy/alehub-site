<template>
    <!--<div class="wrapper" data-anim="base wrapper">-->
        <!--<div class="circle" data-anim="base left"></div>-->
        <!--<div class="circle" data-anim="base right"></div>-->
    <!--</div>-->

    <div class="col-xs-6 col-lg-3 col-md-4 col-sm-6 col-6">
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
            <div class="progress-value">{{ $parent.activeDistribution }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Circle1"
    }
</script>

<style scoped>

    .progress{
        width: 160px;
        height: 160px;
        line-height: 160px;
        background: none;
        margin: 0 auto;
        box-shadow: none;
        position: relative;
    }
    .progress:after{
        content: "";
        width: 100%;
        height: 100%;
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
        left: -102%;
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
        font-size: 32px;
        line-height: 125px;
        text-align: center;
        position: absolute;
        top: 7.5%;
        left: 7.5%;
    }

    .progress .progress-right .progress-bar{
        animation: loading-1 1.8s linear forwards;
    }
    .progress.first .progress-bar{
        border-color: #139ac9;
    }
    .progress.first .progress-value{
        color: #139ac9;
    }
    .progress.first .progress-left .progress-bar{
        animation: loading-2 1.5s linear forwards 1.8s;
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
    @keyframes loading-2{
        0%{
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100%{
            -webkit-transform: rotate(97.2deg);
            transform: rotate(97.2deg);
        }
    }
    @keyframes loading-3{
        0%{
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100%{
            -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
        }
    }
    @keyframes loading-4{
        0%{
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100%{
            -webkit-transform: rotate(36deg);
            transform: rotate(36deg);
        }
    }
    @media only screen and (max-width: 990px){
        .progress{ margin-bottom: 20px; }
    }
    /*.ciircle{*/
        /*display: flex;*/
        /*justify-content: center;*/
        /*width: 80% !important;*/
        /*height: 80% !important;*/
        /*align-items: center;*/
    /*}*/
    /*.wrapper {*/
        /*width: 100px; !* Set the size of the progress bar *!*/
        /*height: 100px;*/
        /*position: absolute; !* Enable clipping *!*/
        /*clip: rect(0px, 100px, 100px, 50px); !* Hide half of the progress bar *!*/
    /*}*/
    /*!* Set the sizes of the elements that make up the progress bar *!*/
    /*.circle {*/
        /*width: 80px;*/
        /*height: 80px;*/
        /*border: 3px solid four;*/
        /*border-radius: 50px;*/
        /*position: absolute;*/
        /*clip: rect(0px, 50px, 100px, 0px);*/
    /*}*/
    /*!* Using the data attributes for the animation selectors. *!*/
    /*!* Base settings for all animated elements *!*/
    /*div[data-anim~=base] {*/
        /*-webkit-animation-iteration-count: 1;  !* Only run once *!*/
        /*-webkit-animation-fill-mode: forwards; !* Hold the last keyframe *!*/
        /*-webkit-animation-timing-function:linear; !* Linear animation *!*/
    /*}*/

    /*.wrapper[data-anim~=wrapper] {*/
        /*-webkit-animation-duration: 0.01s; !* Complete keyframes asap *!*/
        /*-webkit-animation-delay: 3s; !* Wait half of the animation *!*/
        /*-webkit-animation-name: close-wrapper; !* Keyframes name *!*/
    /*}*/

    /*.circle[data-anim~=left] {*/
        /*-webkit-animation-duration: 6s; !* Full animation time *!*/
        /*-webkit-animation-name: left-spin;*/
    /*}*/

    /*.circle[data-anim~=right] {*/
        /*-webkit-animation-duration: 3s; !* Half animation time *!*/
        /*-webkit-animation-name: right-spin;*/
    /*}*/
    /*!* Rotate the right side of the progress bar from 0 to 180 degrees *!*/
    /*@-webkit-keyframes right-spin {*/
        /*from {*/
            /*-webkit-transform: rotate(0deg);*/
        /*}*/
        /*to {*/
            /*-webkit-transform: rotate(180deg);*/
        /*}*/
    /*}*/
    /*!* Rotate the left side of the progress bar from 0 to 360 degrees *!*/
    /*@-webkit-keyframes left-spin {*/
        /*from {*/
            /*-webkit-transform: rotate(0deg);*/
        /*}*/
        /*to {*/
            /*-webkit-transform: rotate(360deg);*/
        /*}*/
    /*}*/
    /*!* Set the wrapper clip to auto, effectively removing the clip *!*/
    /*@-webkit-keyframes close-wrapper {*/
        /*to {*/
            /*clip: rect(auto, auto, auto, auto);*/
        /*}*/
    /*}*/

</style>