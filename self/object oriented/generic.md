```
泛型
定义函数或者类时，有不明确的场景可以使用泛型
直接使用any会关闭TS检查
泛型类型在调用时确定

function fn(a: any): any {
    return a
}

function fn<T>(a: T): T {
    return a
}

泛型同时指定多个
function fn2<T, K>(a: T, b: K): T {
    console.log(b);
    return a
}

interface Inter {
    length: number;
}

function fn3<T extends Inter>(a: T): number {
    return a.length;
}

class MyClass<T> {
    name: T;
    constructor(name: T) {
        this.name = name;
    }
}

const mc = new MyClass<string>('xxx');

自动推断
fn(10);
指定泛型
fn<string>('hello');
```