function disablePreloader() {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}

function setAuthData(token, user_id, role_name, related_entity_id) {
    console.log('Saving auth data...');

    localStorage.setItem('token', token);
    localStorage.setItem('user_id', user_id);
    localStorage.setItem('role_name', role_name);
    localStorage.setItem('related_entity_id', related_entity_id);
}

function removeAuthData() {
    console.log('Removing auth data...');

    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('role_name');
    localStorage.removeItem('related_entity_id');
}

function redirectToMainPage() {
    console.log('Redirecting to main page...');
    window.location.href = '/';
}

function redirectToMyVacancyList(companyId) {
    console.log('Redirecting company`s vacancy list...');
    window.location.href = '/personal/company/'+ companyId +'/my-vacancies';
}


export {disablePreloader, setAuthData, removeAuthData, redirectToMainPage, redirectToMyVacancyList}