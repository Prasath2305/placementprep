export const languageOptions = [
  {
    language: "python",
    version: "3.10.0",
    aliases: ["py", "py3", "python3", "python3.10"],
  },
  {
    language: "java",
    version: "15.0.2",
    aliases: [],
  },
  {
    language: "c++",
    version: "10.2.0",
    aliases: ["cpp", "g++"],
    runtime: "gcc",
  },
  {
    language: "javascript",
    version: "18.15.0",
    aliases: ["node-javascript", "node-js", "javascript", "js"],
    runtime: "node",
  },
  {
    language: "c",
    version: "10.2.0",
    aliases: ["gcc"],
    runtime: "gcc",
  },
  {
    language: "php",
    version: "8.2.3",
    aliases: [],
  },
];

export const codeSnippets = {
  javascript: `function sum(a, b) {\n  return a + b;\n}\nconsole.log(sum(3, 4));`,
  php: `function sum($a, $b) {\n  return $a + $b;\n}\necho sum(3, 4);`,
  python: `def sum(a, b):\n    return a + b\nprint(sum(3, 4))`,
  "c++": `int sum(int a, int b) {\n  return a + b;\n}\nint main() {\n  std::cout << sum(3, 4);\n  return 0;\n}`,
  java: `public class Main {\n    public static int sum(int a, int b) {\n        return a + b;\n    }\n    public static void main(String[] args) {\n        System.out.println(sum(3, 4));\n    }\n}`,
  c: `int sum(int a, int b) {\n  return a + b;\n}\nint main() {\n  printf("%d", sum(3, 4));\n  return 0;\n}`,
};