// BAI1
// let bienSo = Number(prompt("Nhập biển số xe"));
// let a = bienSo % 10;
// let x = Math.floor(bienSo/10);
// let b = x % 10;
// let y = Math.floor(x/10);
// let c = y % 10;
// let z = Math.floor(y/10);
// let d = z % 10;
// let j = Math.floor (z/10);
// let e = j % 10;
// console.log("Tổng nút biển số xe của bạn là:", a+b+c+d+e);

// BAI2
// const Pi = 3.14; 
// let r = prompt("Nhap ban kinh hinh tron:");
// let S = r*r*Pi;
// let P = 2*r*Pi;
// console.log("Dien tich hinh tron la", S);
// console.log("Chu vi hinh tron la", P);

// BAI4
// let x = prompt("Số lượng:");
// let y = prompt("Đơn giá:");
// let tien = x * y;
// let tax = tien * 0.1;
// console.log("So tien can thanh toan", tien);
// console.log("VAT", tax);

// BAI5
// let x = prompt("Nhập số giây");
// let gio = Math.floor(x/3600);
// let phut = Math.floor((x-(gio*3600))/60);
// let giay = x-(gio*3600)-(phut*60);
// console.log(gio + ":" + phut + ":"+ giay);

// BAI6
let user = {
    name: "Tien",
    pass: "123Tien",
    email: "lamtien98@gmail.com",
    phone: "0909123456",
}
console.log(user.name);
console.log(user.pass);
console.log(user.email);
console.log(user.phone);
user.name = prompt("Nhap ten nguoi dung");
user.pass = prompt("Nhap mat khau");
user.email = prompt("Nhap email cua ban");
user.phone = Number(prompt("Nhap so dien thoai cua ban"));
let a = user.phone % 10;
let z = Math.floor(phone/10);
let b = z % 10;
let y = Math.floor(z/10);
let c = y % 10;
let x = Math.floor(y/10);
let d = x % 10;
let w = Math.floor(x/10);
let e = w % 10;
let v = Math.floor(w/10);
let f = v % 10;
let u = Math.floor(v/10);
let g = u % 10;
let t = Math.floor(u/10);
let h = t % 10;
let s = Math.floor(t/10);
let i = s % 10;
let tong = a+b+c+d+e+f+g+h+i;
console.log("Tong so dien thoai cua ban la:", tong);

//     name: ,
//     pass: prompt("Nhap mat khau"),
//     email: prompt("Nhap email"),
//     phone: prompt("Nhap so dien thoai")

// }
// let bienSo = Number(phone);
// let a = bienSo % 10;
// let x = Math.floor(bienSo/10);
// let b = x % 10;
// let y = Math.floor(x/10);
// let c = y % 10;
// let z = Math.floor(y/10);
// let d = z % 10;
// let j = Math.floor (z/10);
// let e = j % 10;
// console.log(user.name);
// console.log(user.pass);
// console.log(user.email);
// console.log(user.phone);
// console.log("So nut cua dien thoai ban la", a+b+c+d+e);


// BAI8
// let player = {
//     name: prompt("Nhap ten nguoi dung"),
//     number: prompt("Nhap mat khau"),
//     skill: {
//         shoot: Number(prompt("Nhap chi so sut")),
//         pass: Number(prompt("Nhap chi so sut")),
//         head: Number(prompt("Nhap chi so danh dau")),
//     }

// }
// skill = (shoot+pass+head)/3;
// console.log(player.name);
// console.log(player.number);
// console.log(player.skill);
// console.log("Chi so trung binh cua cau thu la", skill);


