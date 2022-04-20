"use strict";
// 스트릭트 모드 secure js code
///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration
// 선언형(함수이름 有). 호이스팅 가능
// declared되기 전에 사용가능
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

// 변수할당 표현형(익명함수). 호이스팅 불가.
// fuc val stored in variable
// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
};
const age2 = calcAge2(1991);

console.log(age1, age2);

// 개발자 취향 차이이긴 하지만
// 표현형함수 선호함.
// 그래서 strict하게 코드 맨 앞단에 필요한 함수들 다 정의한 후, 갖다 쓰게 작성함

///////////////////////////////////////
// Basic Array Operations (Methods)
const friends = ["Michael", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Jay"); //배열 맨 끝단에 적재
console.log(friends);
console.log(newLength);

friends.unshift("John"); //배열 맨 앞단에 적재
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First// 맨 앞단요소 빼기_리턴값으로 제거한 요소 반환해줌.
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob")); //없는 거 찾으면 -1

friends.push(23);
console.log(friends.includes("Steven")); // 반환값 true
console.log(friends.includes("Bob")); // 반환값 false
console.log(friends.includes(23)); // 스트릭트 모드에서 false
console.log(friends.includes("23")); // 스트릭트 모드에서 true
if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}

///////////////////////////////////////
// Object Methods

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYeah: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYeah;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      jonas.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas);
