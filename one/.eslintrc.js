// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    jquery: true,
    node:true,
    commonjs:true,
    es6:true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
     'eol-last': 0,
   'space-before-function-paren': 0,
   'no-unused-vars': 1,// 不能有未声明变量没有使用
   'no-unreachable': 1, //不能有未执行的代码return
   'no-trailing-spaces': 1, // 不能有空行
   'semi': 0
  }
}
