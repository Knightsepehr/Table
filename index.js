const table = document.getElementById("data-table");
const cell_inputs = document.querySelectorAll(".table-cell");
const save_btn = document.getElementById("save");
const delete_btn = document.getElementById("delete");

let cell_input_arr= []
cell_input_arr= [...cell_inputs]

let data = [];
const saved_data = JSON.parse(localStorage.getItem("data")) || [];
let saved_data_arr = [...saved_data];
const tbody = document.getElementById("tbody");

function create_row() {
    let newrow = document.createElement("tr");
    // Row 1
    let newcell_1 = document.createElement("td");
    let newinput_1 = document.createElement("input");
    newinput_1.type = 'text';
    newinput_1.classList = 'table-cell';
    newcell_1.appendChild(newinput_1);
    // Row 2
    let newcell_2 = document.createElement("td");
    let newinput_2 = document.createElement("input");
    newinput_2.type = 'text';
    newinput_2.classList = 'table-cell';
    newcell_2.appendChild(newinput_2);
    // Row 3
    let newcell_3 = document.createElement("td");
    let newinput_3 = document.createElement("input");
    newinput_3.type = 'text';
    newinput_3.classList = 'table-cell';
    newcell_3.appendChild(newinput_3);

    newrow.appendChild(newcell_3);
    newrow.appendChild(newcell_2);
    newrow.appendChild(newcell_1);
    tbody.append(newrow);
    return [newinput_1,newinput_2,newinput_3];
}


document.addEventListener('DOMContentLoaded', function() {
    console.log(saved_data_arr);
    if (saved_data_arr.length <= 0){
        console.log("empty");
        let current_cell_index = 0;
        cell_input_arr[current_cell_index].placeholder = "Enter Text...";
        cell_input_arr[current_cell_index].focus();
        document.addEventListener("keyup",(key)=>{
            if (key.keyCode == 13) {
                console.log("meow 1");
                if (current_cell_index < cell_input_arr.length) {
                    console.log("meow 2");
                    cell_input_arr[current_cell_index].placeholder = "Enter Text...";
                    cell_input_arr[current_cell_index].focus();
                    console.log(current_cell_index);
                    current_cell_index += 1;
                }
                else{
                    let idk = create_row();
                    cell_input_arr.push(idk[2]);
                    cell_input_arr.push(idk[1]);
                    cell_input_arr.push(idk[0]);

                }
            }
        });
    }
    else{
        if (saved_data_arr.length > cell_input_arr.length) {
            for (let index = 0; index < saved_data_arr.length - cell_input_arr.length; index++) {
                console.log("meow meow idk");
                let idk = create_row();
                cell_input_arr.push(idk[2]);
                cell_input_arr.push(idk[1]);
                cell_input_arr.push(idk[0]);
            }
        }

        for (let index = 0; index < cell_input_arr.length; index++) {
            cell_input_arr[index].value = saved_data_arr[index];
        }
    }
    delete_btn.addEventListener("click",()=>{
        cell_input_arr.forEach((cell)=>{
            cell.value = "";
        });
        data = [];
        localStorage.setItem("data",JSON.stringify(data));
        this.location.reload();
    });
    save_btn.addEventListener("click",()=>{
        cell_input_arr.forEach((cell)=>{
            for (let index = 0; index < cell_input_arr.length; index++) {
                if (cell_input_arr[index] == cell) {
                    console.log(cell);
                    data.push(cell.value);

                }
                
            }
        });
        console.log("This will be saved :");
        console.log(data);
        localStorage.setItem("data",JSON.stringify(data));
        this.location.reload();

    });


    
}, false);
