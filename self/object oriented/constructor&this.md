```
class C1{
    name: string;
    age: number;

    // constructor 构造函数
    constructor(name: string, age: number) {
        // this 当前实例(对象)
        this.name = name;
        this.age = age;
    }

    func(){
        xxx
    };
}

实例化：
const foo = new C1('x', 4);
const bar = new C1('y', 2);
```