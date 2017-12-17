// 封装轮播对象
var Carousel = (function(){
  // 构造轮播函数
  function _Carousel($ct){
    this.$ct = $ct;
    this.init();
    this.bind();
  }

  // 初始化设置
  _Carousel.prototype.init = function(){
    this.$pic = this.$ct.find('.pic');
    this.$picLength = this.$ct.find('.slides li').length;
    this.$picWidth = this.$ct.find('.pic img').width();

    this.$btnLeft = this.$ct.find('.btn_left');
    this.$btnRight = this.$ct.find('.btn_right');
    this.$slides = this.$ct.find('.slides');
    this.$dots = this.$ct.find('.slides li');
    this.$picIndex = 0;
  };

  // 绑定事件
  _Carousel.prototype.bind = function(){
    var _this = this; // 把构造对象的 this 值存起来
    this.$btnLeft.click(function(){
      _this.playPre(); // 用 _this ，否则 this会指向 $btnLeft
    });

    this.$btnRight.click(function(){
     _this.playNext();
    });

    // slides
    this.$slides.on("click", "li", function(){
      _this.$dots.removeClass('active');
      $(this).addClass('active');
      _this.$picIndex = $(this).index();
      console.log(_this.$picIndex);
      _this.$pic.animate({left: - _this.$picWidth * _this.$picIndex}, 200, "swing");
    });
  };

  // 左滑动
  _Carousel.prototype.playPre = function(){
      this.$pic.stop().css({left:-this.$picIndex * this.$picWidth});

      this.$picIndex--;

      if(this.$picIndex < 0){
        this.$picIndex = 5;
        this.$pic.css({left: -this.$picWidth * this.$picLength});
      }

      this.setDots();
      this.$pic.animate({left: "+=" + this.$picWidth}, 200, "swing");

      console.log(this.$picIndex);
  };

  // 右滑动
  _Carousel.prototype.playNext= function(){
    this.$pic.stop().css({left:-this.$picIndex * this.$picWidth});

    this.$picIndex++;

    if(this.$picIndex > 5){
      this.$picIndex = 0;
      this.$pic.css({left: this.$picWidth});
    }

    this.$pic.animate({left: "-=" + this.$picWidth}, 200, "swing");

    this.setDots();

    console.log(this.$picIndex);
  };

  // 点滑动
  _Carousel.prototype.setDots = function(){
    this.$dots.eq(this.$picIndex).addClass('active').siblings().removeClass();
  };

  return {
    init: function($ct){
      $ct.each(function(index, element){
        new _Carousel($(element));
      });
    }
  };
})();

// 调用 Carousel 对象 的 init 方法
Carousel.init($(".layout"));