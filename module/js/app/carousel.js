define([], function(){
  var Carousel = function(){
    function _Carousel(ct){
      this.ct = ct;
      this.init();
      this.bind();
    }

    _Carousel.prototype.init = function(){
      this.index = 1;
      this.width = document.body.clientWidth;
      this.btnRight = this.ct.querySelector('.btn-right');
      this.btnLeft = this.ct.querySelector('.btn-left');
      this.sections = this.ct.querySelector('.sections');
    };

    _Carousel.prototype.bind = function(){
      var _this = this;
      this.btnRight.onclick = function(){
          _this.index++;
          _this.fixIndex();
          _this.SetTranslateX(-_this.width*_this.index);
      };

      this.btnLeft.onclick = function(){
          _this.index--;
          _this.fixIndex();
          _this.SetTranslateX(-_this.width*_this.index);
      };
    };

    _Carousel.prototype.SetTranslateX = function(translate){
      this.sections.style.transform = "translateX(" + -this.width*this.index + "px)";
    };

    _Carousel.prototype.fixIndex = function(){
      if(this.index > 4){
        this.index = 1;
      }else if(this.index < 1){
        this.index = 4;
      }
    };

    return {
      init: function(ct){
        new _Carousel(ct);
      }
    };
  }();

  return Carousel;
});
