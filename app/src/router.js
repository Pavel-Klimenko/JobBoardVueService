import {createRouter} from 'vue-router'

import Home from "./components/Home";
import Vacancies from "./components/Vacancies";
import Vacancy from "./components/detail/Vacancy";
import Candidates from "./components/Candidates";
import Candidate from "./components/detail/Candidate";
import CandidateAccount from "./components/personal/CandidateAccount";
import CandidateVacancyRequests from "./components/personal/CandidateVacancyRequests";
import CompanyAccount from "./components/personal/CompanyAccount";
import CompanyVacancies from "./components/personal/CompanyVacancies";
import CreateNewVacancy from "./components/personal/CreateNewVacancy";
import UpdateVacancy from "./components/personal/UpdateVacancy";
import Login from "./components/Login";
import Register from "./components/Register";

const routes = [
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
    ];

export default function(history) {
    return createRouter({
        history,
        routes
    })
}