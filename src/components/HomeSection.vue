<template>
    <section id="screen1">

        <div class="button-choose" id="button-choose" v-if="checkWindowWidth">
            <button type="button"
                    id="do-video-theme"
                    class="button-choose_video"
                    :class="{ 'button-choose__active-video': isVideo }"
                    @click="doVideoTheme">
                <img src="../../static/images/play.svg" alt="video">
            </button>
            <button type="button"
                    id="do-light-theme"
                    class="button-choose_light"
                    :class="{ 'button-choose__active': !isDark && !isVideo }"
                    @click="doLightTheme">
            </button>
            <button type="button"
                    id="do-dark-theme"
                    class="button-choose_dark"
                    :class="{ 'button-choose__active': isDark && !isVideo }"
                    @click="doDarkTheme">
            </button>
        </div>

        <div id="svg-anim"
             class="anim"
             v-if="checkWindowWidth && !isVideo"
             :class="{ 'anim__dark': isDark }">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 1600">
                <g fill="none" fill-rule="evenodd">
                    <path stroke="#ffd24f"
                          d="M781.02 488.77v69.78c0 1.08-.88 1.96-1.97 1.96l-135.12-.04c-1.09 0-2.6.62-3.38 1.39l-39.23 38.96a5.52 5.52 0 0 1-3.37 1.4h-75.38a1.97 1.97 0 0 1-1.97-1.97v-33.5"/>
                    <path stroke="#ffd24f"
                          d="M674.88 355.57l45.54-45.24a5.42 5.42 0 0 0 1.39-3.35l-.06-10.38c0-1.08-.63-2.58-1.4-3.35l-43.38-43.07a1.94 1.94 0 0 1 0-2.77l82.83-82.25a5.52 5.52 0 0 1 3.37-1.4l44.94.1c1.08 0 2.6-.62 3.37-1.37L952.5 22.65"/>
                    <path stroke="#E4E6E6"
                          d="M507-76.68v265.47a4 4 0 0 0 4 3.99H566c1.08 0 1.97.88 1.97 1.96v147.5c0 1.08-.63 2.59-1.4 3.35l-47.9 47.4a5.45 5.45 0 0 0-1.4 3.34c0 2.25.64 3.76 1.4 4.53l53.82 53.26c.77.76 1.76 1.39 2.19 1.39.43 0 .79.88.79 1.96v70.17c0 1.07-.89 1.96-1.97 1.96l-85.81-.04c-1.09 0-2.6.62-3.38 1.39l-1.55 1.54a5.52 5.52 0 0 1-3.38 1.4h-9.29"/>
                    <path stroke="#ffd24f" d="M8 127.82v391.06a4.04 4.04 0 0 0 4 4.04L140.8 524"/>
                    <path stroke="#ffd24f"
                          d="M894.01 374l49.8-49.44a5.52 5.52 0 0 1 3.37-1.4h92.41c1.09 0 2.6.63 3.38 1.4l27.18 26.99"/>
                    <path stroke="#ffd24f"
                          d="M894.01 374l49.8-49.44a5.52 5.52 0 0 1 3.37-1.4h92.41c1.09 0 2.6.63 3.38 1.4l27.18 26.99"/>
                    <path stroke="#E4E6E6"
                          d="M755.16 213.9l70.82.04c1.08 0 2.6-.63 3.37-1.4l91.61-90.97a5.52 5.52 0 0 1 3.37-1.39h77.07l-71.29-72.13a5.45 5.45 0 0 1-1.4-3.35V16.87"/>
                    <path stroke="#ffd24f"
                          d="M261.78-52.44l11.16 11.08c.77.77 1.4 2.28 1.4 3.35V-5L156.7 111.03l-85.4 84.8a5.45 5.45 0 0 0-1.4 3.35v100.67c0 1.08.89 1.96 1.97 1.96h50.4c1.09 0 1.98.88 1.98 1.96l.07 26.92c0 1.07.9 1.96 1.98 1.96l335.73.13c1.09 0 1.98.88 1.98 1.96v36.79l-42.99 43.78a5.52 5.52 0 0 1-3.37 1.4H385.2"/>
                    <path stroke="#E4E6E6"
                          d="M564.8 549.64v17.76c0 1.08-.64 2.59-1.4 3.35L382.28 750.6a5.52 5.52 0 0 1-3.38 1.39h-109.1c-1.09 0-1.97.88-1.97 1.96v23.37c0 1.07-.9 1.96-1.98 1.96h-83.54c-1.08 0-1.97.88-1.97 1.96v45.8c0 1.07.89 1.95 1.97 1.95h29.89c1.08 0 1.97.88 1.97 1.96v51.07c0 1.08.63 2.59 1.4 3.35l10.32 10.25c.77.76 2.29 1.39 3.37 1.39h111.77c1.09 0 1.34.62.57 1.39M482.82 656H630.9"/>
                    <path stroke="#ffd24f"
                          d="M440.53 245.87l-31.7 31.48a5.52 5.52 0 0 1-3.37 1.39h-62.37c-1.09 0-2.6.62-3.38 1.39l-2.68 3.66-264.59.02c-1.08 0-2.6-.63-3.37-1.4l-47.3-46.97a5.52 5.52 0 0 0-3.37-1.39h-57.47l-1.12-34.61c0-1.08-.63-2.59-1.4-3.35l-66.54-65.94"/>
                    <path stroke="#ffd24f"
                          d="M705.31 221.73h7.83c1.09 0 2.6.63 3.37 1.4l45.8 45.6c.78.76 1.4 2.27 1.4 3.35v13.94c0 1.08.46 1.96 1.03 1.98.56 0 1.03.9 1.03 1.98v10.77l-.15 110.84c0 1.08-.89 1.96-1.98 1.96H628.32c-1.08 0-2.6-.63-3.37-1.4l-12.2-12.12a5.52 5.52 0 0 0-3.38-1.39h-46.18a2 2 0 0 0-2 1.96l-.17 26.74c0 1.08-.63 2.59-1.4 3.35l-8.82 8.76a5.52 5.52 0 0 1-3.37 1.39l-26.65-.06c-1.09 0-2.6.62-3.38 1.39l-48.1 47.78a5.52 5.52 0 0 1-3.38 1.39h-16.37l-79.45-.02c-1.09 0-2.6.63-3.36 1.39L220.71 639.06a5.47 5.47 0 0 1-3.35 1.4H31.06"/>
                    <path stroke="#E4E6E6"
                          d="M145.43 99.41L289.6 243.5c.77.76 2.29 1.39 3.37 1.39h146.76c1.09 0 2.6.62 3.38 1.39l31.93 31.71c.77.77 1.4 2.27 1.4 3.35V474.1c0 1.08-.63 2.59-1.4 3.35l-7.6 7.54a5.52 5.52 0 0 1-3.36 1.4h-20.62l-20.67 20.97-2.78 2.78L289.37 640a5.45 5.45 0 0 0-1.4 3.35l.16 177.85"/>
                    <path stroke="#ffd24f"
                          d="M318.82 380.62h94.88c1.09 0 2.6.63 3.38 1.39l14.97 14.87c.77.76 2.29 1.39 3.37 1.39h72.99c1.08 0 2.6.63 3.35 1.39l58.57 58.53c.77.77 2.27 1.4 3.35 1.4h103.37c1.08 0 1.97-.89 1.97-1.97v-14.7c0-1.09-.89-1.97-1.97-1.97l-6.7.02H630.1a1.97 1.97 0 0 1-1.97-1.96v-57c0-1.08-.63-2.59-1.4-3.35l-14.58-14.48a5.45 5.45 0 0 1-1.4-3.35v-17.3c0-1.07-.63-2.58-1.4-3.34L597 327.92a5.52 5.52 0 0 0-3.37-1.39h-17.4c-1.09 0-2.6-.62-3.38-1.39l-41.8-41.5a5.52 5.52 0 0 0-3.37-1.4h-41.34"/>
                    <path stroke="#E4E6E6"/>
                    <path stroke="#ffd24f"
                          d="M855.2 194.4h59.84c1.09 0 1.97.89 1.97 1.96v28.74c0 1.08.64 2.59 1.4 3.35l50.96 50.6c.77.76 1.4 2.27 1.4 3.35v101.47l105.2 104.27"/>
                    <path stroke="#ffd24f"
                          d="M638.46 305.73L651 293.29c.77-.74.77-2 0-2.76l-31.35-31.13c-.76-.74-.76-2 0-2.76l18.53-18.4a5.52 5.52 0 0 1 3.37-1.39l160.41-.2 423.37 1.2c1.08 0 1.97.89 1.97 1.96v71.5"/>
                    <path stroke="#ffd24f"
                          d="M438.61 486.03h-18.54c-1.08 0-2.6-.63-3.37-1.4l-74.94-74.41a5.52 5.52 0 0 0-3.37-1.4h-38.57c-1.08 0-2.6-.62-3.37-1.38l-47-46.68-36.58-.04-57 71.59a5.45 5.45 0 0 0-1.4 3.35v23.9"/>
                    <path stroke="#E4E6E6"
                          d="M882.06 358.97l-46.92 46.6a5.52 5.52 0 0 1-3.38 1.39h-94.64c-1.09 0-2.6-.63-3.38-1.4l-30.6-30.33a5.52 5.52 0 0 0-3.36-1.4l-34.94.04c-1.08 0-2.6.63-3.37 1.4l-29.57 29.36a5.52 5.52 0 0 1-3.37 1.39l-14.55-14.35a5.63 5.63 0 0 0-3.42-1.4l-156.97-.25c-1.11 0-2.65.63-3.43 1.4l-27.85 27.61a5.52 5.52 0 0 1-3.38 1.4H-23.82l-88.65.2-12.44 12.35"/>
                    <path stroke="#ffd24f"
                          d="M292.9 643.74l59.56-59.12a5.52 5.52 0 0 1 3.37-1.39h23.93c1.08 0 2.6-.63 3.37-1.39l46.53-46.21a5.52 5.52 0 0 1 3.38-1.4h33.53l153.67-.01c1.08 0 1.97-.88 1.97-1.96V420.01c0-1.07-.63-2.58-1.4-3.35l-38.64-38.37a5.45 5.45 0 0 1-1.4-3.35v-51.52c0-1.08-.64-2.59-1.4-3.35L468.91 210.39a5.52 5.52 0 0 0-3.38-1.4l-180.49.2"/>
                    <path stroke="#E4E6E6"
                          d="M484.13 548.71h-37.09c-1.08 0-2.6.63-3.37 1.4l-69.02 68.54c-.77.76-.77 2 0 2.76l28.09 27.78c.77.76 2.29 1.39 3.37 1.39h62.41"/>
                    <path stroke="#E4E6E6"
                          d="M520.82 561.7v-4.74c0-1.08-.89-1.96-1.98-1.96h-13.21c-1.09 0-2.6-.62-3.37-1.39l-43.36-42.88a5.45 5.45 0 0 1-1.4-3.35v-190.4c0-1.08.63-2.6 1.4-3.36l20.89-20.74a5.45 5.45 0 0 0 1.4-3.35v-95.4c0-1.08-.63-2.58-1.4-3.35L292.4 4.7l-.6-40.88c0-1.08-.62-2.58-1.4-3.35L278.8-51.07"/>
                    <path stroke="#ffd24f"
                          d="M275.76 745h99.28c1.09 0 2.6-.63 3.38-1.4l174.33-172.75a5.52 5.52 0 0 1 3.38-1.4h46.75c1.08 0 2.6-.62 3.35-1.38l51.47-51.46a5.42 5.42 0 0 0 1.38-3.35V311.29c0-1.07-.63-2.58-1.4-3.35l-51.84-51.3a5.52 5.52 0 0 0-3.38-1.4h-17.95a1.97 1.97 0 0 1-1.97-1.95v-44.47c0-1.07-.89-1.96-1.97-1.96h-88.63a1.97 1.97 0 0 1-1.97-1.96v-19.2c0-1.07-.64-2.58-1.4-3.34L309.87 4.92"/>
                    <path stroke="#E4E6E6"
                          d="M1002.65 123.83H926.5c-1.08 0-2.6.62-3.37 1.39l-92.28 91.46a5.52 5.52 0 0 1-3.37 1.39l-131.87-.08c-1.09 0-2.6.63-3.37 1.37l-51.9 51.19c-.77.76-.77 2 0 2.76l21.22 21.1c.77.76 1.4 2.27 1.4 3.35v15.69"/>
                    <path stroke="#E4E6E6"
                          d="M672.51 437.64h54.25c1.08 0 2.6.63 3.37 1.4l49.04 48.7c.77.76 2.29 1.38 3.37 1.38h45.16c1.08 0 2.6-.62 3.37-1.39L914.39 405a5.52 5.52 0 0 1 3.37-1.4h42.22c1.08 0 2.6.63 3.37 1.4l100.8 100.1"/>
                    <path stroke="#E4E6E6"
                          d="M672.51 434.31h55.63c1.08 0 2.6.63 3.37 1.4l49.14 48.8c.77.76 2.29 1.38 3.37 1.38l41.9-.04c1.08 0 2.6-.62 3.37-1.39l62.08-61.68a5.45 5.45 0 0 0 1.4-3.35l-.1-268.18c0-1.08-.63-2.59-1.4-3.35l-99.8-99.28a5.52 5.52 0 0 0-3.37-1.39H422.62c-1.08 0-2.6.63-3.37 1.4L260.28 206.3a5.52 5.52 0 0 1-3.38 1.39H127.3c-1.08 0-2.6.62-3.37 1.39l-36.71 36.45a5.45 5.45 0 0 0-1.4 3.35v185.1"/>
                    <path stroke="#E4E6E6"
                          d="M410.1 713.73l17.53 17.42c.77.76 2.29 1.39 3.37 1.39h42.02c1.09 0 2.6-.63 3.37-1.4l26.02-25.83 123.2-.31"/>
                    <path/>
                    <path stroke="#E4E6E6"
                          d="M307.34 907.08c.77-.77.52-1.4-.57-1.4H108.29a1.97 1.97 0 0 1-1.98-1.95V743.59c0-1.08.9-1.96 1.98-1.96h264.38c1.09 0 2.6-.63 3.38-1.4l23.75-23.58c.77-.76.77-2 0-2.76l-80.84-80.1c-.77-.76-.51-1.4.57-1.4h137.53c1.09 0 2.6-.62 3.38-1.38l53.63-53.26a5.52 5.52 0 0 1 3.37-1.4l88.57-.2c1.09 0 2.6-.62 3.38-1.38l55.6-55.22a5.45 5.45 0 0 0 1.4-3.35V409.93c0-1.08.9-1.96 1.98-1.96h29c1.08 0 2.6-.63 3.37-1.4l43.32-43.01a5.52 5.52 0 0 1 3.37-1.4h6.11c1.09 0 2.6-.62 3.38-1.38l53.12-52.76a5.52 5.52 0 0 1 3.37-1.39h13.6c1.08 0 2.6.63 3.37 1.4L892.79 370c.77.77 2.29 1.4 3.37 1.4h74.06c1.08 0 2.6.62 3.37 1.38l93.97 93.5"/>
                    <path stroke="#ffd24f"
                          d="M647.56 429.46v-33.62c0-1.08-.63-2.59-1.4-3.35l-31.45-31.22a5.52 5.52 0 0 0-3.37-1.4h-36.87c-1.08 0-2.6.63-3.37 1.4l-74.35 73.83a5.52 5.52 0 0 1-3.37 1.39H440.9a1.97 1.97 0 0 1-1.98-1.96v-71.5c0-1.08-.88-1.96-1.97-1.96H9.3c-1.08 0-2.6.63-3.37 1.4l-37.9 37.62a5.52 5.52 0 0 1-3.37 1.4h-57c-1.1 0-2.61.62-3.38 1.38l-13.2 13.1a5.52 5.52 0 0 1-3.37 1.4h-13.2"/>
                    <path stroke="#ffd24f"
                          d="M219.9 357h144.49l76.54.13c1.08 0 1.97.88 1.97 1.96v71.7c0 1.08.89 1.96 1.97 1.96h46.36c1.08 0 2.6-.63 3.37-1.4l74.35-74a5.52 5.52 0 0 1 3.37-1.4h192.33c1.09 0 2.6-.62 3.37-1.38l43.58-43.28a5.52 5.52 0 0 1 3.37-1.39h10.6c1.08 0 2.6.63 3.37 1.4l62.65 62.2c.77.77 2.29 1.4 3.37 1.4h73.87c1.09 0 2.6.63 3.38 1.4l94.12 93.47 9.27.57c.84 0 2.17-.62 2.93-1.39l104.08-89.36a1.97 1.97 0 0 1 2.78 0l6.3 6.25"/>
                    <path stroke="#E4E6E6"
                          d="M599.92 564.19a6.6 6.6 0 0 0 4.04-1.67l47.94-47.6a6.5 6.5 0 0 0 1.67-4.01V313.84c0-1.3-.75-3.1-1.67-4.02l-47.94-47.6a6.6 6.6 0 0 0-4.04-1.66h-97.84a6.6 6.6 0 0 0-4.05 1.66l-47.93 47.6a6.5 6.5 0 0 0-1.68 4.02v197.07c0 1.29.75 3.1 1.68 4.01l47.93 47.6a6.6 6.6 0 0 0 4.05 1.67h97.84z"/>
                    <path stroke="#ffd24f"
                          d="M648.25 527.17v33.3c0 1.08-.63 2.58-1.4 3.35l-87.37 86.76c-.77.76-.51 1.39.57 1.39h70.82"/>
                    <path stroke="#ffd24f"
                          d="M476.04 273.32v-18.86c0-1.08-.63-2.59-1.4-3.35l-30.9-30.68a5.52 5.52 0 0 0-3.37-1.4H274.62"/>
                    <path stroke="#E4E6E6"
                          d="M923.43 372.6V119.09c0-1.07-.64-2.58-1.4-3.34L757.4-47.74a5.52 5.52 0 0 0-3.37-1.39H351.57c-1.09 0-2.6.63-3.38 1.4L310.5-10.3"/>
                    <path stroke="#ffd24f"
                          d="M317-49.77L304.42-37.3a5.58 5.58 0 0 0-1.42 3.35l-.36 21.45a5.3 5.3 0 0 0 1.36 3.35L493.36 178.9c.77.76 1.4 2.27 1.4 3.35v18.41c0 1.08.89 1.96 1.97 1.96h87.86c1.09 0 1.98.88 1.98 1.96v34.67c0 1.08.88 1.96 1.97 1.96h23.3c1.08 0 2.6.63 3.37 1.4l46.16 45.83c.77.77 1.4 2.28 1.4 3.35v138.64l.07 84.4c0 1.08-.63 2.6-1.38 3.35l-53.63 53.27a5.52 5.52 0 0 1-3.37 1.39H557.9c-1.08 0-2.6.63-3.37 1.39L380.57 746.98a5.52 5.52 0 0 1-3.38 1.39H112.47c-1.09 0-1.97.88-1.97 1.96v93.24c0 1.08-.9 1.96-1.98 1.96h-224.54"/>
                    <path stroke="#ffd24f"
                          d="M415.07 612.97l63.3-62.86a5.52 5.52 0 0 1 3.37-1.4h124.67c1.08 0 2.6-.6 3.37-1.37l28.23-27.83a5.35 5.35 0 0 0 1.4-3.33V478.2c0-1.07.89-1.96 1.97-1.96H694c1.09 0 1.97-.88 1.97-1.95v-52.11c0-1.08.64-2.59 1.4-3.35l29.57-29.37a5.45 5.45 0 0 0 1.4-3.35v-76c0-1.08.9-1.96 1.98-1.96h37.9a4 4 0 0 0 4-4v-29.3c0-1.08.63-2.59 1.4-3.35l35.35-35"/>
                    <path stroke="#ffd24f"
                          d="M893.1 374.7L847.5 420a5.52 5.52 0 0 1-3.37 1.38H618.66c-1.09 0-2.6-.62-3.37-1.39l-81.65-81.08a5.52 5.52 0 0 0-3.37-1.39H384.49c-1.08 0-2.6.63-3.37 1.4l-17.14 17.02"/>
                    <path stroke="#ffd24f"
                          d="M288.52 640.2h-46.9c-1.09 0-1.98.88-1.98 1.95v26.65c0 1.07-.89 1.95-1.97 1.95h-89.32"/>
                    <path stroke="#E4E6E6"
                          d="M281.34 229.6l9.65 9.59c.77.76 2.29 1.39 3.37 1.39l146.76-.2c1.09 0 2.6.63 3.38 1.37l115.95 114c.77.76.77 1.99 0 2.75l-37.2 37.05a1.96 1.96 0 0 0 0 2.78l49.62 49.28c.77.77 2.3 1.4 3.38 1.4h138.28c1.08 0 2.6.62 3.37 1.39l37.26 37c.77.76 2.3 1.4 3.38 1.4h21.7"/>
                    <path stroke="#ffd24f"
                          d="M-116.02 841.87h216.77c1.09 0 1.97-.89 1.97-1.96v-99.83c0-1.08.9-1.96 1.98-1.96h266.24c1.08 0 2.6-.62 3.37-1.39l20.18-20.04c.77-.76.77-2.02 0-2.76l-78.7-78.2a5.45 5.45 0 0 1-1.4-3.35v-1.57c0-1.07.88-1.96 1.97-1.96l139.22.02c1.09 0 2.6-.62 3.38-1.39l53.7-53.48a4.86 4.86 0 0 1 2.8-1.39c.76 0 1.41-.88 1.41-1.96v-6.62"/>
                    <path stroke="#E4E6E6"
                          d="M317.92 257.82l73.16 72.65c.77.77 1.4 2.27 1.4 3.35v45.25c0 1.08.63 2.59 1.4 3.35l12.02 11.93c.77.77 2.28 1.4 3.37 1.4h9.86c1.09 0 2.6-.63 3.38-1.4l6.29-6.25a5.52 5.52 0 0 1 3.37-1.39h85.81c1.08 0 2.6-.62 3.37-1.39l63.1-62.66a5.52 5.52 0 0 1 3.38-1.4h161.56c1.08 0 1.97.89 1.97 1.96v178.66c0 1.07-.63 2.58-1.4 3.35l-11.42 11.34a5.52 5.52 0 0 1-3.38 1.39H529.03a1.97 1.97 0 0 1-1.98-1.96v-73.07c0-1.07-.88-1.96-1.97-1.96h-88.26a1.97 1.97 0 0 1-1.97-1.95V406.5c0-1.08-.89-1.96-1.97-1.96-1.99 0-3.5-.63-4.28-1.4l-7.44-7.38"/>
                    <path stroke="#ffd24f"
                          d="M650.42-78.35v211.36c0 1.08.63 2.59 1.4 3.35l46.73 46.4c.77.77 1.4 2.28 1.4 3.36v35.79l-2.49-.14c-.75 0-1.97.63-2.74 1.4l-18.32 18.19a5.45 5.45 0 0 0-1.4 3.35v116.95c0 1.07.63 2.58 1.38 3.35l46.53 46.58a5.42 5.42 0 0 1 1.38 3.35l-.02 30.34c0 1.08-.63 2.59-1.4 3.35l-4.91 4.88a5.52 5.52 0 0 1-3.37 1.4H599.52c-1.08 0-1.97.87-1.97 1.95v36c0 1.08-.89 1.96-1.97 1.96h-92.71c-1.09 0-2.6.63-3.38 1.4l-19.58 19.45a5.52 5.52 0 0 1-3.38 1.39h-63.61"/>
                    <path stroke="#E4E6E6"
                          d="M281.48 745v84.33c0 1.08-.89 1.96-1.97 1.96h-57.48c-1.09 0-1.98.88-1.98 1.96v10.36c0 1.08-.88 1.96-1.97 1.96H110.52"/>
                    <path stroke="#ffd24f"
                          d="M10.95 362.32l113.4 112.62c.78.77 2.3 1.4 3.38 1.4h36.12c1.08 0 2.6.62 3.37 1.38l205.45 204.03c.77.76 2.29 1.39 3.37 1.39l62.74.03h29.53c1.09 0 2.6.63 3.37 1.4l16.36 16.23c.77.77 2.29 1.4 3.37 1.4h134.34"/>
                    <path stroke="#E4E6E6"
                          d="M275.82 590.44l24.44-24.27a5.52 5.52 0 0 1 3.37-1.4h121.52c1.08 0 2.6.63 3.37 1.4l34.32 34.08c.77.77 2.3 1.4 3.38 1.4h54.36"/>
                    <path stroke="#ffd24f" d="M633.41 278.74l-21.36-21.22a5.45 5.45 0 0 1-1.4-3.35V-78.58"/>
                    <path stroke="#ffd24f"
                          d="M754.4 192.02v20.11c0 1.08-.9 1.96-1.98 1.96h-94.49c-1.08 0-2.6.63-3.37 1.4l-50.28 49.93a5.45 5.45 0 0 0-1.4 3.35v56.41c0 1.08.63 2.59 1.4 3.35l10.63 10.56c.77.76 1.4 2.27 1.4 3.35v121.45c0 1.08-.89 1.96-1.97 1.96H429.6c-1.08 0-2.6-.62-3.37-1.39l-21.2-21.06-15.77 14.8a5.52 5.52 0 0 1-3.37 1.38H282.15c-1.08 0-2.6.63-3.37 1.37l-62.1 61.3a5.5 5.5 0 0 1-3.37 1.37h-69.85c-1.09 0-2.6.63-3.37 1.4l-68.22 67.73a5.52 5.52 0 0 1-3.37 1.4H34.1c-1.09 0-2.6.62-3.38 1.38l-61.64 61.22a5.45 5.45 0 0 0-1.4 3.35v98.02c0 1.08-.89 1.96-1.97 1.96h-30.76c-1.08 0-2.6.63-3.37 1.4l-48.29 47.95"/>
                    <path stroke="#E4E6E6"
                          d="M184.55 422.03v34.09c0 1.07-.63 2.58-1.4 3.35l-56.48 55.88a5.52 5.52 0 0 1-3.37 1.4H-34.6"/>
                    <path stroke="#ffd24f"
                          d="M980.12 416.59l-15.05-14.95a5.52 5.52 0 0 0-3.38-1.4h-46.04c-1.08 0-2.6.63-3.37 1.4l-14.5 14.4c-.77.76-1.4.5-1.4-.57v-34.93c0-1.08-.63-2.58-1.4-3.35l-2.48-2.47"/>
                    <path stroke="#ffd24f"
                          d="M826.77 238.25v54.43c0 1.08.63 2.59 1.4 3.35l86.38 85.78c.77.77 2.29 1.4 3.37 1.4h98.61c1.09 0 2.6-.63 3.36-1.4l22.6-22.8a5.47 5.47 0 0 1 3.36-1.39h106.38c1.08 0 1.97-.88 1.97-1.96l.04-95.24c0-1.08.89-1.96 1.97-1.96h39.02c1.09 0 1.97.88 1.97 1.96v48.1"/>
                    <path stroke="#E4E6E6"
                          d="M12.87 361.05h-5c-1.1 0-2.61-.63-3.38-1.4l-17.72-17.58a5.52 5.52 0 0 0-3.37-1.4h-16.9c-1.09 0-2.6-.62-3.38-1.38l-55.64-55.26a5.52 5.52 0 0 0-3.38-1.4h-15.19"/>
                    <path stroke="#ffd24f"
                          d="M959.23 126.08l19.2 19.06c.76.76 2.28 1.39 3.36 1.39h177.42c1.09 0 1.97.88 1.97 1.96v100.84a3 3 0 0 0 3 3h36.42c1.08 0 1.97.88 1.97 1.96v54.65"/>
                    <path stroke="#E4E6E6"
                          d="M33.17 798.75h242.12c1.08 0 1.97-.88 1.97-1.96V672.9c0-1.08-.89-1.96-1.97-1.96h-30.12a1.97 1.97 0 0 1-1.98-1.96v-26.76c0-1.07-.88-1.96-1.97-1.96h-20.87"/>
                    <path stroke="#ffd24f"
                          d="M458.48 496.1h9.55c1.09 0 2.6-.63 3.37-1.4l48.23-47.83a5.52 5.52 0 0 1 3.38-1.39h24.26c1.08 0 2.6.63 3.37 1.39l23.26 23.1c.77.76 2.29 1.39 3.37 1.39h111.06c1.09 0 1.97-.88 1.97-1.96v-54.46c0-1.08-.63-2.59-1.4-3.33l-20.35-20.04-2.8-2.76-1.17-1.16a5.52 5.52 0 0 0-3.37-1.39h-11.66a1.97 1.97 0 0 1-1.97-1.96V310.6c0-1.08.88-1.96 1.97-1.96h77.38"/>
                    <path stroke="#E4E6E6"
                          d="M-34.94 402.19v111.19c0 1.07.63 2.58 1.4 3.35l49.06 48.71c.76.77 2.28 1.4 3.37 1.4h21.8c1.08 0 2.6.62 3.37 1.39l113 112.22c.78.77 2.3 1.4 3.38 1.4h170.6c1.08 0 1.97.87 1.97 1.95v60.41"/>
                </g>
            </svg>
        </div>

        <div class="home"
             :class="{ 'home__dark': isDark, 'home__light': !isDark }"
             id="home">

            <video autoplay muted loop id="myVideo" v-if="isVideo">
                <source src="../../static/video/preview.mp4" type="video/mp4">
            </video>

            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="row">
                        <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12">
                            <h1 class="screen1 title">
                                {{ $t("greeting.title") }}
                            </h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-xs-12 countdown-block">
                            <div class="countdown">
                                <h2 class="title">
                                    {{ $t("greeting.countDown.title") }}
                                </h2>
                                <div class="timer"
                                     :class="{ 'timer__dark': isDark }">
                                    <div class="days">
                                        <div class="numbers">
                                            <div class="first">
                                                {{ timer.days.first }}
                                            </div>
                                            <div class="second">
                                                {{ timer.days.second }}
                                            </div>
                                        </div>
                                        <div class="title">
                                            {{ $t("greeting.countDown.time.days") }}
                                        </div>
                                    </div>
                                    <div class="hours">
                                        <div class="numbers">
                                            <div class="first">
                                                {{ timer.hours.first }}
                                            </div>
                                            <div class="second">
                                                {{ timer.hours.second }}
                                            </div>
                                        </div>
                                        <div class="title">
                                            {{ $t("greeting.countDown.time.hours") }}
                                        </div>
                                    </div>
                                    <div class="minutes">
                                        <div class="numbers">
                                            <div class="first">
                                                {{ timer.minutes.first }}
                                            </div>
                                            <div class="second">
                                                {{ timer.minutes.second }}
                                            </div>
                                        </div>
                                        <div class="title">
                                            {{ $t("greeting.countDown.time.minutes") }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="https://sale.alehub.io/"
                               target="_blank"
                               class="a-buy-tokens">
                                <button type="button"
                                        class="btn btn-buy-tokens">
                                    {{ $t("greeting.countDown.btnBuyTokens") }}
                                </button>
                            </a>
                            <div class="bonus-desc">
                                <span>{{ $t("greeting.countDown.bonus") }}</span>
                                <span>{{ $t("greeting.countDown.notAvailable") }}</span>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-12 col-md-12">
                            <div class="play-video">
                                <button class="play-button" @click="playVideo">
                                    <div class="wrap-play" :class="{ 'active': mainPlayer }">
                                        <span class="line l-1"></span>
                                        <span class="line l-2"></span>
                                        <span class="line l-3"></span>
                                    </div>
                                </button>
                                <div class="place-player" :style="{ opacity: mainPlayer ? 1 : 0 }">
                                    <div class="place-player__frame">
                                    </div>
                                </div>
                                <div class="main-player" v-if="mainPlayer">
                                    <iframe class="iframe"
                                            src="https://www.youtube.com/embed/6I8xN_RiHXY?ecver=1&autoplay=1&showinfo=0&controls=0&loop=1&playlist=6I8xN_RiHXY"
                                            frameborder="0"
                                            allow="autoplay; encrypted-media"
                                            allowfullscreen>
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12 col-lg-11">
                    <div class="crypto">
                        <div class="title"
                             :class="{ 'ico-progress__dark': isDark }">
                            {{ $t("greeting.acceptedCrypto.title") }}
                        </div>
                        <div class="collection"
                             :class="{ 'collection__dark': isDark }">
                            <div class="item" v-for="item in currencies"
                                 @mouseover="changeCurrentCurrency(item.name)"
                                 @mouseout="resetCurrentCurrency">
                                <div class="inner">
                                    <a href="https://sale.alehub.io/" target="_blank">
                                        <div class="cur-logo">
                                            <img :src="item.src" :alt="item.alt">
                                        </div>
                                        <div class="description">
                                            <span class="count">{{ item.count }}</span>
                                            <span class="name">{{ item.name }}</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" style="position: relative;">
                <div class="col-xl-12 col-lg-11">
                    <div class="ico-progress"
                         :class="{ 'ico-progress__dark': isDark }">
                        <div class="state">
                            <div class="title">
                                Soft cap
                            </div>
                            <div class="count">
                                {{ isCollected }} / {{ isSoftCap }} <span
                                    class="currency">{{ isCurrentCurrency }}</span>
                            </div>
                        </div>
                        <div class="progress-bar-outer">
                            <div class="progress-bar-inner"
                                 :style="{ width: softCapWidth }">
                            </div>
                        </div>
                        <div class="state hard-cap">
                            <div class="title">
                                Hard cap
                            </div>
                            <div class="count">
                                {{ isCollected }} / {{ isHardCap }} <span
                                    class="currency">{{ isCurrentCurrency }}</span>
                            </div>
                        </div>
                        <div class="progress-bar-outer">
                            <div class="progress-bar-inner"
                                 :style="{ width: hardCapWidth }">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="scroll-next">
                    <a class="scroll-ic"
                       v-scroll-to="'#description'">
                        <img src="../../static/images/scroll-ic.svg" alt="scroll-to-bottom">
                    </a>
                </div>
            </div>
            <div id="social-line"
                 class="social-line"
                 :class="{ 'social-line__dark': isDark }">
                <div class="line"></div>
                <a href="https://www.facebook.com/alehub.io/"
                   class="social-item fb"
                   target="_blank"></a>
                <a href="https://www.instagram.com/alehub.io/"
                   class="social-item ins"
                   target="_blank"></a>
                <a href="https://www.youtube.com/channel/UCQmFu8R6TIKU1Vz10HrvFYg"
                   class="social-item yt"
                   target="_blank"></a>
                <a href="https://twitter.com/alehub_io"
                   class="social-item tw"
                   target="_blank"></a>
                <a href="https://t.me/alehub"
                   class="social-item tg"
                   target="_blank"></a>
                <a href="https://bitcointalk.org/index.php?topic=3676768.new"
                   class="social-item btc-talk"
                   target="_blank"></a>
                <a href="https://github.com/effective-energy"
                   class="social-item github"
                   target="_blank"></a>
                <a href="https://vk.com/alehub" v-if="false"
                   class="social-item vk"
                   target="_blank"></a>
            </div>
        </div>
        <div class="partners"
             :class="{ 'partners__dark': isDark }">
            <div class="title">
                {{ $t("partners.title") }}:
            </div>
            <a href="http://ifmo.ru/ru/" target="_blank">
                <img :src="[(isDark) ? '../../static/images/itmo-dark.png' : '../../static/images/itmo.png']"
                     height="60px"
                     width="114px"
                     alt="ITMO">
            </a>
            <a href="https://cryptob2b.io/ru/" target="_blank">
                <img :src="[(isDark) ? '../../static/images/cb2b-dark.png' : '../../static/images/crypto.png']"
                     height="46px"
                     width="158px"
                     alt="CryptoB2B">
            </a>
            <a href="https://www.blockchain-spb.org/" target="_blank">
                <img :src="[(isDark) ? '../../static/images/bspb-dark.png' : '../../static/images/beer.png']"
                     height="59px"
                     width="57px"
                     alt="BEAR">
            </a>
            <a href="https://serokell.io/" target="_blank">
                <img :src="[(isDark) ? '../../static/images/serokell-dark.png' : '../../static/images/serokell.png']"
                     height="43px"
                     width="87px"
                     alt="Serokell">
            </a>
        </div>
        <div id="description"
             class="what-is"
             :class="{ 'description__dark': isDark }">
            <div class="row">
                <div class="col-lg-6 promo">
                    <div class="desktop-outer">
                        <img src="../../static/images/desctop.png"
                             class="desktop">
                        <!--<slider v-if="reBuild" ref="slider"-->
                        <!--:pages="pages"-->
                        <!--:sliderinit="sliderInit">-->
                        <!--</slider>-->
                    </div>
                    <!--<img src="../../static/images/desctop.png"-->
                    <!--class="desktop-for-mobile">-->
                    <a class="btn btn-black to-download"
                       v-scroll-to="'#download-application'"
                       style="font-weight: bold; color: #fff;">
                        <button type="button">
                            <img src="../../static/images/request-ic.svg">
                            <span style="white-space: initial;">
                                {{ $t("about.btnGroup.download") }}
                            </span>
                        </button>
                    </a>
                </div>
                <div class="col-lg-6 desc" style="align-self: flex-start;">
                    <h1 class="title">
                        {{ $t("about.title") }}
                    </h1>
                    <h3 class="subtitle">
                        {{ $t("about.subTitle") }}
                    </h3>
                    <p class="description">
                        {{ $t("about.description") }}
                    </p>
                    <div class="buttons">
                        <a :href="currentWhitePaper"
                           class="btn btn-yellow"
                           target="_blank"
                           @click="yaMetrica">
                            {{ $t("about.btnGroup.whitePaper") }}
                        </a>
                        <a class="btn btn-yellow"
                           v-scroll-to="'#features'"
                           target="_blank">
                            {{ $t("about.btnGroup.techDetails") }}
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div id="telegram-alert"
             class="telegram-alert"
             v-if="checkWindowWidth"
             :class="{ 'telegram-alert__yellow': isDarkSection }">
            <a href="https://t.me/alehub" target="_blank">
                <img src="../../static/images/telegram-ic-dark.svg"
                     alt="telegram"
                     v-if="!isDarkSection">
                <img src="../../static/images/telegram-ic-default.svg"
                     alt="telegram"
                     v-if="isDarkSection">
            </a>
        </div>

    </section>
</template>

<script>
    import MenuModal from './modals/MenuModal';

    //заменить на свой слайдер
    import slider from 'vue-concise-slider';
    import anime from 'animejs';

    export default {
        name: 'Screen1',
        components: {
            slider,
            MenuModal
        },
        props: {
            isDarkSection: {
                type: Boolean,
                required: true
            },
        },
        watch: {
            isDarkSection: function (val) {
                console.log(val, 'isDarkSection');
            },
            isVideo: function (val) {
                if (val) {
                    setTimeout(() => {
                        document.querySelector('video').playbackRate = 0.75;
                    }, 40);
                }
            }
        },
        data() {
            return {
                isVideo: false,
                isDark: false,
                pages: [
                    {
                        html: '<img src="../../static/images/screen1.png" class="screenshot" alt="">'
                    },
                    {
                        html: '<img src="../../static/images/screen2.png" class="screenshot" alt="">'
                    },
                    {
                        html: '<img src="../../static/images/screen3.png" class="screenshot" alt="">'
                    }
                ],
                alePrice: 0.3,
                currencies: {
                    btc: {
                        src: '../../static/images/btc.svg',
                        alt: 'bitcoin',
                        count: 32256,
                        name: 'btc',
                        collected: 0,
                        softCap: 0,
                        hardCap: 3521.5
                    },
                    eth: {
                        src: '../../static/images/eth.svg',
                        alt: 'etherium',
                        count: 2606,
                        name: 'eth',
                        collected: 0,
                        softCap: 0,
                        hardCap: 45144
                    },
                    bch: {
                        src: '../../static/images/bch.svg',
                        alt: 'bitcoin cash',
                        count: 4946,
                        name: 'bch',
                        collected: 0,
                        softCap: 0,
                        hardCap: 20246
                    },
                    ltc: {
                        src: '../../static/images/ltc.svg',
                        alt: 'litecoin',
                        count: 503,
                        name: 'ltc',
                        collected: 0,
                        softCap: 0,
                        hardCap: 202454
                    },
                    dash: {
                        src: '../../static/images/dash.svg',
                        alt: 'dash',
                        count: 1605,
                        name: 'dash',
                        collected: 0,
                        softCap: 0,
                        hardCap: 72746.5
                    },
                    usd: {
                        src: '../../static/images/usd.svg',
                        alt: 'usd',
                        count: 207,
                        name: 'usd',
                        collected: 2000000,
                        softCap: 2000000,
                        hardCap: 33000000
                    }
                },
                reBuild: true,
                sliderInit: {
                    currentPage: 0,
                    thresholdDistance: 100,
                    thresholdTime: 300,
                    loop: true,
                    infinite: 1,
                    slidesToScroll: 1,
                    autoplay: '5000'
                },
                timer: {
                    days: {
                        first: 0,
                        second: 0
                    },
                    hours: {
                        first: 0,
                        second: 0
                    },
                    minutes: {
                        first: 0,
                        second: 0
                    },
                    seconds: {
                        first: 0,
                        second: 0
                    }
                },
                endTime: 1527206400000,
                timeInterval: 0,
                collected: 2000000,
                softCap: 2000000,
                hardCap: 33000000,
                currentCurrency: 'usd',
                anime: '',
                isPaused: false,
                mainPlayer: false
            }
        },
        computed: {
            isCollected: function () {
                return this.collected;
            },
            isSoftCap: function () {
                return this.softCap;
            },
            isHardCap: function () {
                return this.hardCap;
            },
            isCurrentCurrency: function () {
                return this.currentCurrency;
            },
            checkWindowWidth: function () {
                return window.innerWidth >= 1024;
            },
            softCapWidth: function () {
                if (this.collected <= this.softCap)
                    return (this.collected / this.softCap) * 100 + '%';
                else return '100%';
            },
            hardCapWidth: function () {
                if (this.collected <= this.hardCap)
                    return (this.collected / this.hardCap) * 100 + '%';
                else return '100%';
            },
            currentWhitePaper: function () {
                if (localStorage.getItem('systemLang') === 'en') {
                    return 'https://alehub.io/ALEHUB_WP_eng.pdf';
                } else if (localStorage.getItem('systemLang') === 'ru') {
                    return 'https://alehub.io/ALEHUB_WP_rus.pdf';
                }
            }
        },
        methods: {
            yaMetrica: function () {
                // yaCounter48802643.reachGoal('DownloadWP');
                return true;
            },
            changeCurrentCurrency: function (name) {
                this.collected = this.currencies[name].collected;
                this.softCap = this.currencies[name].softCap;
                this.hardCap = this.currencies[name].hardCap;
                this.currentCurrency = name;
            },
            resetCurrentCurrency: function () {
                this.collected = this.currencies.usd.collected;
                this.softCap = this.currencies.usd.softCap;
                this.hardCap = this.currencies.usd.hardCap;
                this.currentCurrency = this.currencies.usd.name;
            },
            playVideo: function () {
                if (this.mainPlayer) {
                    this.mainPlayer = false;
                    document.querySelector('.home').classList.remove('home__open-video');
                } else {
                    this.mainPlayer = true;
                    document.querySelector('.home').classList.add('home__open-video');
                }
            },
            startAnime: function () {
                let pathEls = document.querySelectorAll('path');
                window.animejsconfig = [];
                for (let i = 0; i < pathEls.length; i++) {
                    let pathEl = pathEls[i];
                    let offset = anime.setDashoffset(pathEl);
                    pathEl.setAttribute('stroke-dashoffset', offset);
                    window.animejsconfig.push(anime({
                        targets: pathEl,
                        strokeDashoffset: [offset, 0],
                        duration: anime.random(6500, 9000),
                        delay: anime.random(0, 2500),
                        loop: true,
                        direction: 'alternate',
                        easing: 'easeInOutSine',
                        autoplay: true
                    }));
                }
            },
            format: function (count, isSecond) {
                let result = 0;
                if (isSecond) {
                    result = ('0' + count).slice(-1);
                } else {
                    if (('0' + count).length === 3)
                        result = ('' + count).slice(0, 1);
                    else if (('0' + count).length === 2)
                        result = '0';
                }

                return result;
            },
            getTimeRemaining: function () {
                let t = this.endTime - Date.parse(new Date()),
                    seconds = Math.floor((t / 1000) % 60),
                    minutes = Math.floor((t / 1000 / 60) % 60),
                    hours = Math.floor((t / (1000 * 60 * 60)) % 24),
                    days = Math.floor(t / (1000 * 60 * 60 * 24));

                if (t <= 0)
                    return clearInterval(this.timeInterval);

                this.timer.days.first = this.format(days);
                this.timer.days.second = this.format(days, true);
                this.timer.hours.first = this.format(hours);
                this.timer.hours.second = this.format(hours, true);
                this.timer.minutes.first = this.format(minutes);
                this.timer.minutes.second = this.format(minutes, true);
                this.timer.seconds.first = this.format(seconds);
                this.timer.seconds.second = this.format(seconds, true);
            },
            getCoords: function (elem) {
                if (!elem)
                    return false;
                let box = elem.getBoundingClientRect();

                return {
                    top: box.top + pageYOffset,
                    left: box.left + pageXOffset
                };
            },
            handlerScroll: function () {
                let buttonAbsPos = this.getCoords(document.getElementById('description')).top + window.innerHeight * 0.4;

                if (window.scrollY > this.getCoords(document.getElementById('advantages')).top - window.innerHeight) {
                    this.pause();
                    document.getElementById('button-choose').style['top'] = buttonAbsPos + 'px';
                    document.getElementById('button-choose').classList.add('button-choose__stop');
                } else {
                    this.play();
                    document.getElementById('button-choose').style['top'] = '40%';
                    document.getElementById('button-choose').classList.remove('button-choose__stop');
                }
            },
            play: function () {
                if (!this.isPaused) return false;
                this.isPaused = false;
                for (let i = 0; i < window.animejsconfig.length; i++) {
                    window.animejsconfig[i].play();
                }
            },
            pause: function () {
                if (this.isPaused) return false;
                this.isPaused = true;
                for (let i = 0; i < window.animejsconfig.length; i++) {
                    window.animejsconfig[i].pause();
                }
            },
            doVideoTheme: function () {
                this.isDark = true;
                this.isVideo = true;
                this.$parent.$emit('isDarkTheme', true);
                localStorage.setItem('color-theme', 'video');
                this.pages[0] = {
                    html: '<img src="../../static/images/screen1.png" class="screenshot" alt="">'
                };
                this.pages[2] = {
                    html: '<img src="../../static/images/screen3.png" class="screenshot" alt="">'
                };
                this.reBuild = false;
                setTimeout(() => {
                    this.reBuild = true;
                }, 100);
            },
            doLightTheme: function () {
                this.isDark = false;
                this.isVideo = false;
                this.$parent.$emit('isDarkTheme', false);
                localStorage.setItem('color-theme', 'light');
                this.pages[0] = {
                    html: '<img src="../../static/images/screen1.png" class="screenshot" alt="">'
                };
                this.pages[2] = {
                    html: '<img src="../../static/images/screen3.png" class="screenshot" alt="">'
                };
                this.reBuild = false;
                setTimeout(() => {
                    this.reBuild = true;
                }, 100);
            },
            doDarkTheme: function () {
                this.isDark = true;
                this.isVideo = false;
                this.$parent.$emit('isDarkTheme', true);
                localStorage.setItem('color-theme', 'dark');
                this.pages[0] = {
                    html: '<img src="../../static/images/screen1_dark.png" class="screenshot" alt="">'
                };
                this.pages[2] = {
                    html: '<img src="../../static/images/screen3_dark.png" class="screenshot" alt="">'
                };
                this.reBuild = false;
                setTimeout(() => {
                    this.reBuild = true;
                }, 100);
            },
            getCurrentExchangeRates: function () {
                this.$http.get('https://alehub.eu-4.evennode.com/ale-system/crypto-price', {
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8',
                        'Accept': 'application/json'
                    }
                }).then(response => {
                    this.currencies.btc.hardCap = Math.round(this.hardCap / response.body[1].price / (response.body[0].price / response.body[1].price));
                    this.currencies.eth.hardCap = Math.round(this.hardCap / response.body[1].price);
                    this.currencies.bch.hardCap = Math.round(this.hardCap / response.body[1].price / (response.body[2].price / response.body[1].price));
                    this.currencies.ltc.hardCap = Math.round(this.hardCap / response.body[1].price / (response.body[3].price / response.body[1].price));
                    this.currencies.dash.hardCap = Math.round(this.hardCap / response.body[1].price / (response.body[4].price / response.body[1].price));

                    this.currencies.btc.softCap = Math.round(this.softCap / response.body[1].price / (response.body[0].price / response.body[1].price));
                    this.currencies.eth.softCap = Math.round(this.softCap / response.body[1].price);
                    this.currencies.bch.softCap = Math.round(this.softCap / response.body[1].price / (response.body[2].price / response.body[1].price));
                    this.currencies.ltc.softCap = Math.round(this.softCap / response.body[1].price / (response.body[3].price / response.body[1].price));
                    this.currencies.dash.softCap = Math.round(this.softCap / response.body[1].price / (response.body[4].price / response.body[1].price));

                    this.currencies.btc.collected = Math.round(this.collected / response.body[1].price / (response.body[0].price / response.body[1].price));
                    this.currencies.eth.collected = Math.round(this.collected / response.body[1].price);
                    this.currencies.bch.collected = Math.round(this.collected / response.body[1].price / (response.body[2].price / response.body[1].price));
                    this.currencies.ltc.collected = Math.round(this.collected / response.body[1].price / (response.body[3].price / response.body[1].price));
                    this.currencies.dash.collected = Math.round(this.collected / response.body[1].price / (response.body[4].price / response.body[1].price));
                }, response => {
                    console.log('Error getting news', response);
                });
            },
            getCoords: function (elem) {
                if (!elem)
                    return false;
                let box = elem.getBoundingClientRect();

                return {
                    top: box.top + pageYOffset,
                    left: box.left + pageXOffset
                };
            },
        },
        mounted() {

            if (this.isVideo) {
                document.querySelector('video').playbackRate = 0.75;
            }

            this.getCurrentExchangeRates();

            // window.addEventListener('scroll', () => {
            //     if (window.scrollY > this.getCoords(document.getElementById('description')).top) {
            //         if (document.getElementById('myVideo').style['position'] !== 'absolute') {
            //             document.getElementById('myVideo').style['position'] = 'absolute';
            //             document.getElementById('myVideo').style['min-height'] = window.innerHeight - navbarYOffset + 'px';
            //             document.getElementById('myVideo').style['height'] = window.innerHeight - navbarYOffset + 'px';
            //             document.getElementById('myVideo').style['bottom'] = 0;
            //         }
            //     } else {
            //         if (document.getElementById('myVideo').style['position'] !== 'fixed') {
            //             document.getElementById('myVideo').style['position'] = 'fixed';
            //             document.getElementById('myVideo').style['min-height'] = '100%';
            //             document.getElementById('myVideo').style['height'] = '';
            //         }
            //     }
            // });

            setTimeout(() => {
                if (localStorage.getItem('color-theme') === 'dark' && this.checkWindowWidth) {
                    this.isDark = true;
                    this.isVideo = false;
                    this.$parent.$emit('isDarkTheme', true);
                } else if (localStorage.getItem('color-theme') === 'light' && this.checkWindowWidth) {
                    this.isDark = false;
                    this.isVideo = false;
                    this.$parent.$emit('isDarkTheme', false);
                } else if (localStorage.getItem('color-theme') === 'video' && this.checkWindowWidth) {
                    this.isDark = true;
                    this.isVideo = true;
                    this.$parent.$emit('isDarkTheme', true);
                } else {
                    localStorage.setItem('color-theme', 'video');
                    this.$parent.$emit('isDarkTheme', true);
                }
            }, 40);

            setTimeout(() => {
                this.startAnime();
            }, 2000);

            this.timeInterval = setInterval(this.getTimeRemaining, 1000);

            if (window.innerWidth >= 1024 && this.$route.path === '/')
                window.addEventListener('scroll', this.handlerScroll, false);
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.handlerScroll, false);
        },
    }
</script>

<style lang="stylus" scoped>

    .row
        z-index 2

    .what-is
        background-color #ececf0

    .countdown-block
        @media (min-width 848px)
            display flex
            align-items center

    .telegram-alert
        cursor pointer
        position fixed
        right 150px
        bottom 150px
        border-radius 50%
        background-color #343a49
        width 70px
        height 70px
        z-index 1000
        -webkit-transition all .3s ease-in-out
        -o-transition all .3s ease-in-out
        transition all .3s ease-in-out

        a
            width 100%
            height 100%
            display flex
            align-items center
            justify-content center

            img
                width 45%

    .telegram-alert__yellow
        background-color #ffd24f

    .screen1.title
        @media (min-width 425px) and (max-width 768px)
            text-align center

    .home
        position relative
        background-attachment fixed
        background-position center
        background-repeat no-repeat
        background-size cover

    .partners
        background-color #ececf0

    .play-video
        z-index 2
        width 100%

        @media (min-width 1440px)
            display flex !important
            justify-content center
            align-items center

        @media (min-width 1200px) and (max-width 1440px)
            display flex !important
            justify-content center
            align-items center
            margin-top 0 !important

        @media (min-width 1024px) and (max-width 1200px)
            display flex !important
            flex-direction column
            justify-content center
            align-items center
            padding-top 60px
            margin-top 0 !important

        @media (min-width 768px) and (max-width 1024px)
            display flex !important
            flex-direction column
            justify-content center
            align-items center
            padding-top 40px
            margin-top 0 !important

        @media (min-width 425px) and (max-width 768px)
            display flex !important
            flex-direction column
            justify-content center
            align-items center
            padding-top 40px

        @media (max-width 425px)
            display flex !important
            flex-direction column
            justify-content center
            align-items center
            padding-top 30px

        .play-button
            display flex
            justify-content center
            align-items center

        .main-player
            z-index 100
            width 100%

            .iframe
                width 100%
                height 100%

            @media (max-width 1200px)
                position initial

            @media (min-width 768px) and (max-width 1024px)
                padding-top 50px

    .wrap-play
        .line
            display block
            width 30px
            height 1px
            background-color black
            -webkit-transition all .5s ease-in-out
            -o-transition all .5s ease-in-out
            transition all .5s ease-in-out

        .l-1
            transform translate(-7px) rotate(90deg)

        .l-2
            transform translate(6px, -8px) rotate(30deg)

        .l-3
            transform translate(6px, 6px) rotate(330deg)

    .active
        .l-1
            opacity 0

        .l-2
            transform translate(0, 0) rotate(135deg)

        .l-3
            transform translate(0, 0) rotate(45deg)

    .home__light
        background-color #ececf0

    .promo
        a
            button
                background-color transparent
                border none
                padding 0
                position relative
                display flex
                align-items center

                img
                    width 16px !important
                    height 22px !important
                    margin-right 16px

                &:focus
                    outline none

                @media (max-width 768px)
                    img
                        display none

                span
                    color #fff
                    font-family MuseoSansCyrl500
                    font-weight 500

    a
        &:hover
            text-decoration none !important

    .description
        .count
            color #34343e
        .name
            color #34343e

    .btn-buy-tokens
        &:focus
            box-shadow none

    #myVideo
        position absolute
        right 0
        bottom 0
        min-width 100%
        min-height 100%

    #screen1
        padding-top 74px

    #description
        @media (min-width 425px)
            min-height 100vh

    .anim
        opacity 0.7
        z-index 1

    .anim__dark
        opacity 0.25

    .home__dark
        background-color #343a49
        color #f7f7f7

        div
            .row
                div
                    .crypto
                        .title
                            color #f7f7f7 !important

    .place-player
        opacity 0
        width 100%
        -webkit-transition all .5s ease-in-out
        -o-transition all .5s ease-in-out
        transition all .5s ease-in-out

        @media (max-width 1200px)
            display none

    .place-player__frame
        background-color #000
        height 100%

    .main-player, .place-player
        height 300px
        position absolute
        top 130px

        @media (min-width 1440px) and (max-width 2560px)
            height 300px

        @media (min-width 1200px) and (max-width 1440px)
            height 250px

        @media (min-width 1024px) and (max-width 1200px)
            height 500px

        @media (min-width 768px) and (max-width 1024px)
            height 400px

    /*@media (max-width 1600px)*/
    /*.iframe, .place-player__frame*/
    /*width 500px*/
    /*height 280px*/

    /*@media (max-width 1530px)*/
    /*.iframe, .place-player__frame*/
    /*width 500px*/
    /*height 280px*/

    /*@media (max-width 1274px)*/
    /*position relative*/
    /*.iframe, .place-player__frame*/
    /*width 800px*/
    /*height 450px*/

    /*@media (max-width 1120px)*/
    /*.iframe, .place-player__frame*/
    /*width 700px*/
    /*height 394px*/

    /*@media (max-width 850px)*/
    /*.iframe, .place-player__frame*/
    /*width 600px*/
    /*height 336px*/

    /*@media (max-width 720px)*/
    /*.iframe, .place-player__frame*/
    /*width 500px*/
    /*height 280px*/

    /*@media (max-width 620px)*/
    /*.iframe, .place-player__frame*/
    /*width 400px*/
    /*height 225px*/

    /*@media (max-width 520px)*/
    /*.iframe, .place-player__frame*/
    /*width 100%*/
    /*height 292px*/

    @media (max-width 520px) and (min-width 426px)
        .play-video
            width 100%
            position relative !important

            .place-player
                display none

    @media (max-width 425px)
        .play-video
            width 100%
            position relative !important
            left 0 !important

            .place-player
                display none

    .collection__dark
        color #343a49

    .timer__dark
        .first, .second
            background-color #f7f7f7
            color #34343e

    .ico-progress__dark
        color #f7f7f7 !important

    .partners__dark
        background-color #343a49 !important

        .title
            color #f7f7f7 !important

    .social-line__dark
        .line
            border-color #f7f7f7 !important

        .social-item.fb
            background-image url(../../static/images/fb-dark.svg) !important

            &:hover
                background-image url(../../static/images/fb-hovered.svg) !important

        .social-item.ins
            background-image url(../../static/images/instagram-dark.svg) !important

            &:hover
                background-image url(../../static/images/instagram-hovered.svg) !important

        .social-item.yt
            background-image url(../../static/images/yt-dark.svg) !important

            &:hover
                background-image url(../../static/images/yt-hovered.svg) !important

        .social-item.tw
            background-image url(../../static/images/twitter-dark.svg) !important

            &:hover
                background-image url(../../static/images/twitter-hovered.svg) !important

        .social-item.tg
            background-image url(../../static/images/telegram-ic-dark.svg) !important

            &:hover
                background-image url(../../static/images/telegram-ic-hovered.svg) !important

        .social-item.vk
            background-image url(../../static/images/vk-dark.svg) !important

            &:hover
                background-image url(../../static/images/vk-hovered.svg) !important

        .social-item.btc-talk
            background-image url(../../static/images/btc-dark.svg) !important

            &:hover
                background-image url(../../static/images/btc-hovered.svg) !important

        .social-item.github
            background-image url(../../static/images/github-dark.svg) !important

            &:hover
                background-image url(../../static/images/github-hovered.svg) !important

    .description__dark
        background-color #343a49

        @media (max-width 425px)
            background #343a49 !important

        .desc
            .title, .subtitle, .description
                color #f7f7f7 !important

    .collection
        .item
            cursor pointer

            &:last-child
                .inner
                    background-color #ffd24f

            a
                .cur-logo
                    img
                        max-width 40px !important

                .description
                    padding-top 10px
                    text-align center

            @media (max-width 425px)
                border-radius 2px
                padding-top 7.5px
                padding-bottom 7.5px

    section
        position relative

    .button-choose__stop
        position absolute !important

    .button-choose
        position fixed
        left 20px
        top 40%
        width 40px
        z-index 1000

        .button-choose__active
            opacity 1 !important
            border 2px solid #ffd24f !important

        .button-choose__active-video
            opacity 1 !important
            border 2px solid #343a49 !important

        .button-choose_video
            padding 0
            padding-left 5px
            position relative
            opacity 0.8
            cursor pointer
            width 40px
            height 40px
            margin-bottom 15px
            background-color #ffd24f
            border-radius 50%
            border 1px solid #f7f7f7
            -webkit-box-shadow 0 0 2px 0 rgba(255, 188, 0, 0.7), 0 0 8px 0 rgba(0, 0, 0, 0.2)
            -moz-box-shadow 0 0 2px 0 rgba(255, 188, 0, 0.7), 0 0 8px 0 rgba(0, 0, 0, 0.2)
            box-shadow 0 0 2px 0 rgba(255, 188, 0, 0.7), 0 0 8px 0 rgba(0, 0, 0, 0.2)

            &:focus
                outline none

            img
                width 70%

        .button-choose_light
            opacity 0.8
            cursor pointer
            width 40px
            height 40px
            margin-bottom 15px
            background-color #f7f7f7
            border-radius 50%
            border 1px solid #f7f7f7
            -webkit-box-shadow 0 0 2px 0 rgba(255, 188, 0, 0.7), 0 0 8px 0 rgba(0, 0, 0, 0.2)
            -moz-box-shadow 0 0 2px 0 rgba(255, 188, 0, 0.7), 0 0 8px 0 rgba(0, 0, 0, 0.2)
            box-shadow 0 0 2px 0 rgba(255, 188, 0, 0.7), 0 0 8px 0 rgba(0, 0, 0, 0.2)

            &:focus
                outline none

        .button-choose_dark
            opacity 0.8
            cursor pointer
            width 40px
            height 40px
            background-color #343a49
            border-radius 50%
            border 1px solid #343a49
            -webkit-box-shadow 0 0 2px 0 rgba(255, 188, 0, 0.7), 0 0 8px 0 rgba(0, 0, 0, 0.2)
            -moz-box-shadow 0 0 2px 0 rgba(255, 188, 0, 0.7), 0 0 8px 0 rgba(0, 0, 0, 0.2)
            box-shadow 0 0 2px 0 rgba(255, 188, 0, 0.7), 0 0 8px 0 rgba(0, 0, 0, 0.2)

            &:focus
                outline none

    #screen1
        .partners
            display flex
            justify-content space-between
            align-items center
            flex-wrap nowrap
            width 100%
            margin-top 0
            padding-top 150px

            .title
                z-index 2
                font-size 22px
                font-weight 700
                white-space nowrap

            @media (min-width 1440px) and (max-width 2560px)
                padding 150px 150px 0 150px

            @media (min-width 1024px) and (max-width 1440px)
                padding 100px 100px 0 100px

            @media (min-width 768px) and (max-width 1024px)
                padding 100px

            @media (min-width 425px) and (max-width 768px)
                padding 75px 50px
                height 75vh
                display flex
                flex-direction column
                justify-content space-around
                align-items center

                .title
                    display none

            @media (min-width 320px) and (max-width 425px)
                height 100vh
                display flex
                flex-direction column
                justify-content space-around
                align-items center
                padding-top 50px
                padding-bottom 50px

                .title
                    display none

                a
                    margin-bottom 20px

            @media (max-width 320px)
                display flex
                flex-direction column
                justify-content center
                align-items center
                padding-top 50px !important

                .title
                    display none

                a
                    margin-bottom 20px

    .social-line
        padding 15px 0
        /*@media (min-width 1024px) and (max-width 1440px)*/
        /*margin-top 60px*/

        .social-item
            -webkit-transition background .3s ease-in-out
            -o-transition background color .3s ease-in-out
            transition background color .3s ease-in-out

    #screen1
        .crypto
            @media (min-width 1024px) and (max-width 1440px)
                margin-top 20px

            @media (max-width 320px)
                .collection
                    .item
                        margin-right 10px
                        width 50px

                        &:last-child
                            margin-right 0

        .what-is
            display flex
            align-items center
            padding 50px 200px 0 200px
            margin-top 0

            @media (min-width 1440px) and (max-width 2560px)
                padding 60px 150px 0 150px

            @media (min-width 1024px) and (max-width 1440px)
                padding 60px 100px 0 100px

            @media (min-width 768px) and (max-width 1024px)
                padding 50px 75px 0 75px

            @media (min-width 425px) and (max-width 768px)
                padding 50px 50px 25px 50px

            @media (max-width 425px)
                padding 60px 25px
                background #ececf0

                .description
                    color #142538

            .row
                .promo
                    .to-download
                        @media (min-width 1024px) and (max-width 1440px)
                            padding 8px 18px

                        @media (min-width 768px) and (max-width 1024px)
                            width 100%
                            margin-top 30px
                            margin-bottom 40px
                            padding 15px 30px
                            font-size 18px
                            display flex
                            justify-content center

                        @media (min-width 425px) and (max-width 768px)
                            width 100%
                            margin-top 30px
                            margin-bottom 40px
                            padding 10px 25px
                            font-size 18px

                        @media (max-width 425px)
                            font-size 16px
                            padding 15px 25px
                            margin-top 25px

                    .desktop-outer
                        margin 0 auto

                        .slider-container
                            width 100%
                            position absolute
                            height auto

                        .desktop
                            width 100% !important
                            position relative

                    /*@media (max-width 2600px)*/
                    /*.slider-container*/
                    /*width 709px*/
                    /*height 443px*/
                    /*left 252px*/
                    /*top 40px*/

                    /*.desktop*/
                    /*left 140px*/
                    /*width 900px*/

                    /*@media (max-width 2365px)*/
                    /*.slider-container*/
                    /*left 162px*/

                    /*.desktop*/
                    /*left 50px*/

                    /*@media (max-width 2150px)*/
                    /*.slider-container*/
                    /*width 630px*/
                    /*height 395px*/
                    /*left 102px*/
                    /*top 36px*/

                    /*.desktop*/
                    /*left 0*/
                    /*width 800px*/

                    /*@media (max-width 1860px)*/
                    /*.slider-container*/
                    /*width 552px*/
                    /*height 345px*/
                    /*left 91px*/
                    /*top 32px*/

                    /*.desktop*/
                    /*left 0*/
                    /*width 700px*/

                    /*@media (max-width 1640px)*/
                    /*padding-top 50px*/

                    /*.slider-container*/
                    /*width 473px*/
                    /*height 296px*/
                    /*left 80px*/
                    /*top 77px*/

                    /*.desktop*/
                    /*left 0*/
                    /*width 600px*/

                    /*@media (max-width 1460px)*/
                    /*padding-top 100px*/

                    /*.slider-container*/
                    /*width 393px*/
                    /*height 247px*/
                    /*left 70px*/
                    /*top 122px*/

                    /*.desktop*/
                    /*left 0*/
                    /*width 500px*/

                    /*@media (max-width 1240px)*/
                    /*padding-top 100px*/

                    /*.slider-container*/
                    /*width 315px*/
                    /*height 197px*/
                    /*left 59px*/
                    /*top 118px*/

                    /*.desktop*/
                    /*left 0*/
                    /*width 400px*/

                    /*@media (max-width 991px)*/
                    /*padding-top 0*/

                    /*.slider-container*/
                    /*display none*/

                    /*.desktop*/
                    /*display none*/

                    @media (max-width 991px)
                        .desktop-for-mobile
                            display block

                .desc
                    @media (min-width 768px) and (max-width 1024px)
                        .buttons
                            display flex
                            justify-content center

                            .btn
                                width 50%
                                flex-grow 1
                                padding 10px 30px
                                font-size 18px
                                margin 10px 0

                                &:first-child
                                    margin-right 10px

                                &:last-child
                                    margin-left 10px

                    @media (min-width 425px) and (max-width 768px)
                        .description
                            font-size 18px

                        .buttons
                            display flex
                            justify-content center

                            .btn
                                width 50%
                                padding 10px 15px
                                font-size 18px
                                margin 10px 0

                                &:first-child
                                    margin-right 7.5px

                                &:last-child
                                    margin-left 7.5px

                    @media (max-width 425px)
                        padding-top 25px

                        .title
                            text-align center

                        .subtitle
                            text-indent 30px

                        .description
                            text-indent 30px

                        .buttons
                            display flex
                            flex-direction column
                            justify-content center

                            .btn
                                padding 10px 25px
                                font-size 22px
                                margin 10px 0

        .play-video
            display inline-block
            /*position relative*/

            .play-button
                cursor pointer
                width 110px
                height 110px
                border none
                border-radius 50%
                background-color #ffd24f
                margin-bottom 20px

                @media (max-width 425px)
                    width 80px
                    height 80px

                    .wrap-ic
                        img
                            width 25px !important
                            height 25px !important

                &:focus
                    outline 0

                .wrap-ic
                    padding-left 7px

                    img
                        width 35px
                        height 35px

            /*@media (max-width 1500px)*/
            /*left 20%*/

            /*@media (max-width 1400px)*/
            /*left 15%*/

            @media (max-width 1274px)
                position unset
                text-align center

                .play-button
                    margin 0

            @media (max-width 768px)
                display flex
                justify-content center
                align-items center
                flex-direction column

            @media (max-width 425px)
                top 0
                padding-top 15px

        .scroll-next
            position absolute
            bottom -70px
            width 100%
            display flex
            justify-content center

        .scroll-ic
            cursor pointer
            background-color transparent
            border none
            transition transform .5s ease

            &:active
                transform translateY(20px)

            @media (max-width: 1124px)
                display none

        .ico-progress
            width 448px
            font-family MuseoSansCyrl500
            font-size 20px
            color #34343e
            padding 15px 0

            /*@media (min-width 1024px) and (max-width 1440px)*/
            /*margin-top 30px*/

            @media (max-width 425px)
                font-size 16px

            @media (max-width 320px)
                font-size 14px

            .state
                display flex
                flex-direction row
                justify-content space-between

                &.hard-cap
                    margin-top 24px

                .count
                    .currency
                        text-transform uppercase

            .progress-bar-outer
                height 4px
                background-color #fff

                .progress-bar-inner
                    background-color #ffbc00
                    -webkit-box-shadow 0 0 2px 0 rgba(255, 188, 0, 0.7), 0 0 8px 0 rgba(255, 188, 0, 0.3)
                    -moz-box-shadow 0 0 2px 0 rgba(255, 188, 0, 0.7), 0 0 8px 0 rgba(255, 188, 0, 0.3)
                    box-shadow 0 0 2px 0 rgba(255, 188, 0, 0.7), 0 0 8px 0 rgba(255, 188, 0, 0.3)
                    height 100%

            @media (max-width 600px)
                width 100%

    @media (max-width 425px)
        .subtitle
            margin-top 18px !important
            font-size 18px !important
            font-weight 700

</style>
