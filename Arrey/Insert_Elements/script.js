let data = [2, 10, 35, 48, 59];
let newEl = 70;
let position = 2;

for(let i= data.length-1; i>=0; i--){
    if(i>=position){
        data[i+1]=data[i];
        if(i===position){
            data[i]=newEl
        }
    }
}