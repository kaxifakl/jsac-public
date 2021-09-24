/**所有路径必须使用绝对路径,注意反斜杠的转义 */
//所有你需要加密的js文件组
//并且你不应该加密程序的入口js
//加密后的文件会生成在相同路径下,不会覆盖原文件
globalThis.jsacFile = [
    `D:\\WorkSpace\\nodejsasset\\jsac-public\\testA\\test.js`
];
//jsac解密文件的输出地址
globalThis.jsacOut = `D:\\WorkSpace\\nodejsasset\\jsac-public\\testB`;

require('./jsac');
//.jsac的后缀可加可不加,但如果同目录下同时存在同名的.js和.jasc,可能会出现一些问题
require('./jsac-encrypt');