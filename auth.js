const API = "https://diplom-backend-vt6h.onrender.com";

function getToken() {
    return localStorage.getItem("token");
}

function isAuth() {
    return !!getToken();
}

function logout() {
    localStorage.removeItem("token");
    location.href = "auth.html";
}

// ===== ЗАЩИТА СТРАНИЦ =====
function protectPage() {
    if (!isAuth()) {
        location.href = "auth.html";
    }
}

// ===== ОБНОВЛЕНИЕ МЕНЮ =====
function updateNavbar() {
    const authLink = document.getElementById("authLink");
    const logoutBtn = document.getElementById("logoutBtn");
    const privateLinks = document.querySelectorAll(".private");

    if (isAuth()) {
        if (authLink) authLink.style.display = "none";
        if (logoutBtn) logoutBtn.style.display = "inline";

        privateLinks.forEach(el => el.style.display = "inline");
    } else {
        if (authLink) authLink.style.display = "inline";
        if (logoutBtn) logoutBtn.style.display = "none";

        privateLinks.forEach(el => el.style.display = "none");
    }
}
