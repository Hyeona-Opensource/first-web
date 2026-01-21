const mockUser = {
    id: "test",
    pw: "1234",
    name: "박규봉"
};


const loginBox = document.getElementById('before-login'); // 로그인 전 박스
const myPageBox = document.getElementById('after-login'); // 로그인 후 박스
const loginBtn = document.querySelector('.login-button'); // 로그인 버튼

const idInput = document.querySelector('input[name="id"]');
const pwInput = document.querySelector('input[name="password"]');

loginBtn.addEventListener('click', function (e) {
    e.preventDefault(); // form 전송 막기

    const inputId = idInput.value;
    const inputPw = pwInput.value;

    // 🔑 로그인 검사
    if (inputId === mockUser.id && inputPw === mockUser.pw) {
        loginSuccess();
    } else {
        alert('ID 또는 비밀번호가 틀렸습니다.');
    }
});

function loginSuccess() {
    loginBox.classList.add('hidden');
    myPageBox.classList.remove('hidden');
}