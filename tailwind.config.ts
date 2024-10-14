/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    darkMode: 'selector',
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: 'var(--primary)',
                    dark: 'var(--primary-dark)'
                },
                light: {
                    bg: 'var(--bg)',
                    object: 'var(--bg-object)',
                    border: 'var(--border)'
                },
                dark: {
                    bg: 'var(--bg-dark)',
                    object: 'var(--bg-object-dark)',
                    border: ''
                }
            },
            backgroundImage: {
                dark: "url('/bg.jpg')",
                light: "url('/bg_day.jpg')"
            }
        }
    },
    plugins: ['prettier-plugin-tailwindcss']
};

export default config;
