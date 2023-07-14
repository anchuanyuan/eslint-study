const { ESLint } = require('eslint');
const fs = require('fs');
const testCode = `
  const name = "eslint";
  if(true) {
    console.log("constant condition warning")
  };
`;
let code2 = `
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      var a;
          console.log('123');
    </script>
  </body>
</html>`;

(async function main() {
  // 1. 创建实例
  const eslint = new ESLint({
    useEslintrc: false,
    overrideConfig: {
      extends: ['eslint:recommended'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
      overrides: [
        {
          files: ['*.html'],
          plugins: ['script-tags'],
          rules: {
            quotes: [2, 'single'],
            indent: [2],
          },
        },
      ],
      env: {
        es2022: true,
        node: true,
      },
    },
  });
  const code = fs.readFileSync('index.html', 'utf-8');
  console.log(code);
  // 2. 检查文本
  const results = await eslint.lintText(code2);
  // 3. 格式化结果
  const formatter = await eslint.loadFormatter('stylish');
  const resultText = formatter.format(results);
  // 4. 输出
  console.log(resultText);
})().catch((error) => {
  process.exitCode = 1;
  console.error(error);
});
