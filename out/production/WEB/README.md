# Java
## jdk 包含 jre  jre包含 jvm
### jdk = jre + Java的编译工具（java  javac  javadoc）
### jre = jvm + Java的核心类库
### System.exit(int  status)这个方法是用来结束当前正在运行中的java虚拟机。System.exit(0)是正常退出程序，而System.exit(1)或者说非0表示非正常退出程序。
### System.out.println(new char[2]);会遍历输出char
### 包名+类名。类A的全名：org.will.app.main.NewsManager
### 不写override 不会报错

```java
// package jian;
/**
@author 建哥
@version 1.0.0
这是我的第一个Java程序
*/
// 一个文件最多只能有一个 public 类  并且 类名 应该和文件名同名
/*
println 会先输出后换行
print 只输出 不换行 也不空格

每个执行语句都以分号结束

编译以后会生成一个 或 多个字节码文件  字节码文件的文件名 与java源文件中的类名相同

保留字  goto  const
*/
```
#### 去除了c语言的指针  自动的垃圾回收机制  跨平台  win Linux mac都行
## 基础语法
### 标识符  指的是能自己起名字的地方  数字字母下划线  数字不能开头  不能用关键字  区分大小写
### 数据类型
#### 基本数据类型
int 4字节  short 2字节 long 8字节  单精度 float 4个字节 精确7位有效数字  double 8个字节 byte 1字节 char 2字节 boolean
在声明 long型的数据时  要在变量的结尾以l或者L结尾
在声明float时 末尾要以f或F结尾
```java
class Jian {
    public static void main(String[] a){
        //先定义才能后使用  变量都定义在作用域内  在作用域内有效  被初始化了才能使用
        byte b1 = 2;
        short i1 = 12;
        //容量小的与容量大的进行运算时 结果 自动转换为容量大的
        /**
         * 当byte、char、short、互相运算或者是自己和自己运算 时  会转换为int类型
         * 
        */
        float s1 = i1+b1;
        char d = 'a';//char d =''会报错 char计算时会变成ASCII
        int k = d+i1;
        System.out.println(k);
        System.out.println(s1);
    }
}
```
#### 引用数据类型
```java
/**
 * @author 建哥
 * @version 1.0.0
 * 
*/
class Jian{
    public static void main(String[] a){
        /*
        强制类型转换  ：自动类型提升的 逆运算
        float c = 10;
        int b = (short)c;
        System.out.println(b);
        整型常量默认为int  float 默认为double
        */
        float c = 100.1448313731734f;
        int b = (short)c;
        System.out.println(b);
    }
}
class Jian{
    public static void main(String[] a){
        //string和其他类型相加 还是string  基本类型也不能强制类型转化为string
        String b= "";
        char c = '张';
        int d = 10;
        double g = 10;
        String f = b+c;
        System.out.println(d-g);
        System.out.println(g);
    }
}
import java.lang.ProcessBuilder.Redirect.Type;

class Jian{
    public static void main(String[] a){
        /*
        0开头 8进制
        0x开头16进制
        0b开头2进制
        最高位时符号位 0为正  计算机的底层 都已补码来存储数据
        取模运算的符号和 被除数的符号相同  也就是前面的
        除法的符号和平常一样
        a++的方式不会改变自生的数据类型
        在7种类型之间可以实现低到高的转变
        */
        int b = -12;
        int c = -5;
        byte d = 127;
        int f = 10;
        f += f++ + ++f;
        d++;
        d++;
        short jian=1;
        int g = jian;
        System.out.println(b / c);
        System.out.println(d);
        System.out.println(f);
        System.out.println(g);
    }
}
class Jian {
    public static void main(String[] a){
        /**
         * 逻辑运算符 & && | || ! ^ 只适用于布尔类型
         * & && | || ! 都很普通 ^ 表示相异
         * & 和 && 第一个不会短路  第二个会
         * | 和 ||一样
        */
        boolean li = true;
        boolean zi = false;
        if(li|zi){
            System.out.println("true");
        }
        System.out.println(zi^li);
    }
}
class Jian{
    public static void main(String[] a){
        /**
         * 位运算 操作的都是整数  是基于二进制来进行的
         * 每左移一位等同于扩大二倍
         * 每右移一位除以2
         * >>>无符号右移 不管最高位是0  还是  1都拿0来补
         * &  转换为二进制  每位相同都为true为1
         * |  转为二进制  每位只要有一位为1则为1
         * ^  转为二进制   只要每位 互相不同  则为1
         * ~  表示取反  包括符号位都要进行取反
        */
        int c = 20;
        long b = 10l;
        // c = (int)(c ^ b)^c;//10
        c = (int)(b^ c);
        b = c ^ b;
        c = (int)(c ^ b);
        System.out.println(b);//20
        System.out.println(c);//10
        System.out.println("10左移两位:"+(10l<<2));//输出40  注意要加小括号  二者同级从左到右  右边补0
        System.out.println("10右移两位:"+(b>>2));//输出2  注意要加小括号  二者同级从左到右  拿最高位补
        //对于负数 右移 除以二  向下取整
    }
}
class Jian{
    public static void main(String[] a){
        System.out.println(10>5?"jian":10);
    }
}
class Jian{
    public static void main(String[] arg){
        /**
         * 运算符的优先级
        */
        float a = 65.9f;
        int b = 20;
        if(a>b){
            System.out.println((char)a);//输出A
        }else{
            System.out.println('y');
        }
    }
}
import java.util.Scanner;
class Jian{
    public static void main(String[] a){
        /**
         * 如何从控制台获取变量  使用Scanner类
         * 具体实现步骤：导包
         * import java.util.Scanner;
         * Scanner实例化
         * 对于char类型 scanner没有提供方法 只能获取字符串
        */
        Scanner scanner = new Scanner(System.in);
        System.out.println("请输入您的名字");
        String name = scanner.next();
        System.out.println("请输入您的年龄");
        int age = scanner.nextInt();
        System.out.println("请输入您的体重");
        double weight = scanner.nextDouble();
        System.out.println("请输入您是否很帅(true/false)");
        boolean isShuai = scanner.nextBoolean();
        System.out.println(name+"\n"+age+"\n"+weight+"\n"+isShuai);
        scanner.close();
    }
}

class Jian{
    public static void main(String[] args){
        int a = 0;
        int b = 10;
        if(a>b)
            if(b>5)
                System.out.println("jian");
        else
            System.out.println("ge");//不会输出ge 不写括号 else就近原则
    }
}

class Jian{
    public static void main(String[] args) {
        /**
         * Math.random()获取的数是[0.0,1)
         * 返回的是double的类型
         * switch   匹配到第一个符合条件的 如果没写  break
         *   一直执行 直到遇到break 或者是default 或者程序结束
         * switch 中的表达式只能是六种数据  byte\short\char\int\enum\String
         * switch 的开发效率更高于 if-else
        */
        char a =(char) Math.random();
        switch (a){
            case 0:
            case 5:
            System.out.println(a);
            break;
            case 1:
            System.out.println("gege");
            break;
            default:
            System.out.println('j');
            break;
        }
    }
}

import java.util.Scanner;
class Jian{
    public static void main(String[] args) {
        int num = 0;
        // for(System.out.println("num初始化");num<=5;System.out.println("num++"),num++){
        //     System.out.println(num);
        // }
        // for(int i=0;i<10;i++){
        //     //i是只在for循环里有效  出了就没效了
        //     if(i%2==0){
        //         System.out.println(i);
        //     }
        // }
        System.out.println();
        // int c;
        // for(int i=0;i<5;i++){
        //     c = i;
        // } 错误 可能未被初始化
        // if(4%2==0){
        //     c = 1;
        // }else{
        //     c = 2;
        // }
        // System.out.println(c);   正确
        // for(int i = 0;i<10;i++){
        //     System.out.println(i);
        //     if(i==5){
        //         break;
        //     }
        // }
        int i;
        Scanner scanner = new Scanner(System.in);
        do{
            int b =0;
            i=scanner.nextInt();
            System.out.println(i);
        }while(i!=0);
        scanner.close();
    }
}

class Jian{
    public static void main(String[] args) {
        long current = System.currentTimeMillis();//返回当前的时间戳  毫秒
        System.out.println(current);
        // for(int jian=0;jian<10;jian++){
        //     if(jian==5){
                // break;
                // System.out.println('j');  break continue 这俩后面不能有还能执行的代码
        //     }
        // }
        jian : for(int i=0;i<10;i++){
            for(int j=0;j<=i;j++){
                if(j==5){
                    // break jian;
                    continue jian;
                }
                System.out.println(j);
            }
            System.out.println();
        }
    }
}
```
类 接口 数组
### 数组
```java
import java.lang.reflect.Array;

class Jian{
    public static void main(String[] args) {
        /*
        1. java里的数组只能是相同类型的数据按照一定的顺序排列的集合  引用数据类型
            1.1创建的的数组对象会在内存里开辟一整块连续的内存空间  数组名中引用的是这块连续的内存空间的首地址
            1.2数组的长度确定 没法再修改
        2.数组名
        3.数组元素
        4.数组的特点 ： 是有序排列的 索引从0开始  数组的长度
        5.数组可以分为 一维数组 二维数组  基本数据类型的数组  引用数据类型的数组
        6.数组元素的默认的初始化值
        */
        /*
        注意 初始化数组的时候 必须要指定数组的长度  数组一旦初始化完成数组的长度就确定了 [I@123772c4

        静态初始化 数组的初始化和数组元素的初始化同时进行 不能再在new int的括号里写明长度了
        int[] a = new int[]{1,2,3,4};
            动态初始化 分开进行为动态初始化 数组元素的类型是整型即short int byte long时
            初始化的数组每一位在没赋值的时候默认就是0
            引用数据类型 的时候 为null
            float、double为0.0
            char为 为ASCII码为0的字符
            boolean 为false 对应 0
        String[] b = new String[5];
        */
        /*
        Enum[] a = new Enum[5];
        // a[0] = 1;
        // a[1] = 2;
        // a[2] = 3;
        System.out.println(a);//[I@123772c4
        for(int i=0;i<a.length;i++){
            System.out.println(a[i]);
        }
        System.out.println(a.length);//5

        int[][] arr1 = new int[][]{{1,2,3},{4,5,6}};
        int arr2[][] = new int[2][];
        System.out.println(arr2[1]);//输出null  引用数据类型默认为 null

        */

        /**
         * 数组的内存解析
         * 栈
         *  存着局部变量 对象的地址
         * 堆
         *  对象的实例
         * 方法区
         *  常量池
         *  静态域
        */
    }
}

class Jian{
    /**
     * 杨辉三角
    */
    public static void main(String[] args) {
        int a[][] = new int[10][];
        for(int i=0;i<a.length;i++){
            a[i] = new int[i+1];
            for(int j=0;j<a[i].length;j++){
                if(j==0||j==a[i].length-1){
                    a[i][j] = 1;
                    continue;
                }else{
                    a[i][j] = a[i-1][j] + a[i-1][j-1];
                }
            }
        }
        for(int i=0;i<a.length;i++){
            for(int j=0;j<a[i].length;j++){
                System.out.print(a[i][j]+"\t");
            }
            System.out.println();
        }
    }
}

class Jian{
    public static void main(String[] args) {
        int a[] = new int[6];
        boolean flag = true;
        int num;
        for(int i=0;i<a.length;i++){
            num = (int)(Math.random()*30+1);
            for(int j=0;j<i;j++){
                if(a[j]==num){
                    flag = false;
                    i--;
                    System.out.println("重复了"+num);
                    break;
                }
            }
            if(flag){
                a[i] = num;
            }else{
                flag =true;
            }
        }
        for(int i=0;i<a.length;i++){
            System.out.println(a[i]);
        }
    }
}

int[] a =new int[5];
        float[] b = new float[5];
        a = b;//会报错

class Jian{
    public static void main(String[] args) {
        /**
         * 冒泡排序：
         * 
        */
        int[] a = new int[]{1,5,6,48,9,3,8};
        for(int i=0;i<a.length-1;i++){
            for(int j=0;j<a.length-1-i;j++){
                if(a[j]>a[j+1]){
                    int c = a[j+1];
                    a[j+1] = a[j];
                    a[j] = c;
                }
            }
        }
        for(int i=0;i<a.length;i++){
            System.out.print(a[i]+"\t");
        }
    }
}

import java.util.Arrays;
class Jian{
    public static void main(String[] args) {
        /**
         * import java.util.Arrays; 
         * Java的工具类  提供操作数组的方法
         * Arrays.equals(a, b) 比较数组的每一位是否相等
         * Arrays.toString(a)  输出数组信息
         * Arrays.fill(a, 10) 不管原来的数组是多少都覆盖为指定的数 第一个参数是谁 第二个是值
         * Arrays.sort(a);  排序数组 从小到大 底层用的快速排序
         * Arrays.binarySearch(a, 9);//返回找到的的index  如果大于等于0  表示找到  二年查找 注意使用前要先排好序 
         * 而且必须是从小大大
        */
        int a[] = new int[5];
        int b[] = new int[5];
        a[1] = b[1] = 9;
        System.out.println(Arrays.equals(a, b));//true
        System.out.println(Arrays.toString(a));//true
        Arrays.fill(a, 10);
        System.out.println(Arrays.toString(a));//true
        Arrays.sort(a);
        int index = Arrays.binarySearch(a, 9);//返回找到的的index  如果大于等于0  表示找到  二年查找
        System.out.println(Arrays.toString(a));
        System.out.println('a'<'c');//true


        int a[] = new int[5];
        int[] b = Arrays.copyOf(a, 6); //可以复制多维数组
        System.out.println(Arrays.toString(b));
    }
}


class Jian{
    public static void main(String[] args) {
        /**
         * 1.Java类以及类的成员:属性 构造器  代码块 方法 内部类
         * 2.面向对象的三大特征：封装 继承  多态
         * 3.其他关键字：this  super  ……
         * 
         * 类属性的默认值为 引用值为 null 其它为其他类型
        */
        
        Lai a = new Lai("jiangezuishuai");
    }
    
}

class Lai{
    String name="jian";
    int age;
    public Lai(String a){name=a;}
}

import java.util.Arrays;

class Jian{
    public static void main(String[] args) {
        /**
         * 属性具有默认值  和数组的默认值一样
         * 方法：描述 类应该具有的功能
         *  方法的声明  void 的return 可以不写  或者只能写 return  表示方法的结束
        */
        // int[][] a = new int[20][20];
        // a[1] = new int[30];
        // System.out.println(a[1].length);
        // System.out.println(a[0].length);
        
        Lai[] a = new Lai[20];
        Jian o = new Jian();
        o.did();
        //a[0].eat();//报错
    }
    private void did(){
        System.out.println("jian");
    }
}
class Lai{
    public String name;
    /**
     * 记得输入整数
    */
    public int age;
    private void eat(){
        System.out.println(this.age);//不会报错  有默认值
    }
}

/**
 * @version 1.0.0
 * 
*/
class Jian{
    public static void main(String[] args){
        // String[][] a = new String[2][];
        // System.out.println(a[0]);//null
        // String[][] a = new String[2][2];
        // System.out.println(a[0][0]);//null
        // String a = new String("jiange");
        // System.out.println(a);//jiange
        // String a = new String();
        // System.out.println(a); //输出Unicode编码为0的
        // System.out.println((char)0);// 和上面的输出一样 空格
        // new Lai().eat();
        /**
         *1. 理解万事万物皆对象
         *  在Java语言范畴内，将功能、结构等封装到类型中 通过实例化调用
         *  
        */
    }
}
class Lai{
    void eat(){
        System.out.println("吃饭");
    }
}


/**
 * ------------------------------------------------开学啦！！！---------------------------------------------
*/
/**
 * @params JIan
*/
class Jian{
    /**
     * 方法的重载
     *  - 在同一个类里允许出现一个以上的同名方法  只要他的参数个数或者是参数类型不同就行 返回值不同不行
     *  - 重载的判断和方法的权限修饰符、返回值类型、形参变量名、方法体都没有关系
     *  - 通过对象调用方法时、如何确定指定的方法
     *  ① 方法名---->参数列表
    */
    public static void main(String[] arg){
        new Lai().eat(10,10.0f);
    }
}
class Lai{
    public void eat(){
        System.out.println("jian");
    }
    public void eat(int a,float b){
        System.out.println("重载"+a+b);
    }
    public void eat(float b,int a){
        System.out.println(a+"+"+b);
    }
}



import java.util.Arrays;

/**
 * 可变个数的形参，允许直接定义能和多个实参相匹配的形参，从而使
 * 可以用一种更简单的方式来传递个数和可变的形参
 * 格式：
 *      数据类型...变量名
 *      支持0~n 但是
 *      string[] a的不支持不传
 * public void mol(int a, String...arg){是新特性  不能和 public void mol(int a, String[] arg){构成重载  本质是一样的
 * 新特新里面传参可以选择new  也可以直接写字符串 
 * 可变形参只能写在末尾,
 * int...c 这样的形式写 只能写一个可变性惨 String[] a的话可以写多个  有确定个数的参数优选选那些
*/
class Jian{
    public static void main(String ... args){
        Jian a = new Jian();
        a.mol(10, new String[]{"jian","ge"},new double[]{1,2});
        // a.mol(10, "jian","ge");
    }
    public void mol(int a, String[] arg,double[] d,int...c){
        // public void mol(int a, String...arg){
        System.out.println(Arrays.toString(arg));
        System.out.println(a);
        System.out.println(Arrays.toString(c));
    }
    public void mol(int a,String b){
        System.out.println(a);
        System.out.println(b);//可以和上面的方法共存  重载
    }
}


class Jian{
    /**
     * -----------------封装和隐藏---------------
     *   高内聚低耦合
     *  高内聚：类的内部数据操作细节自己完成，不允许外部干涉
     *  低耦合：仅暴露方法供外面使用
     * -----------------java规定的权限修饰符--------------
     *      private
     *          类内部使用
     *      缺省
     *          类内可以用、同一个保也可以用
     *      protected
     *          类内部可以使用、同一个保可以用、不同包的子类可以使用  只能是字类  不同包的不继承的话不行
     *      public
     *          类内部可以使用、同一个保可以用、不同包的子类可以使用、同一个工程
     *  四种修饰符可以修饰：属性、方法、构造器、内部类
     *  修饰类的权限只能使用  缺省、public
    */
    public static void main(String...a){
        System.out.println(new test().age);
        System.out.println(new test().getName());
    }
}


-----------------------------------------------------------------------------------
package com.jian.demo;

public class Jian {
    String name;
    int age;
    public Jian(int a,String b){
        this.age = a;
        this.name = b;
    }
    public Jian(String a){
        name = a;
    }
}

package com.jian.demo;
/**
 * constructor:构造器
 *         作用：创建对象
 *          如果咋们没有显示的定义一个类的构造器的话，则系统会提供一个默认空参的构造器 此时构造器的权限就是类的权限
 *          定义构造器的格式：权限修饰符 类名 （形参）
 *          构造器可以重载 
 *          一旦显示的定义了类的构造器 系统就不再继续提供空参的构造器了 所以一个类里肯定会有一个构造器
*/

public class Test {
    public static void main(String...args){
        //创建类的对象
        Jian a = new Jian(10,"Jian");
        System.out.println(a.age);
    }
}
/**
 * JavaBean是一种Java语言写的可重用组件，
 *      是指类是公共的  有一个无参的构造函数  有属性、且有对应的get set方法
*/

----------------------------------------------------------------------------
package com.jian.demo;

public class Jian{
    private String name;
    private int age;
    public Jian(){
        //这里有几十条共同要处理的东西
    }
    public Jian(String name){
        //调用构造函数  括号里面的参数匹配你想要使用的构造函数  只能调用其他的构造器  不能自己调自己  不能互相调 
        //必须声明在首行
        this();
        this.name = name;
    }

    public void setName(String name){
        this.name = name;
        //这里必须要加this  不加不会报错 但是会和预期不一样 js必须写，不写就会报错
    }
    public void setAge(int a){
        this.age = a;
    }
    public String getName(){
        return name;
    }
    public int getAge(){
        return this.age;
    }
}
package com.jian.demo;

/**
 * this的使用
 *      
*/
public class Test{
    public static void main(String[] args) {
        Jian a = new Jian();
        a.setName("jian");
        System.out.println(a.getName());
    }
}

/**
 *      package
 *         >包  为了实现更好的项目中的类的管理
 *         > 使用package来声明类或者接口所属的包，声明在源文件的首行
 *         > 每点一次 就表示一层目录
 *      补充：
 *          同一个包下不能命名同名的接口和类  不同的包可以
*/
/**
 * 
 *           MVC的设计模式
 *  模型   视图    控制器
*/
/**
 *              import的使用
 *      导入
 *          导入指定包下的指定的类、接口
 *          声明在包的声明和类的声明之间  多个就并列写出即可
 *          import java.util.*;  这样写表示 可以导入这个包下的所有结构  不包括这个包下的子包
 *          定义在Java.lang包下定义的  则可以省略这个结构
 * 
 *          重名的时候必须要用 全包名.类的方式调用  com.jian.demo.Jian a = new com.jian.demo.Jian();  不用再引入了
 *          import static:导入包的静态结构
 *          
*/



-------------------------------------------------------------------------------------------
package com.jian.demo;

public class Person {
    private int age;
    private String name;
    private String sex;
    public String oopp;
    public Person(){
        System.out.println("Person的构造器");
    }
    public Person(int age,String name){
        this.age = age;
        this.name = name;
    }
    public void eat(){
        System.out.println("吃饭");
    }
    public void sleep(){
        System.out.println("jian");
    }
}

package com.jian.demo;

public class Jian extends Person{
    public String oppo;
    public Jian(){
        super();
        System.out.println("Jian的构造函数");
    }
    public Jian(int age,String name){
        super(age, name);
        // this.name = name;
        System.out.println();
    }
    // @Override
    public void eat(int a){
        System.out.println("我在吃饭");
    }
    public void lai(){
        System.out.println("lai");
    }
    private void lai(int a){
        System.out.println("lailai"+a);
    }
}

package com.jian.test;

import java.util.Scanner;

import com.jian.demo.*;


/**
 * 继承：
 *  继承的话 父类所有的属性和方法都会继承 包括private 只不过在子类不能直接用
 *  java里只能有一个父类 单继承
 *  字类直接继承的叫直接父类 间接的叫间接父类
 *  字类继承父类后就具备了直接、间接父类的所有方法和属性
 * 所有的类 除了java.lang.Object都直接间接的继承自 Object
 * 当字类里面有一个方法 和 父类同名 参数列表相同时 返回值也必须相同  不然报错
 * 重写
 *      后字类的实例调用是自己的重写的方法  属性是不会覆盖的 可以有多个  默认是调用自己的  可以用super调用父类
 *      >子类里面重写的父类的方法  方法名 参数列表 都得一样
 *      >权限修饰符只能大于等于父类  但是字类不能重写private的方法  只能自己写一个方法
 *      >父类里面调用自己的方法 如果这个方法被子类重写过 则会用子类的
 *      >父类被重写的方法的返回值类型是void时 则字类重写的方法的返回值也只能时void
 *          >父类被重写的返回值类型是 T 时 则返回值类型可以是T 和 T的字类
 *          >如果重写的方法的返回值是基本数据类型时  返回值也只能是相同的基本数据类型
 *      >字类重写的方法抛出的异常的类型不大于父类被重写的方法抛出异常的类型
 *      >字类和父类中的同名和同参的方法要不都设置为static（不是重写） 要不都设置成 非static (考虑重写) 如果两个一个static 一个非
 *          此时要重载  参数列表改变
 *      重载：
 *          只有参数列表不一样才算重载 其他的都不算
 * super：
 *      可以用来调用父类的 属性、方法、构造器
 *      super.方法  super.属性  一般用在属性同名
 *      字类就算是构造函数里面不写super 只要是extends就会调用父类的构造函数
 *      super(age,name) 如果父类的属性是私有的  super还是可以 给它赋值
 *      super必须方法构造函数的首行 所以在类的构造器内只能 this()和super()二选一  默认是super()
 *      super不能调用私有的属性和方法
 * 子类对象的实例化的过程：
 *      1.结果上来看：当我们字类继承父类以后 就会继承所有的属性和方法  创建的子类的对象在堆空间加载所有的属性和方法
 *      2.从过程上来看：
 *          当我们用字类的构造器创建对象时，一定会直接间接的调用父类  知道调用了Object中空参的构造器
 * 多态性：
 *      com.jian.demo.Person a = new com.jian.demo.Jian();
 *      此时的a为Person
 *      ----------------父类的引用指向子类的实例------------------------
 *      当调用此时的实例的重写的方法时 会调用子类的----虚拟方法调用
 *      但是此时的实例不能调用Person没有声明过的方法
 *      使用：
 *          虚拟方法调用；在编译期只能调用父类的方法和属性，但是在运行期会执行父类的方法
 *          编译看左边，运行看右边
 *      使用前提：
 *          有继承关系；要有重写才有意义
 *      对象的多态性 只能适用于方法  不适用于属性
 * 
 * 区分重载和重写：
 *      重写是 子父类
 *      重载可以是子父类也可以是自己 也可以是构造器
 *      重载不表现为多态性 编译时确定静态绑定  重写为多态性 运行时才知道  动态绑定
 *      
*/
public class Jian extends Person {

    public static void main(String[] args) {
        com.jian.demo.Person a = new com.jian.demo.Jian();
        a.eat();
        a.sleep();
        System.out.println(-10>>2);
        
    }
}




---------------------------------------------------------------------------------------
package com.jian.demo;

public class Person{
    public int agePublic;
    private int agePrivate;
    public int id = 1;
    public Person(){

    }
    public Person(int a){
        this.agePrivate = this.agePublic = a;
    }
    public void eat(int[] a,int...b){
        System.out.println("人得吃饭"+a[1]+b[1]);
    }
}

package com.jian.demo;

public class Jian extends Person{
    public int id = 2;
    public Jian(){
        super();
    }
    public Jian(int a){
        super(a);
    }
    @Override
    public void eat(int a[],int[]c){
        System.out.println("重写父类的eat方法"+c[2]);
    }
    public void lai() {
        System.out.println("jian的特有方法");
    }
}

package com.jian.test;
import java.util.Date;

import com.jian.demo.*;

/**
 * 用了多态性以后 Person a = new com.jian.demo.Jian(); 内存上实际是加载了子类的特有的方法和属性
 *  但是由于声明变量为父类类型 所以只能使用父类的一些方法和属性
 *      如何才能调用子类特别所有的方法
 *      使用强制类型转换  向下转型
        com.jian.demo.Jian b = (com.jian.demo.Jian)a;
        此时a必须是com.jian.demo.Jian()new出来的
*   instanceof关键字：
*       - a instanceof A 判断对象a是否是A的实例如果是返回true 
        - 左边为实例 右边为类名
        - 为了避免在向下转型出现转型失败时  先用这个判断一下
        - 如果 instanceof 自己和父类都是true
        - instanceof的右边必须是 左边的子类 或者是父类才行  否则编译出错  也就是 必须有关系才行
        编译时通过、运行时不通过：
           - Person a = new Woman();
            Man b = (Man) a;
           - Person a = new Person();
             Man b = (Man) a;
        编译时通过、运行时也通过：
           - Object a = new Woman();
             Person b = (Person) a;
*/
public class Jian{
    public static void main(String...args){
        Person a = new com.jian.demo.Jian();
        com.jian.demo.Jian b = (com.jian.demo.Jian)a;
        System.out.println(a.id);//1
        System.out.println(b.id);//2
        // System.out.println(a instanceof com.jian.demo.Jian);true
        System.out.println(a instanceof Person);//true
        a.eat(new int[]{1,23,3},1,2,3 );
    }
}



-------------------------------------------------------------------------------------------

package com.jian.demo;

public class Person{
    private int age;
    private String name;
    public int id = 1;
    public Person(){

    }
    public Person(int age,String name){
        this.name = name;
        this.age = age;
    }
    public void setAge(int age){
        this.age = age;
    }
    public int getAge(){
        return age;
    }
    public void setName(String name){
        this.name = name;
    }
    public String getName(){
        return name;
    }
    @Override
    public boolean equals(Object obj) {
        if(this == obj){
            return true;
        }
        if(obj instanceof Person){
            Person a = (Person) obj;
            return a.name.equals(this.name)&&a.age == this.age;
        }
        return false;
    }
    void eat(){
        System.out.println("Person的吃方法");
    }
}

package com.jian.demo;

public class Jian extends Person{
    public int id = 2;
    public Jian(){

    }
    public Jian(int age,String name){
        super(age,name);
    }
    @Override
    protected void eat() {
        System.out.println("Jian重载的eat方法");
    }
}

/**
 * 
 *      Object类是所有的Java的类的根父类
 *  如果在类里没有声明extends关键字指明其父类，则默认父类为java.lang.Object Object的父类为null
 *  public boolean equals(Object obj)
 *      == 和 equals 的区别
 *      ==
 *          - ==可以使用在基本数据变量 和 引用数据变量
 *          - 比较基本数据类型时  比较内容  比较引用数据类型时 比较地址
 *          - 必须保证两边的类型一致
 *      equals
 *          - 只能被引用数据类型使用
 *          - 对于普通对象来说 就是比较地址  对于String Date File 包装类等都重写了Object的方法 就是比较实体内容
 *          - 两边必须是实例对象
*/
package com.jian.test;

import java.util.Date;

import com.jian.demo.*;

public class Jian {
    public static void main(String... args) {
        com.jian.demo.Jian a = new com.jian.demo.Jian(10,"jian");
        Person b = new com.jian.demo.Jian(10,"jian");
        Object c = 10;
        // Person b = a;
        // System.out.println(a.getClass().getSuperclass().getSuperclass().getSuperclass());
        // System.out.println(b.id);
        System.out.println(new String("jian")==new String("jian"));//false
        System.out.println("jian"=="jian");//true
        System.out.println("**************************************");
        System.out.println(a.equals(b));
    }
}

-----------------------------------------------------------------------------------

package com.jian.demo;

public class Person{
    private int age;
    private String name;
    public Person(){

    }
    public Person(int age,String name){
        this.name = name;
        this.age = age;
    }
    public int getAge(){
        return this.age;
    }
    public String getName(){
        return name;
    }
}

package com.jian.demo;

public class Jian extends Person{
    public Jian(){
        super();
    }
    public Jian(int age,String name){
        super(age, name);
    }
}

package com.jian.test;
import com.jian.demo.*;

/**
 * Object 的 toString()
 *      当我们输出一个对象的引用时 就是输出对象的toString()
 * Object 的 toString()的定义
 *      类名 + @  + 地址
 * String Date File 包装类 都重写了 toString()方法  输出实体内容
 * 
*/
public class Jian{
    public static void main(String[] args) {
        Person person = new com.jian.demo.Jian();
        System.out.println(person.toString());//com.jian.demo.Jian@73a28541
        System.out.println(person);//com.jian.demo.Jian@73a28541
    }
}

-----------------------------------------------------------------------------
package com.jian.test;
import com.jian.demo.*;
/**
 *  单元测试的使用
 *      Junit
 *  要求：
 *      此类是公共的
 *      要提供 公共的  无参的构造器
 * 此类中声明单元测试方法 此方法的权限是public 没有返回值为void 没有形参
 * 方法上面需要声明 @Test 并导入 org.junit.Test
 * 这时就可以在方法体内 执行
 * 
*/
public class Jian{
    int age = 10;
    // @Test
    public void test(){
        System.out.println(age);
        System.out.println("jian" == "jian");
    }
}

-------------------------------------------------------------------------------------------
/**
 * 包装类：
 *      使基本数据类型 具有对象的特征 给每一种基本数据类型 添加了包装类
 *      数值型使继承自number的
 * Java提供了八种基本数据类型的对应的包装类，使得基本数据类型的变量具有对象的特征
 * 掌握基本数据类型、包装类、string之间的相互转换
 * 
*/
package com.jian.test;

public class Jian{
    public static void main(String[] args) {
        //基本数据类型\string--->包装类

        //1.调用包装类的构造器
        int num1 = 10;
        // Integer num1Integer = new Integer(10);//构造器内 可以传变量 或者直接数字
        // System.out.println(num1Integer.toString());//输出10
        // Integer num1Integer = Integer.valueOf(10);
        // System.out.println(num1Integer.toString(1));//1
        // Integer numInteger = Integer.valueOf("s123");//编译不报错 运行报错 java.lang.NumberFormatException
        // Float aFloat = Float.valueOf(10);
        // System.out.println(aFloat);//10.0
        // Character aCharacter = Character.valueOf('a');
        // System.out.println(aCharacter);//a

        // Boolean aBoolean = Boolean.valueOf(true);
        // Boolean aBoolean2 = Boolean.valueOf("true123");//不报错 但是是 false
        // System.out.println(aBoolean2);

        //包装类---->基本数据类型  调用包装类的xxxValue方法
        // Integer aInteger = Integer.valueOf(10);
        // System.out.println(aInteger.intValue());//int 10
        // Float aFloat = Float.valueOf(10.0f);//10.0
        // System.out.println(aFloat.floatValue());
        // Character aCharacter = Character.valueOf('a');
        // System.out.println(aCharacter.charValue());//'a'


        //自动装箱和拆箱
        // Integer aInteger = 10;//自动装箱
        // // Integer aInteger2 = "10";//报错
        // int c = aInteger;//自动拆箱

        //基本数据类型、包装类 ——————>String
        // int a = 10;
        // String bString = a+"";
        // Float aFloat = Float.valueOf(10.0f);
        // System.out.println(String.valueOf(aFloat));//10.0
        // char a = 'a';
        // System.out.println(String.valueOf(a));//a

        //String---->基本数据类型、包装类   调用包装类的parseXXX
        // String string = "123";
        // int a = Integer.parseInt(string);//123
        // boolean a = Boolean.parseBoolean("TrUe");
        // System.out.println(a);//true
        // Boolean aBoolean = Boolean.valueOf("tRuE");
        // System.out.println(aBoolean);//true

        // Object object = true ? Integer.valueOf(1) : Double.valueOf(2.0);
        // System.out.println(object);//1.0

        //Integer内部定义了IntegerCache的结构数组  保存了 -128~127的数  当使用自动装箱时会从里面取 不会再去new 这样地址是一样的
        
    }
}

---------------------------------------------------------------------------------------------
package com.jian.demo;

public class Person{
    public String name;
    public int age;
    public static String nation;
    public static void eat(){
        System.out.println("吃饭"+Person.nation);
    }
    public void sleep(){
        Person.eat();
        System.out.println(this.nation);
    }
}


package com.jian.test;

import com.jian.demo.*;

/**
 *      static
 *          - 用来修饰  属性、方法、代码块、内部类
 *  -属性：
 *      - 实例变量(非静态属性) ： 当我们创建多个像同类的实例时 每个对象会独立的拥有一套类中的非静态属性
 *      - 静态属性  创建了某个类的多个实例时 会共享静态属性  当通过某一个对象修改此属性时  其他的对象也会成为新的 
 *        可以被实例对象 调用  也可以直接
 * - static修饰属性的其他说明：
 *      - 静态变量随着类的加载而加载 要早于实例对象的创建
 *      - 类只加载一次在内存里 因此静态变量只会存在唯一的一份存在静态域中
 *      - 静态属性举例：System.out Math.PI  方法区：类的加载信息、静态域、常量池
 * - 方法
 *      - 静态方法： 对着类的加载而加载 可以被对象调用 也可以类直接调用 只能调用静态方法和属性
 *      - 非静态的： 什么都可以调用
 *      - 当所有的对象都共享一个数据时 考虑把他设置成为static
 *      - 操作static属性的方法一般设置成为static方法  工具类的方法  没有必要造对象n
 *      - Person.Rate 对于私有属性和方法 不论是不是静态的 都会不能在类外调用
*/
public class Jian{
    public static void main(String[] args) {

        Person aPerson = new Person();
        aPerson.name = "李子建";
        aPerson.age = 18;

        Person aPerson2 = new Person();
        aPerson2.name = "共价键";
        aPerson2.age = 20;
        aPerson2.nation = "China";
        System.out.println(aPerson.nation);//China
        System.out.println(Person.nation);
        Person.eat();
    }
}

-----------------------------------------------------------------------------------

package com.jian.demo;

public class Person{
    private Person(){

    }
    private static Person instancePerson = new Person();
    public static Person getInstancPerson(){
        return instancePerson;
    }
}

package com.jian.test;

import com.jian.demo.*;

/**
 * 单例的设计模式
 *      - 只允许存在该类的一个实例对象 并且该类只提供一种取得对象实例的方法  所以构造器必须写为私有
*/
public class Jian{
    public static void main(String[] args) {
        Person aPerson = Person.getInstancPerson();
        Person aPerson2 = Person.getInstancPerson();
        System.out.println(aPerson == aPerson2);//true
    }
}

//懒汉式
package com.jian.demo;

public class Person{
    private Person(){

    }
    private static Person instancePerson = (Person)null;
    public static Person getInstancePerson(){
        if(instancePerson == null){
            instancePerson = new Person();
        }
        return instancePerson;
    }
}

/**
 * 区分饿汉式 和 懒汉式 
 *      饿汉式： 
 *          坏处 对象会一直存在于内存
 *          好处 线程安全
 *      懒汉式： 好处 延迟对象的加载
 *              坏处 线程不安全
*/

---------------------------------------------------------------
/**
 * 理解main方法
 *      main方法作为程序的入口 是一个普通的静态方法 形参可以作为与控制台交互的一种方法
*/

package com.jian.test;

// 错误: 在类 com.jian.test.Jian 中找不到 main 方法, 请将 main 方法定义为:
//    public static void main(String[] args)  java com.jian.test.Jian jian ge
public class Jian{
    public static void main(String...args){
        System.out.println("jian"+args[0]+args[1]);
    }
}

--------------------------------------------------------------------------
/**
 * 类的成员四： 代码块（初始化块）
 *      作用： 用来初始化类 、 初始化对象
 *      要是使用修饰符时 只能使用static
 *      分类：
 *          - 静态代码块
 *              随着类的加载而执行
 *              只会在第一次类的加载时调用  只会调用一次
 *              作用：为对象的类的信息
 *              可以定义多个 按顺序执行
 *              静态代码块的执行 要先与非静态的代码块 执行
 *              只能调用静态的属性和方法
 *          - 非静态代码块
 *              随着类的实例化而执行  只要有新的对象创建就会调用一次
 *              作用： 可以在创建对象的时候 对 对象的属性进行初始化
 *              可以定义多个 按顺序执行
 *              静态和非静态都可以调用
 * - 执行顺序
 *      创建对象时 ： 先加载对象 Objectd->Person->Person的静态代码块->Jian->Jian的静态代码块->Person的普通代码块->
 *                                   Person的构造函数
 *                  ----代码快的赋值属性 和 显示初始化在 同级 放后面的就是现在的值
 *              由父及子 静态先行
*/
package com.jian.test;

import com.jian.demo.*;

public class Jian{
    public static void main(String[] args) {
        Person aPerson = new Person();
        Person aPerson2 = new Person();
        System.out.println(aPerson.name);
    }
}

------------------------------------------------------------------------
package com.jian.demo;

public class Person{
    static{
        name = "jian";
    }
    public static final String name;
    public int age;
    public static String desc = "我是一个人";

    public Person() {
    }
    public Person(String name,int age){
        this.age = age;
    }
    public final void sleep(){
        final int a = 10;
        System.out.println("jian");
    }
    public final void sleep(int a){
        System.out.println("jiaj"+a);
    }

    //代码块
    static {
        System.out.println("static的代码块");
    }
    {
        System.out.println("非static的代码块");
    }

    public void eat(){
        System.out.println("吃饭");
    }
}

/**
 * final：最终的
 *      可以修饰：类 、 方法、变量
 *  final修饰类：
 *      表示这个类不能再有其他类继承这个类 如 String、System、StringBuffer、
 *  final修饰方法：
 *      表示不可以被重写了  可以被重载
 *  final修饰变量 此时的变量就成为了常量  不能变了
 *      属性变量：默认初始化时不能使用final final String name 这样时 在构造函数 或者时代码块内必须要赋予初始化值
 *               构造函数和代码块能 方法不能  是因为 只要调用了构造器 对象就创建了 此时对空间里的属性必须要赋予值
 *               对于static final的修饰的 只能在显示初始化 和 静态代码块
 *               方法没调用所以不行
 *      修饰局部变量：表示是一个常量
 *  static final 全局常量
*/
package com.jian.test;

import com.jian.demo.Person;

public class Jian{
    public static void main(String[] args) {
        
        Person aPerson = new Person();
        System.out.println(aPerson.name);
    }
}

---------------------------------------------------------
package com.jian.test;

import com.jian.demo.*;
/**
 * Jian
 *      抽象类：
 *          abstract:修饰 类 、 方法  |  不能修饰属性、构造器、私有方法、静态方法、final的方法、final的类
 *              - 修饰类时 类不可以实例化 构造器一定存在 因为子类对象还是可以调用父类的构造器的
 *                  此时都会提供抽象类的子类、让子类对象实例化
 *              - 修饰方法时 方法不能有方法体  此时要求继承该抽象类的非抽象类的子类必须重写该方法  并且要求该类必须是抽象类
 *                  才能使用抽象方法 包含抽象方法的类必须是抽象类 抽象类里是可以没有抽象方法的
 *          若子类重写了父类的所有的抽象方法 才可以实例化  若是没有重写完 表示此子类也是抽象类
 *          抽象类 可以重写抽象父类的 抽象方法 he 非抽象方法
 *          抽象类可以继承非抽象类
 *  抽象类的匿名子类
 *      Person aPerson2 = new Person(){

            @Override
            public void work() {
                System.out.println("匿名子类");
            }
            
        };
 * 
 * 
 */
public class Jian {
    // Person a = new Person();
    public static void main(String[] args) {
        Person aPerson = new com.jian.demo.Jian(10,"jian");
        //创建了Person的匿名子类对象
        Person aPerson2 = new Person(){

            @Override
            public void work() {
                System.out.println("匿名子类");
            }
            
        };
        aPerson.work();
        aPerson2.work();
    }
}

package com.jian.demo;

/**
 * Person：抽象类
 *  
 */
public abstract class Person {
    public String name;
    public int age;
    public static void main(String[] args) {
        System.out.println("person的main");
    }
    public Person() {

    }
    public Person(int age,String name){
        this.age = age;
        this.name = name;
    }
    public abstract void work();
    
}
/**
 * Jian
 *      模板方法的设计模式
 *          把功能内部的确定的方法实现、不确定的暴露出去  就是指抽象类 把抽象方法暴露出去
 */

---------------------------------------------------------------------------
package com.jian.demo;

/**
 * Person
 */
public interface Person {
    int A = 10;
    public static void sleep(){
        System.out.println("jian");
    }
    void eat();
    
    default void lai() {
        System.out.println("jian");
    }
}

package com.jian.demo;

/**
 * Jian
 */
public class Jian implements Person {

    @Override
    public void eat() {
        Person.sleep();
        System.out.println("实现接口的eat"+this.A);
    }
    
}

package com.jian.test;

import com.jian.demo.*;

/**
 * 接口：
 *      使用instance定义  接口是一种规则、契约、规范
 *      接口和类是并列的结构 接口内的权限是public 接口不能定义构造器 意味着接口不可以实例化  
 *      接口内不能有代码块
 *      所以Java中 接口都用来通过类来实现来使用  如果实现类覆盖了接口的所有的抽象方法 则此类就可以实例化
 *      Java可以实现多个接口、解决了单继承的问题 class jian extends Di implements Person,Lai
 *      实现接口的类 该类会有接口的 全局常量、静态方法、默认方法
 *      -----------------------------------------------
 *      接口和接口之间是继承、不过接口是可以多继承的 不能是实现
 *      jdk7：
 *          只能够定义全局常量和抽象方法 
 *              -全局常量 public static final、可以省略不写这个 默认是这个 static int a = 10;就算是写成这样
 *                       调用的时候也会默认是 
 *              -抽象方法 public abstract 的 、这个也可以省略 默认就是这个
 *               protected abstract void eat(); 写成这样会报错 private也会 不写权限时不会报错 但是此时他还是会默认
 *      jdk8:
 *          除了可以定义全局常量和抽象方法之外  还可以定义静态方法、默认方法
 *  抽象类与接口的异同
*/
public class Jian {
    public static void main(String[] args) {
        // Person aPerson = new com.jian.demo.Jian();//多态
        Person aPerson = new Person(){//匿名实现类

            @Override
            public void eat() {
                // TODO Auto-generated method stub

            }
            
        };
        aPerson.eat();
        System.out.println();
    }
    
}

--------------------------------------------------------------
/**
 * Jian
 *      代理模式
 *          首先定义一个接口、接口内有一个抽象方法、被代理类实现它、代理类也实现它、代理类在内部调用被代理类重写的方法
 */

---------------------------------------------------------------------------------

package com.jian.demo;

/**
 * Person
 *      接口里的静态方法必须权限只能是 public 、 private 而且 static必须写
 *      默认方法 和 静态方法 、 抽象方法是同级的 只能出现一个关键字、默认方法的权限只能时public 可以不写权限 default必须写
 *      接口的静态方法只能自己调用 Person.eat()
 *      <br/>
 *      <hr/>
 *      <li>
 *          对于默认方法还是可以对象的方法调用的
 *      </li>
 * <hr/>
 *      <li>
 *          子类继承的父类和实现的接口都有相同的函数（参数相同，方法名相同）默认调用的是父类的--->类优先原则
 *      </li>
 * <hr/>
 *      <li>子类实现的多个接口内有同参同名的默认方法 此时 必须要在实现类内重写 报错：接口冲突</li>
 *  
 */
public interface Person {
    public int A = 10;
    public abstract void brower();
    public static void eat(){
        System.out.println("jain");
    }
    default void eat(int a){
        System.out.println("jian");
    }
}

package com.jian.demo;

/**
 * Jian 被代理类
 *  
 */
public class Jian implements Person {
    public int A = 20;
    // @Override
    @Override
    public void brower() {
        Person.super.eat(10);//调用接口中的静态方法
        System.out.println("jian");
    }

    
}

package com.jian.test;

import com.jian.demo.*;

/**
 * Jian
 *      当实现多个接口时 多个接口有同名的抽象方法 此时实习类只需要实现
 *      
 */
public class Jian {

    public static void main(String[] args) {
        com.jian.demo.Jian aJian = new com.jian.demo.Jian();
        // System.out.println(aJian.A);
        aJian.eat(10);
    }
}
---------------------------------------------------------
package com.jian.demo;

/**
 * Person
 *      <li>java允许将一个类的声明定义在另一个类内，即 内部类</li>
 * <hr/>
 *      {@code 成员内部类(静态、非静态)}<li>
 *      <li>作为外部类的成员</li>
 *      <dt>作为一个类：
 *      <dd>类内可以定义构造器、属性、方法等</dd>
 *      <dd>可以被final、abstract修饰</dd>
 * </dt>
 * </li>
 * <hr/>
 *      {@code 局部内部类(构造器、方法、代码块)}<li>
 *      <li></li>
 * </li>
 */
public interface Person {

    public static class DD{
        String aString = "jian";
        public DD(){
            
        }
        public void sleep(){
            System.out.println("jian");
        }
    }
    public class FF{
        String aString = "jian";
        public FF(){

        }
        public void sleep(){
            Person.this.eat();
            System.out.println("jian");
        }
    }

    public Person(){
        class CC{

        }
    }

    public void method(){
        //局部内部类
        class AA{

        }
        class BB{

        }
    }
    public void eat(){
        System.out.println("eat");
    }
}

package com.jian.test;

import com.jian.demo.*;

/**
 * Jian 在类内定义的方法 里面的局部内部类 想要调用方法的局部变量 此时要求其设置为final 在jdk7.0以前需要显示写 jdk8后默认就是
 */
public class Jian {

    public static void main(String[] args) {
        Person.DD a = new Person.DD();//非静态的内部类的实现方式
        Person aPerson = new Person();
        Person.FF c = aPerson.new FF();
    }
}

----------------------------------------------


```
### 异常处理
```java
package com.jian.test;

/**
 * 异常处理 包括 Error 和 Exception 父类为Throwable
 *  Java.lang.xxxError:不处理
 *  Java.lang.xxxException：处理
 *  exception包括 受检异常（编译时的异常）如IO filenotfind classnotfind 
 *  非受检异常（运行时的异常） NullPointer ArrayIndexOutOfBounds
 *  异常处理的机制：
 *      过程一：抛：程序在正常执行的过程中、一旦出现异常 就会在异常代码出生成一个异常的对象 并抛出 一旦抛出、后面的代码就不会执行了
 *      构成二：抓：异常的处理方式：
*      1.try-catch-finally
*          try{}catch(异常类型 变量名){}catch(leixing1 ming){}finally{一定会执行的代码} finally是可选的
            catch里面可以精准的写上出错的类型 如果出错了 也没进你写的异常处理 还是会报错 
            一旦处理了一个、当没有写finally时、就会跳出当前的try catch、继续执行之后的代码
            要求将父类的错误写在子类错误的下边、否则报错
            在try 结构定义的变量 在外边不能使用
            finally里的代码是一定会执行的、即使catch里面有出现了异常，try中有return语句，catch有return语句
            如 数据库的连接 输入输出流 jvm不能自动回收 需要手动的释放 资源释放 finally一般写这些
        体会使用这种方法处理编译时异常 使得编译时的错误在运行时
*      2.throws+异常类型
            写在方法的声明处，指明会发生的出错类型、 一旦出现错误 会 生成一个错误对象、如果和throws写的类型相同 就会抛出
            异常代码后面的代码不会再被执行
        体会：throws 只是将异常抛给了调用者

 */
public class Jian {

    public static void main(String[] args) {
        //栈溢出 java.lang.StackOverflowError
        // 堆溢出 。。。.OutOfMemoryError
        // //
        // try {
        //     String aString = "jian";
        //     int a = Integer.parseInt(aString);
        //     System.out.println("jian");
        // } catch (NumberFormatException exception) {
        //     System.out.println(exception.getMessage());
        //     System.out.println("数值转换异常");
        //     // return;//此时由于存在finally 即使在这里写了return 也会先执行了finally再 退出
        //     // exception.printStackTrace();//显示出错的调用栈
        //     // System.exit(0);//这时finally里的代码不会执行
        //     // return;
        // }catch(Exception exception){
        //     exception.printStackTrace();
        // }finally{
        //     Integer.parseInt("jian");
        //     System.out.println("jianjian");
        // }
        // System.out.println("oppo");
        eat();
    }
    public static void eat()throws NumberFormatException{
        String aString = "jian";
        System.out.println(Integer.parseInt(aString));
    }
}
-----------------------------------------------------------
package com.jian.demo;

/**
 * Person 自定义异常类
 *  1.继承现有的异常类
 *  2.提供 static final long serialVersionUID = -7034897190745766939L; 序列号
 *  3.提供重载的构造器
 */
public class Person extends RuntimeException {
    static final long serialVersionUID = -7034897190745766938L;
    public Person(String a){
        super(a);
    }
}

package com.jian.test;

import java.util.InputMismatchException;
import java.util.Scanner;

import com.jian.demo.*;

/**
 * 开发者如何选择try 还是throws 如果父类里面被重写的方法没有throws处理 被重写的方法则也不能写这个 则只能用try 执行的方法a 递进调用
 * 这几个方法建议使用 throws处理 则 方法a则使用try 手动抛出异常：
 * 
 */
public class Jian {

    public static void main(String[] args) {
        // com.jian.demo.Jian aJian = new com.jian.demo.Jian();
        // display(aJian);
        // String aString = "jian";
        // System.out.println(Integer.parseInt(aString));
        // Scanner aScanner = new Scanner(System.in);
        // // throw new RuntimeException("jian");
        // try {
        // int a = aScanner.nextInt();
        // } catch (InputMismatchException e) {
        // throw new RuntimeException("输入不合法");//写这个不用try 包围 运行时异常不需要处理 throw后面的代码不会执行
        // // System.out.println("输入不合法、重输");
        // }
        try {
            display();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
    public static void display()throws Exception{
        throw new Exception("充数");
    }
}

-----------------------------------
```
### java 多线程
```java

```