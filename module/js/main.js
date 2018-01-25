// 路径配置
requirejs.config({
  baseUrl: 'js',
  paths: {
    'jquery': 'lib/jquery-3.2.1.min'
  }
});


// 主 JS 文件引入
require(['app/index']);

