module.exports = {
  "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "jasmine": true
    },
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
      "comma-dangle": ["error", "never"],
      "linebreak-style": ["error", "windows"],
      "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
      "no-console":0
    }
};
