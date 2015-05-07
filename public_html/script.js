var a;
var b=10;

a=true;
document.write(a);
a=5;
console.log(a);
a="Hello";
console.log(a);

console.log(a+b);

var s="Lebanese Canadian University";
document.write(s.toUpperCase()+"<br>");
document.write(s.toLowerCase());
document.write(s.indexOf("canadian")+"<br>");
document.write(s.indexOf("a")+"<br>");
document.write(s.lastIndexOf("canadian")+"<br>");
document.write(s.substring(5,10)+"<br>");
document.write(s.substr(5,10)+"<br>");

var d = new Date(2014,2,4,13,45,54,999);
document.write(d+"<br>");

var d = new Date;
document.write(d.getDate()+"<br>");
document.write(d.getDay()+"<br>");
document.write(d.getMonth()+"<br>");
document.write(d.getFullYear()+"<br>");
d.setMonth(7);
document.write(d+"<br>");