// ⚠️ 这个文件【故意】留了两个 lint 问题，D5 要用它们验证门禁能不能真的挑出错。
//    修掉它们 = D5 没素材了。先别修。原因见 README。

// 问题 1：显式 any —— @typescript-eslint/no-explicit-any，多数 TS 规范里是 error
export function greet(name: any): string {
  // 问题 2：声明了但从未使用 —— no-unused-vars
  const unusedGreeting = 'hello';

  return `hello, ${name}`;
}
