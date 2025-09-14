const projects = `
    <!-- Projects Section -->
    <section id="projects" class="py-16">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Featured Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Project Card 1 -->
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Real-Time Sign Language Recognition System</h3>
                <p class="text-sm text-gray-500 mb-4">A project from my PhD research.</p>
                <p class="text-gray-600 mb-4">
                    A machine learning model to interpret sign language from sensor data in real-time. This project involved sensor fusion, signal processing, and neural network design.
                </p>
                <div class="flex flex-wrap gap-2 mb-4">
                    <span class="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">Python</span>
                    <span class="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">TensorFlow</span>
                    <span class="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">Signal Processing</span>
                </div>
                <a href="#" class="inline-flex items-center text-blue-600 hover:underline transition-colors">
                    View Details
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
            </div>

            <!-- Project Card 2 -->
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">IoT Fleet Management Dashboard</h3>
                <p class="text-sm text-gray-500 mb-4">Developed during my time as an IoT Developer.</p>
                <p class="text-gray-600 mb-4">
                    Created a web-based dashboard for monitoring and managing a fleet of IoT devices, including real-time data visualization and remote device control.
                </p>
                <div class="flex flex-wrap gap-2 mb-4">
                    <span class="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">JavaScript</span>
                    <span class="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">Node.js</span>
                    <span class="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">AWS IoT Core</span>
                </div>
                <a href="#" class="inline-flex items-center text-blue-600 hover:underline transition-colors">
                    View Details
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
            </div>

            <!-- Project Card 3 -->
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Automated RADAR Signal Classifier</h3>
                <p class="text-sm text-gray-500 mb-4">A key component of my research.</p>
                <p class="text-gray-600 mb-4">
                    Designed a classifier for automatically identifying different types of RADAR signals using deep learning techniques. This involved extensive data preprocessing and model optimization.
                </p>
                <div class="flex flex-wrap gap-2 mb-4">
                    <span class="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">C++</span>
                    <span class="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">Scikit-learn</span>
                    <span class="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">Data Analysis</span>
                </div>
                <a href="#" class="inline-flex items-center text-blue-600 hover:underline transition-colors">
                    View Details
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
            </div>
        </div>
    </section>
`;

export default projects;
