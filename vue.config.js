const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  // Не подгружать файлы .map
  productionSourceMap: false,
  // Создание директории assets
  assetsDir: 'assets'
});
