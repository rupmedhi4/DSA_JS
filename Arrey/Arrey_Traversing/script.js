let data = [3, 5, 4, 9, 1, 4, 0];

for (let i = 0; i < data.length; i++) {
    document.write(`Array ${i} is ${data[i]} <br>`);
}

function getElement() {
    const el = document.getElementById("element").value
    
    if(el<data.length && typeof parseInt(el) === "number" && el>=0 ){

       alert(data[el]); 

    }else{
        alert("please enter valid input")
    }
    
}
