/*
console.log('你好ts');
function getData () {

}

var str:string = '你好ts';
*/

/** 
 * 第一步 tsx --init 生成tsconfig.json 改 "outDir": "./js"
 * 第二步 点击任务 -> 运行任务 -> 监视tsconfig.json
*/
/*
enum Flag {
    success,
    error
};
let s:Flag = Flag.error;
console.log(s);
*/


// 3.1函数的定义
// ts中定义函数的方法
// 函数声明法
// function run ():string {
//     return 'run'
// }

// 匿名函数
// var fun2 = function():number {
//     return 123
// }

// alert(fun2());

// ts中定义方法传参
/* function getInfo(name: string, age: number):string {
    return `${name} --- ${age}`
}
alert(getInfo('张三', 20)) */

/* var getInfo = function(name:string, age: number):string {
    return `${name} --- ${age}`
}
alert(getInfo('张三', 20))
*/


// 没有返回值的方法
/*function run (): void {
    console.log('run')
}
run();*/


// 3.2 方法可选参数
    // es5里面方法的实参和形参可以不一样，但在ts中必须一样，如果不一样，就需要配置可选参数
    /*
    function getInfo (name:string, age?:number):string {
        if (age) {
            return `${name} --- ${age}`
        } else {
            return `${name} --- 年龄保密`
        }
    }
    alert(getInfo('张三', 20))
    alert(getInfo('张三'))
    */
   // 注意：可选参数必须配置到参数的最后面

    

// 3.3 默认参数
    // es5里面没法设置默认参数，es6和ts中都可以设置默认参数
    /* 
    function getInfo (name:string, age:number=20):string {
        if (age) {
            return `${name} --- ${age}`
        } else {
            return `${name} --- 年龄保密`
        }
    }
    alert(getInfo('张三'))
    alert(getInfo('李四', 30))
    */

    
// 3.4 剩余参数
    /* 
    function sum(a: number, b: number, c: number, d: number): number {
        return a + b + c + d
    }   
    alert(sum(1, 2, 3, 4))
    */
   

    // 三点运算符 接受新参传过来的值
    /* 
        function sum(...result: number[]): number {
            var sum = 0;
            for (var i = 0; i < result.length; i++) {
                sum += result[i]
            }
            return sum
        }   
        alert(sum(1, 2, 3, 4, 5))
    */

    /* 
        function sum(a: number, ...result: number[]): number {
            var sum = a;
            for (var i = 0; i < result.length; i++) {
                sum += result[i]
            }
                return sum
        }   
        alert(sum(1, 2, 3, 4, 5))
    */




// 3.5 函数重载
    // java中方法的重载，重载指的是两个或者两个以上同名函数，但他们的参数不一样，这时会出现函数重载的情况
    // ts中的重载，通过为同一个函数提供多个函数类型定义来试下多种功能的目的
    // ts为了兼容es5 以及es6重载的写法和java中有区别

    // es5中出现同名方法，下面的会替换上面的方法
    /*
        function css(config) {

        }

        function css(config, value) {
            
        }
    */

    // ts中的重载
    /* 
        function getInfo (name: string): string;
        function getInfo (age: number): string;
        function getInfo (str: any) :any {
            if (typeof str == 'string') {
                return '我叫' + str
            } else {
                return '我的年龄是' + str;
            }
        }
        alert(getInfo('张三')) // 正确
        alert(getInfo(20)) // 正确
        //alert(getInfo(true)) // 错误
    */

    /*
        function getInfo (name: string): string;
        function getInfo (name: string, age: number): string;
        function getInfo (name: any, age?: any) :any {
            if (age) {
                return `我叫${name}，我的年龄是${age}`
            } else {
                return `我叫${name}`;
            }
        }
        alert(getInfo('张三')) // 正确
        alert(getInfo('张三', 20)) // 正确
    */


// 3.6 箭头函数 es6 

    /* 
        setTimeout(() => {
            alert('run')
        })
    */



// 1.ts中类的定义
    /* 
        class Person {
            name: string  // 属性 省略了public关键词
            constructor (n: string) {   // 构造函数   实例化类的时候触发的方法
                this.name = n
            }

            run (): void {
                alert(this.name);
            }

        }

        var p = new Person('张三');
        p.run();
    */

    /* 
        class Person {
            name: string  // 属性 省略了public关键词
            constructor (n: string) {   // 构造函数   实例化类的时候触发的方法
                this.name = n
            }

            getName (): string {
                return this.name;
            }

            setName (name: string): void {
                this.name = name;
            }

        }

        var p = new Person('张三')
        alert(p.getName())

        p.setName('李四')
        alert(p.getName())
    */


// 2.ts中实现继承  extends、super

    /* 
        class Person {
            name: string
            constructor (name:string) {
                this.name = name
            }

            run (): string {
                return `${this.name}在运动`
            }
        }

        var p = new Person('王五')

        alert(p.run())

        class Web extends Person {
            constructor (name: string) {
                super(name)  // 初始化父类的构造函数
            }
        }

        var w = new Web('李四')
        alert(w.run())
    */


// ts中继承的探讨  父类的方法和子类的方法一致
    /* 
        class Person {
            name: string
            constructor (name:string) {
                this.name = name
            }

            run (): string {
                return `${this.name}在运动`
            }
        }

        var p = new Person('王五')

        alert(p.run())

        class Web extends Person {
            constructor (name: string) {
                super(name)  // 初始化父类的构造函数
            }

            run ():string {
                return `${this.name}在运动 - 子类`
            }

            work ():string {
                return `${this.name}在工作`
            }
        }

        var w = new Web('李四')
        alert(w.run())
    */


// 3. 类里面的修饰符 
// ts里面定义属性的时候给我们提供了三种修饰符
/*
    public:       公有        在类里面、子类、类外面都可以访问
    protected:    保护类型     在类里面、子类里面可以访问，在类外部没法访问
    private:      私有        在类里面可以访问，子类、类外都不能访问

    属性如果不加修饰符，默认是public
*/

    /* 
        class Person {
                public name: string  // 共有属性
                constructor (name:string) {
                    this.name = name
                }

                run (): string {
                    return `${this.name}在运动`
                }
            }

            // var p = new Person('王五')

            // alert(p.run())

            class Web extends Person {
                constructor (name: string) {
                super(name)  // 初始化父类的构造函数
            }

            run ():string {
                return `${this.name}在运动 - 子类`
            }

            work ():string {
                return `${this.name}在工作`
            }
        }

        var w = new Web('李四')
        alert(w.run())

        // 累外部访问公有属性
        var p = new Person('哈哈哈');
        alert(p.name);
    */

    /* protected:    保护类型     在类里面、子类里面可以访问，在类外部没法访问
        class Person {
            protected name: string  // 共有属性
            constructor (name:string) {
                this.name = name
            }

            run (): string {
                return `${this.name}在运动`
            }
        }

        class Web extends Person {
            constructor (name: string) {
                super(name)  // 初始化父类的构造函数
            }

            run ():string {
                return `${this.name}在运动 - 子类`
            }

            work ():string {
                return `${this.name}在工作`
            }
        }

        var w = new Web('李四')
        alert(w.run())

        // 累外部访问公有属性
        var p = new Person('王五');
        alert(p.name);
    */

    /* private:      私有        在类里面可以访问，子类、类外都不能访问
        class Person {
            private name: string  // 共有属性
            constructor (name:string) {
                this.name = name
            }

            run (): string {
                return `${this.name}在运动`
            }
        }

        class Web extends Person {
            constructor (name: string) {
                super(name)  // 初始化父类的构造函数
            }

            run ():string {
                return `${this.name}在运动 - 子类`
            }

            work ():string {
                return `${this.name}在工作`
            }
        }

        var w = new Web('李四')
        alert(w.run())

        // 累外部访问公有属性
        var p = new Person('王五');
        alert(p.name);
    */


// 4、静态属性  静态方法

    /*
        class Person {
            public name: string
            public age: number = 20
            // 静态属性
            static sex: string = '男'
            constructor(name: string) {
                this.name = name
            }

            run ():void {
                alert(`${this.name}在运动`)
            }

            work (): void {
                alert(`${this.name}在工作`)
            }

            static print () {     // 静态方法 无法直接调用类里面的属性
                // alert('print方法' + this.age) // 报错 alert  print方法undefined
                alert(`print方法${this.sex}`)
                alert(`print方法${Person.sex}`)
            }
        }

        // var p = new Person('张三');
        // p.run();
        Person.print();
    */

// 5、多态：父类定义一个方法不去实现，让继承它的子类去实现，每个子类有不同的表现
// 多态属于继承

/* 
    class Animal {
        name: string
        constructor(name: string) {
            this.name = name
        }

        eat () { // 具体吃什么 不知道，具体吃什么？ 继承它的子类去实现，每一个子类的表现不一样
            console.log('吃的方法')
        }
    }

    class Dog extends Animal {
        constructor (name: string) {
            super(name)
        }

        eat () {
            alert(`${this.name}吃肉`)
        }
    }

    class Cat extends Animal {
        constructor (name: string) {
            super(name)
        }

        eat () {
            alert(`${this.name}吃鱼`)
        }
    }
*/

// 6. ts中的抽象类： 它是提供其他类继承的基类，不能直接被实例化
// 用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现

// abstract抽象方法只能放在抽象类里面

// 抽象类和抽象方法用来定义标准 
// 标准：Animal这个类，要求它的子类必须包含eat方法

    /*
        abstract class Animal {
            public name: string
            constructor (name: string) {
                this.name = name
            }
            abstract eat (): any
        }
        // var a = new Animal()   // Cannot create an instance of an abstract class  无法直接实例化

        class Dog extends Animal {
            // 抽象类的子类必须实现抽象类里面的抽象方法
            constructor(name: string) {
                super(name)
            }
            eat() {
                console.log(`${this.name}吃粮食`)
            }
        }

        var d = new Dog('小黑')
        d.eat()
    */



// 5. 接口

/*
接口的作用：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规范的作用。
接口定了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规定这批类里必须提供某些方法，
提供这些方法的类就可以满足实际需要。
ts中的接口类似于Java，同时还增加了更灵活的接口类型，包括属性、函数、可索引和类。

定义标准
*/

// 5.1 属性接口  对json的约束
    /*
        function printLabel(labelledObj: {label: string}):void {
            console.log(labelledObj.label)
        }

        // printLabel('hahaha')  // 错误写法
        // printLabel({name: '张三'})  // 错误写法

        printLabel({label: '张三'})  // 正确写法
    */


// 对批量方法传入参数进行约束
// 接口：行为和动作的规范，对批量方法进行约束

//传入对象的约束   属性接口
    /* 
        interface FullName {
            firstName: string;  // 注意，以;结束
            secondName: string;
        }
        function printName (name: FullName) {
            // 必须传入对象 对象只包括firstName 和 secondName
            console.log(name.firstName + '--' + name.secondName)
        }

        function printInfo (info: FullName) {
            console.log(info.firstName + info.secondName)
        }

        // 报错 对象只包括firstName 和 secondName
        // printName({
        //     age: 20,
        //     firstName: '张',
        //     secondName: '三
        // })

        var obj = {
            age: 20,
            firstName: '张',
            secondName: '三'
        }
        printName(obj)
        printInfo(obj)
    */


// 接口：可选属性

    /*
        interface FullName {
            fistName: string;
            secondName?: string;
        }

        function getName(name: FullName) {
            console.log(name)
        }

        // 参数的顺序可以不一样
        getName({
            secondName: '三',
            fistName: '张'
        })
        getName({
            fistName: 'firstName'
        })
    */

// 案例
    /* 
        interface Config {
            type: string;
            url: string;
            data?: string;
            dataType: string;
        }

        function ajax (config: Config) {
            var xhr = new XMLHttpRequest()
            xhr.open(config.type, config.url, true)
            xhr.send(config.data)
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    console.log('成功')
                    if (config.dataType == 'json') {
                        console.log(JSON.parse(xhr.responseText))
                    } else {
                        console.log(xhr.responseText)
                    }
                }
            }
        }

        ajax({
            type: 'get',
            url: 'http://www.baidu.com',
            dataType: 'json'
        })
    */



// 5.2 函数类型接口：对方法传入的参数以及返回值进行批量约束

    // 加密的函数类型接口
        /*
            interface encrypt {
                (key: string, value: string): string;
            }

            var md5: encrypt = function (key: string, value: string): string {
                // 模拟操作
                return key + value;
            }

            console.log(md5('name', '张三'))
        */



// 5.3 可索引接口：数组、对象的约束（不常用）
    // ts定义数组的方式
    /* 
        var arr:number[] = [2313, 12321]
        var arr1:Array<string> = ['123', '341']       
    */

    // 可索引接口 对数组的约束
    /*
        interface UserArr{
            [index: number]: string
        } 

        var arr:UserArr = ['aa', 'bb']

        console.log(arr[0])
    */

    // 可索引接口 对对象的约束
    /*
        interface UserObj{
            [index: string]: string
        }

        var obj:UserObj = {name: '张三'}
    */


// 5.4 类类型接口: 对类的约束和抽象类有点类似
    /*
        interface Animal {
            name: string;
            eat (str: string): void;
        }

        class Dog implements Animal {
            name: string
            constructor(name: string) {
                this.name = name
            }

            eat () {
                console.log(this.name + '吃肉肉')
            }
        }

        var d = new Dog('小黑');
        d.eat()
    */



// 5.5 接口扩展：接口可以继承接口

    /* 
        interface Animal {
            eat (): void;
        }

        interface Person extends Animal {
            work (): void;
        }

        class Programmer{
            public name: string
            constructor (name: string) {
                this.name = name
            }
            coding (code: string) {
                console.log(this.name + code)
            }
        }

        class Web extends Programmer implements Person {
            // public name: string
            constructor (name: string) {
                super(name)
            }
            eat () {
                console.log(this.name + '喜欢吃零食')
            }
            work () {
                console.log(this.name + '不喜欢工作')
            }
        }

        var w = new Web('小洁')
        w.eat()
        w.work()
        w.coding('写ts代码')
    */



/* 
6、ts中的泛型
    6.1 泛型的定义
    6.2 泛型函数
    6.3 泛型类
    6.4 泛型接口
*/

/*
泛型：软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。
组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能

在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。这样用户就可以
以自己的数据类型来使用组件。

通俗理解：泛型就是解决 类、接口、方法的复用性，以及对不特定数据类型的支持
*/

    // 只能返回string类型的数据
        /* 
            function getData (value: string): string {
                return value
            }
        */

// 同时返回string类型和number类型
// any放弃了类型检查 传入什么，返回什么。比如：传入number类型必须返回number类型，传入string类型必须返回string类型

// 泛型：可以支持不特定的数据类型  要求：传入的参数和返回的参数一致
// T表示泛型，具体什么类型是调用这个方法的时候决定的
    /*
        function getData<T>(value:T):T {
            return value
        }

        getData<number>(124)
    */


// 泛类型：比如有个最小堆算法，需要同时支持返回数字和字符串两种类型。通过类的泛型来实现
    /* 
        class MinClass {
            public list: number[] = []
            add (num: number) {
                this.list.push(num)
            }
            min (): number {
                var minNum = this.list[0];
                for (var i = 0; i < this.list.length; i++) {
                    if (minNum > this.list[i]) {
                        minNum = this.list[i]
                    }
                }
                return minNum
            }
        }

        var m = new MinClass()
        m.add(2)
        m.add(11)
        m.add(33)
        m.add(3)

        alert(m.min())
    */


// 类的泛型
    /*
        class MinClass<T> {
            public list: T[] = []
            add (value: T): void {
                this.list.push(value)
            }
            min ():T {
                var minNum = this.list[0];
                for (var i = 0; i < this.list.length; i++) {
                    if (minNum > this.list[i]) {
                        minNum = this.list[i]
                    }
                }
                return minNum
            }
        }

        var m1 = new MinClass<number>(); // 实例化类 并且指定了类的T代表的类型是number
        m1.add(1);
        m1.add(2);
        m1.add(3);

        alert(m1.min())


        var m2 = new MinClass<string>(); // 实例化类 并且指定了类的T代表的类型是number
        m2.add('a');
        m2.add('b');
        m2.add('c');

        alert(m2.min())
    */



// 泛型接口
    // 函数类型接口
    /*
        interface ConfigFn {
            (value1: string, value2: string): string;
        }

        var setData: ConfigFn = function (value1: string, value2: string) : string {
            return value1 + value2
        }

        setData('name', '张三')
    */
    
    // 泛型接口方法1
    /*
    interface ConfigFn {
        <T>(value: T): T;
    }

    var getData: ConfigFn = function <T> (value: T) : T {
        return value
    }

    getData<string>('张三')
    */

    // 泛型接口方法2
   
    /* 
        interface ConfigFn<T> {
            (value: T): T;
        }

        function getData<T> (value: T) : T {
            return value
        }

        var myGetData:ConfigFn<string> = getData;

        myGetData('20')
    */

// 6.5 泛型类：泛型可以帮助我们避免重复的代码以及对不特定数据类型的支持(类型校验)，下面我们看看把类当做参数的泛型类

/*
1、定义一个类
2、把类作为参数来约束数据传入的类型
*/

/*
    定义一个User类，这个类的作用就是映射数据库字段
    然后定义一个MysqlDb的类，这个类用于操作数据库
    然后把User类作为参数传入到MysqlDb中
*/

    /*
    class MysqlDb <T> {
        add (data: T): boolean {
            console.log(data)
            return true
        }
        update (data: T, id: number): boolean {
            console.log(data)
            console.log(id)
            return true
        }
    }

    class User {
        username: string | undefined;
        password: string | undefined;
    }

    var u = new User()
    u.username = '张三'
    u.password = '123456'

    var db = new MysqlDb<User>()
    db.add(u)

    class ActicleCat {
        title: string | undefined;
        desc: string | undefined;
        status: number | undefined;
        constructor (params: {
            title: string | undefined,
            desc: string | undefined,
            status?: number | undefined,
        }) {
            this.title = params.title
            this.desc  = params.desc
            this.status = params.status
        }
    }

    // 增加操作
    // var a = new ActicleCat({
    //     title: '分类',
    //     desc: '11111'
    // })
    // var DB = new MysqlDb<ActicleCat>()
    // DB.add(a)

    var a = new ActicleCat({
        title: '分类',
        desc: '11111'
    })

    // 修改数据
    a.status = 0
    var DB = new MysqlDb<ActicleCat>()
    DB.update(a, 12)
    */


/*
功能：定义一个操作数据库的库  支持Mysql Mssql MongoDb
要求1： Mysql Mssql MongoDb功能一样 都有 add update delete get 方法
注意：约束统一的规范以及代码重用
解决方案：需要约束规范所以要定义接口，需要代码重用所以要用到泛型
    1、接口：在面向对象的变成中，接口是一种规范的定义，它定义了行为和动作的规范
    2、泛型 通俗理解：泛型就是解决 类 接口 方法的复用性
*/

    /*
    interface DBI <T> {
        add (info: T): boolean;
        update (info: T, id: number): boolean;
        delete (id: number): boolean;
        get (id: number): any[];
    }

    // 定义一个操作mysql数据库的类   注意：要实现泛型接口 这个类也应该是泛型类
    class MysqlDb <T> implements DBI <T> {
        add(info: T): boolean {
            console.log(info)
            return true
            throw new Error("Method not implemented.");
        }    
        update(info: T, id: number): boolean {
            throw new Error("Method not implemented.");
        }
        delete(id: number): boolean {
            throw new Error("Method not implemented.");
        }
        get(id: number): any[] {
            throw new Error("Method not implemented.");
        }
    }
    // 定义一个操作mssql数据库的类
    class MssqlDb <T> implements DBI <T> {
        add(info: T): boolean {
            throw new Error("Method not implemented.");
        }    
        update(info: T, id: number): boolean {
            throw new Error("Method not implemented.");
        }
        delete(id: number): boolean {
            throw new Error("Method not implemented.");
        }
        get(id: number): any[] {
            throw new Error("Method not implemented.");
        }
    }

    // 操作用户表
    class User {
        username: string | undefined
        password: string | undefined
    }

    var u = new User()
    u.username = '张三'
    u.password = '123456'

    var oMysql = new MysqlDb<User>()
    oMysql.add(u)
    */

/*
    模块的概念（官方）：
        关于术语的一点说明：请务必注意一点，ts1.5里术语名已经发生了变化。“内部模块”现在称作“命名空间”
        “外部模块”现在则简称为“模块”。模块在其自身的作用域里执行，而不是在全局作用域里；
        这意味着定义在一个模块里的变量、函数、类等等在模块外部是不可见的，除非你明确地使用export形式之一导出它们。
        相反，如果想使用其它模块导出的变量、函数、类、接口等的时候，你必须要导入它们，可以使用import形式之一

    模块的概念（自己理解）：
        我们可以把一些公共的功能单独抽历程一个文件作为一个模块。
        模块里面的变量、函数、类等默认是私有的，如果我们要在外部访问模块里面的数据（变量、函数、类），
        我们需要通过export暴露模块里面的数据（变量、函数、类....）
        暴露后我们通过import引入模块就可以使用模块里面暴露的数据（变量、函数、类...）
*/

    /*
        import { getData, save } from './modules/db'

        getData()
        save()
    */

    /*
        import { UserClass, UserModel } from './model/user'
        import { ActicleClass, ActicleModel } from './model/article'

        // 增加数据
        var user = new UserClass()
        user.username = '张三'
        user.password = '123456'
        UserModel.add(user)

        // 获取user表数据
        var res = UserModel.get(123)
        console.log(res)

        var a = new ActicleClass()
        a.title = '文章一'
        a.desc = '描述描述'
        ActicleModel.add(a)
    */


/*
命名空间：
    在代码量较大的情况下，为了避免各种变量命名相冲突，可将相似功能的函数、类、接口等放置到命名空间内

    同Java的包、net的命名空间一样，ts的命名空间可以将代码包裹起来，支队外暴露需要在外部访问的对象。
    命名空间内的对象通过export来暴露出去

命名空间和模块的区别：
    命名空间：内部模块，主要用于组织代码，避免命名冲突
    模块：   ts的外部模块的简称，侧重代码的复用，一个模块里可能会有多个命名空间
*/

/*
    namespace A {
        interface Animal {
            name: string;
            eat (str: string): void;
        }

        export class Dog implements Animal {
            name: string
            constructor(name: string) {
                this.name = name
            }

            eat () {
                console.log(this.name + '吃肉肉')
            }
        }

        export class Cat implements Animal {
            name: string
            constructor(name: string) {
                this.name = name
            }

            eat () {
                console.log(this.name + '吃小鱼')
            }
        }
    }

    namespace B {
        interface Animal {
            name: string;
            eat (str: string): void;
        }

        export class Dog implements Animal {
            name: string
            constructor(name: string) {
                this.name = name
            }

            eat () {
                console.log(this.name + '吃肉肉')
            }
        }

        export class Cat implements Animal {
            name: string
            constructor(name: string) {
                this.name = name
            }

            eat () {
                console.log(this.name + '吃小鱼')
            }
        }
    }

    var d = new A.Dog('小黑');
    d.eat()

    var c = new B.Cat('小花')
    c.eat()
*/

/*
装饰器：装饰器是一种特殊类型的声明，它能够被附加到类声明、方法、属性或参数上，可以修改类的行为
通俗的讲，装饰器就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能。

常见的装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器
装饰器的写法：普通装饰器（无法传参）、装饰器工厂（可传参）
装饰器是过去几年中js最大的成就之一，已是es7的标准特性之一
*/

// 1、类装饰器：类装饰器在类声明之前被声明（紧靠着类声明）。
// 类装饰器应用于类构造函数，可以用来监视、修改或者替换类定义。传入一个参数

// 1.1 类装饰器：普通装饰器（无法传参）
    /*
    function logClass (params: any) {
        console.log(params);
        // params 就是当前类
        params.prototype.apiUrl = '动态扩展的属性'

        params.prototype.run = function () {
            console.log('我是一个run方法')
        }
    }

    @logClass
    class HttpClient {
        constructor () {

        }
        getData () {

        }
    }

    var http:any = new HttpClient()
    console.log(http.apiUrl)
    http.run()
    */
    

// 1.2 类装饰器：装饰器工厂（可传参）

    /*
    function logClass (params: string) {
        return function (target: any) {
            console.log('target', target)
            console.log('params', params)

            target.prototype.apiUrl = params;
        }
    }

    @logClass('http://www.baidu.com/')
    class HttpClient {
        constructor () {

        }

        getData () {

        }
    }

    var http: any = new HttpClient()
    console.log(http.apiUrl)
    */


/*
1、类装饰器
    下面是一个重载构造函数的例子
    类装饰器表达式会在运行时当做函数被调用，类的构造函数作为其唯一的参数
    如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明
*/

    /*
    function logClass (target: any) {
        console.log(target)
        return class extends target {
            apiUrl: any = '我是修改后的数据'
            getData () {
                this.apiUrl += '-----'
                console.log(this.apiUrl) 
            }
        }
    }

    @logClass
    class HttpClient {
        public apiUrl: string | undefined
        constructor() {
            this.apiUrl = '我是构造函数里面的apiUrl'
        }

        getData () {
            console.log(this.apiUrl)
        }
    }

    var http = new HttpClient()
    http.getData()
    */


/*
    2、属性装饰器
        属性装饰器表达式会在运行时当做函数被调用，传入下列2个参数
            1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
            2、成员的名字
*/

    /*
    // 类装饰器
    function logClass (params: string) {
        return function (target: any) {
            // console.log('target', target)
            // console.log('params', params)
        }
    }

    // 属性装饰器
    function logProperty (params: any) {
        return function (target: any, attr: any) {
            console.log('target', target)
            console.log('attr', attr)
            target[attr] = params;
        }
    }

    @logClass('xxxx')
    class HttpClient {
        @logProperty('http://www.baidu.com/')
        public url: any | undefined
        constructor () {

        }

        getData () {
            console.log(this.url)
        }
    }

    var http = new HttpClient()
    http.getData()
    */


/*
   3、 方法装饰器
        它会被应用到方法的属性描述符上，可以用来监视、修改或者替换方法定义

        方法装饰器会在运行时传入下列3个参数：
        1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
        2、成员的名字
        3、成员的属性描述符
*/

    /*
    // 方法装饰器
    function get (params: any) {
        return function (target: any, methodName: any, desc: any) {
            console.log('target', target)
            console.log('methodName', methodName)
            console.log('desc', desc)

            target.apiUrl = 'xxxxx'
            target.run = function () {
                console.log('run')
            }

            // 修改装饰器的方法，把装饰器方法里面传入的所有参数改为string类型

            // 1、保存当前的方法
            var oMtheod = desc.value
            desc.value = function (...args: any[]) {
                args = args.map(value => {
                    return String(value)
                })
                console.log(args)
                oMtheod.apply(this, args)
            }
        }
    }

    class HttpClient {
        public url: any | undefined
        constructor () {

        }
        @get('http://www.baidu.com')
        getData () {
            console.log('我是getData里面的方法')
        }
    }

    var http: any = new HttpClient()
    http.getData(123, 'adas')
    */




/*
    4、方法参数装饰器
        参数装饰器表达式会在运行时当做函数被调用，可以使用参数装饰器来为类的原型增加一些元素数据，传入下列3个参数：
            1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
            2、方法的名字
            3、参数在函数参数列表中的索引
*/

    /*
    function logParams (params: any) {
        return function (target: any, methodName: any, paramsIndex: any) {
            console.log(params)
            console.log(target)
            console.log(methodName)
            console.log(paramsIndex)

            target.apiUrl = params
        }
    }

    class HttpClient {
        public url: any | undefined
        constructor () {

        }
        getData (@logParams('uuid') uuid: any) {
            console.log('我是getData里面的方法')
        }
    }

    var http: any = new HttpClient()
    http.getData(123124)

    console.log(http.apiUrl)
    */


// 装饰器执行顺序
// 属性 -> 方法 -> 方法参数 -> 类 （如果有多个同样的装饰器，它会先执行后面的）
function logClass (params: string) {
    return function (target: any) {
        console.log('类装饰器1')
    }
}
function logClass2 (params: string) {
    return function (target: any) {
        console.log('类装饰器2')
    }
}
function logAttribute (params?: string) {
    return function (target: any, attrName: any) {
        console.log('属性装饰器')
    }
}
function logMethod (params?: string) {
    return function(target: any, attrName: any, desc: any) {
        console.log('方法装饰器')
    }
}
function logParams1(params?: string) {
    return function(target: any, attrName: any, desc: any) {
        console.log('方法参数装饰器1')
    }
}
function logParams2(params?: string) {
    return function(target: any, attrName: any, desc: any) {
        console.log('方法参数装饰器2')
    }
}

@logClass('http://www.baidu.com')
@logClass2('xxxx')
class HttpClient {
    @logAttribute()
    public url: any | undefined
    constructor () {

    }
    @logMethod()
    getData () {
        return true
    }
    setData (@logParams1() attr1: any, @logParams2() attr2: any) {

    }
}

var http = new HttpClient()
