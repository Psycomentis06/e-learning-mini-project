function skinColorOpacity(varName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined)
      return `rgba(var(${varName}, ${opacityValue}))`;
    return `rgb(var(${varName}))`;
  };
}

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: {
            // Primary text Color
            "primary-100": "rgb(var(--primary-100))",
            "primary-200": "rgb(var(--primary-200))",
            "primary-300": "rgb(var(--primary-300))",
            "primary-400": "rgb(var(--primary-400))",
            "primary-500": "rgb(var(--primary-500))",
            "primary-600": "rgb(var(--primary-600))",
            "primary-700": "rgb(var(--primary-700))",
            "primary-800": "rgb(var(--primary-800))",
            "primary-900": "rgb(var(--primary-900))",

            // Secondary text Color
            "secondary-100": "rgb(var(--secondary-100))",
            "secondary-200": "rgb(var(--secondary-200))",
            "secondary-300": "rgb(var(--secondary-300))",
            "secondary-400": "rgb(var(--secondary-400))",
            "secondary-500": "rgb(var(--secondary-500))",
            "secondary-600": "rgb(var(--secondary-600))",
            "secondary-700": "rgb(var(--secondary-700))",
            "secondary-800": "rgb(var(--secondary-800))",
            "secondary-900": "rgb(var(--secondary-900))",

            //  Success text Color
            "success-100": "rgb(var(--success-100))",
            "success-200": "rgb(var(--success-200))",
            "success-300": "rgb(var(--success-300))",
            "success-400": "rgb(var(--success-400))",
            "success-500": "rgb(var(--success-500))",
            "success-600": "rgb(var(--success-600))",
            "success-700": "rgb(var(--success-700))",
            "success-800": "rgb(var(--success-800))",
            "success-900": "rgb(var(--success-900))",

            // Danger text Color
            "danger-100": "rgb(var(--danger-100))",
            "danger-200": "rgb(var(--danger-200))",
            "danger-300": "rgb(var(--danger-300))",
            "danger-400": "rgb(var(--danger-400))",
            "danger-500": "rgb(var(--danger-500))",
            "danger-600": "rgb(var(--danger-600))",
            "danger-700": "rgb(var(--danger-700))",
            "danger-800": "rgb(var(--danger-800))",
            "danger-900": "rgb(var(--danger-900))",

            // Info text Color
            "info-100": "rgb(var(--info-100))",
            "info-200": "rgb(var(--info-200))",
            "info-300": "rgb(var(--info-300))",
            "info-400": "rgb(var(--info-400))",
            "info-500": "rgb(var(--info-500))",
            "info-600": "rgb(var(--info-600))",
            "info-700": "rgb(var(--info-700))",
            "info-800": "rgb(var(--info-800))",
            "info-900": "rgb(var(--info-900))",

            // Warning text Color
            "warning-100": "rgb(var(--warning-100))",
            "warning-200": "rgb(var(--warning-200))",
            "warning-300": "rgb(var(--warning-300))",
            "warning-400": "rgb(var(--warning-400))",
            "warning-500": "rgb(var(--warning-500))",
            "warning-600": "rgb(var(--warning-600))",
            "warning-700": "rgb(var(--warning-700))",
            "warning-800": "rgb(var(--warning-800))",
            "warning-900": "rgb(var(--warning-900))",
          },
          inverted: {
            // Primary text Color
            "primary-100": "rgb(var(--inverted-primary-100))",
            "primary-200": "rgb(var(--inverted-primary-200))",
            "primary-300": "rgb(var(--inverted-primary-300))",
            "primary-400": "rgb(var(--inverted-primary-400))",
            "primary-500": "rgb(var(--inverted-primary-500))",
            "primary-600": "rgb(var(--inverted-primary-600))",
            "primary-700": "rgb(var(--inverted-primary-700))",
            "primary-800": "rgb(var(--inverted-primary-800))",
            "primary-900": "rgb(var(--inverted-primary-900))",

            // Secondary text Color
            "secondary-100": "rgb(var(--inverted-secondary-100))",
            "secondary-200": "rgb(var(--inverted-secondary-200))",
            "secondary-300": "rgb(var(--inverted-secondary-300))",
            "secondary-400": "rgb(var(--inverted-secondary-400))",
            "secondary-500": "rgb(var(--inverted-secondary-500))",
            "secondary-600": "rgb(var(--inverted-secondary-600))",
            "secondary-700": "rgb(var(--inverted-secondary-700))",
            "secondary-800": "rgb(var(--inverted-secondary-800))",
            "secondary-900": "rgb(var(--inverted-secondary-900))",

            //  Success text Color
            "success-100": "rgb(var(--inverted-success-100))",
            "success-200": "rgb(var(--inverted-success-200))",
            "success-300": "rgb(var(--inverted-success-300))",
            "success-400": "rgb(var(--inverted-success-400))",
            "success-500": "rgb(var(--inverted-success-500))",
            "success-600": "rgb(var(--inverted-success-600))",
            "success-700": "rgb(var(--inverted-success-700))",
            "success-800": "rgb(var(--inverted-success-800))",
            "success-900": "rgb(var(--inverted-success-900))",

            // Danger text Color
            "danger-100": "rgb(var(--inverted-danger-100))",
            "danger-200": "rgb(var(--inverted-danger-200))",
            "danger-300": "rgb(var(--inverted-danger-300))",
            "danger-400": "rgb(var(--inverted-danger-400))",
            "danger-500": "rgb(var(--inverted-danger-500))",
            "danger-600": "rgb(var(--inverted-danger-600))",
            "danger-700": "rgb(var(--inverted-danger-700))",
            "danger-800": "rgb(var(--inverted-danger-800))",
            "danger-900": "rgb(var(--inverted-danger-900))",

            // Info text Color
            "info-100": "rgb(var(--inverted-info-100))",
            "info-200": "rgb(var(--inverted-info-200))",
            "info-300": "rgb(var(--inverted-info-300))",
            "info-400": "rgb(var(--inverted-info-400))",
            "info-500": "rgb(var(--inverted-info-500))",
            "info-600": "rgb(var(--inverted-info-600))",
            "info-700": "rgb(var(--inverted-info-700))",
            "info-800": "rgb(var(--inverted-info-800))",
            "info-900": "rgb(var(--inverted-info-900))",

            // Warning text Color
            "warning-100": "rgb(var(--inverted-warning-100))",
            "warning-200": "rgb(var(--inverted-warning-200))",
            "warning-300": "rgb(var(--inverted-warning-300))",
            "warning-400": "rgb(var(--inverted-warning-400))",
            "warning-500": "rgb(var(--inverted-warning-500))",
            "warning-600": "rgb(var(--inverted-warning-600))",
            "warning-700": "rgb(var(--inverted-warning-700))",
            "warning-800": "rgb(var(--inverted-warning-800))",
            "warning-900": "rgb(var(--inverted-warning-900))",
          },
        },
      },
      backgroundColor: {
        skin: {
          base: {
            // Primary text Color
            "primary-100": skinColorOpacity("--primary-100"),
            "primary-200": skinColorOpacity("--primary-200"),
            "primary-300": skinColorOpacity("--primary-300"),
            "primary-400": skinColorOpacity("--primary-400"),
            "primary-500": skinColorOpacity("--primary-500"),
            "primary-600": skinColorOpacity("--primary-600"),
            "primary-700": skinColorOpacity("--primary-700"),
            "primary-800": skinColorOpacity("--primary-800"),
            "primary-900": skinColorOpacity("--primary-900"),

            // Secondary text Color
            "secondary-100": skinColorOpacity("--secondary-100"),
            "secondary-200": skinColorOpacity("--secondary-200"),
            "secondary-300": skinColorOpacity("--secondary-300"),
            "secondary-400": skinColorOpacity("--secondary-400"),
            "secondary-500": skinColorOpacity("--secondary-500"),
            "secondary-600": skinColorOpacity("--secondary-600"),
            "secondary-700": skinColorOpacity("--secondary-700"),
            "secondary-800": skinColorOpacity("--secondary-800"),
            "secondary-900": skinColorOpacity("--secondary-900"),

            //  Success text Color
            "success-100": skinColorOpacity("--success-100"),
            "success-200": skinColorOpacity("--success-200"),
            "success-300": skinColorOpacity("--success-300"),
            "success-400": skinColorOpacity("--success-400"),
            "success-500": skinColorOpacity("--success-500"),
            "success-600": skinColorOpacity("--success-600"),
            "success-700": skinColorOpacity("--success-700"),
            "success-800": skinColorOpacity("--success-800"),
            "success-900": skinColorOpacity("--success-900"),

            // Danger text Color
            "danger-100": skinColorOpacity("--danger-100"),
            "danger-200": skinColorOpacity("--danger-200"),
            "danger-300": skinColorOpacity("--danger-300"),
            "danger-400": skinColorOpacity("--danger-400"),
            "danger-500": skinColorOpacity("--danger-500"),
            "danger-600": skinColorOpacity("--danger-600"),
            "danger-700": skinColorOpacity("--danger-700"),
            "danger-800": skinColorOpacity("--danger-800"),
            "danger-900": skinColorOpacity("--danger-900"),

            // Info text Color
            "info-100": skinColorOpacity("--info-100"),
            "info-200": skinColorOpacity("--info-200"),
            "info-300": skinColorOpacity("--info-300"),
            "info-400": skinColorOpacity("--info-400"),
            "info-500": skinColorOpacity("--info-500"),
            "info-600": skinColorOpacity("--info-600"),
            "info-700": skinColorOpacity("--info-700"),
            "info-800": skinColorOpacity("--info-800"),
            "info-900": skinColorOpacity("--info-900"),

            // Warning text Color
            "warning-100": skinColorOpacity("--warning-100"),
            "warning-200": skinColorOpacity("--warning-200"),
            "warning-300": skinColorOpacity("--warning-300"),
            "warning-400": skinColorOpacity("--warning-400"),
            "warning-500": skinColorOpacity("--warning-500"),
            "warning-600": skinColorOpacity("--warning-600"),
            "warning-700": skinColorOpacity("--warning-700"),
            "warning-800": skinColorOpacity("--warning-800"),
            "warning-900": skinColorOpacity("--warning-900"),
          },
          inverted: {
            // Primary text Color
            "primary-100": skinColorOpacity("--inverted-primary-100"),
            "primary-200": skinColorOpacity("--inverted-primary-200"),
            "primary-300": skinColorOpacity("--inverted-primary-300"),
            "primary-400": skinColorOpacity("--inverted-primary-400"),
            "primary-500": skinColorOpacity("--inverted-primary-500"),
            "primary-600": skinColorOpacity("--inverted-primary-600"),
            "primary-700": skinColorOpacity("--inverted-primary-700"),
            "primary-800": skinColorOpacity("--inverted-primary-800"),
            "primary-900": skinColorOpacity("--inverted-primary-900"),

            // Secondary text Color
            "secondary-100": skinColorOpacity("--inverted-secondary-100"),
            "secondary-200": skinColorOpacity("--inverted-secondary-200"),
            "secondary-300": skinColorOpacity("--inverted-secondary-300"),
            "secondary-400": skinColorOpacity("--inverted-secondary-400"),
            "secondary-500": skinColorOpacity("--inverted-secondary-500"),
            "secondary-600": skinColorOpacity("--inverted-secondary-600"),
            "secondary-700": skinColorOpacity("--inverted-secondary-700"),
            "secondary-800": skinColorOpacity("--inverted-secondary-800"),
            "secondary-900": skinColorOpacity("--inverted-secondary-900"),

            //  Success text Color
            "success-100": skinColorOpacity("--inverted-success-100"),
            "success-200": skinColorOpacity("--inverted-success-200"),
            "success-300": skinColorOpacity("--inverted-success-300"),
            "success-400": skinColorOpacity("--inverted-success-400"),
            "success-500": skinColorOpacity("--inverted-success-500"),
            "success-600": skinColorOpacity("--inverted-success-600"),
            "success-700": skinColorOpacity("--inverted-success-700"),
            "success-800": skinColorOpacity("--inverted-success-800"),
            "success-900": skinColorOpacity("--inverted-success-900"),

            // Danger text Color
            "danger-100": skinColorOpacity("--inverted-danger-100"),
            "danger-200": skinColorOpacity("--inverted-danger-200"),
            "danger-300": skinColorOpacity("--inverted-danger-300"),
            "danger-400": skinColorOpacity("--inverted-danger-400"),
            "danger-500": skinColorOpacity("--inverted-danger-500"),
            "danger-600": skinColorOpacity("--inverted-danger-600"),
            "danger-700": skinColorOpacity("--inverted-danger-700"),
            "danger-800": skinColorOpacity("--inverted-danger-800"),
            "danger-900": skinColorOpacity("--inverted-danger-900"),

            // Info text Color
            "info-100": skinColorOpacity("--inverted-info-100"),
            "info-200": skinColorOpacity("--inverted-info-200"),
            "info-300": skinColorOpacity("--inverted-info-300"),
            "info-400": skinColorOpacity("--inverted-info-400"),
            "info-500": skinColorOpacity("--inverted-info-500"),
            "info-600": skinColorOpacity("--inverted-info-600"),
            "info-700": skinColorOpacity("--inverted-info-700"),
            "info-800": skinColorOpacity("--inverted-info-800"),
            "info-900": skinColorOpacity("--inverted-info-900"),

            // Warning text Color
            "warning-100": skinColorOpacity("--inverted-warning-100"),
            "warning-200": skinColorOpacity("--inverted-warning-200"),
            "warning-300": skinColorOpacity("--inverted-warning-300"),
            "warning-400": skinColorOpacity("--inverted-warning-400"),
            "warning-500": skinColorOpacity("--inverted-warning-500"),
            "warning-600": skinColorOpacity("--inverted-warning-600"),
            "warning-700": skinColorOpacity("--inverted-warning-700"),
            "warning-800": skinColorOpacity("--inverted-warning-800"),
            "warning-900": skinColorOpacity("--inverted-warning-900"),
          },
        },
      },
      fontFamily: {
        "nanum-gothic": ["Nanum Gothic", "sans-serif"],
        cairo: ["Cairo", "sans-serif"],
        "source-sans-pro": ["Source Sans Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
