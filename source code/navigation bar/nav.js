function insertNavbar() {
    const navbar = `
    <nav class="navbar">
        <!-- Left Side: Logo + Main Links -->
        <div class="nav-left">
            <div class="logo">
                <a href="../../index.html">
                    <img src="../images/logo.png" alt="logo" class="logo-img">
                </a>
            </div>

            <ul class="nav-links">
                <li><a href="../courses/courses.html" style="margin-left: 20px;">Courses</a></li>
                <li><a href="../documents/document.html">Documents</a></li>
                <li><a href="../roadmap/roadmap.html">Road Map</a><li>
                <li><a href="../community/community.html" style="margin-left: 55px;">Community</a></li>
                <li><a href="../contact us/contact-us.html">Contact</a></li>
                <li><a href="../about/about.html">About</a></li>
            </ul>
        </div>
        <div class="nav-right">
            <ul class="nav-links">
                <li><a href="../signup/signup.html" class="signup-btn">Sign Up</a></li>
                <li><a href="../login/login.html" class="login-btn">Log In</a></li>
            </ul>
        </div>
    </nav>
    `;

    document.body.insertAdjacentHTML('afterbegin', navbar);
}
window.onload = insertNavbar;