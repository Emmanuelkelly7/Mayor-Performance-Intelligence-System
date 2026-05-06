import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        border: "var(--border)",
        sidebar: {
          bg: "var(--color-sidebar-bg)",
          text: "var(--color-sidebar-text)",
          active: "var(--color-sidebar-active)",
        },
        // Compatibility with old names
        "bg-primary": "var(--background)",
        "text-primary": "var(--foreground)",
        "text-secondary": "var(--muted)",
        "text-muted": "var(--muted-foreground)",
        "accent-primary": "var(--primary)",
        "accent-light": "var(--accent)",
        "sidebar-bg": "var(--color-sidebar-bg)",
        "sidebar-text": "var(--color-sidebar-text)",
        "sidebar-active": "var(--color-sidebar-active)",
        positive: "#10B981",
        negative: "#EF4444",
        warning: "#F59E0B",
        info: "var(--primary)",
        destructive: "#EF4444",
        "destructive-foreground": "#FFFFFF",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
export default config;
