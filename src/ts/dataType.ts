
//数字类型
let num: number = 1;
console.log(num);
//字符串类型
let str: string = "xiaoge";
console.log(str);
//布尔类型
let boolen: boolean = true;
console.log(boolen);
//数组
let arr: Array<number | string> = ["ha", 3, 5];
let brr: (number | string)[] = [3, '8'];
console.log(arr);
//元组类型：限定数组类型和长度
let crr: [number, string] = [1, '2'];
console.log(crr);
//多类型声明
let str1: string|number|undefined;
str1 = "xiao";
str1 = 3;
str1 = undefined;
console.log(str1);
let sym: symbol = Symbol(89);
console.log(sym);
let unde: undefined = undefined;
console.log(unde);
let null1: null = null;
console.log(null1);

//函数类型
let fun: (x: number, y: number)=>{};
fun = (x, y)=>{return x>y};
console.log(fun(1, 2));
//对象类型
// let obj: object;
// obj = {
//     x: 1,
//     y: 2
// };
// obj.x = 3;
let obj: {x: number, y: number};
obj = {
    x: 1,
    y: 2
};
obj.x = 3;
console.log(obj);

let func1 = (a: number, b: number)=>{
    if(a > b){
        console.log(0);
    }else{
        console.log(0);
    }
}; 
console.log(func1(3, 1));
//声明方式: let 变量名: 数据类型;

// enum Response {
//     No = 0,
//     Yes = 1,
// }

// function respond(recipient: string, message: Response): void {
//     console.log(message);
// }

// respond("Princess Caroline", Response.Yes)

//枚举类型
// enum member {
//     master = 1,
//     user, 
// } 
// function func(role: string, members: member){
//     if(role == members.master){

//     }
// }  
// let data: string = member[1]
// console.log(data);

