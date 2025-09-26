// HTML 요소 선택
const loginBtn = document.querySelector('.button');
const usernameInput = document.querySelector('.input[type="text"]');
const passwordInput = document.querySelector('.input[type="password"]');
const errorMessage = document.querySelector('.error-message');

// 버튼 클릭 이벤트
loginBtn.addEventListener('click', () => {
    const username = usernameInput.value;  // Username 값
    const password = passwordInput.value;  // Password 값
    

    // 여기서 원하는 코드 실행
    if(username === "" || password === "") {
        errorMessage.style.display = 'block';
        errorMessage.textContent = "Fill in all field.";
        return;
    }

    //alert(`로그인 시도: ${username}`);
    errorMessage.style.display = 'none';
    window.location.href = 'http://naver.com'; // 홈 페이지로 이동
});
