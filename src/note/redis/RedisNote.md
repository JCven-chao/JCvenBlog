# Java SE 笔记(上)



### 第01章--Java简介

##### 1. JDK结构



+ JDK 是 Java 语言的软件开发工具包 (SDK)

+ JRE 指 Java 运行环境，在JRE里面有两个文件夹bin (jvm 虚拟器) 和lib (类库)

+ JVM 是虚拟机


##### 2. JavaAPI文档

JDK8在线文档:	https://docs.oracle.com/javase/8/docs/api/

JDK17在线文档:	https://docs.oracle.com/en/java/javase/17/docs/api/index.html

------



### 第02章--基础语法

#### 1. 文档注释

```java
/** 
 *  文档注释
 *  @author JCven
 *  @version 1.0
 */
```

文档注释可以被JDK提供的工具javadoc 所解析，生成一套以网页文件形式体现的该程序的说明文档

使用cmd控制台输入`javadoc -d mydoc -author -version HelloWorld.java`

#### 2. 标识符命名规则

- 包名：多单词组成时所有字母均小写，使用.连接.比如：com.jcven.learn

- 类名&接口名：大驼峰式。比如：AaaBbbCcc

- 变量名&方法名：小驼峰式。比如：aaaBbbCcc

- 常量名：多单词组成是所有字母均大写，使用_连接。比如：AAA_BBB_CCC

#### 3. 转义字符

| 转义字符 | 意义   | ASCII码值 |
| -------- | ------ | --------- |
| \n       | 换行   | 10        |
| \t       | 制表位 | 9         |
| \r       | 回车   | 13        |

#### 4. 数据类型

1. 基本数据类型

   | 类型    | 占用字节 |
   | ------- | -------- |
   | byte    | 1        |
   | short   | 2        |
   | int     | 4        |
   | long    | 8        |
   | float   | 4        |
   | double  | 8        |
   | char    | 1        |
   | boolean | 1        |

   + 整数默认类型是int，long类型需添加"L"后缀
   
   + 小数默认类型是double，float类型必须添加“F”后缀

2. 引用数据类型
   + 类	(class)
   + 接口	(interface)
   + 数组	( [ ] )

#### 5. 运算符

| 优先级 | 运算符                                        | 结合性   |
| ------ | --------------------------------------------- | -------- |
| 1      | ()   []   {}                                  | 从左向右 |
| 2      | !   ~   ++   --                               | 从右向左 |
| 3      | *   /   %                                     | 从左向右 |
| 4      | +   -                                         | 从左向右 |
| 5      | <<   >>   >>>                                 | 从左向右 |
| 6      | <   <=   >   >=   instanceof                  | 从左向右 |
| 7      | ==   !=                                       | 从左向右 |
| 8      | &                                             | 从左向右 |
| 9      | ^                                             | 从左向右 |
| 10     | \|                                            | 从左向右 |
| 11     | &&                                            | 从左向右 |
| 12     | \|\|                                          | 从左向右 |
| 13     | ?  :                                          | 从右向左 |
| 14     | =   +=  &=   \|=   ^=   ~=   <<=   >>=   >>>= | 从右向左 |

+ i++ 先使用再自增  ++i 先自增再使用

+ 逻辑与 &   逻辑或 | 两边都会执行，而短路与短路或只要一边满足，另一半就不执行
+ 逻辑异或 ^ (两者不同时，为真)
+ 位运算符 (按照二进制，以补码的形式运算)
  按位与&  两位全为1是结果为1，否则为0
  按位或| 两位有1则结果为1，否则为0
  按位异或 ^ 两位不同则结果为1，否则为0
  按位取反 ~ 0与1互换
+ 按位运算
  2 的原码 = 补码为 00000000 00000000 00000000 00000010
  3 的原码 = 补码为 00000000 00000000 00000000 00000011
  2&3 按位与运算为 00000000 00000000 00000000 00000010
+ 算数左移<<	符号位不变，低位补0	本质是*2
  算数右移>>  符号位不变，低位溢出，并用符号位补溢出的高位    本质是/2
  逻辑右移>>> 低位溢出，高位补0
+ 三元运算符    条件表达式?  表达式1 : 表达式2 ；(判断为真则运行表达式1，为假则运行表达式2

------



### 第03章--流程控制

#### 1. if分支控制

```java
if( /*条件表达式*/ ){
    //语句
}else if(/*条件表达式*/){
    //语句
}else{
    //语句
}
```

#### 2. switch分支控制

```java
switch(/*表达式*/){
    case 常量1:
        //语句
        break;
    case 常量2:
        //语句
        break;
    default:
        //语句
        break;
}
```

+ 表达式类型应与常量类型保持一致，或是可以自动转化为可比较的类型，如字符转int

+ switch表达式的类型只能是byte，short， int，char，enum，String

+ case子句中的值必须为常量不能是变量

------



#### 3. for循环

```java
for(int i = 0; i < 5; i++){
    //语句
}
```

+ for循环的变量初始化和循环变量迭代可以写到其他地方，但分号不能省略，即for( ; 循环条件 ; ){}

+ 循环初始值可以有多个，但类型要一样，用逗号隔开循环

+ 变量迭代也可以有多个，用逗号隔开

#### 4. while循环

```java
//循环变量初始化
int i = 0; 
while(/*循环条件*/){
    //循环体
    //循环变量迭代
}
```

#### 5. do-while循环

```java
//循环变量初始化
int i = 0;
do{
    //循环体
    //循环变量迭代
}while(/*循环条件*/);
```

#### 6. break语句

1. break语句用于终止某个语句块的执行

2. break语句出现在多层嵌套循环中，可以通过标签来指明终止哪一层语句块

   ```java
   label1:{
       label2:{
           //break; = break label2;
           break label2;
       }
   }
   ```

3. 没有指定的break默认退出最近的循环体

#### 7. continue语句

1. continue语句用于结束本次循环，继续执行下一次循环

2. continue语句出现在多层嵌套循环中，可以通过标签跳过哪一层循环

   ```java
   label1:{
       label2:{
           //continue; = continue label2;
           continue label2;
       }
   }
   ```

3. 没有指定的continue默认跳过最近的循环体

#### 8. return语句

1. return用于方法中，会跳出方法
2. return用于main中，表示退出程序

------



### 第04章--数组

#### 1. 一维数组

```java
//1. 动态初始化1
int [] a = new int[5];
//2. 动态初始化2
int [] b;
b = new int[5];
//3. 静态初始化
int [] c = {1,2,3,4,5};
```

+ 数组中的元素可以是任何数据类型，包括基本类型和引用类型，但不能混用

+ 数组创建后没有赋值的会自动赋默认值 int 0;   double 0.0;   char \u0000;   boolean false;   String null;

+ 数组属于引用类型，数组型数据属于对象(object)

#### 2. 二维数组

```java
//1. 动态初始化1
int [][] a = new int[5][5];
//2. 动态初始化2
int [][] b = new int[5][];
//2. 动态初始化3
int [][] c;
b = new int[5][5];
//3. 静态初始化
int [][] d = {{1,2},{1,2}};
```

------



### 第05章--面向对象基础

#### 1. 访问修饰符

| 访问级别 | 访问控制修饰符 | 同类 | 同包 | 子类 | 不同包 |
| :------: | :------------: | :--: | :--: | :--: | :----: |
|   公开   |     public     |  √   |  √   |  √   |   √    |
|  受保护  |    protect     |  √   |  √   |  √   |   ×    |
|   默认   |       无       |  √   |  √   |  ×   |   ×    |
|   私有   |    private     |  √   |  ×   |  ×   |   ×    |

#### 2. 方法

1. 方法重载

   ```java
   //java允许同一个类中同名方法的存在，但形参列表不同
   void fun(int a,int b){}
   void fun(String s1){}
   void fun(double d){}
   ```

2. 可变参数

   ```java
   //java允许将同一类的中多个同名同功能但参数个数不同的方法封装成一个方法
   public int sum(int... nums){} 
   ```

   - int... 表示可变参数，类型是int，参数个数不同，可以是0到多个参数
   - 使用可变参数时可以当做数组使用，即nums可以当做数组
   - 可变参数的实参可以是数组，即可以传入数组
   - 可变参数和普通参数一起放在形参列表里，要保证可变参数放在最后
   - 一个形参列表只能放一个可变参数

3. 作用域

   - 全局变量又称属性，作用域是整个类体，有默认值，可以不赋初值

   - 局部变量一般是成员方法中的变量，无初值，必须赋值后才能使用

   - 属性和局部变量可以重名，遵循就近原则

   - 在同一个作用域中变量不能重名，如同一个方法体内的变量不能重名

   - 全局变量可以在本类使用，也可以通过对象调用在其他类使用

   - 局部变量只能在本类对应的方法中使用

   - 全局变量可以加访问修饰符，局部变量不可以加访问修饰符

#### 3. 构造方法

```java
class Person{
    String name;
    int age;
    public class Person(String name, int age){
        this.name = name;
        this.age = age;
    }
}
```

- 构造器的方法名与类名保持一致
- new对象的时候直接通过构造器即可完成属性的初始化
- 一个类可以有多个构造器，即构造器重载
- 创建对象时，系统会自动调用该类的构造方法
- 如果没有定义构造方法，系统会自动生成一个无参默认构造方法
- 用户定义了构造方法后，系统默认的构造方法会被覆盖，若使用则需显式定义，即重新定义一个无参构造器

#### 4. this关键字

1. this关键字可以用来访问本类的属性，方法，构造器

2. this用于区分当前类的属性和局部变量

3. 访问成员方法的语法是 this.方法名(参数列表);

   ```java
   class A{
       public void f1(){}
       public void f2(){
           //调用f1的第一种方法
           f1();
           //调用f1的第二种方法
           this.f1();
       }
   }
   ```

4. 访问构造器的语法是 this(参数列表)；  (只能在构造器中使用,即在构造器中调用另一个构造器)，且语句放在第一条

   ```java
   class A{
       public A(){
           //调用另一个构造器
           this("tom");
       }
       public A(String name){}
   }
   ```

5. this不能在类定义的外部使用，只能在类定义中的方法中使用

6. this代表当前对象，即哪个对象被调用，this就代表哪个对象

7. this访问本类的属性和方法，若找不到则会在父类中继续查找

#### 5. 包

1. 打包：  package  包名

2. 导包：  import 包名

3. 包的命名规范：  com. 公司名. 项目名. 业务模块名

4. 导包时加入*代表导入该包下的所有类

------



### 第06章--面向对象进阶

#### 1. 封装

```java
class A{
    // 属性
    private String name;
    private int age;
	// getter和setter
    public String getName() {return name;}
    public void setName(String name) {this.name = name;}
    public int getAge() {return age;}
    public void setAge(int age) {this.age = age;}
}
```

+ 属性私有化并提供getter和setter

#### 2. 继承

```java
//父类Person
class Person{}
//子类Student 继承Person类
class Student extends Person{}
```

- 子类继承父类的所有属性和方法
- 非私有属性和方法可以在子类直接访问，私有属性和方法不能在子类直接访问，要通过父类公共方法访问
- 子类必须调用父类的构造器，完成父类的初始化
- 创建子类对象时，任一子类构造器都会先调用父类的无参构造器，若父类没有无参构造器则需要通过super指用特定构造器
- super() 和 this() 都只能放在构造器的第一行，因此两者不能共存在同一个构造器中
- 父类构造器的调用不限于直接父类，而是一直追溯到最高父类即Object类
- 子类只能继承一个父类，单继承机制

#### 3. super关键字

- 访问父类属性和方法用 super.属性    super.方法；
- 访问父类的属性和方法，但不能访问私有属性和方法
- 当子类有和父类的属性和方法重名时，访问父类需要用super
- super访问不限于直接父类，可以直接追溯到顶级父类，若有重名则遵循就近原则

#### 4. 方法重写

子类的一个方法与父类的一个方法名称，返回类型，参数一样，即子类覆盖父类方法

```java
class A{
    void f1(){
        System.out.println("A类的f1()被调用");
    }
}
class B extends A{
    //子类重写f1()方法
    @Override
    void f1() {
        System.out.println("B类的f1()被调用");
    }
}
```

- 子类方法的参数，方法名要和父类完全一致，返回类型一致或者是父类返回类型的子类
- 子类不能缩小父类的方法的访问权限

#### 5. 多态

1. 方法重载和方法重写就是方法多态的体现

2. 一个对象的编译类型和运行类型可以不一致，= 左边的是编译类型，= 右边的是运行类型

3. 向上转型

   ```java
   //父类引用指向子类对象
   class People{}
   class Student extends People{}
   People p1 = new Student();
   //可以调用父类的所有成员，但不能调用子类的特有成员
   ```

4. 向下转型

   ```java
   Student s1 = (Student)p1;
   //向下转型只能强转父类引用，不能强转父类对象，且父类引用必须指向当前目标对象的类型
   //可以调用子类的所有成员
   ```

   - 动态绑定机制

      在调用对象方法的时候，该对象会和运行类型绑定，即从运行类型出发

      调用对象属性时没有动态绑定机制，哪里声明哪里使用

   - 多态数组

      数组的定义类型为父类类型，里面实际保存的元素为子类类型

   - 多态参数

      方法定义的形参为父类类型，实参类型可以是子类类型

#### 6. instanceof关键字

判断对象的类型是否是xx类型或xx的子类型，返回值为布尔值

#### 7. == 关键字

判断基本类型，判断值是否相等

判断引用类型，判断地址是否相等，即判断是否是同一个对象

#### 8. equals方法

Object类的方法，用于判断引用类型，默认判断地址是否相等，子类通常重写该方法，用于判断值是否相等

```java
//默认判断地址是否相等
a1.equals(a2)
    
//重写equals方法
class A{
	int a;
    double b;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof A)) return false;
        A a1 = (A) o;
        return a == a1.a && Double.compare(a1.b, b) == 0;
    }

    @Override
    public int hashCode() {
        return Objects.hash(a, b);
    }
}
```



### 第07章--面向对象高级

#### 1. 类变量

类变量也叫静态变量/静态属性，是该类所有对象共享的变量，任何一个该类的对象对其访问或修改，均作用在这个变量上

使用static关键字修饰静态变量

```java
class A{
    public static int a;
}
//访问时使用类名.类变量名
A.a;
```

#### 2. 类方法

类方法也叫静态方法，即使用static修饰的方法

```java
class A{
    //访问通过类名.方法名或者对象.方法名 调用
    public static void f(){}
}
```

- 类方法中无this和super参数
- 类方法中只能访问静态变量或静态方法
- 普通成员方法可以访问静态和非静态的变量和方法

#### 3. 代码块

代码块又称初始化块，属于类的中成员，类似于方法，将逻辑语句封装到方法体中，用 { } 围起来

代码块不用通过对象或类的显式调用，而是加载类的时候隐式调用

```java
class A{
    //静态代码块
    static{
      	//语句
    }
}
class B{
    //普通代码块
    {
        //语句
    }
}
```

1. static修饰的是静态代码块，作用是对类进行初始化，随着类的加载而执行，且只会执行一次

2. 类加载的时机：

   + 创建对象实例 (new)

   + 创建子类对象实例时，父类也会被加载

   + 使用类的静态成员时 (静态属性，静态方法)

3. 普通代码块，在创建对象实例时，会被隐式调用，创建一次调用一次

4. 只使用类的静态成员时，普通代码块不会被执行
5. 静态代码块只能调用静态成员，普通代码块可以调用任意成员

6. 创建对象时，在一个类的调用顺序：
   1. 调用静态代码块和静态属性初始化
   2. 调用普通代码块和普通属性初始化
   3. 调用构造方法 (隐含了super() 和调用普通代码块，所以优先级最低)

7. 当有父类和子类时，调用顺序：
   1. 父类的静态代码块和静态属性
   2. 子类的静态代码块和静态属性
   3. 父类的普通代码块和普通属性
   4. 父类的构造方法
   5. 子类的普通代码块和普通属性
   6. 子类的构造方法

#### 4. final关键字

1. final使用方法

   1. final修饰类，则此类不能被别的类所继承

   2. final修饰方法，则此方法不可被重写

   3. final修饰属性，则此属性不可被修改

   4. final修饰局部变量，则此局部变量不能被修改

2. final细节

   1. final修饰的属性又叫常量，一般用XX_XX_XX命名

   2. final修饰的属性必须在定义的时候赋初值，且之后不能修改

      ```java
      //三种赋值位置
      class A{
          //1. 定义时赋值
          public final int NUM_A = 100;
      	//2. 构造器中赋值
      	public final int NUM_B;
          public A(){
              NUM_B = 200;
          }
          //3. 代码块中赋值
          public final int NUM_C;
          {
              NUM_C = 300;
          }
      }
      ```
   
   3. 如果final修饰的属性是静态的，则只能在定义时和静态代码块中赋值，不能在构造器中赋值
   
      ```java
      //两种赋值位置
      class A{
          //1. 定义时赋值
          public static final int NUM_A = 100;
          //2. 静态代码块中赋值
          public final int NUM_B;
          static{
              NUM_B = 300;
          }
      }
      ```
   
   4. 如果不是final类，但是含有final方法，该方法不能被重写但可以被继承
   
      ```java
      public static void main(String[] args) {
          //可以继承父类的final修饰的方法
          new B().sum();//调用sum方法
      }
      //父类
      class A{
          public final void sum(){}
      }
      //子类
      class B extends A{}
      ```
      
   5. final修饰的类，不需要再用final修饰该类里面的方法
   
   6. final不能修饰构造器
   
   7. final 和static 搭配修饰效率更高，不会导致类加载
   
      ```java
      public static void main(String[] args) {
          //不会进行类加载就可以直接访问NUM
          System.out.println(A.NUM);
      }
      class A{
          public final static int NUM = 100;
      }
      ```
   

#### 5. 抽象类

abstract修饰的类就是抽象类

```java
//抽象类
abstract class Animal{
	public String name;
	//构造器
    public Animal(String name) {
        this.name = name;
    }
	//抽象方法(没有方法体)
    public abstract void eat ();
}
```

- 抽象类不能被实例化，即不可以new一个对象
- abstract只能修饰类和方法
- 如果一个类继承了抽象类，则它必须实现抽象类的所有抽象方法，除非它自己本身也是抽象类

- 抽象方法不能使用private final和static修饰

#### 6. 接口

```java
//接口的定义
interface IA{
	//属性;
    //方法;
}

//接口的使用
class A implements IA{
	//必须实现接口的抽象方法;	
}
```

1. 接口不能被实例化

2. 接口中所有方法都是public方法，接口中的抽象方法可以不用abstract修饰

3.  一个普通类实现接口，需要将该接口的所有抽象方法都实现

4. 抽象类实现接口，可以不实现接口方法

5. 一个类可以同时实现多个接口

6. 接口中的属性是pubic static final的，属性必须初始化

   ```java
   interface IA{
       int a = 1;//必须初始化
       //相当于 public static final int a = 1;
   }
   ```

7. 接口不能继承类，接口可以继承接口

   ```java
   interface IA{
       void a();
   }
   interface IB{
       void b();
   }
   //IC接口继承IA,IB
   interface IC extends IA,IB{}
   ```

8. 接口的修饰符默认是public


#### 7. 内部类

局部内部类

1. 局部内部类是定义在外部类的局部位置，如方法中，代码块中，有类名

2. 局部内部类本质仍是一个类，可以访问外部类的所有成员包括私有的

3. 局部内部类只能是默认或者是final修饰符(使其不能被继承)

4. 作用域在其方法内或代码块内

5. 外部类访问内部类，需要在方法中可以创建内部类对象，然后调用其方法

   ```java
   //外部类
   class Outer{
       private int n1 = 100;
       public void m1(){
           //局部内部类定义在外部类的局部位置，比如方法中
           //若用final修饰的内部类，则其不能被继承
           final class Inner{//局部内部类(本质仍是类)
               //可以直接访问外部类的所有成员包括私有的
               public void f1(){
                   System.out.println(n1);
               }
   		}
           //创建内部类对象，然后调用其方法
           Inner i1 = new Inner();
           i1.f1();
       }
   }
   ```

6. 外部其他类不能访问局部内部类 (局部内部类的地位是局部变量)

7. 如果外部类和局部内部类的成员重名，默认遵循就近原则，

8. 如果想访问外部类的成员则可以使用(外部类名 . this.成员)去访问

   ```java
   class Outer{//外部类
       private int n1 = 100;
       public void m1(){
           class Inner{//局部内部类
               private int n1 = 200;
               public void f1(){
                   //访问n1遵循就近原则即访问的是Inner内的n1
                   //即输出200
                   System.out.println(n1);
                   //若想访问外部类的n1则需要外部类名.this.成员去访问
                   //即输出100
                   System.out.println(Outer.this.n1);
               }
   		}
       }
   }
   ```

------

匿名内部类

1. 匿名内部类是定义在外部类的局部位置，如方法中，代码块中，无类名

   + 基于接口的匿名内部类

     ```java
     class Outer {
         private int a1 = 100;
         private void method(){
             //匿名内部类
             IA dog = new IA(){
                 @Override
                 public void cry() {
                     System.out.println("小狗汪汪叫");
                 }
             };
             //1. dog的编译类型是 接口类型 即IA
             //2. dog的运行类型是 匿名内部类
             /*  底层代码为
                 class Outer$1 implements IA{
                     public void cry() {
                         System.out.println("小狗汪汪叫");
                     }
                 }
             */
             //3. jdk底层在创建匿名内部类Outer$1后，立即就new了一个对象实例，并且把地址返回给dog
             //4. 匿名内部类使用一次之后就不能在使用了，使用后类消失但是类所创建的对象存在
             dog.cry();//调用dog对象实例的cry方法输出小狗汪汪叫
         }
     }
     interface IA{
         public void cry();
     }
     ```

   + 基于类的匿名内部类

     ```java
     class Outer {
         private int a1 = 100;
         public void method(){
             //匿名内部类
             people p1 = new people("tom"){
                 @Override
                 public void test() {
                     System.out.println("匿名内部类重写test方法");
                 }
             };
             //1. p1的编译类型是 people类
             //2. p1的运行类型是 Outer$1
             /*  底层代码为
                 class Outer$1 extends people{
                 }
             */
             //3. jdk底层在创建匿名内部类Outer$1后，立即就new了一个对象实例并且把地址返回给p1
             //4. ("tom")参数列表会传递给构造器
             p1.test();//调用输出"匿名内部类重写test方法"
         }
     }    
     class people{
         //构造器
         public people(String name){}
         //方法
         public void test(){}
     }
     ```

2. 可以直接访问外部类的成员，包括私有的

3. 不能添加访问修饰符，他的地位只是一个局部变量

4. 外部其他类不能访问匿名内部类

5. 如果外部类和局部内部类的成员重名，默认遵循就近原则

6. 如果想访问外部类的成员则可以使用(外部类名 . this.成员)去访问

------

成员内部类

1. 成员内部类可以访问外部类的成员包含私有的 

   ```java
   public static void main(String[] args) {
       //创建类
       Outer01 outer01 = new Outer01();
       //调用f1方法
       outer01.f1();
   	//输出 "say方法abc 100"
   }
   
   class Outer01{
       private String name = "abc";//属性
       private int age = 100;
   	//成员内部类
       class Inner01{
           public void say(){
               //可以访问私有属性
               System.out.println("say方法" + name+ " " +age);
           }
       }
       //f1方法
       public void f1(){
           //创建成员内部类的对象实例
           Inner01 inner01 = new Inner01();
           //调用say方法
           inner01.say();
       }
   }
   ```

2. 可以添加任意的访问修饰符，他的地位就是一个成员

3. 作用域为整个类体

4. 成员内部类访问外部类的成员直接访问即可

5. 外部类使用成员内部类需要先创建成员内部类对象再调用其方法或属性

6. 外部其他类访问成员内部类两种方式

   ```java
   //--------------第一种方法--------------
   Outer01.Inner01 inner01 = outer01.new Inner01();
   //--------------第二种方法--------------
   Outer01.Inner01 inner01 = outer01.getInner();
   //编写一个方法，返回一个对象实例
   public Inner01 getInner(){
       return new Inner01();
   }
   ```

7. 如果外部类和局部内部类的成员重名，默认遵循就近原则，

8. 如果想访问外部类的成员则可以使用(外部类名 . this.成员)去访问

------

静态内部类

1. 静态内部类是定义在外部类的成员位置用static修饰

2. 可以直接访问外部类的所有成员，包含私有的，不能直接访问非静态成员

3. 可以添加任意修饰符public protect 默认 private，他的地位就是一个成员

4. 作用域为整个类体

   ```java
   public static void main(String[] args) {
       //创建类
       Outer01 outer01 = new Outer01();
       //调用f1方法
       outer01.f1();
   	//输出 "say方法abc 100"
   }
   
   class Outer01{
       private static String name = "abc";//属性
       private static int age = 100;
   	//成员内部类
       static class Inner01{
           public void say(){
               //可以访问私有属性
               System.out.println("say方法" + name+ " " +age);
           }
       }
       //f1方法
       public void f1(){
           //创建成员内部类的对象实例
           Inner01 inner01 = new Inner01();
           //调用say方法
           inner01.say();
       }
   }
   ```

5. 外部类访问静态内部类需要创建对象后再访问

6. 外部其他类访问静态内部类

   ```java
   //--------------第一种方法--------------
   Outer01.Inner01 inner011 = new Outer01.Inner01();
   //--------------第二种方法--------------
   //编写一个方法，返回一个对象实例
   Outer01.Inner01 inner = Outer01.getInner();
   public static Inner01 getInner(){
       return new Inner01();
   }
   ```
   
7. 如果外部类和局部内部类的成员重名，默认遵循就近原则，

   如果想访问外部类的成员则可以使用(外部类名 . this.成员)去访问

------

#### 8. 枚举

1. 自定义类实现枚举

   ```java
   class Season{
       private String name;
       private String desc;
       //1. 构造器私有化
       private Season(String name, String desc) {
           this.name = name;
           this.desc = desc;
       }
       //2. 可以保留get方法，需要去掉set方法
       public String getName() 
           return name;
       }
       public String getDesc() {
           return desc;
       }
       //3. 创建对象用public final static修饰
       //4. 对象名用大写字母
       public final static Season SPRING = new Season("春天","温暖");
       public final static Season SUMMER = new Season("夏天","炎热");
       public final static Season AUTUMN = new Season("秋天","凉爽");
       public final static Season WINTER = new Season("冬天","寒冷");
   }
   
   public static void main(String[] args) {
       //可以直接访问对象 通过Season.SPRING
       System.out.println(Season.SPRING);
   }
   ```

2. enum实现枚举

   ```java
   //enum替换class 定义枚举类
   enum Season{
       //将对象写在最前面，中间用逗号隔开，最后一个用分号结束
       //对象名("构造器属性")
       SPRING("春天","温暖"),
       SUMMER("夏天","炎热"),
       AUTUMN("秋天","凉爽"),
       WINTER("冬天","寒冷");
       //属性
       private String name;
       private String desc;
       //构造器私有化
       private Season(String name, String desc) {
           this.name = name;
           this.desc = desc;
       }
       //可以保留get方法，需要去掉set方法
       public String getName() {
           return name;
       }
       public String getDesc() {
           return desc;
       }
   }
   ```

3. enum常用方法

   ```java
   //1 .ordinal() 可以输出当前枚举对象的次序(从0开始)
   //2 .values() 返回一个含所有枚举对象的数组
   //3 .valueOf() 将字符串转化成枚举对象
   //4 .compareTo() 比较两个枚举变量，比较编号，返回值是前者编号-后者编号例如1-2=-1
   ```

4. 使用细节

   + 使用enum后不能继承其他类，因为enum会隐式继承

   + enum和普通类一样可以实现接口

#### 9. 注解

1. @Override 重写方法 (只能修饰方法)

2. @Deprecated 表示 已过时

3. @SuppressWarnings 忽略警告信息


#### 10. 异常

1. 五大运行异常

   + NullPointerException 空指针异常

   + ArithmeticException 数学运算异常
   
   + ArrayIndexOutOfBoundsException 数组越界异常
   
   + ClassCastException 对象强转为不是子类对象实例抛出的异常

   + NumberFormatException 数字格式不正常异常 

2. 异常处理方式

   + try - catch - finally

     ```java
     try{
         //可能会出现异常
     }catch (Exception e){
         //当出现异常时进行捕获，封装成Exception对象e传递给catch
     }finally {
         //无论有没有异常finally 始终要运行
         //通常用于释放资源代码
     }
     ```
   
     1. 如果异常发生了则异常后面的代码不会执行，直接进入catch块
   
     2. 如果异常没有发生则顺序执行try，不会进入catch块
   
     3. 如果try中可能有多个异常，可以使用多个catch分别捕获不同的异常(子类异常写在前，父类异常写在后)
   
     4. finally不是必须的
   
   + throws
   
     ```java
     //使用throws 将异常抛出，让调用f2方法的调用者处理
     public void f2() throws Exception{
         //此为编译异常
         FileInputStream fis = new FileInputStream("d://aa.txt");
     }
     ```
   
     1. 子类重写父类方法时，子类抛出的异常要和父类的一致或者是父类异常类型的子类型
     1. throws后面也可以是异常列表，即可以抛出多个异常 用逗号分割

3. 自定义异常类

   1. 继承一个异常类型

      编译时异常类型：自定义类继承`java.lang.Exception`。

      运行时异常类型：自定义类继承`java.lang.RuntimeException`

   2. 提供至少两个构造器, 一个是无参构造, 一个是(String message)构造器
   3. 定义异常需要提供`serialVersionUID`
   4. 自定义的异常只能通过throw抛出, 且只能手动抛出, 抛出后由try..catch处理，也可以让调用者处理

```java
// 自定义异常类
class MyException extends Exception {
    static final long serialVersionUID = 23423423435L;
    private int idnumber;

    public MyException(String message, int id) {
        super(message);
        this.idnumber = id;
    }

    public int getId() {
        return idnumber;
    }
}
```

```java
// 测试
public class MyExpTest {
    public void regist(int num) throws MyException {
        if (num < 0)
            throw new MyException("人数为负值，不合理", 3);
        else
            System.out.println("登记人数" + num);
    }
    public void manager() {
        try {
            regist(100);
        } catch (MyException e) {
            System.out.print("登记失败，出错种类" + e.getId());
        }
        System.out.print("本次登记操作结束");
    }
    public static void main(String args[]) {
        MyExpTest t = new MyExpTest();
        t.manager();
    }
}
```



### 第08章--常用类

#### 1. 包装类

1. 八大wrapper类

   | 基本数据类型 | 包装类    |
   | ------------ | --------- |
   | boolean      | Boolean   |
   | char         | Character |
   | byte         | Byte      |
   | short        | Short     |
   | int          | Integer   |
   | long         | Long      |
   | float        | Float     |

2. 基本类型与包装类的区别

   - 用途：除了定义一些常量和局部变量之外，我们在其他地方比如方法参数、对象属性中很少会使用基本类型来定义变量。并且，包装类型可用于泛型，而基本类型不可以。
   - 存储方式：基本数据类型的局部变量存放在 Java 虚拟机栈中的局部变量表中，基本数据类型的成员变量（未被 `static` 修饰 ）存放在 Java 虚拟机的堆中。包装类型属于对象类型，我们知道几乎所有对象实例都存在于堆中。
   - 占用空间：相比于包装类型（对象类型）， 基本数据类型占用的空间往往非常小。
   - 默认值：成员变量包装类型不赋值就是 `null` ，而基本类型有默认值且不是 `null`。
   - 比较方式：对于基本数据类型来说，`==` 比较的是值。对于包装数据类型来说，`==` 比较的是对象的内存地址。所有整型包装类对象之间值的比较，全部使用 `equals()` 方法。

   ⚠️ 注意：**基本数据类型存放在栈中是一个常见的误区！** 基本数据类型的成员变量如果没有被 `static` 修饰的话（不建议这么使用，应该要使用基本数据类型对应的包装类型），就存放在堆中。

   

   

#### 2. String类

1. 字符串与其他类型之间的转换

   ```java
   //1. 包装类 -> String
   Integer i = 100;
   //方式一
   String str1 = i + "";
   //方式二
   String str2 = i.toString();
   //方式三
   String str3 = String.valueOf(i);
   
   //2. String -> 包装类
   String str4 = "12345";
   //方式一
   Integer i2 = Integer.parseInt(str4);//自动装箱
   //方式二
   Integer i3 = new Integer(str4);//构造器
   
   //3. 字符数组 -> 字符串
   char[] chars = {'a','b','c'};
   String s1 = new String(chars);
   //可以标记起始位置和长度
   String s1 = new String(chars, 0, 3);
   
   //4. 字符串 -> 字符数组
   char[] charArray = s1.toCharArray();
   ```

2. 常用方法

   + boolean isEmpty()：字符串是否为空
   + int length()：返回字符串的长度
   + String concat(xx)：拼接
   + boolean equals(Object obj)：比较字符串是否相等，区分大小写
   + boolean equalsIgnoreCase(Object obj)：比较字符串是否相等，不区分大小写
   + String toLowerCase()：将字符串中大写字母转为小写
   + String toUpperCase()：将字符串中小写字母转为大写
   + String trim()：去掉字符串前后空白符
   + boolean contains(xx)：是否包含xx
   + int indexOf(xx)：从前往后找当前字符串中xx，即如果有返回第一次出现的下标，要是没有返回-1
   + int indexOf(String str, int fromIndex)：返回指定子字符串在此字符串中第一次出现处的索引，从指定的索引开始
   + int lastIndexOf(xx)：从后往前找当前字符串中xx，即如果有返回最后一次出现的下标，要是没有返回-1
   + int lastIndexOf(String str, int fromIndex)：返回指定子字符串在此字符串中最后一次出现处的索引，从指定的索引反向搜索
   + String substring(int beginIndex) ：返回一个新的字符串，它是此字符串的从beginIndex开始截取到最后的一个子字符串
   + String substring(int beginIndex, int endIndex) ：返回一个新字符串，从beginIndex开始截取到endIndex(不包含)
   + char charAt(index)：返回[index]位置的字符
   + char[] toCharArray()： 将此字符串转换为一个新的字符数组返回
   + static String valueOf(char[] data)  ：返回指定数组中表示该字符序列的 String
   + static String valueOf(char[] data, int offset, int count) ： 返回指定数组中表示该字符序列的 String
   + static String copyValueOf(char[] data)： 返回指定数组中表示该字符序列的 String
   + static String copyValueOf(char[] data, int offset, int count)：返回指定数组中表示该字符序列的 String
   + String replace(char oldChar, char newChar)：返回新字符串，用newChar替换所有 oldChar, 不支持正则
   + String replaceAll(String regex, String replacement)：使用给定的 replacement 替换所有匹配给定的正则表达式的子字符串

3. StringBuffer常用方法

   + StringBuffer append(xx)：提供了很多的append()方法，用于进行字符串追加的方式拼接
   + StringBuffer delete(int start, int end)：删除[start,end)之间字符
   + StringBuffer deleteCharAt(int index)：删除[index]位置字符
   + StringBuffer replace(int start, int end, String str)：替换[start,end)范围的字符序列为str
   + void setCharAt(int index, char c)：替换[index]位置字符
   + char charAt(int index)：查找指定index位置上的字符
   + StringBuffer insert(int index, xx)：在[index]位置插入xx
   + int length()：返回存储的字符数据的长度
   + StringBuffer reverse()：反转

4. StringBuilder方法

   和StringBuffer方法一样，在单线程中更推荐StringBuilder方法

   而在多线程中使用StringBuilder方法会导致线程不安全

#### 3. Arrays类

1. Arrays.toString 返回数组的字符串形式

   ```java
   Arrays.toString(arr);
   //输出形如[1,5,8,2]
   ```

2. Arrays.sort 排序

   (1) 升序

   ```java
   //直接在原数组上进行排序
   Arrays.sort(arr);
   ```

   (2) 降序

   ```java
   Arrays.sort(arr, new Comparator() {
       @Override
       public int compare(Object o1, Object o2) {
           Integer i1 = (Integer)o1;
           Integer i2 = (Integer)o2;
           //若i2-i1则为降序
           //若i1-i2则为升序
           return i2-i1;
       }
   });
   ```

3. Arrays.binarySearch 二分查找指定元素

   ```java
   //arr数组必须是排好序的
   //在arr数组中查找元素1若有则返回下标值，若无则返回此元素应该在的位置的-(low+1)
   Integer []arr = {1,2,3,4,5,6};
   Arrays.binarySearch(arr,3);//返回 2
   Arrays.binarySearch(arr,0);//返回 -(0+1) = -1
   Arrays.binarySearch(arr,7);//返回 -(6+1) = -7
   ```
   
4. Arrays.copyOf 数组复制

   ```java
   //将arr数组的元素中arr.length的长度复制到新数组arr2中
   //长度比arr小则会省去后面的元素
   //长度比arr大则会添加null
   Integer []arr2 = Arrays.copyOf(arr,arr.length);
   System.out.println(Arrays.toString(arr2));
   //输出arr和arr2数组元素内容相同
   ```

#### 4. System类

1. exit() 退出当前程序

   System.exit(0)；代表正常退出

2. arraycopy() 数组复制

   ```java
   int [] arr = {1,2,3};//源数组
   int [] arr2 = new int[3];//需要复制的数组
   //array.copy(源数组, 从源数组的索引位置开始复制, 需要复制到的数组, 被复制的数组开始复制的位置，复制的长度)
   //通常全部复制用以下形式
   System.arraycopy(arr,0,arr2,0,arr2.length);
   //输出[1,2,3]
   System.out.println(Arrays.toString(arr2));
   ```

3. currentTimeMillis() 返回从1970.1.1到现在的时间毫秒值

4. Scanner键盘输入

   1. 创建Scanner类型的对象：`Scanner scan = new Scanner(System.in);`
   2. 调用Scanner类的相关方法（`next() / nextXxx()`），来获取指定类型的变量
   3. 释放资源：`scan.close();`

   ```java
   import java.util.Scanner;
   
   public class ScannerTest1 {
   
       public static void main(String[] args) {
           // 创建Scanner类型的对象
           Scanner scanner = new Scanner(System.in);//System.in默认代表键盘输入
           //调用Scanner的方法，获取不同类型的变量
           String name = scanner.next();
           int age = scanner.nextInt();
           double weight = scanner.nextDouble();
           boolean isSingle = scanner.nextBoolean();
           char gender = scanner.next().charAt(0);
           // 关闭资源
           scanner.close();
       }
   }
   ```

#### 5. Math类

1. 常用Math方法
   + public static double abs(double a) ：返回 double 值的绝对值。
   + public static double ceil(double a) ：返回大于等于参数的最小的整数。
   + public static double floor(double a) ：返回小于等于参数最大的整数。
   + public static long round(double a) ：返回最接近参数的 long。(相当于四舍五入方法)  
   + public static double pow(double a,double b)：返回a的b幂次方法
   + public static double sqrt(double a)：返回a的平方根
   + public static double random()：返回[0,1)的随机值
   + public static final double PI：返回圆周率
   + public static double max(double x, double y)：返回x,y中的最大值
   + public static double min(double x, double y)：返回x,y中的最小值
   + acos,asin,atan,cos,sin,tan 三角函数

2. BigInteger类

   构造器
   - BigInteger(String val)：根据字符串构建BigInteger对象

   方法
   - public BigInteger abs()：绝对值
   - BigInteger add(BigInteger val) ：加法运算
   - BigInteger subtract(BigInteger val) ：减法运算
   - BigInteger multiply(BigInteger val) ：乘法运算
   - BigInteger divide(BigInteger val) ：除法运算, 整数相除只保留整数部分
   - BigInteger remainder(BigInteger val) ：取余运算
   - BigInteger[] divideAndRemainder(BigInteger val)：返回包含除法运算后跟取余运算的两个 BigInteger 的数组
   - BigInteger pow(int exponent) ：幂指运算 

3. BigDecimal

   构造器

   - public BigDecimal(double val)

   - public BigDecimal(String val) --> 推荐

   常用方法

   - public BigDecimal add(BigDecimal augend)：加法运算

   - public BigDecimal subtract(BigDecimal subtrahend)：减法运算

   - public BigDecimal multiply(BigDecimal multiplicand)：乘法运算

   - public BigDecimal divide(BigDecimal divisor, int scale, int roundingMode)：divisor是除数，scale指明保留几位小数，roundingMode指明舍入模式（ROUND_UP :向上加1、ROUND_DOWN :直接舍去、ROUND_HALF_UP:四舍五入）

4. Random类

   常用方法

   * boolean nextBoolean():返回下一个伪随机数，它是取自此随机数生成器序列的均匀分布的 boolean 值。 
   * void nextBytes(byte[] bytes):生成随机字节并将其置于用户提供的 byte 数组中。 
   * double nextDouble():返回下一个伪随机数，它是取自此随机数生成器序列的、在 0.0 和 1.0 之间均匀分布的 double 值。 
   * float nextFloat():返回下一个伪随机数，它是取自此随机数生成器序列的、在 0.0 和 1.0 之间均匀分布的 float 值。  
   * int nextInt():返回下一个伪随机数，它是此随机数生成器的序列中均匀分布的 int 值。 
   * int nextInt(int n):返回一个伪随机数，它是取自此随机数生成器序列的、在 [0,n) 之间均匀分布的 int 值。 
   * long nextLong():返回下一个伪随机数，它是取自此随机数生成器序列的均匀分布的 long 值。

#### 6. 日期类

1. Date类

   构造器

   - Date()：使用无参构造器创建的对象可以获取本地当前时间。
   - Date(long 毫秒数)：把该毫秒值换算成日期时间对象

   常用方法

   - getTime(): 返回自 1970 年 1 月 1 日 00:00:00 GMT 以来此 Date 对象表示的毫秒数。

   ```java
   //获取当前系统时间
   Date d1 = new Date();
   //日期格式化
   SimpleDateFormat sdf = new SimpleDateFormat("yyyy年MM月dd日 HH时mm分ss秒 SSS毫秒  E Z");
   String format = sdf.format(d1);
   //输出结果: 2023年07月16日 11时10分53秒 500毫秒  周日 +0800
   ```

2. Calendar类

   ```java
   //创建Calendar类
   Calendar c = Calendar.getInstance();
   //格式需要自己处理
   //获取日期信息
   c.get(Calendar.YEAR);//年
   c.get(Calendar.MONTH+1);//月，从0开始计数
   c.get(Calendar.DAY_OF_MONTH);//日
   c.get(Calendar.HOUR);//时
   c.get(Calendar.MINUTE);//分
   c.get(Calendar.SECOND);//秒
   ```

3. Time类

   本地日期时间类 LocalDate、LocalTime、LocalDateTime

   常用方法

   + now() / now(ZoneId zone): 静态方法，根据当前时间创建对象/指定时区的对象
   + of(): 静态方法，根据指定日期/时间创建对象
   + getDayOfMonth(): 获得月份天数
   + getMonth(): 获得月份
   + plusDays(): 向当前对象添加几天
   + minusDays(): 从当前对象减少几天
   + plus(TemporalAmount t): 添加一个Duration 或 Period
   + isBefore() / isAfter(): 比较两个LocalDate
   + isLeapYear(): 判断是否闰年
   + format(DateTimeFormatter  t): 格式化本地日期、时间，返回一个字符串
   + parse(Charsequence text): 将指定格式的字符串解析为日期、时间
   + ofPattern("yyyy-MM-dd hh:mm:ss"): 自定义格式, 返回一个指定字符串格式的DateTimeFormatter
   + Period.between(t1, t2): 计算两个日期间隔
   + Duration.between(t1, t2): 用于计算两个时间间隔

   ```java
   public void timeTest(){
       LocalDateTime now = LocalDateTime.now();
       DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd hh:mm:ss");
       System.out.println(dateTimeFormatter.format(now));
   }
   ```

