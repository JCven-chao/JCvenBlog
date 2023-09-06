# 一. MySQL

### 1. 常见命令

```shell
# 查看版本
mysql --version
# 登录
mysql -h localhost -P 3306 -u root -p123456
```

### 2. 分类

- DDL: 数据定义语言，用来定义数据库对象（数据库、表、字段）
- DML: 数据操作语言，用来对数据库表中的数据进行增删改
- DQL: 数据查询语言，用来查询数据库中表的记录
- DCL: 数据控制语言，用来创建数据库用户、控制数据库的控制权限

#### 语法规则

1. SQL语句可以单行或多行书写，以分号结尾

2. SQL语句可以使用空格/缩进来增强语句的可读性。

3. MySQL数据库的SQL语句不区分大小写，关键字建议使用大写。

4. 注释： 单行注释：--  或 #  多行注释：/* 注释内容 */

   

### 3. 数据类型

#### 数值类型

| 数值类型     | 大小             | 描述               |
| ------------ | ---------------- | ------------------ |
| TINEINT      | 1 byte           | 小整数值           |
| SMALLINT     | 2 byte           | 大整数值           |
| MEDIUMINT    | 3 byte           | 大整数值           |
| INT或INTEGER | 4 byte           | 大整数值           |
| BIGINT       | 8 byte           | 极大整数值         |
| FLOAT        | 4 byte           | 单精度浮点值       |
| DOUBLE       | 8 byte           | 双精度浮点值       |
| DECIMAL      | 依赖M精度和D标度 | 小数值(精确定点数) |

+ 无符号范围 需要在后面加 UNSIGNED

+ DOUBLE(M，D) m代表精度即总长度，d代表标度即小数点后面有几位



#### 字符串类型

| 字符串类型 | 大小 (bytes) | 描述                      |
| ---------- | ------------ | ------------------------- |
| CHAR       | 0-255        | 定长字符串                |
| VARCHAR    | 0-65535      | 变长字符串                |
| TINYBLOB   | 0-255        | 不超过255字符的二进制数据 |
| TINYTEXT   | 0-255        | 短文本字符串              |
| BLOB       | 0-65535      | 二进制形式的长文本数据    |
| TEXT       | 0-65535      | 长文本数据                |
| MEDIUMBLOB | 0-16777215   | 二进制形式中等文本数据    |
| MEDIUMTEXT | 0-16777215   | 中等文本数据              |
| LONGBLOB   | 0-4294967295 | 二进制形式极大文本数据    |
| LONGTEXT   | 0-4294967295 | 极大文本数据              |



#### 日期类型

| 日期类型  | 大小 | 范围                                       | 格式                | 描述             |
| --------- | ---- | ------------------------------------------ | ------------------- | ---------------- |
| DATE      | 3    | 1000-01-01 至 9999-12-31                   | YYYY-MM-DD          | 日期值           |
| TIME      | 3    | -838:59:59 至 838:59:59                    | HH:MM:SS            | 时间值或持续时间 |
| YEAR      | 1    | 1901 至 2155                               | YYYY                | 年份值           |
| DATETIME  | 8    | 1000-01-01 00:00:00 至 9999-12-31 23:59:59 | YYYY-MM-DD HH:MM:SS | 混合日期时间值   |
| TIMESTAMP | 4    | 1970-01-01 00:00:01 至 2038-01-19 03:14:07 | YYYY-MM-DD HH:MM:SS | 混合日期时间值   |



### 4. DDL数据定义语言

#### 1. DDL数据库操作

```mysql
#1. 查询所有数据库
SHOW DATABASES;

#2. 创建数据库
CREATE DATABASE 数据库名称;
CREATE DATABASE [IF NOT EXISTS] 数据库名称 [DEFAULT CHARSET 字符集] [COLLATE 排序规则];

#3. 删除数据库
DROP DATABASE [IF EXISTS] 数据库名称;

#4. 使用数据库
USE 数据库名;

#5. 查询当前数据库
SELECT DATABASE();
```

1. 方括号[]里的内容可根据情况选填
2. 字符集通常使用UTF8mb4



#### 2. DDL表操作

```mysql
#1. 查询当前数据库所有表
SHOW TABLES;

#2. 查询表结构
DESC 表名;

#3. 查询表的详细信息
SHOW CREATE TABLE 表名;

#4. 创建表
CREATE TABLE 表名(
	字段 类型 [COMMENT 注释],
    ...
    字段 类型 [COMMENT 注释]
)[COMMENT 注释];

#5. 添加字段
ALTER TABLE 表名 ADD 字段名 类型(长度) [comment 注释];

#6. 修改数据类型
ALTER TABLE 表名 MODIFY 字段名 新数据类型(长度) [comment 注释];

#7. 修改字段名和类型
ALTER TABLE 表名 CHANGE 旧字段名 新字段名 类型(长度) [comment 注释];

#8. 删除字段
ALTER TABLE 表名 DROP 字段名;

#9. 修改表名
ALTER TABLE 表名 RENAME TO 新表名;

#10. 删除表
DROP TABLE [IF EXISTS] 表名;

#11. 删除指定表并重新创建该表
TRUNCATE TABLE 表名;
```

```mysql
-- 创建一个表
create table user(
    id int comment '编号',
    name varchar(50) comment '姓名',
    age int comment '年龄'
)comment '用户表';
```



### 5. DML数据操作语言

#### 1. DML数据操作

```mysql
#1. 给指定字段添加数据
INSERT INTO 表名(字段名1, 字段名2,...) VALUES(值1, 值2,...);

#2. 给全部字段添加数据
INSERT INTO 表名 VALUES(值1, 值2,...);

#3. 批量添加数据
INSERT INTO 表名(字段名1, 字段名2,...) VALUES(值1, 值2,...),(值1, 值2,...),(值1, 值2,...);
INSERT INTO 表名 VALUES(值1, 值2,...),(值1, 值2,...),(值1, 值2,...);

#4. 修改数据
UPDATE 表名 SET 字段名1=值1, 字段名2=值2,...[WHERE 条件];

#5. 删除数据
DELETE FROM 表名 [WHERE 条件];
```

```mysql
-- 修改id为1的数据将name修改为JCven
UPDATE user set name = 'JCven' WHERE id = 1;

-- 修改所有age为18
UPDATE user set age = 18;

-- 删除id为1的数据
DELETE FROM user WHERE id = 1;

-- 删除所有
DELETE FORM user;
```

1. 添加数据时需要一一对应

2. 修改语句的条件如果没有则会修改整张表的所有数据

3. 删除语句不能删除某一个字段的值，要删除某字段的值用UPDATE 置为null

4. 删除语句的条件如果没有则会删除整张表的所有数据



### 6. DQL数据查询语言

#### 1. 基本查询

```mysql
#1. 查询多个字段
SELECT 字段1, 字段2,... FROM 表名;
SELECT * FROM 表名;
#2. 设置别名
SELECT 字段1[AS 别名1], 字段2[AS 别名2]... FROM 表名;
#3. 去除重复记录
SELECT DISTINCT 字段列表 FROM 表名;
```

```mysql
-- 查询所有date 起别名为生日(as 可省)
SELECT date AS '生日' FROM user;
-- 查询所有年龄(去除重复)
SELECT DISTINCT date AS '生日' FROM user;
```

#### 2. 条件查询

```mysql
#1. 条件查询
SELECT 字段列表 FROM 表名 WHERE 条件列表;
```

| 条件运算符       |                                         |
| ---------------- | --------------------------------------- |
| <> 或 !=         | 不等于                                  |
| BETWEEN...AND... | 在某个范围内(含最大最小值)              |
| IN(...)          | 在in之后的列表中的值，多选一            |
| LIKE 占位符      | 模糊匹配( _匹配单个字符，%匹配任意字符) |
| IS NULL          | 是NULL                                  |
| AND 或 &&        | 且运算 同时成立                         |
| OR 或 \|\|       | 或运算 任意成立                         |
| NOT 或 ！        | 非运算 否定                             |

```mysql
-- 查询年龄在15-20的人员
SELECT *FROM user WHERE age>=15 && age<= 20;
SELECT *FROM user WHERE age>=15 AND age<= 20;
SELECT *FROM user WHERE age BETWEEN 15 AND 20;

-- 查询年龄是15或20或25的人员
SELECT *FROM user WHERE age in(15,20,25);

-- 查询姓名为三个字的人员(三个下划线)
SELECT *FROM user WHERE name LIKE '___'; 

-- 查询年龄最后一位是8的人员
SELECT *FROM user WHERE age LIKE '%8';
```

#### 3. 聚合函数

| 函数  | 功能     |
| ----- | -------- |
| count | 统计数量 |
| max   | 最大值   |
| min   | 最小值   |
| avg   | 平均值   |
| sum   | 求和     |

```mysql
SELECT 聚合函数(字段列表) FROM 表名;
```

```mysql
-- 查询年龄的总和
SELECT SUM(age) FROM user;
-- 查询员工的平均年龄
SELECT AVG(age) FROM user;
```

1. null值不参加所有聚合函数运算

#### 4. 分组查询

```mysql
# 分组查询
SELECT 字段列表 FROM 表名 [WHERE 条件] GROUP BY 分组字段名 [HAVING 分组后过滤条件];
```

```mysql
-- 根据性别分组,统计男性员工和女性员工的数量
SELECT gender, COUNT(*) FROM user GROUP BY gender;

-- 查询年龄小于25的员工,并根据工作地址分组，获取员工数量大于等于3的工作地址
SELECT workaddress, COUNT(*) FROM user WHERE age<25 GROUP BY workaddress HAVING COUNT(*)>=3;
```

1. where是分组之前过滤，不满足where条件的不参与分组 having是对分组之后的结果进行过滤
2. where不能对聚合函数进行判断，having可以
3. 执行顺序 where>聚合函数>having

#### 5. 排序查询

```mysql
#升序 asc (可省略)  降序 desc
SELECT 字段列表 FROM 表名 ORDER BY 字段1 排序方式1, 字段2 排序方式2;
```

```mysql
-- 根据年龄对员工进行升序排序
SELECT *FROM user ORDER BY age ASC; # ASC可省略

-- 根据年龄对员工进行升序排序,年龄相同的按照生日进行降序排序
SELECT *FROM user ORDER BY age ASC, date desc;
```

#### 6. 分页查询

```mysql
#分页查询
SELECT 字段列表 FROM 表名 LIMIT 起始索引, 查询记录数
```

```mysql
-- 查询第一页员工数据,每页展示10条
SELECT *FROM user LIMIT 0,10;
SELECT *FROM user LIMIT 10;
-- 查询第二页员工数据,每页展示10条
SELECT *FROM user LIMIT 10,10;
```

1. 起始索引从0开始 起始索引=(查询页码-1)*每页显示记录数
2. 如果查询的是第一页数据, 起始索引可以省略, 直接写limit10

#### 7. 执行顺序

| 执行顺序 | 关键字   | 释义           |
| -------- | -------- | -------------- |
| 1        | FROM     | 表名列表       |
| 2        | WHERE    | 条件列表       |
| 3        | GROUP BY | 分组字段列表   |
| 4        | HAVING   | 分组后条件列表 |
| 5        | SELECT   | 字段列表       |
| 6        | ORDER BY | 排序字段列表   |
| 7        | LIMIT    | 分页参数       |

### 7. DCL数据控制语言

#### 1. 用户管理

```mysql
#1. 查询用户
USE mysql;
SELECT *FROM user;
#2. 创建用户
CREATE USER '用户名'@'主机名' IDENTIFIED BY '密码';
CREATE USER '用户名'@'%' IDENTIFIED BY '密码';
#3. 修改用户密码
ALTER USER '用户名'@'主机名' IDENTIFIED WITH mysql_native_password BY '新密码';
#4. 删除用户
DROP USER '用户名'@'主机名';
```

#### 2. 权限控制

| 权限   | 说明               |
| ------ | ------------------ |
| ALL    | 所有权限           |
| SELECT | 查询数据           |
| INSERT | 插入数据           |
| UPDATA | 修改数据           |
| DELETE | 删除数据           |
| ALTER  | 修改表             |
| DROP   | 删除数据库/表/视图 |
| CREATE | 创就数据库/表      |

```mysql
#1. 查询权限
SHOW GRANTS FOR '用户名'@'主机名'
#2. 授予权限
GRANT 权限列表 ON 数据库.表名 TO '用户名'@'主机名';
#3. 撤销权限
REVOKE 权限列表 ON 数据库.表名 FROM '用户名'@'主机名';
```

### 8. 函数

#### 1. 字符串函数

| 函数                     | 功能                                                    |
| ------------------------ | ------------------------------------------------------- |
| CONCAT(S1, S2, ...Sn)    | 字符串拼接，将S1,S2...Sn拼接成一个字符串                |
| LOWER(str)               | 将字符串str全部转化为小写                               |
| UPPER(str)               | 将字符串str全部转化为大写                               |
| LPAD(str,n,pad)          | 左填充，用字符串pad对str左边进行填充，达到n个字符串长度 |
| RPAD(str,n,pad)          | 右填充，用字符串pad对str左边进行填充，达到n个字符串长度 |
| TRIM(str)                | 去掉字符串头部和尾部的空格                              |
| SUBSTRING(str,start,len) | 返回从字符串str从start位置起的len个长度的字符串         |

```mysql
-- 更新员工工号为5位数, 不足的前面补0
UPDATE emp set worknumber = lpad(worknumber, 5, '0');
```

#### 2. 数值函数

| 函数       | 功能                         |
| ---------- | ---------------------------- |
| CELT(x)    | 向上取整                     |
| FLOOR(x)   | 向下取整                     |
| MOD(x,y)   | 返回x/y的模                  |
| RAND()     | 返回0~1内的随机数            |
| ROUND(x,y) | 求x的四舍五入值，保留y位小数 |

#### 3. 日期函数

| 函数                              | 功能                                               |
| --------------------------------- | -------------------------------------------------- |
| CURDATE()                         | 返回当前日期                                       |
| CURTIME()                         | 返回当前时间                                       |
| NOW()                             | 返回当前日期和时间                                 |
| YEAR(date)                        | 获取指定date的年份                                 |
| MONTH(date)                       | 获取指定date的月份                                 |
| DAY(date)                         | 获取指定date的日期                                 |
| DATE_ADD(date,INTERVAL expr type) | 返回一个日期/时间值 加上一个时间间隔expr后的时间值 |
| DATEDIFF(date1,date2)             | 返回起始时间date1和结束时间date2之间的天数         |

#### 4. 流程函数

| 函数                                                     | 功能                                                    |
| -------------------------------------------------------- | ------------------------------------------------------- |
| IF(value,t,f)                                            | 如果value为true则返回t，否则返回f                       |
| IFNULL(value1,value2)                                    | 如果value不为空则返回value1，否则返回value2             |
| CASE WHEN [val1] THEN [res1]...ELSE [default] END        | 如果val1为true，返回res1,...否则返回default默认值       |
| CASE [expr] WHEN [val1] THEN [res1]...ELSE [default] END | 如果expr的值等于val1，返回res1,...否则返回default默认值 |

### 9. 约束

#### 1. 常用约束

| 关键字      | 约束     | 描述                                                   |
| ----------- | -------- | ------------------------------------------------------ |
| NOT NULL    | 非空约束 | 限制该字段的数据不能为null                             |
| UNIQUE      | 唯一约束 | 保证该字段的所有数据唯一且不重复                       |
| PRIMARY     | 主键约束 | 主键是一行数据的唯一标识，要求非空且唯一               |
| DEFAULT     | 默认约束 | 保存数据时，如果未指定该字段的值则采用默认值           |
| CHECK       | 检查约束 | 保证字段值满足某一个条件                               |
| FOREIGN KEY | 外键约束 | 用来让两张表的数据之间建立连接，保证数据一致性和完整性 |

1. 约束作用于表中字段上的，在创建表或修改表的时候添加约束

```mysql
-- 创建表要求
-- 1. id为主键 且自动增长
-- 2. name不为空 且唯一
-- 3. age大于0且小于等于120
-- 4. status默认为1
create table emp(
    id int primary key auto_increment comment '主键',
    name varchar(10) not null unique comment '姓名',
    age int check ( age>0&&age<120 )comment '年龄',
    status char(1) default '1' comment '状态',
    gender char(1) comment '性别'
);
```

#### 2. 外键约束

```mysql
#添加外键
CREATE TABLE 表名(
	...
    [CONSTRAINT][外键名称] FOREIGN KEY (外键字段名) REFERENCES 主表(主列表名)
);
#或者
ALTER TABLE 表名 ADD CONSTRAINT 外键名称 FOREIGN KEY (外键字段名) REFERENCES 主表(主列表名);
#删除外键
ALTER TABLE 表名 DROP FOREIGN KEY 外键名称;
```

```mysql
-- 对user表添加外键emp_dept_id
ALTER TABLE user ADD CONSTRAINT dept_id FOREIGN KEY (dept_id) REFERENCES dept(id);
-- 删除emp_dept_id外键
ALTER TABLE user DROP FOREIGN KEY emp_dept_id;
```

| 行为        | 说明                                                         |
| ----------- | ------------------------------------------------------------ |
| NO ACTION   | 当在父表中删除/更新对应记录时，先检查该记录是否有外键，若有则不允许删除/更新 |
| RESTRICT    | 当在父表中删除/更新对应记录时，先检查该记录是否有外键，若有则不允许删除/更新 |
| CASCADE     | 当在父表中删除/更新对应记录时，先检查该记录是否有外键，若有则也删除/更新子表中的记录 |
| SET NULL    | 当在父表中删除对应记录时，先检查该记录是否有外键，若有则设置子表外键值为null |
| SET DEFAULT | 父表变更时，子表将外键列设置成一个默认的值                   |

```mysql
-- 外键删除更新行为CASCADE
ALTER TABLE user ADD CONSTRAINT dept_id FOREIGN KEY (dept_id) REFERENCES dept(id) ON UPDATE CASCADE ON DELETE CASCADE;
-- 外键删除更新行为SET NULL
ALTER TABLE user ADD CONSTRAINT dept_id FOREIGN KEY (dept_id) REFERENCES dept(id) ON UPDATE SET NULL ON DELETE SET NULL;
```

### 10. 多表查询

一对多(多对一)通过外键来关联

多对多 建立中间表来维护两方

一对一 多用于单表拆分

#### 1. 内连接

内连接查询的是两张表交集的部分

```mysql
#1. 隐式内连接
SELECT 字段列表 FROM 表1,表2 WHERE 条件...;
#2. 显示内连接
SELECT 字段列表 FROM 表1 [INNER] JOIN 表2 ON 连接条件;
```

```mysql
-- 查询每个员工的姓名及关联的部门的名称隐式内连接
SELECT emp.name, dept.name FROM emp,dept where emp.dept_id = dept.id;
-- 显示内连接
SELECT emp.name, dept.name FROM emp JOIN dept ON emp.dept_id = dept.id;
```

1. 如果给表起了别名就不能通过表名.字段来限定

#### 2. 外连接

```mysql
#左外连接(左表+交集)
SELECT 字段列表 FROM 表1 LEFT [OUTER] JOIN 表2 ON 条件;
#右外连接(右表+交集)
SELECT 字段列表 FROM 表1 RIGHT [OUTER] JOIN 表2 ON 条件;
```

```mysql
-- 查询emp表的所有数据和对应的部门信息(左外连接)
SELECT emp.*, dept.name FROM emp LEFT JOIN dept ON emp.dept_id = dept.id;
-- 查询dept表的所有数据和对应的员工信息(右外连接)
SELECT emp.*, dept.* FROM emp RIGHT JOIN dept ON emp.dept_id = dept.id;
```

#### 3. 自连接

```mysql
# 自连接
SELECT 字段列表 FROM 表A 别名A JOIN 表A 别名B ON 条件;
```

```mysql
-- 查询员工及其所属领导的名字(自内连接)
SELECT a.name, b.name FROM emp a, emp b where a.managerid = b.id;
-- 查询员工及其所属领导的名字,没有领导也要查询出来(自外连接)
SELECT a.name, b.name FROM emp a LEFT JOIN emp b ON a.managerid = b.id;
```

1. 自连接查询可以是内连接查询也可以是外连接查询
2. 自连接必须起别名

#### 4. 联合查询

```mysql
#联合查询
SELECT 字段列表 FROM 表A ...
UNION[ALL]
SELECT 字段列表 FROM 表B ...;
```

```mysql
-- 查询薪资低于5000的员工和年龄大于50岁的员工
SELECT *FROM emp WHERE salary <5000
UNION ALL
SELECT *FROM emp WHERE age > 50;
-- 合并后去重(去掉ALL即可)
SELECT *FROM emp WHERE salary <5000
UNION
SELECT *FROM emp WHERE age > 50;
```

1. 联合查询到多张表的列数必须保持一致,字段类型也需要保持一致

#### 5. 子查询

```mysql
#子查询(嵌套查询)
SELECT *FORM t1 WHERE conlumn1 = (SELECT conlumn1 FROM t2);
```

**标量子查询**

```mysql
#1. 标量子查询(返回单个值)
#常用操作符 > < >= <= = !=
-- 查询"销售部"的所有员工信息
SELECT *FROM emp WHERE dept_id = (SELECT id FROM dept where name = '销售部');
-- 查询在"Tom"之后入职的员工信息
SELECT *FROM emp WHERE entrydate > (SELECT entrydate FROM emp where name = 'Tom');
```

**列子查询**

| 操作符 | 描述                                  |
| ------ | ------------------------------------- |
| IN     | 在指定的集合范围内,多选一             |
| NOT IN | 不在指定的集合范围之内                |
| ANY    | 子查询返回列表中有任意一个满足即可    |
| SOME   | 与ANY相同,使用SOME的地方都可以使用ANY |
| ALL    | 子查询返回列表的所有值都必须满足      |

```mysql
#2. 列子查询(返回一列,可以是多行)
#常用操作符 IN,NOT IN,ANY,SOME,ALL
-- 查询销售部和市场部的所有员工信息
SELECT *FROM emp WHERE dept_id IN (SELECT id FROM dept WHERE name = '销售部' OR name = '市场部');
-- 查询比财务部所有人工工资都高的员工信息
SELECT *FROM emp WHERE salary > ALL (SELECT salary FROM emp WHERE dept_id = (SELECT id FROM dept WHERE name = '财务部'));
-- 查询比研发部中任意一人工资高的员工信息
SELECT *FROM emp WHERE salary > ANY (SELECT salary FROM emp WHERE dept_id = (SELECT id FROM dept WHERE name = '研发部'));
```

**行子查询**

```mysql
#3. 行子查询(返回一行,可以是多列)
#常用操作符 =,<,>,IN,NOT IN
-- 查询与Tom的薪资及直属领导相同的员工信息
SELECT *FROM emp WHERE (salary, managerid) = (SELECT salary, managerid FROM emp WHERE name = 'Tom');
```

**表子查询**

```mysql
#4. 表子查询
#常用操作符 IN
-- 查询与 Tom, Jack 的职位和薪资相同的员工信息
SELECT *FROM emp WHERE (job, salary) IN (SELECT salary, managerid FROM emp WHERE name = 'Tom' OR name = 'Jack');
-- 查询入职日期在2006-01-01之后的员工信息
SELECT e.*, d.* FROM (SELECT *FROM emp WHERE entrydate > '2006-01-01') e LEFT JOIN dept d ON e.dept_id = d.id;
```

1. 子查询外部也可以是 INSERT / UPDATE / DELETE / SELECT 任意一个

2. 子查询位置 WHERE之后 / FROM之后 / SELECT之后

### 11. 事务

事务的四大特性ACID

| 特性   | 描述                                                   |
| ------ | ------------------------------------------------------ |
| 原子性 | 事务是不可分割的最小操作单元,要么全部成功,要么全部失败 |
| 一致性 | 事务完成时,必须是所有的数据都保持一致状态              |
| 隔离性 | 数据库系统提供的隔离机制,保证事务不收外部并发影响操作  |
| 持久性 | 事务一旦提交或者回滚,它对数据库的数据改变是永久的      |

事务操作1

```mysql
# 查看事务提交方式(1代表自动,0代表手动)
SELECT @@autocommit;
# 设置事务提交方式
SET @@autocommit = 0;
# 提交事务
COMMIT;
# 回滚事务
ROLLBACK;
```

事务操作2

```mysql
# 开启事务
START TRANSACTION 或 BEGIN
# 提交事务
COMMIT;
# 回滚事务
ROLLBACK;
```

并发事务问题

| 问题       | 描述                                                 |
| ---------- | ---------------------------------------------------- |
| 脏读       | 一个事务读到另外一个事务还没有提交的数据             |
| 不可重复读 | 一个事务先后读取同一条数据,但两次读取的数据不同      |
| 幻读       | 一个事务查询数据时没有数据,但插入数据时,数据已经存在 |

事务隔离级别

| 隔离级别              | 脏读 | 不可重复读 | 幻读 |
| --------------------- | ---- | ---------- | ---- |
| Read uncommitted      | √    | √          | √    |
| Read committed        | ×    | √          | √    |
| Repeatable Read(默认) | ×    | ×          | √    |
| Serializable          | ×    | ×          | ×    |

```mysql
# 查看事务的隔离级别
SELECT @@TRANSACTION_ISOLATION;
# 设置事务的隔离级别
SET[SESSION|GLOBAL] TRANSACTION_ISOLATION LEVEL {隔离级别}
```



# 二. 高级篇

#### 1. 存储引擎

```mysql
# 查询当前数据库支持的存储引擎
SHOW ENGINES;

# 创建表并指定存储引擎
CREATE TABLE MY_MYISAS(
	id int,
    name varchar(10)
) ENGINE = MyISAM;
```

#### 2. InnoDB

InnoDB是兼顾高性能和高可靠的通用存储引擎, 在MySQL5.5之后的默认存储引擎

特点: DML操作遵循ACID模型, 支持事物

行级锁, 提高并发访问性能

支持外键foreign key约束, 保证数据的完整性和正确性

每一张InnoDB的表都有一个表空间XXX.ibd文件



InnoDB引擎与MyISAM引擎的区别 ?

①. InnoDB引擎, 支持事务, 而MyISAM不支持。

②. InnoDB引擎, 支持行锁和表锁, 而MyISAM仅支持表锁, 不支持行锁。

③. InnoDB引擎, 支持外键, 而MyISAM是不支持的。



#### 3. 索引





# 三. JDBC

### 1. 入门

创建工程,导入相应的jar包

```java
public class JDBC01 {
    public static void main(String[] args) throws Exception {
        //1. 注册驱动(可省略)
        Class.forName("com.mysql.cj.jdbc.Driver");
        //2. 获取连接
        // 	 如果是默认的本机端口可以写成"jdbc:mysql:///db01"
        String url = "jdbc:mysql://127.0.0.1:3306/db01";
        String username = "root";
        String password = "123456";
        Connection connection = DriverManager.getConnection(url, username, password);
        //3. 定义sql语句
        String sql = "update user set age = 88 where id = 1";
        //4. 获取执行sql的对象Statement
        Statement statement = connection.createStatement();
        //5. 执行sql
        int count = statement.executeUpdate(sql);//返回受影响的行数
        //6. 处理结果
        System.out.println(count);
        //7.释放资源
        statement.close();
        connection.close();

    }
}
```

### 2. JDCB API详解

#### 1. DriverManager

1. 注册驱动
2. 获取数据库连接

```java
//可省略
Class.forName("com.mysql.cj.jdbc.Driver");
```

#### 2. Connection

1. 获取执行SQL对象

   ```java
   // 普通执行SQL对象
   Statement  create Statement();
   // 预编译SQL的执行SQL对象(防止SQL注入)
   PrepareStatement prepareStatement(sql);
   // 执行存储过程的对象
   CallableStatement prepareCall(sql);
   ```

2. 事务管理

   ```java
   // 开启事务 false表示手动提交
   setAutoCommit(false);
   // 提交事务
   commit();
   // 回滚事务
   rollback()
   ```

   ```java
   // 通过异常处理机制来处理事务
   try {
       // 开启事务
       connection.setAutoCommit(false);
       // 执行sql
       int count = statement.executeUpdate(sql);//返回受影响的行数
       // 处理结果
       System.out.println(count);
       // 提交事务
       connection.commit();
   } catch (Exception e) {
       // 回滚事务
       connection.rollback();
       throw new RuntimeException(e);
   }
   ```

#### 3. Statement

1. 执行SQL语句

   ```java
   // 执行DML,DDL语句
   int executeUpdate(sql);//返回受影响的行数
   // 执行DQL语句
   ResultSet executeQuery(sql);//返回结果对象集
   // 获取查询结果
   bollean next();//将光标从当前位置向下移动一行,判断当前行是否为有效行
   // 获取数据
   getxxx(参数);//参数中若为int从1开始,string则为列的名称
   ```
   
   ```java
   //
   ResultSet resultSet = statement.executeQuery(sql);
   while(resultSet.next()){
       //获取数据 参数可以用
       resultSet.getInt(1);
       resultSet.getString(2);
       resultSet.getDouble(3);
   }
   ```

#### 4. PreparedStatement

1. 防止sql注入步骤

   ```java
   //1. 定义sql (?作为占位符)
   String sql = "select *from user where username = ? and password = ?";
   //2. 获取对象
   PreparedStatement pstmt = connection.prepareStatement(sql);
   //3. 设置?的值
   pstmt.setString(1, name);
   pstmt.setString(2, psd);
   //4. 执行sql
   ResultSet rs = pstmt.executeQuery();
   ```

### 3. 数据库连接池

Driud使用

```java
//1. 导入jar包
//2. 定义配置文件
//3. 加载配置文件
Properties properties = new Properties();
properties.load(new FileInputStream(""));
//4. 获取连接池对象
DataSource dataSource =  DruidDateSourceFactory.createDataSource(properties);
//5. 获取数据库连接
Connection connection = dataSource.getConnection();
```

