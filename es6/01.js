// ES6 문법 정리 1

// 01. 상수와 변수
// 상수 const 변하지않는 수 한번 할당하면 다시 할당을 못한다
// 변수 let   할당해도 다른값으로 할당 가능

 if (1 === 1) {
     var a = 3;
     console.log('a', a);
 }
// // 이래서 var 쓰지말라고 하는거임
 console.log('바깥 a', a)

// 왜 이렇게 나올까 var 블록레벨스코프가 아니기때문이다 
// 다른 지역 스코프에서 선언해도 전역에서도 사용이 가능해지기 때문이다 
// 이러한 점을 개선하기 위해 Es6 문법 블록레벨스코프인 let , const 가 나왔다 

// JS 말하는 Object 
// key - value pair 항상 같이 있다는걸 기억해야 된ㄴ다 

// const name = '지훈'
// const age = 21;

// const testobj = {
//     // 위에 선언한것과 같다면 키값을 생략이 가능해진다
//     name,
//     age,
//     company: 'Team',
//     // 이런식으로 value 부분에는 어떤한것도 올수 있다는걸 알고있으면 된다
//     dosomethimg: {} = {}
// }
// console.log(testobj)



// 얕은 복사 
const obj1 = {
    value1: 10,
}

const obj2 = obj1;
// 새로운 메모리 객체를 만든다 아예 다른 주소값을 생성한다 
const obj3 = JSON.parse(JSON.stringify(obj1));
// 이렇게 하면 obj2 즉 얇은 복사가 일어나도 obj3는 상관이 없다 Obj1 값만 가져온다

obj1.value1 += 1;

// 만약에 우리가 복사한 obj2를 바꾼다면 어떻게될까 ?
// obj2를 바꾸면 obj1 즉 원본데이터도 같이 바뀐다 
// 이러한 현상을 얕은 복사라 한다  이러한 현상이 일어나는 일을 방지해야 한다
console.log('obj1', obj1)
console.log('obj1', obj2)
console.log('obj3', obj3)

