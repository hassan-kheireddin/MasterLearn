function insertNavbar() {
    const navbar = `
    <nav class="navbar">
        <div class="nav-logo">
            <a href="#">
                <img src="../images/logo.png" alt="logo" class="logo-img">
            </a>
        </div>
        <div class="search-bar">
            <span class="search-btn"></span>
            <input type="text" placeholder="Search Everything..." class="search-input">
        </div>
        <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="../contact us/contact-us.html">Contact Us</a></li>
            <li><a href="../signup/signup.html">Sign Up</a></li>
            <li><a href="../login/login.html">Log In</a></li>
        </ul>
    </nav>
    `;

    document.body.insertAdjacentHTML('afterbegin', navbar);
    window.onload = insertNavbar;
}