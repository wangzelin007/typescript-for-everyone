```
此时 Bar 被称为父类，Foo 被称为子类
子类拥有父类所有的属性和方法
子类可以添加新的属性和方法
子类可以覆盖相同的属性和方法
class Foo extends Bar {

}

super 
在类方法中 super 表示当前类的父类
class Foo {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHello() {
        xxx;
    }
}

class Bar extends Foo {
    age: number;

    constructor(name: string, age: number) {
        super(name);
        this.age = age;
    }

    sayHello() {
        xxx;
    }
}

以abstract开头的类是抽象类
以abstract开头的方法是抽象方法
抽象类和其他类区别不大，只是不能用来创建对象
抽象类就是专门用来被继承的类
抽象方法没有方法体
子类必须对抽象方法进行重写
abstract class Foo {
    abstract func():void;
}
```