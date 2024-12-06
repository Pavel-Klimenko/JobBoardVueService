function disablePreloader() {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}

function setAuthData(token, user_id, role_name, related_entity_id) {
    localStorage.setItem('token', token);
    localStorage.setItem('user_id', user_id);
    localStorage.setItem('role_name', role_name);
    localStorage.setItem('related_entity_id', related_entity_id);
}

function removeAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('role_name');
    localStorage.removeItem('related_entity_id');
}


export {disablePreloader, setAuthData, removeAuthData}