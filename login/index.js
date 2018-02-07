var login = document.querySelector('.login'),
    inputCode = document.querySelectorAll('.input-code');

  // 登陆功能
  var randomPassword = Math.floor( Math.random()*9000+1000 );
  console.log(randomPassword.toString().split(""));


  for(i=0; i<inputCode.length; i++) {
    inputCode[i].addEventListener('keyup', function(e){
      // 兼容FF和IE和Opera
      var event = e || window.event;
      var key = event.which || event.keyCode || event.charCode;

      if(event.key === this.placeholder){
        this.style.color = "#666";
        this.nextElementSibling.value = "";
        this.nextElementSibling.focus();
      } else if (/[1-9]/.test(event.key)) {
        this.style.color = "#d23";
        this.nextElementSibling.value = "";
        this.nextElementSibling.focus();
      } else if(key === 8) {
        this.previousElementSibling.value = "";
        this.previousElementSibling.focus();
      }
    });
  }

  inputCode[inputCode.length-1].addEventListener('keyup', function(){
    var password = "";
    inputCode.forEach(function(e){
      password += e.value;
      if(password == 1234) {
        login.classList.add('modal');
      }
    });
  });