import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [...nextCoreWebVitals, {
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/no-unescaped-entities": "off",
    "@next/next/no-img-element": "off",
    "no-unused-vars": "off",
    "no-console": "off",
    "prefer-const": "off",
  },
}, {
  ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"]
}];

export default eslintConfig;
