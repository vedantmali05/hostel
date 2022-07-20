//  LOGO CODE
let logoCode = `
<!-- LOGO -->
<figure class="logo">
<a href="http://gpyavatmal.ac.in/gpy/" title="http://gpyavatmal.ac.in/gpy/" target="_blank">
<img src="media/logo.jpg" alt="GPYavatmal" />
</a>
</figure>
`;

let navWrap = document.querySelector("#navigation_wrapper");
navWrap.innerHTML =
    `
    <nav class="navigation">
           
    ${logoCode}

            <!-- Menu Button Toggle -->
            <figure id="menu_btn">
                <button class="icon-btn">
                    <!-- Menu Grid Icon -->
                    <svg id="menu_grid_icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#3a1d36" class="bi bi-grid" viewBox="0 0 16 16">
                        <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
                      </svg>

                      <!-- Menu Close Icon -->
                      <svg id="menu_close_icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#3a1d36" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                      </svg>                      
                </button>
            </figure>

            <!-- Menu -->
            <section class="menu" id="menu">
                <!-- Quick Links -->
                <div class="menu-quick-links">
                    <a href="index.html">Home</a>
                    <a href="#">Hostel</a>
                    <a href="#">Mess</a>
                    <a href="#">About</a>
                </div>
                <!-- Account Link -->
                <div class="menu-account-links">
                    <!-- Log In - Text Button -->
                    <a href="login.html">
                        <button class="text-btn">
                            Log In
                        </button>
                    </a>
                    <!-- Register - Primary Button -->
                    <a href="register.html">
                        <button class="primary-cta">Register
                        </button>
                    </a>
                </div>
            </section>
        </nav>
    `

let menuTglBtn = document.querySelector("#menu_btn"),
    menuBox = document.querySelector("#menu");


menuTglBtn.addEventListener('click', () => {
    menuTglBtn.classList.toggle("menu-open");
    menuBox.classList.toggle("menu-open");
})

window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
        navWrap.style.borderBottom = `1px solid var(--disabled-light)`;
    } else {
        navWrap.style.borderBottom = `none`;
    }
});


// ///////////////////////////// FOOTER 
let footerWrap = document.getElementById("footer_wrapper");

footerWrap.innerHTML = `
${logoCode}
        <section class="footer">
            <!-- Column 1 -->
            <div class="footer-col col1">
                <!-- College Name -->
                <h3 class="heading3">
                    Government Polytechnic Yavatamal
                </h3>
                <!-- Goal -->
                <p class="para">
                    Our goal is to ensure that not a single deserving candidate should be bereft of educational facilities due to lack of information and financial problem. We are devoted to develop the engineers for life, groom them to face the challenges of tomorrow and
                    encourage them to be socially relevant and environmentally concerned.
                </p>
            </div>

            <!-- Column 2 -->
            <div class="footer-col col2">
                <div>
                    <!-- Quick Links Heading -->
                    <h3 class="heading3">
                        Quick Links
                    </h3>
                    <!-- Quick Link Box -->
                    <div class="quick-link-box">
                        <a href="index.html">Home</a>
                        <a href="#">Hostel</a>
                        <a href="#">Mess</a>
                        <a href="#">About</a>
                    </div>
                </div>

                <div>
                    <!-- Social Media Links -->
                    <h3 class="heading3">Follow us on</h3>
                    <!-- Social Media Link Box -->
                    <div class="social-link-box">
                        <a href="#">Facebook</a> •
                        <a href="#">Twitter</a> •
                        <a href="#">Google+</a> •
                        <a href="#">YouTube</a> •
                        <a href="#">LinkedIn</a>
                    </div>
                </div>

            </div>
            <!-- Column 3 -->
            <div class="footer-col col3">
                <!-- Address Heading -->
                <h3 class="heading3">
                    Address
                </h3>
                <!-- Address Box -->
                <div class="address-box">
                    <!-- Address Icon -->
                    <figure>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                          </svg>
                    </figure>

                    <!-- Adress -->
                    <address>
                        C48M+7VG, Govt polytechnic Dhamngaon, road, Yavatmal, Maharashtra 445001
                    </address>
                </div>

                <!-- Contact Box -->
                <div class="contact-box">
                    <!-- Contact Icon -->
                    <figure>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                          </svg>
                    </figure>

                    <!-- Contact -->
                    <address>
                        07232246356
                    </address>
                </div>

                <!-- website Box -->
                <div class="website-box">
                    <!-- website Icon -->
                    <figure>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
                          </svg>
                    </figure>

                    <!-- website -->
                    <address>
                        <a href="http://www.gpyavatmal.ac.in/" class="text-link">http://www.gpyavatmal.ac.in/</a> 
                    </address>
                </div>

                <!-- Map -->
                <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29913.633678835362!2d78.134712!3d20.415676!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb59d61efc29a8e2!2sGovernment%20Polytechnic%2C%20Yavatmal!5e0!3m2!1sen!2sin!4v1658295000483!5m2!1sen!2sin"
                    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </section>

        <!-- Attribution -->
        <p class="attr caption">
            <span>© 2022 - Government Polytechnic Yavatamal <br> Made with <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
              </svg> by Students</span>

            <a href="login.html" class="icon-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-power" viewBox="0 0 16 16">
                    <path d="M7.5 1v7h1V1h-1z"/>
                    <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"/>
                  </svg>
            </a>
        </p>

`