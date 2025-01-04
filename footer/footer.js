function insertfooter() {
    const footer = `
    <footer>
            <div class="footer-container">
                <div class="contact-info">
                    <h3>Contact</h3>
                    <p><a href="../about/about.html">About Us</a></p>
                    <p><a href="../contact us/contact-us.html">Contact Us</a></p>
                    <p><a href="terms">Terms & conditions</a></p>
                    <p><a href="privacy">Privacy Policy</a></p>
                    
                </div>
                <div class="social-media">
                    <h3 class="follow">Follow Us</h3>
                    <ul class="social-icons">
                        <li><a href="https://twitter.com/yourusername" target="_blank"><img src="../images/twitter.png" alt="Twitter"> X</a></li>
                        <li><a href="https://facebook.com/yourusername" target="_blank"><img src="../images/facebook-app-symbol.png" alt="Facebook"> Facebook</a></li>
                        <li><a href="https://instagram.com/yourusername" target="_blank"><img src="../images/slack.png" alt="Slack"> Slack</a></li>
                        <li><a href="https://linkedin.com/in/yourusername" target="_blank"><img src="../images/linkedin.png" alt="LinkedIn"> LinkedIn</a></li>
                    </ul>
                </div>
            </div>
        </footer>
        <p class="copyright">Copyright © 2025 MasterLearn. All rights reserved.</p>
    `;
    document.body.insertAdjacentHTML('beforeend', footer);
}