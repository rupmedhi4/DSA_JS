// let data =[20,40,60,5,10,70,80,99];
// let item=70;
// let index=undefined;

// for(i=0;i<=data.length-1;i++){
//     // console.warn(data[i])
//     if(data[i]===item)
//     {
//         index=i;
//         break;
//     }
// }
// console.warn(index);

// console.warn(data.indexOf(item))
// data.splice(2,1)
// console.warn(data)
function searchElement() {
    let data = [20, 40, 60, 5, 10, 70, 80, 99];
    let item = document.getElementById('searchEl').value;
    let index = undefined;
    for (i = 0; i <= data.length - 1; i++) {
        // console.warn(data[i])
        if (data[i] === parseInt(item)) {
            index = i;
            break;
        }
    }
    console.warn(index);
}