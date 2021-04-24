let student = [
    {
        name: "Duong",
        age: 11,
        hobbies: ["video game","sleep","learn"]
    },
    {
        name: "Dong",
        age: 12,
        hobbies: ["video game","sick","study"]
    },
    {
        name: "Minh",
        age: 13,
        hobbies: ["video game","sick","learn"]
    },
    {
        name: "Thanh",
        age: 9,
        hobbies: ["play game","sleep","learn"]
    },
    {
        name: "Hung",
        age: 11,
        hobbies: ["play game","sick","study"]
    }
]
 
// Cau 1: nhap tuoi va in ra name cua nhung ai co so tuoi da nhap
// cau 2: Nhap so thich, và in ra toàn bộ sở thích và name của những ai có chứa sở thích đó.
// Câu 3: Lọc ra những ai có sở thich là study và in ra nó.
// Cau 4: thay doi toan bo nhung ai co tuoi == 11 thành 15. (sử dụng map nhé).


// cau1
// const findage = prompt('Độ tuổi cần tìm')
// for (let i of student) {
//     if(student[i].age == findage){
//         console.log(student[i].name);
//     }
// }

// cau2
// const findhobbies = prompt("Nhập sở thích")
// for(let i of student){
//     if(student[i].hobbies == findhobbies){
//         console.log(student[i].name);
//     }
// }

// cau 3

// let study = student.filter((index) => index.hobbies == "study" )
// console.log(study);