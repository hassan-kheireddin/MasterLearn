function insertNavbar() {
    const navbar = `
    <nav class="navbar">
        <div class="logo">
            <a href="../home/home.html">
                <img src="../images/logo.png" alt="logo" class="logo-img">
            </a>
        </div>
        <div class="search-bar">
            <span class="search-btn"></span>
            <input type="search" placeholder="Search Everything..." class="search-input">
        </div>
        <ul class="nav-links">
            <li><a href="../home/home.html">Home</a></li>
            <li><a href="../courses/courses.html">Learn</a></li>
            <li><a href="../about/about.html">About</a></li>
            <li><a href="../contact us/contact-us.html">Contact</a></li>
            <li><a href="../signup/signup.html">Sign Up</a></li>
            <li><a href="../login/login.html">Log In</a></li>
        </ul>
    </nav>
    `;

    document.body.insertAdjacentHTML('afterbegin', navbar);
}
window.onload = insertNavbar;