<!--$$json$$
{
"title": "Strange: the IoC framework for Unity",
"subtitle": "翻译此文是一种美德",
"date": "2015-12-10 18:03",
"tags": ["StrangeIoc", "Unity3d"]
}
-->


# 概述

Strange 是针对C#、Unity而写的超轻量级和高可扩展控制反转（Inversion of Control，英文缩写为IoC）框架。

我们可以有效运用在web、单机（standalone）、iOS 和 Android，它包含了如下特点，而且很多都是可选的。

- 核心绑定框架（Binding Framework）：绑定`单个或多个任何东西`到`单个或多个任何东西`。
- 依赖注入（Dependency Injection）
    - 映射为单例(Singleton)、值(Value)或者工厂(Factory，你可以在任何时候获取实例)
    - 名称注入(Name Injections)
    - 执行构造（constructor）或 setter 注入
    - 标记执行构造函数
    - 标记执行解除构造函数的方法
    - 注入MonoBehaviours
    - 多态绑定(Bind polymorphically，绑定任何或多个接口到一个具体的类)
    - 反射绑定(Reflection Binding)极大地降低了使用反射率的开销
- 两种分发消息的风格（IEvent\Signals)
    - 两者都可以分发事件到你项目的任何地方
    - 两者都可以在同一上下文中传递消息
    - 两者都可以传递事件到Command类中，以此来隔离业务逻辑
    - 新的Signals运行添加了安全类型。
- MonoBehaviour解调
    - 很好的帮助分割应用中的不同view
    - 保持Unity特有的代码风格，方便能从其它应用中复用
- 可选的MVCS (Model/View/Controller/Service)架构
- 允许多个上下文（Multiple contexts）
    - 允许在上下文中，包含子组件
    - 允许上下文之间可以通信
- 不用思考你需要什么？核心的绑定框架是可以扩展的。构建新的绑定对象，例如：
    - 不同类型的消息传递者(dispatcher)
    - 一个实体框架(Entity Framework)
    - 一个multi-loader（译者：我也不知道是什么）
