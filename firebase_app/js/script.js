// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtrTT5iZlv4WRbngZtAGHQmnImtQ0zvwI",
  authDomain: "gsmil07-3e9f3.firebaseapp.com",
  databaseURL: "https://gsmil07-3e9f3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gsmil07-3e9f3",
  storageBucket: "gsmil07-3e9f3.appspot.com",
  messagingSenderId: "227755587283",
  appId: "1:227755587283:web:b3cf7dffcfbb149fd58626",
  measurementId: "G-V5LHLSMSW5"
};
// Initialize Firebase
initializeApp(firebaseConfig);

/* このデータを使って新規登録処理をしてくれたまえよ、の部分*/
function signUpUser(email, password) {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    // .then(function (userInfo) {
    .then(function (userCredential) {
    //登録成功後にやりたいことをここに書く  
    //   console.log(userInfo);
      console.log("サインアップ成功:", userCredential.user);
      location.href = "index.html";
    })  
    .catch(function (error) {
    //登録失敗とかエラーのときにやりたいことをここに書く
			console.log(error);
      $("#message").html(error);
    });
  }

$("#signup-button").on("click", function () {
  const email = $("#signup-email").val();
  const password = $("#signup-password").val();
  console.log(email,password,1); //処理の流れの確認用
  signUpUser(email, password);
});


//新規登録（サインアップ）ボタンを押したら
// $("#signup-button").on("click", function () {
//   const email = $("#signup-email").val();
//   const password = $("#signup-password").val();
  // const auth = getAuth();

  // createUserWithEmailAndPassword(auth, email, password)
  //   // .then(function (userInfo) {
  //   .then(function (userCredential) {
  //   //登録成功後にやりたいことをここに書く  
  //   //   console.log(userInfo);
  //     console.log("サインアップ成功:", userCredential.user);
  //     location.href = "index.html";
  //   })  
  //   .catch(function (error) {
  //   //登録失敗とかエラーのときにやりたいことをここに書く
	// 		console.log(error);
  //     $("#message").html(error);
  //   });
　// });


//ログイン処理を担当する独自関数
function loginUser(email, password) {
  const auth = getAuth();

  signInWithEmailAndPassword(auth, email, password)
    .then(function (userCredential) {
      console.log("ログイン成功:", userCredential.user);
      location.href = "index.html";
    })
    .catch(function (error) {
      $("#message").html(error);
    });
}


$("#login-button").on("click", function () {
  const email = $("#login-email").val();
  const password = $("#login-password").val();
  
  loginUser(email, password);
});



// //ログインボタンを押した時の処理
// $("#login-button").on("click", function () {
//   const email = $("#login-email").val();
//   const password = $("#login-password").val();
//   const auth = getAuth();

//   signInWithEmailAndPassword(auth, email, password)
//     // .then(function (userInfo) {
//     .then(function (userCredential) {
//     //ログイン成功後にやりたいことをここに書く 
//       console.log("ログイン成功:", userCredential.user);
//       location.href = "index.html";
//     })
//     .catch(function (error) {
//     //ログイン失敗とかエラーのときにやりたいことをここに書く
// 			console.log(error);
//       $("#message").html(error);
//     });
// });



//ログアウト処理をする関数
function logoutUser() {
  const auth = getAuth();
  signOut(auth)
    .then(function () {
      location.href = "login.html";
    })
    .catch(function (error) {
      $("#message").html(error);
    });
}

$("#logout-button").on("click", logoutUser);

// //ログアウトボタンを押したら
// $("#logout-button").on("click", function(){
// 	const auth = getAuth();
//   signOut(auth)
//     .then(function () {
//     //ログアウトが成功したときにやりたいことをここに書く 
//       location.href = "login.html";
//     })
//     .catch(function (error) {
//     //ログアウトが失敗したときにやりたいことをここに書く 
//     　console.log(error);
//       $("#message").html(error);
//     });
// });


// Script.js
// Correct Pin Value
let correctPin = "1234";

let btns = document.getElementsByClassName("pinpad-btn");
let pinInput = document.getElementById("login-pincode");

for (let i = 0; i < btns.length; i++) {
    let btn = btns.item(i);
    if (btn.id &&
        (btn.id === "submit-btn" ||
            btn.id === "delete-btn"))
        continue;

    // Add onclick event listener to 
    // Every button from 0 - 9
    btn.addEventListener(
        "click",
        (e) => {
            pinInput.value +=
                e.target.value;
        }
    );
}

let submitBtn = document.getElementById("submit-btn");
let delBtn = document.getElementById("delete-btn");
let modal = document.getElementById("modal");
let result = document.getElementById("result");
let closeBtn = document.getElementById("close");

submitBtn.addEventListener("click",() => {
    if (!pinInput || !pinInput.value || pinInput.value === "") 
        {alert("Please enter a pin first");} 
          else if (pinInput.value ===correctPin) 
        {alert("Correct PIN");}
          else {alert("Incorrect PIN");}
        // Reset the input
        pinInput.value = "";
    }
);

delBtn.addEventListener("click", () => {
    if (pinInput.value)
        pinInput.value =
            pinInput.value.substr(
                0,
                pinInput.value.length -
                    1
            );
});

closeBtn.addEventListener(
    "click",() => {modal.style.display = "none";}
);
