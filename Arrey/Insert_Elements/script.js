//insert elements

// let data = [2, 10, 35, 48, 59];
// let newEl = document.getElementById("newEl")
// let position = document.getElementById("position")

// for(let i= data.length-1; i>=0; i--){
//     if(i>=position){
//         data[i+1]=data[i];
//         if(i===position){
//             data[i]=newEl
//         }
//     }
// }



function insertEl(){
  
let data = [2, 10, 35, 48, 59];
let newEl = document.getElementById("newEl").value
let position = document.getElementById("position").value

console.log(data)

for(let i= data.length-1; i>=0; i--){
    if(i>=position){
        data[i+1]=data[i];
        if(i==position){
            data[i]=newEl
        }
    }
}
console.log(data)

}


