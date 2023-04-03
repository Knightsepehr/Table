const table = document.getElementById("data-table");
const cell_inputs = document.querySelectorAll(".table-cell");
const save_btn = document.getElementById("save");
const delete_btn = document.getElementById("delete");


let data = [];
const saved_data = JSON.parse(localStorage.getItem("data")) || [];
let saved_data_arr = [...saved_data];

document.addEventListener('DOMContentLoaded', function() {
    console.log(saved_data_arr);
    if (saved_data_arr.length <= 0){
        console.log("empty");
        let current_cell_index = 0;
        cell_inputs[current_cell_index].placeholder = "Enter Text...";
        cell_inputs[current_cell_index].focus();
        document.addEventListener("keyup",(key)=>{
            if (key.keyCode == 13) {
                if (current_cell_index < cell_inputs.length) {
                    cell_inputs[current_cell_index].placeholder = "Enter Text...";
                    cell_inputs[current_cell_index].focus();
                    console.log(current_cell_index);
                    current_cell_index += 1;
                }
                else{
                    current_cell_index = 0;
                    cell_inputs[current_cell_index].placeholder = "Enter Text...";
                    cell_inputs[current_cell_index].focus();
                    console.log(current_cell_index);
                }
            }
        });
    }
    else{
        for (let index = 0; index < cell_inputs.length; index++) {
            cell_inputs[index].value = saved_data_arr[index];
        }
    }
    delete_btn.addEventListener("click",()=>{
        cell_inputs.forEach((cell)=>{
            cell.value = "";
        });
        data = [];
        localStorage.setItem("data",JSON.stringify(data));
    });
    save_btn.addEventListener("click",()=>{
        cell_inputs.forEach((cell)=>{
            let cell_index = 0;
            for (let index = 0; index < cell_inputs.length; index++) {
                if (cell_inputs[index] == cell) {
                    console.log(cell);
                    // const new_data = {
                    //     text: cell.value,
                    //     index:index,
                    // }
                    data.push(cell.value);
                    // data.push(new_data);
                }
                
            }
        });
        console.log("This will be saved :");
        console.log(data);
        localStorage.setItem("data",JSON.stringify(data));
    });


    
}, false);
