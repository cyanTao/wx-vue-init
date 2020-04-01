1. {
2. "rules" : {
3. // 定义对象的 set 存取器属性时，强制定义 get
4. "accessor-pairs": 2,
5. // 指定数组的元素之间要以空格隔开(,后面)， never 参数：[ 之前和 ] 之后不能带空格，always 参数：[ 之前和 ] 之后必须带空格
6. "array-bracket-spacing": [2, "never"],
7. // 在块级作用域外访问块内定义的变量是否报错提示
8. "block-scoped-var": 0,
9. // if while function 后面的{必须与 if 在同一行，java 风格。
10. "brace-style": [2, "1tbs", { "allowSingleLine": true }],
11. // 双峰驼命名格式
12. "camelcase": 2,
13. // 数组和对象键值对最后一个逗号， never 参数：不能带末尾的逗号, always 参数：必须带末尾的逗号，
14. // always-multiline：多行模式必须带逗号，单行模式不能带逗号
15. "comma-dangle": [2, "never"],
16. // 控制逗号前后的空格
17. "comma-spacing": [2, { "before": false, "after": true }],
18. // 控制逗号在行尾出现还是在行首出现
19. // http://eslint.org/docs/rules/comma-style
20. "comma-style": [2, "last"],
21. // 圈复杂度
22. "complexity": [2,9],
23. // 以方括号取对象属性时，[ 后面和 ] 前面是否需要空格, 可选参数 never, always
24. "computed-property-spacing": [2,"never"],
25. // 强制方法必须返回值，TypeScript 强类型，不配置
26. "consistent-return": 0,
27. // 用于指统一在回调函数中指向 this 的变量名，箭头函数中的 this 已经可以指向外层调用者，应该没卵用了
28. // e.g [0,"that"] 指定只能 var that = this. that 不能指向其他任何值，this 也不能赋值给 that 以外的其他值
29. "consistent-this": 0,
30. // 强制在子类构造函数中用 super()调用父类构造函数，TypeScrip 的编译器也会提示
31. "constructor-super": 0,
32. // if else while for do 后面的代码块是否需要{ }包围，参数：
33. // multi 只有块中有多行语句时才需要{ }包围
34. // multi-line 只有块中有多行语句时才需要{ }包围, 但是块中的执行语句只有一行时，
35. // 块中的语句只能跟和 if 语句在同一行。if (foo) foo++; else doSomething();
36. // multi-or-nest 只有块中有多行语句时才需要{ }包围, 如果块中的执行语句只有一行，执行语句可以零另起一行也可以跟在 if 语句后面
37. // [2, "multi", "consistent"] 保持前后语句的{ }一致
38. // default: [2, "all"] 全都需要{ }包围
39. "curly": [2, "all"],
40. // switch 语句强制 default 分支，也可添加 // no default 注释取消此次警告
41. "default-case": 2,
42. // 强制 object.key 中 . 的位置，参数:
43. // property，'.'号应与属性在同一行
44. // object, '.' 号应与对象名在同一行
45. "dot-location": [2, "property"],
46. // 强制使用.号取属性
47. // 参数： allowKeywords：true 使用保留字做属性名时，只能使用.方式取属性
48. // false 使用保留字做属性名时, 只能使用[]方式取属性 e.g [2, {"allowKeywords": false}]
49. // allowPattern: 当属性名匹配提供的正则表达式时，允许使用[]方式取值,否则只能用.号取值 e.g [2, {"allowPattern": "^[a-z]+(\_[a-z]+)+\$"}]
50. "dot-notation": [2, {"allowKeywords": true}],
51. // 文件末尾强制换行
52. "eol-last": 2,
53. // 使用 === 替代 ==
54. "eqeqeq": [2, "allow-null"],
55. // 方法表达式是否需要命名
56. "func-names": 0,
57. // 方法定义风格，参数：
58. // declaration: 强制使用方法声明的方式，function f(){} e.g [2, "declaration"]
59. // expression：强制使用方法表达式的方式，var f = function() {} e.g [2, "expression"]
60. // allowArrowFunctions: declaration 风格中允许箭头函数。 e.g [2, "declaration", { "allowArrowFunctions": true }]
61. "func-style": 0,
62. "no-alert": 0,//禁止使用 alert confirm prompt
63. "no-array-constructor": 2,//禁止使用数组构造器
64. "no-bitwise": 0,//禁止使用按位运算符
65. "no-caller": 1,//禁止使用 arguments.caller 或 arguments.callee
66. "no-catch-shadow": 2,//禁止 catch 子句参数与外部作用域变量同名
67. "no-class-assign": 2,//禁止给类赋值
68. "no-cond-assign": 2,//禁止在条件表达式中使用赋值语句
69. "no-console": 2,//禁止使用 console
70. "no-const-assign": 2,//禁止修改 const 声明的变量
71. "no-constant-condition": 2,//禁止在条件中使用常量表达式 if(true) if(1)
72. "no-continue": 0,//禁止使用 continue
73. "no-control-regex": 2,//禁止在正则表达式中使用控制字符
74. "no-debugger": 2,//禁止使用 debugger
75. "no-delete-var": 2,//不能对 var 声明的变量使用 delete 操作符
76. "no-div-regex": 1,//不能使用看起来像除法的正则表达式/=foo/
77. "no-dupe-keys": 2,//在创建对象字面量时不允许键重复 {a:1,a:1}
78. "no-dupe-args": 2,//函数参数不能重复
79. "no-duplicate-case": 2,//switch 中的 case 标签不能重复
80. "no-else-return": 2,//如果 if 语句里面有 return,后面不能跟 else 语句
81. "no-empty": 2,//块语句中的内容不能为空
82. "no-empty-character-class": 2,//正则表达式中的[]内容不能为空
83. "no-empty-label": 2,//禁止使用空 label
84. "no-eq-null": 2,//禁止对 null 使用==或!=运算符
85. "no-eval": 1,//禁止使用 eval
86. "no-ex-assign": 2,//禁止给 catch 语句中的异常参数赋值
87. "no-extend-native": 2,//禁止扩展 native 对象
88. "no-extra-bind": 2,//禁止不必要的函数绑定
89. "no-extra-boolean-cast": 2,//禁止不必要的 bool 转换
90. "no-extra-parens": 2,//禁止非必要的括号
91. "no-extra-semi": 2,//禁止多余的冒号
92. "no-fallthrough": 1,//禁止 switch 穿透
93. "no-floating-decimal": 2,//禁止省略浮点数中的 0 .5 3.
94. "no-func-assign": 2,//禁止重复的函数声明
95. "no-implicit-coercion": 1,//禁止隐式转换
96. "no-implied-eval": 2,//禁止使用隐式 eval
97. "no-inline-comments": 0,//禁止行内备注
98. "no-inner-declarations": [2, "functions"],//禁止在块语句中使用声明（变量或函数）
99. "no-invalid-regexp": 2,//禁止无效的正则表达式
100. "no-invalid-this": 2,//禁止无效的 this，只能用在构造器，类，对象字面量
101. "no-irregular-whitespace": 2,//不能有不规则的空格
102. "no-iterator": 2,//禁止使用**iterator** 属性
103. "no-label-var": 2,//label 名不能与 var 声明的变量名相同
104. "no-labels": 2,//禁止标签声明
105. "no-lone-blocks": 2,//禁止不必要的嵌套块
106. "no-lonely-if": 2,//禁止 else 语句内只有 if 语句
107. "no-loop-func": 1,//禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
108. "no-mixed-requires": [0, false],//声明时不能混用声明类型
109. "no-mixed-spaces-and-tabs": [2, false],//禁止混用 tab 和空格
110. "linebreak-style": [0, "windows"],//换行风格
111. "no-multi-spaces": 1,//不能用多余的空格
112. "no-multi-str": 2,//字符串不能用\换行
113. "no-multiple-empty-lines": [1, {"max": 2}],//空行最多不能超过 2 行
114. "no-native-reassign": 2,//不能重写 native 对象
115. "no-negated-in-lhs": 2,//in 操作符的左边不能有!
116. "no-nested-ternary": 0,//禁止使用嵌套的三目运算
117. "no-new": 1,//禁止在使用 new 构造一个实例后不赋值
118. "no-new-func": 1,//禁止使用 new Function
119. "no-new-object": 2,//禁止使用 new Object()
120. "no-new-require": 2,//禁止使用 new require
121. "no-new-wrappers": 2,//禁止使用 new 创建包装实例，new String new Boolean new Number
122. "no-obj-calls": 2,//不能调用内置的全局对象，比如 Math() JSON()
123. "no-octal": 2,//禁止使用八进制数字
124. "no-octal-escape": 2,//禁止使用八进制转义序列
125. "no-param-reassign": 2,//禁止给参数重新赋值
126. "no-path-concat": 0,//node 中不能使用**dirname 或**filename 做路径拼接
127. "no-plusplus": 0,//禁止使用++，--
128. "no-process-env": 0,//禁止使用 process.env
129. "no-process-exit": 0,//禁止使用 process.exit()
130. "no-proto": 2,//禁止使用**proto**属性
131. "no-redeclare": 2,//禁止重复声明变量
132. "no-regex-spaces": 2,//禁止在正则表达式字面量中使用多个空格 /foo bar/
133. "no-restricted-modules": 0,//如果禁用了指定模块，使用就会报错
134. "no-return-assign": 1,//return 语句中不能有赋值表达式
135. "no-script-url": 0,//禁止使用 javascript:void(0)
136. "no-self-compare": 2,//不能比较自身
137. "no-sequences": 0,//禁止使用逗号运算符
138. "no-shadow": 2,//外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
139. "no-shadow-restricted-names": 2,//严格模式中规定的限制标识符不能作为声明时的变量名使用
140. "no-spaced-func": 2,//函数调用时 函数名与()之间不能有空格
141. "no-sparse-arrays": 2,//禁止稀疏数组， [1,,2]
142. "no-sync": 0,//nodejs 禁止同步方法
143. "no-ternary": 0,//禁止使用三目运算符
144. "no-trailing-spaces": 1,//一行结束后面不要有空格
145. "no-this-before-super": 0,//在调用 super()之前不能使用 this 或 super
146. "no-throw-literal": 2,//禁止抛出字面量错误 throw "error";
147. "no-undef": 1,//不能有未定义的变量
148. "no-undef-init": 2,//变量初始化时不能直接给它赋值为 undefined
149. "no-undefined": 2,//不能使用 undefined
150. "no-unexpected-multiline": 2,//避免多行表达式
151. "no-underscore-dangle": 1,//标识符不能以\_开头或结尾
152. "no-unneeded-ternary": 2,//禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
153. "no-unreachable": 2,//不能有无法执行的代码
154. "no-unused-expressions": 2,//禁止无用的表达式
155. "no-unused-vars": [2, {"vars": "all", "args": "after-used"}],//不能有声明后未被使用的变量或参数
156. "no-use-before-define": 2,//未定义前不能使用
157. "no-useless-call": 2,//禁止不必要的 call 和 apply
158. "no-void": 2,//禁用 void 操作符
159. "no-var": 0,//禁用 var，用 let 和 const 代替
160. "no-warning-comments": [1, { "terms": ["todo", "fixme", "xxx"], "location": "start" }],//不能有警告备注
161. "no-with": 2,//禁用 with
162. "array-bracket-spacing": [2, "never"],//是否允许非空数组里面有多余的空格
163. "arrow-parens": 0,//箭头函数用小括号括起来
164. "arrow-spacing": 0,//=>的前/后括号
165. "accessor-pairs": 0,//在对象中使用 getter/setter
166. "block-scoped-var": 0,//块语句中使用 var
167. "brace-style": [1, "1tbs"],//大括号风格
168. "callback-return": 1,//避免多次调用回调什么的
169. "camelcase": 2,//强制驼峰法命名
170. "comma-dangle": [2, "never"],//对象字面量项尾不能有逗号
171. "comma-spacing": 0,//逗号前后的空格
172. "comma-style": [2, "last"],//逗号风格，换行时在行首还是行尾
173. "complexity": [0, 11],//循环复杂度
174. "computed-property-spacing": [0, "never"],//是否允许计算后的键名什么的
175. "consistent-return": 0,//return 后面是否允许省略
176. "consistent-this": [2, "that"],//this 别名
177. "constructor-super": 0,//非派生类不能调用 super，派生类必须调用 super
178. "curly": [2, "all"],//必须使用 if(){} 中的{}
179. "default-case": 2,//switch 语句最后必须有 default
180. "dot-location": 0,//对象访问符的位置，换行的时候在行首还是行尾
181. "dot-notation": [0, { "allowKeywords": true }],//避免不必要的方括号
182. "eol-last": 0,//文件以单一的换行符结束
183. "eqeqeq": 2,//必须使用全等
184. "func-names": 0,//函数表达式必须有名字
185. "func-style": [0, "declaration"],//函数风格，规定只能使用函数声明/函数表达式
186. "generator-star-spacing": 0,//生成器函数\*的前后空格
187. "guard-for-in": 0,//for in 循环要用 if 语句过滤
188. "handle-callback-err": 0,//nodejs 处理错误
189. "id-length": 0,//变量名长度
190. "indent": [2, 4],//缩进风格
191. "init-declarations": 0,//声明时必须赋初值
192. "key-spacing": [0, { "beforeColon": false, "afterColon": true }],//对象字面量中冒号的前后空格
193. "lines-around-comment": 0,//行前/行后备注
194. "max-depth": [0, 4],//嵌套块深度
195. "max-len": [0, 80, 4],//字符串最大长度
196. "max-nested-callbacks": [0, 2],//回调嵌套深度
197. "max-params": [0, 3],//函数最多只能有 3 个参数
198. "max-statements": [0, 10],//函数内最多有几个声明
199. "new-cap": 2,//函数名首行大写必须使用 new 方式调用，首行小写必须用不带 new 方式调用
200. "new-parens": 2,//new 时必须加小括号
201. "newline-after-var": 2,//变量声明后是否需要空一行
202. "object-curly-spacing": [0, "never"],//大括号内是否允许不必要的空格
203. "object-shorthand": 0,//强制对象字面量缩写语法
204. "one-var": 1,//连续声明
205. "operator-assignment": [0, "always"],//赋值运算符 += -=什么的
206. "operator-linebreak": [2, "after"],//换行时运算符在行尾还是行首
207. "padded-blocks": 0,//块语句内行首行尾是否要空行
208. "prefer-const": 0,//首选 const
209. "prefer-spread": 0,//首选展开运算
210. "prefer-reflect": 0,//首选 Reflect 的方法
211. "quotes": [1, "single"],//引号类型 `` "" ''
212. "quote-props":[2, "always"],//对象字面量中的属性名是否强制双引号
213. "radix": 2,//parseInt 必须指定第二个参数
214. "id-match": 0,//命名检测
215. "require-yield": 0,//生成器函数必须有 yield
216. "semi": [2, "always"],//语句强制分号结尾
217. "semi-spacing": [0, {"before": false, "after": true}],//分号前后空格
218. "sort-vars": 0,//变量声明时排序
219. "space-after-keywords": [0, "always"],//关键字后面是否要空一格
220. "space-before-blocks": [0, "always"],//不以新行开始的块{前面要不要有空格
221. "space-before-function-paren": [0, "always"],//函数定义时括号前面要不要有空格
222. "space-in-parens": [0, "never"],//小括号里面要不要有空格
223. "space-infix-ops": 0,//中缀操作符周围要不要有空格
224. "space-return-throw-case": 2,//return throw case 后面要不要加空格
225. "space-unary-ops": [0, { "words": true, "nonwords": false }],//一元运算符的前/后要不要加空格
226. "spaced-comment": 0,//注释风格不要有空格什么的
227. "strict": 2,//使用严格模式
228. "use-isnan": 2,//禁止比较时使用 NaN，只能用 isNaN()
229. "valid-jsdoc": 0,//jsdoc 规则
230. "valid-typeof": 2,//必须使用合法的 typeof 的值
231. "vars-on-top": 2,//var 必须放在作用域顶部
232. "wrap-iife": [2, "inside"],//立即执行函数表达式的小括号风格
233. "wrap-regex": 0,//正则表达式字面量用小括号包起来
234. "yoda": [2, "never"]//禁止尤达条件
235. }
236. }

来自 <https://prettier.io/docs/en/options.html>
