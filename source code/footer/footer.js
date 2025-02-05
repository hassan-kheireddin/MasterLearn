function loadFooter() {
    const footer = document.createElement("footer");
    footer.innerHTML = `
        <footer>
            <div class="footer-container">
                <div class="contact-info">
                    <h3>Contact Us</h3>
                    <ul>
                    <li><a href="source code/about/about.html">About</a></li>
                    <li><a href="source code/contact us/contact-us.html">Contact</a></li>
                    <li><a href="terms">Privacy Policy</a></li>
                    <li><a href="privacy">Terms & conditions</a></li>
                    </ul>
                </div>
                <div class="social-media">
                    <h3 class="follow">Follow Us</h3>
                    <ul>
                        <li><a href="https://twitter.com/yourusername" target="_blank"><img src="../images/twitter.png" alt="Twitter"> X</a></li>
                        <li><a href="https://facebook.com/yourusername" target="_blank"><img src="../images/facebook-app-symbol.png" alt="Facebook"> Facebook</a></li>
                        <li><a href="https://slack.com/yourusername" target="_blank"><img src="../images/slack.png" alt="Slack"> Slack</a></li>
                        <li><a href="https://linkedin.com/in/yourusername" target="_blank"><img src="../images/linkedin.png" alt="LinkedIn"> LinkedIn</a></li>
                    </ul>
                </div>
            </div>
        </footer>
        <p class="copyright">Copyright © 2025 MasterLearn. All rights reserved.</p>
    `;
    document.body.appendChild(footer);
}
document.addEventListener("DOMContentLoaded", loadFooter);
