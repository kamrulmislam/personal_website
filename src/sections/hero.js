// src/sections/hero.js
const hero = `
    <!-- Hero Section -->
    <section id="hero" class="py-16 md:py-24">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            
            <!-- Profile Image -->
            <div class="flex-shrink-0">
                <img class="h-48 w-48 rounded-full object-cover shadow-xl border-4 border-white" src="src/assets/images/profile-picture.JPEG" alt="A photo of Your Name" 
                     onerror="this.onerror=null;this.src='https://placehold.co/192x192/E0E7FF/4F46E5?text=You';">
            </div>

            <!-- Text Content -->
            <div class="text-center md:text-left">
                <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    Kamrul Islam
                </h1>
                <p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl">
                    Pursuing PhD in Electrical Engineering at <b>NC State University</b>.
                    <br class="hidden md:inline mt-8">
                    Experienced <b>Software</b> and <b>IoT Developer</b> with 4.5+ years of hands-on industry experience.
                </p>
                <div class="flex flex-col sm:flex-row justify-center md:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <a href="#contact" class="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-colors">
                        Get in Touch
                    </a>
                    <!--
                    <a href="your_cv_link.pdf" class="text-blue-600 font-semibold py-3 px-6 rounded-full border border-blue-600 hover:bg-blue-50 transition-colors" download>
                        Download CV
                    </a>
                    -->
                </div>
            </div>
        </div>
    </section>
`;

export default hero;

