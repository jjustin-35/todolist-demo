module.exports = {
  "env": { // 指定這腳本的執行環境
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
    "jest": true
  },
  "extends": [ // 要使用的風格和規則
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:security/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 2020, // 支援轉譯所有最新的ECMAScript語法
    "ecmaFeatures": {
      "jsx": true, // 是否啟用JSX
      "arrowFunctions": true,
    },
    "sourceType": "module",
  },
  "plugins": [ // 使用到的plugin，讓ESLint看懂特殊語法
    "react",
    "jest",
    "prettier",
    "security",
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  "rules": { // 若專案有加入其他規則請在README裡告知為何使用
   "prettier/prettier": ["error", {"jsxSingleQuote": false}],
  }
}