
isNaN 检查一个值是否为NaN
Number.isNaN(NaN)//true
Number.isNaN(15)//false

isInteger 判断一个值是否为整数，要注意的是，比如1和1.0都是整数。
Number.isInteger(1)//true
Number.isInteger(1.0)//true
Number.isInteger(1.1)//false

sign 判断一个数到底是正数，负数，还是零
Math.sign(-10)// -1
Math.sign(10)// +1
Math.sign(0)// +0
Math.sign(-0)// -0
Math.sign(NaN)// NaN
Math.sign('10')// +1
Math.sign('小明')// NaN
Math.sign('')// 0
Math.sign(true)// +1
Math.sign(false)// 0
Math.sign(null)// 0

trunc 去除一个数的小数部分，返回正数部分
Math.trunc(1.1)//1
Math.trunc(-1.1)//-1
Math.trunc(-0.1)//-0
Math.trunc('123.456')//123
Math.trunc('小明')//NaN