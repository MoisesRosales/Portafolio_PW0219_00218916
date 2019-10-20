let carnet_field = document.querySelector("#carnet_field");
let schedule_dropdown = document.querySelector("#schedule_field");
let late_switch = document.querySelector("#late_switch");
let submit_btn = document.querySelector("#submit_btn");

let table_body = document.querySelector("#table_body");
let carnet_regex = new RegExp("^[0-9]{8}$");

let student_list = [];
let serial = 0;

let printArray = () => {
  table_body.innerHTML = "";

  student_list.forEach(element => {
    let new_row = document.createElement("tr");
    new_row.classList.add("table-active");
    new_row.innerHTML = `<th scope='row'>${element.carnet}</th>
    <td>${element.horario}</td>
    <td>${element.ingreso}</td>
    <td>${element.tarde}</td>`;

    let new_cell = document.createElement("td");
    let new_button = document.createElement("button");

    new_button.className = "btn btn-danger";
    new_button.innerText = "Delete";
    new_button.value = element.id;
    new_button.disabled = true;

    let new_cell2 = document.createElement("td");
    let new_input = document.createElement("input");
    new_input.className = "confirm";
    new_input.innerText = "Carnet";

    new_input.addEventListener("keyup", event => {
      let keyCode2 = event.keyCode;
      let carnet2 = element.carnet;
      let id_actual = event.target.value;

      if (keyCode2 == 13) {
        new_button.click();
      }

      if (
        carnet_regex.test(new_input.value) &&
        new_input.value == element.carnet
      ) {
        new_button.disabled = false;
      } else {
        new_button.disabled = true;
      }
    });

    new_button.addEventListener("click", event => {
      let id_actual = event.target.value;

      student_list.forEach((element, pos) => {
        if (new_input.value == element.carnet && id_actual == element.id) {
          student_list.splice(pos, 1);
          printArray();
        }
      });
    });

    new_cell.appendChild(new_button);
    new_cell2.appendChild(new_input);
    new_row.appendChild(new_cell);
    new_row.appendChild(new_cell2);
    table_body.appendChild(new_row);
  });
};

/*
Función para agregar un hijo a la tabla
*/

let addStudent = (carnet, schedule, late) => {
  let datetime = new Date();
  let datetime_string = datetime.toLocaleString();

  student_list.push({
    id: serial,
    carnet: carnet,
    horario: schedule,
    tarde: late,
    ingreso: datetime_string
  });
  serial++;
};

/*
Función para parsear el valor booleano del late_switch
*/

let parseLateSwitch = value => {
  if (value) {
    return "Tardisimo";
  }
  return "A tiempo";
};

/*
Listener para detectar el click en el boton
*/

submit_btn.addEventListener("click", () => {
  let carnet = carnet_field.value;
  let schedule =
    schedule_dropdown.options[schedule_dropdown.selectedIndex].text;
  let late = parseLateSwitch(late_switch.checked);

  if (carnet_regex.test(carnet)) {
    addStudent(carnet, schedule, late);
    printArray();
  } else {
    alert("Formato de carnet no válido");
  }
});

/*
Listener para disparar el botón cuando se aprete enter
*/

carnet_field.addEventListener("keyup", event => {
  let keyCode = event.keyCode;
  let carnet = carnet_field.value;

  if (keyCode == 13) {
    submit_btn.click();
  }

  if (carnet_regex.test(carnet)) {
    submit_btn.disabled = false;
  } else {
    submit_btn.disabled = true;
  }
});
