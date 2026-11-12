import tsParser from "@typescript-eslint/parser";
import nextPlugin from "@next/eslint-plugin-next";

const config = [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: {
      "@next/next": nextPlugin
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules
    }
  },
  {
    ignores: [".next/**", "node_modules/**", "next-env.d.ts"]
  }
];

export default config;
