define([], function(){
  var Gotop = function(){
    function _Gotop(ct){
      this.ct = ct;
      this.ct.setAttribute("style",
        "background-color:#d89;"+
        "font-size: 30px;"+
        "position: absolute;"+
        "bottom: 30px; right: 40px;"+
        "padding: 10px 5px;"+
        "display: none"
      );

      this.init();
      this.bind();
    }

    _Gotop.prototype.init = function(){
      this.height = document.documentElement.clientHeight;
      this.btn = document.querySelector('.gotop');
    };

    _Gotop.prototype.bind = function(){
      var _this = this;
      this.btn.onclick = function(){
        document.body.scrollTop = 0;
      };

      window.onmousewheel = function(){
        this.scroll = document.body.scrollTop;
        console.log(this.scroll);
        console.log(_this.height);
        if(this.scroll>_this.height/3){
          _this.ct.style.display = "block";
        }else {
          _this.ct.style.display = "none";
        }
      };
    };




    return {
      init: function(ct){
        new _Gotop(ct);
      }
    };
  }();
  return Gotop;
});