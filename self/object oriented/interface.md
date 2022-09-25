```
接口用来定义一个类结构
类的属性和方法
接口可以当成类型声明去使用
多个同名接口以并集方式生效
interface myInterface {

}

const obj: myInterface = {

};

接口是用来限制类的结构
接口所有属性和方法不能有实际的内容
interface myInter {
    name: string;
    sayHello():void;
}

定义满足接口的类
接口类似规范，比如usb接口
满足了接口就可以在对应的场景下使用
class MyClass implements myInter {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHello() {
        xxx;
    }
}
```