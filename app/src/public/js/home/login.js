"use strict";

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

//login 버튼 클릭시 login함수 실행 
loginBtn.addEventListener('click', login);

function login () {
		//req 객체에 id와 psword 값을 넣어 준다. 
    const req = {
        id: id.value,
        psword: psword.value
    }
    console.log(req);
}