import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,f as e}from"./app-a3284d02.js";const t={},d=e(`<h1 id="一-mysql" tabindex="-1"><a class="header-anchor" href="#一-mysql" aria-hidden="true">#</a> 一. MySQL</h1><h3 id="_1-常见命令" tabindex="-1"><a class="header-anchor" href="#_1-常见命令" aria-hidden="true">#</a> 1. 常见命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看版本</span>
mysql <span class="token parameter variable">--version</span>
<span class="token comment"># 登录</span>
mysql <span class="token parameter variable">-h</span> localhost <span class="token parameter variable">-P</span> <span class="token number">3306</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p123456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-分类" tabindex="-1"><a class="header-anchor" href="#_2-分类" aria-hidden="true">#</a> 2. 分类</h3><ul><li>DDL: 数据定义语言，用来定义数据库对象（数据库、表、字段）</li><li>DML: 数据操作语言，用来对数据库表中的数据进行增删改</li><li>DQL: 数据查询语言，用来查询数据库中表的记录</li><li>DCL: 数据控制语言，用来创建数据库用户、控制数据库的控制权限</li></ul><h4 id="语法规则" tabindex="-1"><a class="header-anchor" href="#语法规则" aria-hidden="true">#</a> 语法规则</h4><ol><li><p>SQL语句可以单行或多行书写，以分号结尾</p></li><li><p>SQL语句可以使用空格/缩进来增强语句的可读性。</p></li><li><p>MySQL数据库的SQL语句不区分大小写，关键字建议使用大写。</p></li><li><p>注释： 单行注释：-- 或 # 多行注释：/* 注释内容 */</p></li></ol><h3 id="_3-数据类型" tabindex="-1"><a class="header-anchor" href="#_3-数据类型" aria-hidden="true">#</a> 3. 数据类型</h3><h4 id="数值类型" tabindex="-1"><a class="header-anchor" href="#数值类型" aria-hidden="true">#</a> 数值类型</h4><table><thead><tr><th>数值类型</th><th>大小</th><th>描述</th></tr></thead><tbody><tr><td>TINEINT</td><td>1 byte</td><td>小整数值</td></tr><tr><td>SMALLINT</td><td>2 byte</td><td>大整数值</td></tr><tr><td>MEDIUMINT</td><td>3 byte</td><td>大整数值</td></tr><tr><td>INT或INTEGER</td><td>4 byte</td><td>大整数值</td></tr><tr><td>BIGINT</td><td>8 byte</td><td>极大整数值</td></tr><tr><td>FLOAT</td><td>4 byte</td><td>单精度浮点值</td></tr><tr><td>DOUBLE</td><td>8 byte</td><td>双精度浮点值</td></tr><tr><td>DECIMAL</td><td>依赖M精度和D标度</td><td>小数值(精确定点数)</td></tr></tbody></table><ul><li><p>无符号范围 需要在后面加 UNSIGNED</p></li><li><p>DOUBLE(M，D) m代表精度即总长度，d代表标度即小数点后面有几位</p></li></ul><h4 id="字符串类型" tabindex="-1"><a class="header-anchor" href="#字符串类型" aria-hidden="true">#</a> 字符串类型</h4><table><thead><tr><th>字符串类型</th><th>大小 (bytes)</th><th>描述</th></tr></thead><tbody><tr><td>CHAR</td><td>0-255</td><td>定长字符串</td></tr><tr><td>VARCHAR</td><td>0-65535</td><td>变长字符串</td></tr><tr><td>TINYBLOB</td><td>0-255</td><td>不超过255字符的二进制数据</td></tr><tr><td>TINYTEXT</td><td>0-255</td><td>短文本字符串</td></tr><tr><td>BLOB</td><td>0-65535</td><td>二进制形式的长文本数据</td></tr><tr><td>TEXT</td><td>0-65535</td><td>长文本数据</td></tr><tr><td>MEDIUMBLOB</td><td>0-16777215</td><td>二进制形式中等文本数据</td></tr><tr><td>MEDIUMTEXT</td><td>0-16777215</td><td>中等文本数据</td></tr><tr><td>LONGBLOB</td><td>0-4294967295</td><td>二进制形式极大文本数据</td></tr><tr><td>LONGTEXT</td><td>0-4294967295</td><td>极大文本数据</td></tr></tbody></table><h4 id="日期类型" tabindex="-1"><a class="header-anchor" href="#日期类型" aria-hidden="true">#</a> 日期类型</h4><table><thead><tr><th>日期类型</th><th>大小</th><th>范围</th><th>格式</th><th>描述</th></tr></thead><tbody><tr><td>DATE</td><td>3</td><td>1000-01-01 至 9999-12-31</td><td>YYYY-MM-DD</td><td>日期值</td></tr><tr><td>TIME</td><td>3</td><td>-838:59:59 至 838:59:59</td><td>HH:MM:SS</td><td>时间值或持续时间</td></tr><tr><td>YEAR</td><td>1</td><td>1901 至 2155</td><td>YYYY</td><td>年份值</td></tr><tr><td>DATETIME</td><td>8</td><td>1000-01-01 00:00:00 至 9999-12-31 23:59:59</td><td>YYYY-MM-DD HH:MM:SS</td><td>混合日期时间值</td></tr><tr><td>TIMESTAMP</td><td>4</td><td>1970-01-01 00:00:01 至 2038-01-19 03:14:07</td><td>YYYY-MM-DD HH:MM:SS</td><td>混合日期时间值</td></tr></tbody></table><h3 id="_4-ddl数据定义语言" tabindex="-1"><a class="header-anchor" href="#_4-ddl数据定义语言" aria-hidden="true">#</a> 4. DDL数据定义语言</h3><h4 id="_1-ddl数据库操作" tabindex="-1"><a class="header-anchor" href="#_1-ddl数据库操作" aria-hidden="true">#</a> 1. DDL数据库操作</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#1. 查询所有数据库
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>方括号[]里的内容可根据情况选填</li><li>字符集通常使用UTF8mb4</li></ol><h4 id="_2-ddl表操作" tabindex="-1"><a class="header-anchor" href="#_2-ddl表操作" aria-hidden="true">#</a> 2. DDL表操作</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#1. 查询当前数据库所有表
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>-- 创建一个表
create table user(
    id int comment &#39;编号&#39;,
    name varchar(50) comment &#39;姓名&#39;,
    age int comment &#39;年龄&#39;
)comment &#39;用户表&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-dml数据操作语言" tabindex="-1"><a class="header-anchor" href="#_5-dml数据操作语言" aria-hidden="true">#</a> 5. DML数据操作语言</h3><h4 id="_1-dml数据操作" tabindex="-1"><a class="header-anchor" href="#_1-dml数据操作" aria-hidden="true">#</a> 1. DML数据操作</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#1. 给指定字段添加数据
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>-- 修改id为1的数据将name修改为JCven
UPDATE user set name = &#39;JCven&#39; WHERE id = 1;

-- 修改所有age为18
UPDATE user set age = 18;

-- 删除id为1的数据
DELETE FROM user WHERE id = 1;

-- 删除所有
DELETE FORM user;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><p>添加数据时需要一一对应</p></li><li><p>修改语句的条件如果没有则会修改整张表的所有数据</p></li><li><p>删除语句不能删除某一个字段的值，要删除某字段的值用UPDATE 置为null</p></li><li><p>删除语句的条件如果没有则会删除整张表的所有数据</p></li></ol><h3 id="_6-dql数据查询语言" tabindex="-1"><a class="header-anchor" href="#_6-dql数据查询语言" aria-hidden="true">#</a> 6. DQL数据查询语言</h3><h4 id="_1-基本查询" tabindex="-1"><a class="header-anchor" href="#_1-基本查询" aria-hidden="true">#</a> 1. 基本查询</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#1. 查询多个字段
SELECT 字段1, 字段2,... FROM 表名;
SELECT * FROM 表名;
#2. 设置别名
SELECT 字段1[AS 别名1], 字段2[AS 别名2]... FROM 表名;
#3. 去除重复记录
SELECT DISTINCT 字段列表 FROM 表名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>-- 查询所有date 起别名为生日(as 可省)
SELECT date AS &#39;生日&#39; FROM user;
-- 查询所有年龄(去除重复)
SELECT DISTINCT date AS &#39;生日&#39; FROM user;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-条件查询" tabindex="-1"><a class="header-anchor" href="#_2-条件查询" aria-hidden="true">#</a> 2. 条件查询</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#1. 条件查询
SELECT 字段列表 FROM 表名 WHERE 条件列表;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>条件运算符</th><th></th></tr></thead><tbody><tr><td>&lt;&gt; 或 !=</td><td>不等于</td></tr><tr><td>BETWEEN...AND...</td><td>在某个范围内(含最大最小值)</td></tr><tr><td>IN(...)</td><td>在in之后的列表中的值，多选一</td></tr><tr><td>LIKE 占位符</td><td>模糊匹配( _匹配单个字符，%匹配任意字符)</td></tr><tr><td>IS NULL</td><td>是NULL</td></tr><tr><td>AND 或 &amp;&amp;</td><td>且运算 同时成立</td></tr><tr><td>OR 或 ||</td><td>或运算 任意成立</td></tr><tr><td>NOT 或 ！</td><td>非运算 否定</td></tr></tbody></table><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>-- 查询年龄在15-20的人员
SELECT *FROM user WHERE age&gt;=15 &amp;&amp; age&lt;= 20;
SELECT *FROM user WHERE age&gt;=15 AND age&lt;= 20;
SELECT *FROM user WHERE age BETWEEN 15 AND 20;

-- 查询年龄是15或20或25的人员
SELECT *FROM user WHERE age in(15,20,25);

-- 查询姓名为三个字的人员(三个下划线)
SELECT *FROM user WHERE name LIKE &#39;___&#39;; 

-- 查询年龄最后一位是8的人员
SELECT *FROM user WHERE age LIKE &#39;%8&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-聚合函数" tabindex="-1"><a class="header-anchor" href="#_3-聚合函数" aria-hidden="true">#</a> 3. 聚合函数</h4><table><thead><tr><th>函数</th><th>功能</th></tr></thead><tbody><tr><td>count</td><td>统计数量</td></tr><tr><td>max</td><td>最大值</td></tr><tr><td>min</td><td>最小值</td></tr><tr><td>avg</td><td>平均值</td></tr><tr><td>sum</td><td>求和</td></tr></tbody></table><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT 聚合函数(字段列表) FROM 表名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>-- 查询年龄的总和
SELECT SUM(age) FROM user;
-- 查询员工的平均年龄
SELECT AVG(age) FROM user;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>null值不参加所有聚合函数运算</li></ol><h4 id="_4-分组查询" tabindex="-1"><a class="header-anchor" href="#_4-分组查询" aria-hidden="true">#</a> 4. 分组查询</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># 分组查询
SELECT 字段列表 FROM 表名 [WHERE 条件] GROUP BY 分组字段名 [HAVING 分组后过滤条件];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>-- 根据性别分组,统计男性员工和女性员工的数量
SELECT gender, COUNT(*) FROM user GROUP BY gender;

-- 查询年龄小于25的员工,并根据工作地址分组，获取员工数量大于等于3的工作地址
SELECT workaddress, COUNT(*) FROM user WHERE age&lt;25 GROUP BY workaddress HAVING COUNT(*)&gt;=3;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>where是分组之前过滤，不满足where条件的不参与分组 having是对分组之后的结果进行过滤</li><li>where不能对聚合函数进行判断，having可以</li><li>执行顺序 where&gt;聚合函数&gt;having</li></ol><h4 id="_5-排序查询" tabindex="-1"><a class="header-anchor" href="#_5-排序查询" aria-hidden="true">#</a> 5. 排序查询</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#升序 asc (可省略)  降序 desc
SELECT 字段列表 FROM 表名 ORDER BY 字段1 排序方式1, 字段2 排序方式2;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>-- 根据年龄对员工进行升序排序
SELECT *FROM user ORDER BY age ASC; # ASC可省略

-- 根据年龄对员工进行升序排序,年龄相同的按照生日进行降序排序
SELECT *FROM user ORDER BY age ASC, date desc;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-分页查询" tabindex="-1"><a class="header-anchor" href="#_6-分页查询" aria-hidden="true">#</a> 6. 分页查询</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#分页查询
SELECT 字段列表 FROM 表名 LIMIT 起始索引, 查询记录数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>-- 查询第一页员工数据,每页展示10条
SELECT *FROM user LIMIT 0,10;
SELECT *FROM user LIMIT 10;
-- 查询第二页员工数据,每页展示10条
SELECT *FROM user LIMIT 10,10;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>起始索引从0开始 起始索引=(查询页码-1)*每页显示记录数</li><li>如果查询的是第一页数据, 起始索引可以省略, 直接写limit10</li></ol><h4 id="_7-执行顺序" tabindex="-1"><a class="header-anchor" href="#_7-执行顺序" aria-hidden="true">#</a> 7. 执行顺序</h4><table><thead><tr><th>执行顺序</th><th>关键字</th><th>释义</th></tr></thead><tbody><tr><td>1</td><td>FROM</td><td>表名列表</td></tr><tr><td>2</td><td>WHERE</td><td>条件列表</td></tr><tr><td>3</td><td>GROUP BY</td><td>分组字段列表</td></tr><tr><td>4</td><td>HAVING</td><td>分组后条件列表</td></tr><tr><td>5</td><td>SELECT</td><td>字段列表</td></tr><tr><td>6</td><td>ORDER BY</td><td>排序字段列表</td></tr><tr><td>7</td><td>LIMIT</td><td>分页参数</td></tr></tbody></table><h3 id="_7-dcl数据控制语言" tabindex="-1"><a class="header-anchor" href="#_7-dcl数据控制语言" aria-hidden="true">#</a> 7. DCL数据控制语言</h3><h4 id="_1-用户管理" tabindex="-1"><a class="header-anchor" href="#_1-用户管理" aria-hidden="true">#</a> 1. 用户管理</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#1. 查询用户
USE mysql;
SELECT *FROM user;
#2. 创建用户
CREATE USER &#39;用户名&#39;@&#39;主机名&#39; IDENTIFIED BY &#39;密码&#39;;
CREATE USER &#39;用户名&#39;@&#39;%&#39; IDENTIFIED BY &#39;密码&#39;;
#3. 修改用户密码
ALTER USER &#39;用户名&#39;@&#39;主机名&#39; IDENTIFIED WITH mysql_native_password BY &#39;新密码&#39;;
#4. 删除用户
DROP USER &#39;用户名&#39;@&#39;主机名&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-权限控制" tabindex="-1"><a class="header-anchor" href="#_2-权限控制" aria-hidden="true">#</a> 2. 权限控制</h4><table><thead><tr><th>权限</th><th>说明</th></tr></thead><tbody><tr><td>ALL</td><td>所有权限</td></tr><tr><td>SELECT</td><td>查询数据</td></tr><tr><td>INSERT</td><td>插入数据</td></tr><tr><td>UPDATA</td><td>修改数据</td></tr><tr><td>DELETE</td><td>删除数据</td></tr><tr><td>ALTER</td><td>修改表</td></tr><tr><td>DROP</td><td>删除数据库/表/视图</td></tr><tr><td>CREATE</td><td>创就数据库/表</td></tr></tbody></table><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#1. 查询权限
SHOW GRANTS FOR &#39;用户名&#39;@&#39;主机名&#39;
#2. 授予权限
GRANT 权限列表 ON 数据库.表名 TO &#39;用户名&#39;@&#39;主机名&#39;;
#3. 撤销权限
REVOKE 权限列表 ON 数据库.表名 FROM &#39;用户名&#39;@&#39;主机名&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-函数" tabindex="-1"><a class="header-anchor" href="#_8-函数" aria-hidden="true">#</a> 8. 函数</h3><h4 id="_1-字符串函数" tabindex="-1"><a class="header-anchor" href="#_1-字符串函数" aria-hidden="true">#</a> 1. 字符串函数</h4><table><thead><tr><th>函数</th><th>功能</th></tr></thead><tbody><tr><td>CONCAT(S1, S2, ...Sn)</td><td>字符串拼接，将S1,S2...Sn拼接成一个字符串</td></tr><tr><td>LOWER(str)</td><td>将字符串str全部转化为小写</td></tr><tr><td>UPPER(str)</td><td>将字符串str全部转化为大写</td></tr><tr><td>LPAD(str,n,pad)</td><td>左填充，用字符串pad对str左边进行填充，达到n个字符串长度</td></tr><tr><td>RPAD(str,n,pad)</td><td>右填充，用字符串pad对str左边进行填充，达到n个字符串长度</td></tr><tr><td>TRIM(str)</td><td>去掉字符串头部和尾部的空格</td></tr><tr><td>SUBSTRING(str,start,len)</td><td>返回从字符串str从start位置起的len个长度的字符串</td></tr></tbody></table><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>-- 更新员工工号为5位数, 不足的前面补0
UPDATE emp set worknumber = lpad(worknumber, 5, &#39;0&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-数值函数" tabindex="-1"><a class="header-anchor" href="#_2-数值函数" aria-hidden="true">#</a> 2. 数值函数</h4><table><thead><tr><th>函数</th><th>功能</th></tr></thead><tbody><tr><td>CELT(x)</td><td>向上取整</td></tr><tr><td>FLOOR(x)</td><td>向下取整</td></tr><tr><td>MOD(x,y)</td><td>返回x/y的模</td></tr><tr><td>RAND()</td><td>返回0~1内的随机数</td></tr><tr><td>ROUND(x,y)</td><td>求x的四舍五入值，保留y位小数</td></tr></tbody></table><h4 id="_3-日期函数" tabindex="-1"><a class="header-anchor" href="#_3-日期函数" aria-hidden="true">#</a> 3. 日期函数</h4><table><thead><tr><th>函数</th><th>功能</th></tr></thead><tbody><tr><td>CURDATE()</td><td>返回当前日期</td></tr><tr><td>CURTIME()</td><td>返回当前时间</td></tr><tr><td>NOW()</td><td>返回当前日期和时间</td></tr><tr><td>YEAR(date)</td><td>获取指定date的年份</td></tr><tr><td>MONTH(date)</td><td>获取指定date的月份</td></tr><tr><td>DAY(date)</td><td>获取指定date的日期</td></tr><tr><td>DATE_ADD(date,INTERVAL expr type)</td><td>返回一个日期/时间值 加上一个时间间隔expr后的时间值</td></tr><tr><td>DATEDIFF(date1,date2)</td><td>返回起始时间date1和结束时间date2之间的天数</td></tr></tbody></table><h4 id="_4-流程函数" tabindex="-1"><a class="header-anchor" href="#_4-流程函数" aria-hidden="true">#</a> 4. 流程函数</h4><table><thead><tr><th>函数</th><th>功能</th></tr></thead><tbody><tr><td>IF(value,t,f)</td><td>如果value为true则返回t，否则返回f</td></tr><tr><td>IFNULL(value1,value2)</td><td>如果value不为空则返回value1，否则返回value2</td></tr><tr><td>CASE WHEN [val1] THEN [res1]...ELSE [default] END</td><td>如果val1为true，返回res1,...否则返回default默认值</td></tr><tr><td>CASE [expr] WHEN [val1] THEN [res1]...ELSE [default] END</td><td>如果expr的值等于val1，返回res1,...否则返回default默认值</td></tr></tbody></table><h3 id="_9-约束" tabindex="-1"><a class="header-anchor" href="#_9-约束" aria-hidden="true">#</a> 9. 约束</h3><h4 id="_1-常用约束" tabindex="-1"><a class="header-anchor" href="#_1-常用约束" aria-hidden="true">#</a> 1. 常用约束</h4><table><thead><tr><th>关键字</th><th>约束</th><th>描述</th></tr></thead><tbody><tr><td>NOT NULL</td><td>非空约束</td><td>限制该字段的数据不能为null</td></tr><tr><td>UNIQUE</td><td>唯一约束</td><td>保证该字段的所有数据唯一且不重复</td></tr><tr><td>PRIMARY</td><td>主键约束</td><td>主键是一行数据的唯一标识，要求非空且唯一</td></tr><tr><td>DEFAULT</td><td>默认约束</td><td>保存数据时，如果未指定该字段的值则采用默认值</td></tr><tr><td>CHECK</td><td>检查约束</td><td>保证字段值满足某一个条件</td></tr><tr><td>FOREIGN KEY</td><td>外键约束</td><td>用来让两张表的数据之间建立连接，保证数据一致性和完整性</td></tr></tbody></table><ol><li>约束作用于表中字段上的，在创建表或修改表的时候添加约束</li></ol><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>-- 创建表要求
-- 1. id为主键 且自动增长
-- 2. name不为空 且唯一
-- 3. age大于0且小于等于120
-- 4. status默认为1
create table emp(
    id int primary key auto_increment comment &#39;主键&#39;,
    name varchar(10) not null unique comment &#39;姓名&#39;,
    age int check ( age&gt;0&amp;&amp;age&lt;120 )comment &#39;年龄&#39;,
    status char(1) default &#39;1&#39; comment &#39;状态&#39;,
    gender char(1) comment &#39;性别&#39;
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-外键约束" tabindex="-1"><a class="header-anchor" href="#_2-外键约束" aria-hidden="true">#</a> 2. 外键约束</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#添加外键
CREATE TABLE 表名(
	...
    [CONSTRAINT][外键名称] FOREIGN KEY (外键字段名) REFERENCES 主表(主列表名)
);
#或者
ALTER TABLE 表名 ADD CONSTRAINT 外键名称 FOREIGN KEY (外键字段名) REFERENCES 主表(主列表名);
#删除外键
ALTER TABLE 表名 DROP FOREIGN KEY 外键名称;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>-- 对user表添加外键emp_dept_id
ALTER TABLE user ADD CONSTRAINT dept_id FOREIGN KEY (dept_id) REFERENCES dept(id);
-- 删除emp_dept_id外键
ALTER TABLE user DROP FOREIGN KEY emp_dept_id;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>行为</th><th>说明</th></tr></thead><tbody><tr><td>NO ACTION</td><td>当在父表中删除/更新对应记录时，先检查该记录是否有外键，若有则不允许删除/更新</td></tr><tr><td>RESTRICT</td><td>当在父表中删除/更新对应记录时，先检查该记录是否有外键，若有则不允许删除/更新</td></tr><tr><td>CASCADE</td><td>当在父表中删除/更新对应记录时，先检查该记录是否有外键，若有则也删除/更新子表中的记录</td></tr><tr><td>SET NULL</td><td>当在父表中删除对应记录时，先检查该记录是否有外键，若有则设置子表外键值为null</td></tr><tr><td>SET DEFAULT</td><td>父表变更时，子表将外键列设置成一个默认的值</td></tr></tbody></table><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>-- 外键删除更新行为CASCADE
ALTER TABLE user ADD CONSTRAINT dept_id FOREIGN KEY (dept_id) REFERENCES dept(id) ON UPDATE CASCADE ON DELETE CASCADE;
-- 外键删除更新行为SET NULL
ALTER TABLE user ADD CONSTRAINT dept_id FOREIGN KEY (dept_id) REFERENCES dept(id) ON UPDATE SET NULL ON DELETE SET NULL;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-多表查询" tabindex="-1"><a class="header-anchor" href="#_10-多表查询" aria-hidden="true">#</a> 10. 多表查询</h3><p>一对多(多对一)通过外键来关联</p><p>多对多 建立中间表来维护两方</p><p>一对一 多用于单表拆分</p><h4 id="_1-内连接" tabindex="-1"><a class="header-anchor" href="#_1-内连接" aria-hidden="true">#</a> 1. 内连接</h4><p>内连接查询的是两张表交集的部分</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#1. 隐式内连接
SELECT 字段列表 FROM 表1,表2 WHERE 条件...;
#2. 显示内连接
SELECT 字段列表 FROM 表1 [INNER] JOIN 表2 ON 连接条件;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>-- 查询每个员工的姓名及关联的部门的名称隐式内连接
SELECT emp.name, dept.name FROM emp,dept where emp.dept_id = dept.id;
-- 显示内连接
SELECT emp.name, dept.name FROM emp JOIN dept ON emp.dept_id = dept.id;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>如果给表起了别名就不能通过表名.字段来限定</li></ol><h4 id="_2-外连接" tabindex="-1"><a class="header-anchor" href="#_2-外连接" aria-hidden="true">#</a> 2. 外连接</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#左外连接(左表+交集)
SELECT 字段列表 FROM 表1 LEFT [OUTER] JOIN 表2 ON 条件;
#右外连接(右表+交集)
SELECT 字段列表 FROM 表1 RIGHT [OUTER] JOIN 表2 ON 条件;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>-- 查询emp表的所有数据和对应的部门信息(左外连接)
SELECT emp.*, dept.name FROM emp LEFT JOIN dept ON emp.dept_id = dept.id;
-- 查询dept表的所有数据和对应的员工信息(右外连接)
SELECT emp.*, dept.* FROM emp RIGHT JOIN dept ON emp.dept_id = dept.id;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-自连接" tabindex="-1"><a class="header-anchor" href="#_3-自连接" aria-hidden="true">#</a> 3. 自连接</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># 自连接
SELECT 字段列表 FROM 表A 别名A JOIN 表A 别名B ON 条件;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>-- 查询员工及其所属领导的名字(自内连接)
SELECT a.name, b.name FROM emp a, emp b where a.managerid = b.id;
-- 查询员工及其所属领导的名字,没有领导也要查询出来(自外连接)
SELECT a.name, b.name FROM emp a LEFT JOIN emp b ON a.managerid = b.id;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>自连接查询可以是内连接查询也可以是外连接查询</li><li>自连接必须起别名</li></ol><h4 id="_4-联合查询" tabindex="-1"><a class="header-anchor" href="#_4-联合查询" aria-hidden="true">#</a> 4. 联合查询</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#联合查询
SELECT 字段列表 FROM 表A ...
UNION[ALL]
SELECT 字段列表 FROM 表B ...;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>-- 查询薪资低于5000的员工和年龄大于50岁的员工
SELECT *FROM emp WHERE salary &lt;5000
UNION ALL
SELECT *FROM emp WHERE age &gt; 50;
-- 合并后去重(去掉ALL即可)
SELECT *FROM emp WHERE salary &lt;5000
UNION
SELECT *FROM emp WHERE age &gt; 50;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>联合查询到多张表的列数必须保持一致,字段类型也需要保持一致</li></ol><h4 id="_5-子查询" tabindex="-1"><a class="header-anchor" href="#_5-子查询" aria-hidden="true">#</a> 5. 子查询</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#子查询(嵌套查询)
SELECT *FORM t1 WHERE conlumn1 = (SELECT conlumn1 FROM t2);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>标量子查询</strong></p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#1. 标量子查询(返回单个值)
#常用操作符 &gt; &lt; &gt;= &lt;= = !=
-- 查询&quot;销售部&quot;的所有员工信息
SELECT *FROM emp WHERE dept_id = (SELECT id FROM dept where name = &#39;销售部&#39;);
-- 查询在&quot;Tom&quot;之后入职的员工信息
SELECT *FROM emp WHERE entrydate &gt; (SELECT entrydate FROM emp where name = &#39;Tom&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>列子查询</strong></p><table><thead><tr><th>操作符</th><th>描述</th></tr></thead><tbody><tr><td>IN</td><td>在指定的集合范围内,多选一</td></tr><tr><td>NOT IN</td><td>不在指定的集合范围之内</td></tr><tr><td>ANY</td><td>子查询返回列表中有任意一个满足即可</td></tr><tr><td>SOME</td><td>与ANY相同,使用SOME的地方都可以使用ANY</td></tr><tr><td>ALL</td><td>子查询返回列表的所有值都必须满足</td></tr></tbody></table><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#2. 列子查询(返回一列,可以是多行)
#常用操作符 IN,NOT IN,ANY,SOME,ALL
-- 查询销售部和市场部的所有员工信息
SELECT *FROM emp WHERE dept_id IN (SELECT id FROM dept WHERE name = &#39;销售部&#39; OR name = &#39;市场部&#39;);
-- 查询比财务部所有人工工资都高的员工信息
SELECT *FROM emp WHERE salary &gt; ALL (SELECT salary FROM emp WHERE dept_id = (SELECT id FROM dept WHERE name = &#39;财务部&#39;));
-- 查询比研发部中任意一人工资高的员工信息
SELECT *FROM emp WHERE salary &gt; ANY (SELECT salary FROM emp WHERE dept_id = (SELECT id FROM dept WHERE name = &#39;研发部&#39;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>行子查询</strong></p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#3. 行子查询(返回一行,可以是多列)
#常用操作符 =,&lt;,&gt;,IN,NOT IN
-- 查询与Tom的薪资及直属领导相同的员工信息
SELECT *FROM emp WHERE (salary, managerid) = (SELECT salary, managerid FROM emp WHERE name = &#39;Tom&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>表子查询</strong></p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#4. 表子查询
#常用操作符 IN
-- 查询与 Tom, Jack 的职位和薪资相同的员工信息
SELECT *FROM emp WHERE (job, salary) IN (SELECT salary, managerid FROM emp WHERE name = &#39;Tom&#39; OR name = &#39;Jack&#39;);
-- 查询入职日期在2006-01-01之后的员工信息
SELECT e.*, d.* FROM (SELECT *FROM emp WHERE entrydate &gt; &#39;2006-01-01&#39;) e LEFT JOIN dept d ON e.dept_id = d.id;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><p>子查询外部也可以是 INSERT / UPDATE / DELETE / SELECT 任意一个</p></li><li><p>子查询位置 WHERE之后 / FROM之后 / SELECT之后</p></li></ol><h3 id="_11-事务" tabindex="-1"><a class="header-anchor" href="#_11-事务" aria-hidden="true">#</a> 11. 事务</h3><p>事务的四大特性ACID</p><table><thead><tr><th>特性</th><th>描述</th></tr></thead><tbody><tr><td>原子性</td><td>事务是不可分割的最小操作单元,要么全部成功,要么全部失败</td></tr><tr><td>一致性</td><td>事务完成时,必须是所有的数据都保持一致状态</td></tr><tr><td>隔离性</td><td>数据库系统提供的隔离机制,保证事务不收外部并发影响操作</td></tr><tr><td>持久性</td><td>事务一旦提交或者回滚,它对数据库的数据改变是永久的</td></tr></tbody></table><p>事务操作1</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># 查看事务提交方式(1代表自动,0代表手动)
SELECT @@autocommit;
# 设置事务提交方式
SET @@autocommit = 0;
# 提交事务
COMMIT;
# 回滚事务
ROLLBACK;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>事务操作2</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># 开启事务
START TRANSACTION 或 BEGIN
# 提交事务
COMMIT;
# 回滚事务
ROLLBACK;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>并发事务问题</p><table><thead><tr><th>问题</th><th>描述</th></tr></thead><tbody><tr><td>脏读</td><td>一个事务读到另外一个事务还没有提交的数据</td></tr><tr><td>不可重复读</td><td>一个事务先后读取同一条数据,但两次读取的数据不同</td></tr><tr><td>幻读</td><td>一个事务查询数据时没有数据,但插入数据时,数据已经存在</td></tr></tbody></table><p>事务隔离级别</p><table><thead><tr><th>隔离级别</th><th>脏读</th><th>不可重复读</th><th>幻读</th></tr></thead><tbody><tr><td>Read uncommitted</td><td>√</td><td>√</td><td>√</td></tr><tr><td>Read committed</td><td>×</td><td>√</td><td>√</td></tr><tr><td>Repeatable Read(默认)</td><td>×</td><td>×</td><td>√</td></tr><tr><td>Serializable</td><td>×</td><td>×</td><td>×</td></tr></tbody></table><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># 查看事务的隔离级别
SELECT @@TRANSACTION_ISOLATION;
# 设置事务的隔离级别
SET[SESSION|GLOBAL] TRANSACTION_ISOLATION LEVEL {隔离级别}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="二-高级篇" tabindex="-1"><a class="header-anchor" href="#二-高级篇" aria-hidden="true">#</a> 二. 高级篇</h1><h4 id="_1-存储引擎" tabindex="-1"><a class="header-anchor" href="#_1-存储引擎" aria-hidden="true">#</a> 1. 存储引擎</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># 查询当前数据库支持的存储引擎
SHOW ENGINES;

# 创建表并指定存储引擎
CREATE TABLE MY_MYISAS(
	id int,
    name varchar(10)
) ENGINE = MyISAM;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-innodb" tabindex="-1"><a class="header-anchor" href="#_2-innodb" aria-hidden="true">#</a> 2. InnoDB</h4><p>InnoDB是兼顾高性能和高可靠的通用存储引擎, 在MySQL5.5之后的默认存储引擎</p><p>特点: DML操作遵循ACID模型, 支持事物</p><p>行级锁, 提高并发访问性能</p><p>支持外键foreign key约束, 保证数据的完整性和正确性</p><p>每一张InnoDB的表都有一个表空间XXX.ibd文件</p><p>InnoDB引擎与MyISAM引擎的区别 ?</p><p>①. InnoDB引擎, 支持事务, 而MyISAM不支持。</p><p>②. InnoDB引擎, 支持行锁和表锁, 而MyISAM仅支持表锁, 不支持行锁。</p><p>③. InnoDB引擎, 支持外键, 而MyISAM是不支持的。</p><h4 id="_3-索引" tabindex="-1"><a class="header-anchor" href="#_3-索引" aria-hidden="true">#</a> 3. 索引</h4><h1 id="三-jdbc" tabindex="-1"><a class="header-anchor" href="#三-jdbc" aria-hidden="true">#</a> 三. JDBC</h1><h3 id="_1-入门" tabindex="-1"><a class="header-anchor" href="#_1-入门" aria-hidden="true">#</a> 1. 入门</h3><p>创建工程,导入相应的jar包</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JDBC01</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">//1. 注册驱动(可省略)</span>
        <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.mysql.cj.jdbc.Driver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//2. 获取连接</span>
        <span class="token comment">// 	 如果是默认的本机端口可以写成&quot;jdbc:mysql:///db01&quot;</span>
        <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">&quot;jdbc:mysql://127.0.0.1:3306/db01&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//3. 定义sql语句</span>
        <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;update user set age = 88 where id = 1&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">//4. 获取执行sql的对象Statement</span>
        <span class="token class-name">Statement</span> statement <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//5. 执行sql</span>
        <span class="token keyword">int</span> count <span class="token operator">=</span> statement<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//返回受影响的行数</span>
        <span class="token comment">//6. 处理结果</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//7.释放资源</span>
        statement<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-jdcb-api详解" tabindex="-1"><a class="header-anchor" href="#_2-jdcb-api详解" aria-hidden="true">#</a> 2. JDCB API详解</h3><h4 id="_1-drivermanager" tabindex="-1"><a class="header-anchor" href="#_1-drivermanager" aria-hidden="true">#</a> 1. DriverManager</h4><ol><li>注册驱动</li><li>获取数据库连接</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//可省略</span>
<span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.mysql.cj.jdbc.Driver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-connection" tabindex="-1"><a class="header-anchor" href="#_2-connection" aria-hidden="true">#</a> 2. Connection</h4><ol><li><p>获取执行SQL对象</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 普通执行SQL对象</span>
<span class="token class-name">Statement</span>  create <span class="token class-name">Statement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 预编译SQL的执行SQL对象(防止SQL注入)</span>
<span class="token class-name">PrepareStatement</span> <span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 执行存储过程的对象</span>
<span class="token class-name">CallableStatement</span> <span class="token function">prepareCall</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>事务管理</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 开启事务 false表示手动提交</span>
<span class="token function">setAutoCommit</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 提交事务</span>
<span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 回滚事务</span>
<span class="token function">rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 通过异常处理机制来处理事务</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token comment">// 开启事务</span>
    connection<span class="token punctuation">.</span><span class="token function">setAutoCommit</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 执行sql</span>
    <span class="token keyword">int</span> count <span class="token operator">=</span> statement<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//返回受影响的行数</span>
    <span class="token comment">// 处理结果</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 提交事务</span>
    connection<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 回滚事务</span>
    connection<span class="token punctuation">.</span><span class="token function">rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h4 id="_3-statement" tabindex="-1"><a class="header-anchor" href="#_3-statement" aria-hidden="true">#</a> 3. Statement</h4><ol><li><p>执行SQL语句</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 执行DML,DDL语句</span>
<span class="token keyword">int</span> <span class="token function">executeUpdate</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//返回受影响的行数</span>
<span class="token comment">// 执行DQL语句</span>
<span class="token class-name">ResultSet</span> <span class="token function">executeQuery</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//返回结果对象集</span>
<span class="token comment">// 获取查询结果</span>
bollean <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//将光标从当前位置向下移动一行,判断当前行是否为有效行</span>
<span class="token comment">// 获取数据</span>
<span class="token function">getxxx</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//参数中若为int从1开始,string则为列的名称</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//</span>
<span class="token class-name">ResultSet</span> resultSet <span class="token operator">=</span> statement<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">while</span><span class="token punctuation">(</span>resultSet<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//获取数据 参数可以用</span>
    resultSet<span class="token punctuation">.</span><span class="token function">getInt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    resultSet<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    resultSet<span class="token punctuation">.</span><span class="token function">getDouble</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h4 id="_4-preparedstatement" tabindex="-1"><a class="header-anchor" href="#_4-preparedstatement" aria-hidden="true">#</a> 4. PreparedStatement</h4><ol><li><p>防止sql注入步骤</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//1. 定义sql (?作为占位符)</span>
<span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;select *from user where username = ? and password = ?&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//2. 获取对象</span>
<span class="token class-name">PreparedStatement</span> pstmt <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//3. 设置?的值</span>
pstmt<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
pstmt<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> psd<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//4. 执行sql</span>
<span class="token class-name">ResultSet</span> rs <span class="token operator">=</span> pstmt<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="_3-数据库连接池" tabindex="-1"><a class="header-anchor" href="#_3-数据库连接池" aria-hidden="true">#</a> 3. 数据库连接池</h3><p>Driud使用</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//1. 导入jar包</span>
<span class="token comment">//2. 定义配置文件</span>
<span class="token comment">//3. 加载配置文件</span>
<span class="token class-name">Properties</span> properties <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
properties<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//4. 获取连接池对象</span>
<span class="token class-name">DataSource</span> dataSource <span class="token operator">=</span>  <span class="token class-name">DruidDateSourceFactory</span><span class="token punctuation">.</span><span class="token function">createDataSource</span><span class="token punctuation">(</span>properties<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//5. 获取数据库连接</span>
<span class="token class-name">Connection</span> connection <span class="token operator">=</span> dataSource<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,154),i=[d];function l(r,c){return a(),s("div",null,i)}const o=n(t,[["render",l],["__file","MySQLNote.html.vue"]]);export{o as default};
