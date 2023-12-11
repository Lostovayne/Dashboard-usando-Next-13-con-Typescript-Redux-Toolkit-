/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                portage: {
                    50: "#eff4fe",
                    100: "#e2eafd",
                    200: "#cad8fb",
                    300: "#aabef7",
                    400: "#8496f0",
                    500: "#6c78e8",
                    600: "#5052db",
                    700: "#4141c1",
                    800: "#37389c",
                    900: "#33357c",
                    950: "#1e1e48",
                },
            },
        },
    },
    plugins: [],
};
