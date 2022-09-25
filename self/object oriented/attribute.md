```
属性如果在对象中设置，可以任意的修改，导致数据不安全
比如：
const per = new Person(name: 'z3', age: 18);
per.age = -38;

public 可以在任意位置访问修改
public name: sting;

private 只能在类的内部访问修改
但是可以在类中添加方法 getter/setter 暴露到外部(属性存取器)
private _age: number;
getAge() {
    return this._age;
}
setAge(value: number) {
    if(value >= 0) {
        this._age = value;
    }
}
obj.getAge();
obj.setAge(-33);

====> TS 内置
private _age: number;
get age() {
    return this._age;
}
set age(value: number) {
    if(value >= 0) {
        this._age = value;
    }
}
obj.age;
obj.age = -33;

protected age: number;
受保护的属性，只能在父类和子类中访问和修改。
不能在实例中访问和修改。

语法糖
class C {
    constructor(pulic name: string, pulic age: number) {
    }
}

打开错误不编译选项
"noEmitOnError": true 
```