// ES6 문법 정리 2


// 03 `` 백틱에 다하여 
let name2 = 'tom'
console.log(`나의 이름은 ${name2} 입니다`)
// 이렇게 제어가 가능해진다 

const testValue = ` a
b
c
d
`
// 멀티 라인이 지원이 된다

// 04 배열 /객체 구조분해 할당 (비구조화 할당 )
// Destructuring 구조를 분해해 버린다 


// 객체 은 키값이 맞아야 된다 
const person = {
    name4: '르탄',
    age: '21',
};

const { name4, age, notFound } = person;

console.log("name", name4);
console.log('age', age)
console.log('notFound', notFound)
// name 르탄 age 21 notFound undefined


//  배열 위치가 맞아야한다 

const testArr = [1, 2, 3, 4, 5]

//  여기 변수에 6개부터는 undefiend 가 뜬다 왜 testArr에는 5개 만 있기때문에 
const [one, two, three, four, five, six] = testArr;

console.log('one', one) // one 1
console.log('two', two) // two 2
console.log('three', three) // three 3 
console.log('four', four) // four 4 
console.log('five', five) // five 5 
console.log('six', six) // six undefined


//  05 전개 연산자 스프레드 문법  ...의미 

let [name, ...rest] = ['지훈', 22, '청주'];
console.log('name', name)    //처음값을 가져와라 
console.log('rest', rest) // 나머지 전체를 가지고 와라 





let names = ["steve", "john"];
// 스프레드 문법을 이용해 가지고 있던 배열을 벗는다
let students = ['Tom', ...names, ...names]
console.log('students', students)
// students [ 'Tom', 'steve', 'john', 'steve', 'john' ]


//  06 화살표함수 () => { }
// x, y라는 매개변수를 받는다 
function mysum1(x, y) {
    return x + y;
}


// 이코드 화살표함수로 바꿔보기 
// 변수를 받기 위해 이렇게 매기변수를 받고 중가로문이 한줄일때는 
// return 하고 중가로를 뺴도 된다 (x, y) =>  x + y ;
// 중가로가 있을때에는 return을 꼭해주자 잊지말고 


// 에로우 펑션 예 1 
const mysum2 = (x, y) => { return x + y };
// 에로우 펑션 예 2
const mysum3 = (x, y) => x + y;
console.log(mysum1(1, 2)) //3
console.log(mysum2(1, 2)) //3
console.log(mysum3(1, 2)) //3