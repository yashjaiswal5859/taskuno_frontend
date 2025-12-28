import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-gray-900 text-gray-300"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-10 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex items-start md:items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">
                TU
              </div>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold">TaskUno</h3>
              <p className="text-sm text-gray-400">
                Tools and resources to run effective sprints.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/yashjaiswal5859"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.49 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.45-1.11-1.45-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.8c.85.004 1.71.115 2.51.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.41.1 2.66.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.16.59.67.49A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/yash-jaiswal-49a26a178/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="mailto:yashjaiswal88542@gmail.com"
              aria-label="Email"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/yashjaiswal5859"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-800">
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} TaskUno. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              This website is made by Yash Jaiswal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

