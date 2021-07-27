"use strict";

const id = document.querySelector("#id"),
	psword = document.querySelector("#psword"),
	loginBtn = document.querySelector("button");

loginBtn.addEventListener('click', login);

function login () {
	const req = {
	  id: id.value,
	  psword: psword.value
  };

fetch('/login', {
	//post 방식으로 데이터 전달.
	method: "POST",
	headers: {
		"Content-Type": "application/json",
	},
	//JSON형태로 문자열로 감싸서 데이터 전달. 
	body: JSON.stringify(req), 
  });
}
