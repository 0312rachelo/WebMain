function pop_up(){ //쿠키 검사
    var cookiecheck = getCookie("popupYN"); //쿠키 검사
        if (cookiecheck != "N"){ //쿠키 값에 n이 없는 경우, 없다면
            window.open("../popup/popup.html", "팝업테스트", "width=400, height=300, top=10, left=10");
        }
}

function setCookie(name, value, expiredays) { // 쿠키를 세팅하는 함수, expiredays: 키 만료 시간
    var date = new Date();
    date.setDate(date.getDate() + expiredays); // setdate: 날짜또는시간 설정, getdate: utc 표준 날짜 리턴
    document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString() + "; path=/"; + ";SameSite=None; Secure";
} // >>/<< 이 세팅이 있어야 쿠키가 만들어짐

function getCookie(name) { // 쿠키를 가져오는 함수(쿠키가 존재한다면)
    var cookie = document.cookie;
    console.log("쿠키를 요청합니다.");
    if (cookie != "") {
        var cookie_array = cookie.split("; ");
        for ( var index in cookie_array) {
            var cookie_name = cookie_array[index].split("=");

            if (cookie_name[0] == "popupYN") { // popupYN값을 찾아서, cookie array 배열 반복함
                return cookie_name[1]; //참고: 쿠키는 키, 값으로 이루어짐// 즉, 값은 인덱스 [1]이 된다
            }
        }
    }
    return ;
}

function show_clock(){
    let currentDate = new Date(); // 현재 시스템 날짜 객체 생성
    let divClock = document.getElementById('divClock');
    let msg = "현재 시간 : ";
    if(currentDate.getHours()>12){ // 12시 보다 크면 오후 아니면 오전
        msg += "오후";
        msg += currentDate.getHours()-12+"시";
   }
    else {
        msg += "오전";
        msg += currentDate.getHours()+"시";
    }
        msg += currentDate.getMinutes()+"분";
        msg += currentDate.getSeconds()+"초";
        divClock.innerText = msg;

        if (currentDate.getMinutes()>58) { //정각 1분전 빨강색 출력
        divClock.style.color="red";
        }
        setTimeout(show_clock, 1000); //1초마다 갱신
}

function over(obj) {
    obj.src="image/LOGO.png";}

function out(obj) {
    obj.src="image/LOGO_2.png";}




    function closePopup() { //체크 박스 클릭 시 윈도우를 닫는 함수, id 값이 존재할 시 클릭 이후에 쿠키를 세팅
        if (document.getElementById('check_popup').value) {
            setCookie("popupYN", "N", 1);
            console.log("쿠키를 설정합니다.");
            self.close(); //이걸로 현재 보고 있는 창 자신을 닫는다.
        }
    }


