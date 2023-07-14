const { ESLint } = require("eslint");
const fs = require("fs");
const testCode = `
  const name = "eslint";
  if(true) {
    console.log("constant condition warning")
  };
`;

(async function main() {
  // 1. 创建实例
  const eslint = new ESLint({
    useEslintrc: false,
    overrideConfig: {
      extends: ["eslint:recommended"],
      parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
      },
      overrides: [
        {
          files: ["*.html"],
          plugins: ["script-tags"],
          rules: {
            quotes: [2, "single"],
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
  const code = fs.readFileSync(
    path.join(__dirname, "./src.index.html"),
    "utf-8",
  );
  console.log(code);
  // 2. 检查文本
  const results = await eslint.lintText(code);
  // 3. 格式化结果
  const formatter = await eslint.loadFormatter("stylish");
  const resultText = formatter.format(results);
  // 4. 输出
  console.log(resultText);
})().catch((error) => {
  process.exitCode = 1;
  console.error(error);
});
