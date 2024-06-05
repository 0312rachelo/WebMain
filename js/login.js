function addJavascript(jsname) { // 자바스크립트 외부 연동
	var th = document.getElementsByTagName('head')[0];
	var s = document.createElement('script');
	s.setAttribute('type','text/javascript');
	s.setAttribute('src',jsname);
	th.appendChild(s);
}
addJavascript('/js/security.js'); // 암복호화 함수
addJavascript('/js/session.js'); // 세션 함수
addJavascript('/js/cookie.js'); // 쿠키 함수


function init_logined(){
    if(sessionStorage){
        decrypt_text();
    }
    else{
        alert("세션 스토리지 지원 x");
    }
}

const check_input = () => {
    
    const idsave_check = document.getElementById('idSaveCheck');
    const loginForm = document.getElementById('login_form');
    const loginBtn = document.getElementById('login_btn');
    const emailInput = document.getElementById('typeEmailX');
    const passwordInput = document.getElementById('typePasswordX');
    const c = '아이디, 패스워드를 체크합니다';
    alert(c);
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (emailValue === '') {
    alert('이메일을 입력하세요.');
    return false;
    }

    if (passwordValue === '') {
    alert('비밀번호를 입력하세요.');
    return false;
    }

    if (emailValue.length < 5) {
        alert('아이디는 최소 5글자 이상 입력해야 합니다.');
        return false;
        }
        if (passwordValue.length < 12) {
        alert('비밀번호는 반드시 12글자 이상 입력해야 합니다.');
        return false;
        }
        const hasSpecialChar = passwordValue.match(/[!,@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/) !== null;
        if (!hasSpecialChar) {
        alert('패스워드는 특수문자를 1개 이상 포함해야 합니다.');
        return false;
        }
        const hasUpperCase = passwordValue.match(/[A-Z]+/) !== null;
        const hasLowerCase = passwordValue.match(/[a-z]+/) !== null;
        if (!hasUpperCase || !hasLowerCase) {
        alert('패스워드는 대소문자를 1개 이상 포함해야 합니다.');
        return false;
        }

        const sanitizedPassword = check_xss(passwordValue);
        // check_xss 함수로 비밀번호 Sanitize
            const sanitizedEmail = check_xss(emailValue);
        // check_xss 함수로 비밀번호 Sanitize
            if (!sanitizedEmail) {
        // Sanitize된 비밀번호 사용
            return false;
            }
        
            if (!sanitizedPassword) {
        // Sanitize된 비밀번호 사용
            return false;
            }
        

    console.log('이메일:', emailValue);
    console.log('비밀번호:', passwordValue);

 
    if(idsave_check.checked == true) { // 아이디 체크 o
        alert("쿠키를 저장합니다.", emailValue);
        setCookie("id", emailValue, 1); //1일 저장
        alert("쿠키 값 :" + emailValue);
        }
        else
        {//아이디 체크 x
        setCookie("id", emailValue.value, 0); //날짜를 0 - 쿠키 삭제
        }

        session_set();
    loginForm.submit();

    };

    document.getElementById("login_btn").addEventListener('click', check_input);

      