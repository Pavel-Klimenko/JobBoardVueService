import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'

import "./assets/scss/main.scss"
//import "./assets/css/bootstrap.min.css"
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
//import "./assets/js/isotope.pkgd.min.js"

import "./assets/js/ajax-form.js"
import "./assets/js/waypoints.min.js"
import "./assets/js/jquery.counterup.min.js"
import "./assets/js/imagesloaded.pkgd.min.js"
import "./assets/js/scrollIt.js"
import "./assets/js/jquery.scrollUp.min.js"
import "./assets/js/wow.min.js"
import "./assets/js/nice-select.min.js"
import "./assets/js/jquery.slicknav.min.js"

//import "./assets/js/jquery.magnific-popup.min.js"

import "./assets/js/plugins.js"
import "./assets/js/gijgo.min.js"
import "./assets/js/contact.js"
import "./assets/js/jquery.ajaxchimp.min.js"
import "./assets/js/jquery.form.js"
import "./assets/js/jquery.validate.min.js"
import "./assets/js/mail-script.js"
import "./assets/js/main.js"

//TODO rewrite using Vue
import "./assets/js/custom_js/general.js"
import "./assets/js/custom_js/personal.js"
import "./assets/js/custom_js/register.js"


import Home from './components/Home'
import Vacancies from './components/Vacancies'
import Candidates from './components/Candidates'
import Login from "./components/Login";
import Register from "./components/Register";
import Candidate from "./components/detail/Candidate";
import Vacancy from "./components/detail/Vacancy";

import CandidateAccount from "./components/personal/CandidateAccount.vue";
import CandidateVacancyRequests from "./components/personal/CandidateVacancyRequests.vue";
import CompanyVacancies from "./components/personal/CompanyVacancies.vue";
import CompanyAccount from "./components/personal/CompanyAccount.vue";
import CreateNewVacancy from "./components/personal/CreateNewVacancy.vue";
import UpdateVacancy from "./components/personal/UpdateVacancy.vue";

import { removeAuthData, redirectToMainPage } from "/src/functions/helpers";

const router = createRouter({
    routes: [
        {path: '/', component: Home},
        {path: '/vacancies', component: Vacancies},
        {path: '/vacancies/detail/:id', component: Vacancy},
        {path: '/candidates', component: Candidates},
        {path: '/candidates/detail/:id', component: Candidate},
        {path: '/personal/candidate/:id', component: CandidateAccount},
        {path: '/personal/candidate/:id/vacancy-requests', component: CandidateVacancyRequests},
        {path: '/personal/company/:id', component: CompanyAccount},
        {path: '/personal/company/:id/my-vacancies', component: CompanyVacancies},
        {path: '/personal/company/:id/create-vacancy', component: CreateNewVacancy},
        {path: '/personal/company/:id/update-vacancy/:vacancy_id/', component: UpdateVacancy},
        {path: '/login', component: Login},
        {path: '/register', component: Register},
    ],
    history: createWebHistory()
})

const app = createApp(App)

import axios from 'axios';
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000';

axios.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.status === 401) {
        removeAuthData();
        redirectToMainPage();
    }
    return error;
});

app.use(router)
app.mount('#app')



