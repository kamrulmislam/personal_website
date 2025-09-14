const contact = `
    <!-- Contact Section -->
    <section id="contact" class="py-16 bg-gray-100 rounded-lg">
        <div class="max-w-xl mx-auto px-4 text-center">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p class="text-gray-600 mb-8">
                I'm open to discussing new opportunities, collaborations, or just connecting. Feel free to reach out.
            </p>
            <div class="flex justify-center space-x-6 mb-8">
                <!-- Email Link -->
                <a href="mailto:kislam@ncsu.edu" class="text-gray-500 hover:text-blue-600 transition-colors" title="Email">
                    <span class="sr-only">Email</span>
                    <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
                    </svg>
                </a>
                <!-- LinkedIn Link -->
                <a href="https://www.linkedin.com/in/kamrulmislam/" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-blue-600 transition-colors" title="LinkedIn">
                    <span class="sr-only">LinkedIn</span>
                    <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.766s.784-1.767 1.75-1.767 1.75.79 1.75 1.767-.783 1.766-1.75 1.766zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.761 7 2.45v6.785z"/></svg>
                </a>
                <!-- GitHub Link -->
                <a href="https://github.com/kamrulmislam" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-blue-600 transition-colors" title="GitHub">
                    <span class="sr-only">GitHub</span>
                    <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.373 3.43 9.38 8.214 10.457.6.113.82-.258.82-.577 0-.285-.011-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.545-1.38-.266-1.16-.266-1.16 1.103.774 1.684 1.126 1.684 1.126.983 1.67 2.573 1.187 3.203.906.1-.703.386-1.187.703-1.458-2.449-.27-5.02-1.229-5.02-5.445 0-1.201.43-2.181 1.125-2.95.11-.274-.49-1.39.105-2.915 0 0 .918-.295 3.012 1.12a10.51 10.51 0 012.78-.376c.92-.016 1.83.056 2.7.206 2.094-1.415 3.012-1.12 3.012-1.12.595 1.525-.015 2.641.105 2.915.695.769 1.125 1.75 1.125 2.95 0 4.225-2.571 5.174-5.028 5.445.398.344.757 1.055.757 2.124 0 1.536-.014 2.775-.014 3.155 0 .319.22.69.825.577C19.57 21.357 23 17.34 23 12c0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <!-- Google Scholar Link (NEW) -->
                <a href="https://scholar.google.com/citations?user=_F2EinEAAAAJ" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-blue-600 transition-colors" title="Google Scholar">
                    <span class="sr-only">Google Scholar</span>
                    <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                    </svg>
                </a>
                <!-- ResearchGate Link (NEW) -->
                <a href="https://www.researchgate.net/profile/Kamrul-Islam-28" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-blue-600 transition-colors" title="ResearchGate">
                    <span class="sr-only">ResearchGate</span>
                    <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 448 512" aria-hidden="true">
                        <path d="M0 32v448h448V32H0zm262.2 334.4c-6.6 3-33.2 6-50-14.2-9.2-10.6-25.3-33.3-42.2-63.6-8.9 0-14.7 0-21.4-.6v46.4c0 23.5 6 21.2 25.8 23.9v8.1c-6.9-.3-23.1-.8-35.6-.8-13.1 0-26.1.6-33.6.8v-8.1c15.5-2.9 22-1.3 22-23.9V225c0-22.6-6.4-21-22-23.9V193c25.8 1 53.1-.6 70.9-.6 31.7 0 55.9 14.4 55.9 45.6 0 21.1-16.7 42.2-39.2 47.5 13.6 24.2 30 45.6 42.2 58.9 7.2 7.8 17.2 14.7 27.2 14.7v7.3zm22.9-135c-23.3 0-32.2-15.7-32.2-32.2V167c0-12.2 8.8-30.4 34-30.4s30.4 17.9 30.4 17.9l-10.7 7.2s-5.5-12.5-19.7-12.5c-7.9 0-19.7 7.3-19.7 19.7v26.8c0 13.4 6.6 23.3 17.9 23.3 14.1 0 21.5-10.9 21.5-26.8h-17.9v-10.7h30.4c0 20.5 4.7 49.9-34 49.9zm-116.5 44.7c-9.4 0-13.6-.3-20-.8v-69.7c6.4-.6 15-.6 22.5-.6 23.3 0 37.2 12.2 37.2 34.5 0 21.9-15 36.6-39.7 36.6z"/>
                    </svg>
                </a>
            </div>
        </div>
    </section>
`;

export default contact;
