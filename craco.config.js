// 添加自定义对于webpack的配置
const path = require("path");
const CracoLessPlugin = require("craco-less");

module.exports = {
  // webpack配置
  webpack: {
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      "@": path.resolve(__dirname, "src"),
      // 约定：使用 @ 表示 src/components 文件所在路径
      "@comp": path.resolve(__dirname, "src", "components"),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: { "@primary-color": "#181616" }, //这个可以改变antd组件的默认颜色
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
