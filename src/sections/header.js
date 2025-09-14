const header = `
<header class="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
  <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <div class="flex-shrink-0">
        <a href="#" class="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">Kamrul Islam</a>
      </div>

      <div class="hidden md:block">
        <div class="ml-10 flex items-baseline space-x-4">
          <a href="#projects" class="text-gray-600 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Projects</a>
          <a href="#research" class="text-gray-600 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Research</a>
          <a href="#skills" class="text-gray-600 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Skills</a>
          <a href="#contact" class="text-gray-600 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
        </div>
      </div>

      <div class="-mr-2 flex md:hidden">
        <button type="button" id="mobile-menu-button" class="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-800 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-200 focus:ring-white">
          <span class="sr-only">Open main menu</span>
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </nav>

  <div id="mobile-menu" class="hidden md:hidden">
    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      <a href="#projects" class="text-gray-600 hover:bg-gray-200 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Projects</a>
      <a href="#research" class="text-gray-600 hover:bg-gray-200 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Research</a>
      <a href="#skills" class="text-gray-600 hover:bg-gray-200 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Skills</a>
      <a href="#contact" class="text-gray-600 hover:bg-gray-200 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
    </div>
  </div>
</header>
`;

export default header;