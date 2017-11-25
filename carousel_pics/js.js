var $pic = $('.pic');
var picLength = $('.slides li').length;
var picWidth = $('.pic img').width();
var picIndex = 0;

// 左滑动
$('.btn_left').click(function(){
  playPre();
});

function playPre(){
    $pic.stop().css({left:-picIndex * picWidth});
  
    picIndex--;
  
    
    if(picIndex < 0){
      picIndex = 5;
      $pic.css({left: -picWidth * picLength});
    }
    
  
    $('.slides li').eq(picIndex).addClass('active').siblings().removeClass();
    $pic.animate({left: "+=" + picWidth}, 200, "swing");
  
    console.log(picIndex);
}

var clock;

// 右滑动
$('.btn_right').click(function(){
  playNext();
});

function playNext(){
  $pic.stop().css({left:-picIndex * picWidth});

  picIndex++;

  
  if(picIndex > 5){
    picIndex = 0;
    $pic.css({left: picWidth});
  }
  $('.slides li').eq(picIndex).addClass('active').siblings().removeClass();
  
  $pic.animate({left: "-=" + picWidth}, 200, "swing");
  
  console.log(picIndex);
}

// slides
$('.slides').on("click", "li", function(){
  $('.slides li').removeClass('active');
  $(this).addClass('active');
  picIndex = $(this).index();
  console.log(picIndex);
  $pic.animate({left: - picWidth * picIndex}, 200, "swing");
});