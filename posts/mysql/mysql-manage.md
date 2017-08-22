<!--$$json$$
{
"title": "Mysql数据库管理",
"subtitle": "专业人士阅读",
"date": "2017/08/12 11:53",
"tags": ["mysql"]
}
-->

# Mysql数据库管理

## 安装

- Mac: brew install mysql

## 启动服务

- Mac: mysql.server start

注意：所有涉及的文件夹需要权限、mysqld没有冲突（不能开启两个mysqld程序）.

## 添加用户和修改用户密码

1. 添加用户

    ```shell
    use mysql
    create user 'username'@'host' IDENTIFIED BY 'password';
    grant privileges on databasename.tablename to 'username'@'host'

    PS: privileges - 用户的操作权限,如SELECT , INSERT , UPDATE 等(详细列表见该文最后面).如果要授予所的权限则使用ALL.;databasename - 数据库名,tablename-表名,如果要授予该用户对所有数据库和表的相应操作权限则可用\*表示, 如\*.\*.
    ```

1. 修改用户密码

    ```shell
    use mysql
    update user set authentication_string=password('password') where user='username' and Host = 'localhost';

    set password for 'username'@'host'=password('newpassword');
    ```