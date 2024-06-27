module.export = {
  extends: ["plugin:nuxt/recommended"],
  parser: "vue-eslint-parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
  },
  rules: {
    // Optional.
    "@intlify/vue-i18n/no-dynamic-keys": "error",
    "@intlify/vue-i18n/no-unused-keys": [
      "error",
      {
        extensions: [".js", ".vue"],
      },
    ],
  },
  settings: {
    "vue-i18n": {
      localeDir: "./i18n/*.{json,json5,yaml,yml}",
      messageSyntaxVersion: "^9.0.0",
    },
  },
};
