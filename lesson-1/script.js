let student = [
    {
        name: "NVA",
        age: 15,
        course: ["mindx 1", "mindx2", "mindx 3"]
    },
    {
        name: "NVB",
        age: 16,
        course: ["mindx 1", "mindx2", "mindx 4"]
    },
    {
        name: "NVC",
        age: 17,
        course: ["mindx 1", "mindx2", "mindx 4"]
    },
    {
        name: "NVD",
        age: 18,
        course: ["mindx 1", "mindx2", "mindx 3"]
    }
]

// const arr = document.getElementsByTagName("input")
const age = document.getElementById("#age").value = ""
const course = document.getElementById("#course").value = ""

function send(){
    for(let i = 0; i < student.length; i++){
        if(student[i].age == age){
            console.log(student[i].name)
        }
    }
}


  




// const findage = prompt('Độ tuổi cần tìm')
// let dem = 0;
// for (let i = 0; i <student.length; i++) {
//     if(student[i].age == findage){
//         console.log(student[i].name);
//         dem++; 
//         // da tim thay 1 nguoi
//     }
// }
// if (dem === 0){
//     console.log("Khong tim thay")
//     // dem > 0 => console log
// }

// let arr1 = [0,2,4,6,8]
// let arr2 = [1,3,5,7]
// let arr = [...arr1].concat(arr2)
// concat là gán mảng bên trong () vào cuối mảng được gán
// cu phap ... trong ES6 hiểu là copy toàn bộ phần tử trong mảng
//  arr chứa 2 mảng arr1 và arr2
// a)  Duyệt 2 array trên và hiển thị ra màn hình những số >3
// cu phap for of
// for (let i of arr){ 
//     console.log(i)
//     // index là phần tử của mảng mỗi khi duyệt qua
//     if(i > 3){
//         console.log(i)
//     }
// }
// dùng để sắp xếp
// console.log(arr.sort((a, b) => a - b))
// Tìm hiểu về mã ASCII và cú pháp sort

