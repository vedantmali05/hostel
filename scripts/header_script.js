let navWrap = document.querySelector("#navigation_wrapper");

let logoCode = `
<!-- LOGO -->
<figure class="logo header-logo" id="landing_header_logo">
    <a href="http://gpyavatmal.ac.in/gpy/" title="http://gpyavatmal.ac.in/gpy/" target="_blank">
        <img src="media/logo.jpg" alt="GPYavatmal" />
    </a>
</figure>
`;

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
})