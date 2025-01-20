// Logo and navigation bar section 
const setHeaderContainer = () => {
    const headerContainer = document.getElementById('header-container');
        // create a div
    const headerCard = document.createElement('div');
       // set classlist
    headerCard.classList = `grid md:grid-cols-2`;
       // set inner html
    headerCard.innerHTML = `                 
        <a href="#" class="logo"><span>R</span>udra</a>
        <box-icon name='menu' id="menu_icon"></box-icon>
        <nav class="navbar justify-evenly">
            <a href="#" class="active">Home</a>
            <a href="#about-container">About</a>
            <a href="#project-container">project</a>
            <a href="#contact-container">contact</a>
        </nav>
 `;
      // append child
 headerContainer.appendChild(headerCard);
}
setHeaderContainer();


//Home section 
const SetHomeContainer = () =>{
    const homeContainer = document.getElementById('home-container');
    const homeCard = document.createElement('div');
    homeCard.classList = `grid grid-cols-1 md:grid-cols-2 gap-2`;
    homeCard.innerHTML = `            
            <div class="home_content md:pt-64">
                    <h3 class="pb-2">Hello, It's Me...</h3>
                    <h1 class="text-7xl font-semibold py-12">Rudra Prashad Shil</h1>
                    <h3 class="pb-2">And I'm a <span>Frontend Developer</span></h3>
                    <p>Learner| Software Engineer| Web Developer</p>

                <div class="social_media">
                    <a href="#"><i class='bx bxl-facebook' target="_blank"></i></a>
                    <a href="#"><i class='bx bxl-twitter' target="_blank"></i></a>
                    <a href="https://github.com/Rudra-Prashad-Shil" target="_blank"><i class='bx bxl-github'></i></a>
                    <a href="https://www.linkedin.com/in/rudra-prashad-shil-23496a32b" target="_blank"><i class='bx bxl-linkedin'></i></a>
                </div>


                <a href="https://drive.usercontent.google.com/u/0/uc?id=1PziHf3nhSCkICoWAfeZ7ukJ8fzPLg5D7&export=download" class="btn md:btn-md lg:btn-lg btn-accent text-white text-2xl">Download CV</a>
            </div>
            <div class="home_img">
                <img class="mt-32 md:mt-64 lg:mt-52 xl:mt-44 mx-auto w-5/6 rounded-full" src="photos/index-page.jpg"
                    alt="home image">
            </div>`;

            homeContainer.appendChild(homeCard);
}

SetHomeContainer();
  
//about section
const SetAboutContainer = () => {
    const aboutContainer = document.getElementById('about-container');
    const aboutCard = document.createElement ('div');
    aboutCard.classList = `grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2`;
    aboutCard.innerHTML = `            <div class="about_img">
                <img class="md:mt-52 lg:mt-64 mx-auto w-2/4 md:w-3/4 rounded-full" src="photos/about-section.jpg"
                    alt="about section image">
            </div>

            <div class="about_content pt-10 md:pt-64">
                <h2 class="heading">About <span>Me</span></h2>
                <h3>Frontend Developer</h3>
                <p>Hello, this is Rudra, a Dedicated Frontend Developer from the vibrant heart of Bangladesh.
                    Web Development isn't just my profession; it's my lifeblood. I'm more than just a Coder; I'm
                    acreative
                    problem solver. I transform my imagination and dreams into interactive and visually stunning web
                    experiences through code and design. I specialize in creating responsive, user-friendly interfaces
                    and
                    have a keen eye for detail. My skills encompass HTML, CSS, JavaScript, and various other modern web
                    technologies. I love building web applications that are not only functional but also beautiful and
                    engaging.</p>
                <a href="#" class="btn md:btn-md lg:btn-lg btn-accent text-white text-2xl">Read more</a>
            </div>`;

            aboutContainer.appendChild(aboutCard);

}
SetAboutContainer();

// Project Section
const setProjectContainer = () =>{
    const projectContainer = document.getElementById('project-container');
    projectCard = document.createElement ('div');
    projectCard.innerHTML=`     
    
    <h2 class="heading"> My <span>Projects</span></h2>

        <div class="project_container">
            <div class="project_box">
                <i class="bx bx-store"></i>
                <h3>Meal DB</h3>
                <p>A dynamic meal search application using the MealDB API, offering a seamless user experience for browsing and exploring a variety of recipes.</p>
                <a href="https://rudra-prashad-shil.github.io/MealDB-API/"
                    class="btn sm:btn-sm md:btn-md lg:btn-lg btn-accent text-white text-2xl" target="_blank">Project Live Link</a>
            </div>

            <div class="project_box">
                <i class="bx bx-injection"></i>
                <h3>Penguin Fashion</h3>
                <p>A responsive e-commerce website showcasing trendy fashion items.</p>
                <a href="https://rudra-prashad-shil.github.io/Penguin-Fashion/"
                    class="btn  sm:btn-sm md:btn-md lg:btn-lg btn-accent text-white text-2xl" target="_blank">Project Live Link</a>
            </div>

            <div class="project_box">
                <i class="bx bx-bus"></i>
                <h3>Ema-John</h3>
                <p>A e-commerce web application using React.js, where users can browse products, add items to their cart, and complete purchases.
                </p>
                <a href="https://emajohn-react-js.netlify.app/"
                    class="btn md:btn-md lg:btn-lg btn-accent text-white text-2xl" target="_blank">Project Live Link</a>
            </div>
        </div>`;
    projectContainer.appendChild(projectCard);
}
setProjectContainer();

// Contact Section
const setContactContainer = () =>{
    const contactContainer = document.getElementById('contact-container');
    contactCard = document.createElement ('div');
    contactCard.innerHTML=`      
    
    <h2 class="heading"> <span>Contact</span></h2>

        <div>
            <h2 class="text-5xl mb-10 text-center"><strong>Contact with me By messege here!</strong></h2>
            <form>
                <input class="block input-place text-3xl text-black" type="Text" name="Name" id=""
                    placeholder="Input You Name">
                <input class="block input-place text-3xl text-black" type="email" name="" id=""
                    placeholder="Input your Email Address">
                <input class="block input-place text-3xl text-black" type="Text" name="text" id=""
                    placeholder=" Enter your message">
                <button class="btn mx-auto md:btn-md lg:btn-lg btn-accent text-white text-2xl" type="submit">Submit</button>   
            </form>
        </div>`;
    contactContainer.appendChild(contactCard);
}
setContactContainer();


// footer Section
const setFooterContainer = () =>{
    const footerContainer = document.getElementById('footer-container');
    footerCard = document.createElement ('div');
    footerCard.classList = `h-32 footer footer-center bg-base-300 text-base-content p-4`;
    footerCard.innerHTML=`      
            <aside>
                <p class="text-3xl">Copyright © 2020 - All right reserved by Rudra Prashad Shil</p>
            </aside>`;
    footerContainer.appendChild(footerCard);
}
setFooterContainer();