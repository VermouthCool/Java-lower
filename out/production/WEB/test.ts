//ts的数据类型
/* 
boolean number string array tuple enum any null和undefined void never
null 和 undefined是never的子类型
*/
//boolean 只能是布尔值
var a:boolean = true;
var b:number = 10;
var c:string = "jian";
var d:number[][] = [[]];//数组
var e:Array<Array<number>> = [[1]];
let f:[string,number,boolean] = ["1",2,true];//元组  定长的数组
enum g {
    success = 1,
    false = 0
};
enum i {
    red,
    blue=5,
    orange
}//当没有赋值时  就是当前对象的索引值 
let h:g = g.success;
// console.log(h);//1
let j:i = i.red;
let j1:i = i.orange;
// console.log(j,j1);//0 6
const oBox:HTMLElement | any = document.getElementById("jian");
oBox.style.color = "red";
let aa:undefined | number =undefined ;
let ab:null=null;
let ac:never;
/* 
对于undefined和null类型 只能赋值 各自的类型
never类型的变量不能赋予任何的值
*/
function Jian(a:number):void{

}
// let ad:never;
// ad = (()=>{
//     throw "koam"
// })()
function ad(a?:number,b:string = "jian",...c:number[]):void{
    if(b){
        console.log("b"+b);
        
    }else{
        console.log("a"+a);
        
    }
}

ad(10,"jian")
//可选参数不能赋予默认值

let ae:boolean|1 = 1;
/**
 * never undefined null 不能修饰方法的返回值类型
*/
function af():void;
function af(age:number):number;
function af(a?:any):any{
    if(a){
        console.log("没有传入参数");
        return "jian";
    }else if(typeof a === 'number'){
        console.log("传入的时数字");
        
    }
}
let ag =  af();
