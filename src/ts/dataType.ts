 
// 基础类型
let boolean: Boolean | string;
boolean = true;
console.log(boolean);

let arr: (number|string)[] = [1, 2, 3, '1'];
let brr : Array<number|string> = [1, 2, '3'];
console.log(arr);
console.log(brr);

//元组类型:限定了数组中元素的数量和类型
let x : [string, number] = ['2', 3];
// x[2] = 'world';
// console.log(x[2]);

//枚举：可以为一组数值赋予友好的名字
enum Color{red = 1, blue, yellow};
let c: Color = Color.blue;
console.log(Color[2]);  //由枚举值得到他的名字

//any类型
let crr: any[] = [1, 2, 3, true];
console.log(crr);

//void表示没有任何类型,与any含义相反
let v: void = undefined;
console.log(v);

let u: undefined = undefined;
let n: null = null;

// never类型表示的是那些永不存在的值的类型。
// 例如，never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；变量也可能是never类型，当它们被永不为真的类型保护所约束时。
function fail() {
    return new Error("Something failed");
}
console.log(fail());

// object类型
let obj: object = {name: "xiaoge", age: 20};
// obj.age = 20;
console.log(obj);

//类型断言
let some: any = 'this is a book';
let num: number = (some as string).length;
console.log(num);

