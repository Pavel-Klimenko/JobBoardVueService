import {createApp} from 'vue'
import { createWebHistory } from 'vue-router'


import "./assets/scss/main.scss"
import "./assets/css/magnific-popup.css"
import "./assets/css/font-awesome.min.css"
import "./assets/css/themify-icons.css"
import "./assets/css/nice-select.css"
import "./assets/css/flaticon.css"
import "./assets/css/gijgo.css"
import "./assets/css/animate.min.css"
import "./assets/css/slicknav.css"
import "./assets/css/style.css"
import "./assets/css/custom_css/general.css"
import "./assets/css/custom_css/popups.css"
import "./assets/css/custom_css/preloader.css"
import "./assets/js/vendor/modernizr-3.5.0.min.js"
import "./assets/js/popper.min.js"
import "./assets/js/owl.carousel.min.js"
import "./assets/js/ajax-form.js"
import "./assets/js/waypoints.min.js"
import "./assets/js/jquery.counterup.min.js"
import "./assets/js/imagesloaded.pkgd.min.js"
import "./assets/js/scrollIt.js"
import "./assets/js/jquery.scrollUp.min.js"
import "./assets/js/wow.min.js"
import "./assets/js/nice-select.min.js"
import "./assets/js/jquery.slicknav.min.js"
import "./assets/js/plugins.js"
import "./assets/js/gijgo.min.js"
import "./assets/js/contact.js"
import "./assets/js/jquery.ajaxchimp.min.js"
import "./assets/js/jquery.form.js"
import "./assets/js/jquery.validate.min.js"
import "./assets/js/mail-script.js"
import "./assets/js/main.js"
import "./assets/js/custom_js/general.js"
import "./assets/js/custom_js/personal.js"
import "./assets/js/custom_js/register.js"

import createRouter from './router.js'
import App from './App.vue'

import { removeAuthData, redirectToMainPage } from "/src/functions/helpers";
import axios from 'axios';

import ChatMessages from './components/Chat/ChatMessages';
import ChatForm from './components/Chat/ChatForm';

// import Pusher from 'pusher-js';
// const pusher = new Pusher('0c231b01bb20710cbc97', {
//     cluster: 'eu',
//     encrypted: true,
// });

import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

// window.Pusher = Pusher;
// window.Echo = new Echo({
//     broadcaster: 'reverb',
//     key: import.meta.env.VITE_REVERB_APP_KEY,
//     wsHost: import.meta.env.VITE_REVERB_HOST,
//     wsPort: import.meta.env.VITE_REVERB_PORT,
//     wssPort: import.meta.env.VITE_REVERB_PORT,
//     forceTLS: (import.meta.env.VITE_REVERB_SCHEME ?? 'https') === 'https',
//     enabledTransports: ['ws', 'wss'],
// });


const app = createApp(App);
const router = createRouter(createWebHistory());
app.use(router);
app.mount('#app')


axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000';

axios.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response !== undefined && error.response.status === 401) {
        removeAuthData();
        redirectToMainPage();
    }
    return error;
});






