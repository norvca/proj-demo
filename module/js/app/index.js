// 主 JS 文件
define(['jquery', 'app/carousel', 'app/gotop', 'app/loadMore', 'app/waterfall'], function($, Carousel, Gotop, loadMore, waterfall){
  // 轮播图
  Carousel.init(document.querySelector('.carousel'));

  // 回到顶部
  Gotop.init(document.querySelector('.gotop'));

  // 原生方法失败，暂用 jq 代替
  loadMore.init($('.waterfall-ct'), $('#btn-load'));
});