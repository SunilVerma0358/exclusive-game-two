/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Anton: ["Anton", "sans-serif"],
                Inter: ["Inter", "sans-serif"],
            },
            backgroundImage: {
                instagram: [
                    "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
                ],
            },
            animation: {
                Phone: "PhoneCall 1s infinite linear",
                poker: "Poker 3s infinite linear",
                ItCard: "ItCard 3s infinite linear",
                HeartCard: "HeartCard 3s infinite linear",
                Load: "Load 1.5s infinite linear",
            },
            keyframes: {
                PhoneCall: {
                    "0%": {
                        "transform ": "rotate(-5deg) translateY(0) ",
                    },
                    "50%": {
                        "transform ": "rotate(10deg) translateX(10%) translateY(10%)",
                    },
                    "100%": {
                        "transform ": "rotate(-5deg) translateY(0)",
                    },
                },
                Poker: {
                    "0%": {
                        "transform ": "rotate(0)",
                    },

                    "100%": {
                        "transform ": "rotate(360deg) ",
                    },
                },
                ItCard: {
                    "0%": {
                        "transform ": "translateY(0)",
                    },

                    "70%": {
                        "transform ": "TranslateY(-30px) ",
                    },
                    "100%": {
                        "transform ": "TranslateY(0) ",
                    },
                },
                HeartCard: {
                    "0%": {
                        "transform ": "rotateY(0) rotateX(0)",
                    },

                    "40%": {
                        "transform ": "rotateY(-45deg) rotateX(0) ",
                    },
                    "70%": {
                        "transform ": "rotateY(30deg) rotateX(45deg) ",
                    },
                    "100%": {
                        "transform ": "roateY(-30deg) rotateX(0) ",
                    },
                },
                Load: {
                    "100%": { transform: " rotate(360deg)" },
                },
            },
        },
    },
    plugins: [],
};