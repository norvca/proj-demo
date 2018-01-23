// 主 JS 文件
define(['carousel', 'gotop'], function(Carousel, Gotop){
  // 轮播图
  Carousel.init(document.querySelector('.carousel'));

  // 回到顶部
  Gotop.init(document.querySelector('.gotop'));
});