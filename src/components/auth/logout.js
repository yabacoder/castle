export const Logout=()=>{
    localStorage.clear();
    sessionStorage.clear();
    return window.location = "/"
};
