/*eslint-env browser*/
var employeesDetails = [ 
    ["Sally Smith", "Quality Assurance", 3423], 
    ["Mark Martin", "Vp Sales", 3346], 
    ["John Johnson", "Marketing", 3232], 
    ["Puneet Patil", "Manager", 3692 ], 
    ["Rajan Jha", "CEO", 3142], 
];

function populateEmployeeCount() {
    document.getElementById('employeeCount').innerHTML = "Showing " + employeesDetails.length + " Employees";
}

function clearAlerts() {
    document.getElementById('extensionError').innerHTML = "";
    document.getElementById('titleError').innerHTML = "";
    document.getElementById('nameError').innerHTML = "";
}

function clearForm() {
    document.getElementById('extension').value = "";
    document.getElementById('title').value = "";
    document.getElementById('employeeName').value = "";
    document.getElementById('employeeName').focus();
}

function generateEmployeeTable() {
    var employeeTable = document.getElementById('employeeTable');
    var i, j, r, button;

    for(i=0;i<employeesDetails.length;i++) {
        r = employeeTable.insertRow(i+1);
        for(j=0;j<employeesDetails[i].length;j++) {
            r.insertCell(j).innerHTML = employeesDetails[i][j];
        }

        button = document.createElement("input");
        button.style.background = "rgb(92, 168, 222)";
        button.style.color = "#FFFFFF";
        button.style.paddingRight = "30px";
        button.style.paddingLeft = "30px";
        button.style.paddingTop = "5px";
        button.style.paddingBottom = "5px";
        button.style.cursor = "pointer";
        button.style.border = "1px solid #000000";
        button.setAttribute("type", "button");
        button.setAttribute("value", "Delete" );
        button.setAttribute('onclick', 'deleteEmployee(this)');

        r.insertCell(j).appendChild(button);
    }

    populateEmployeeCount();
    clearForm();
}

function addEmployee() {
    var name = document.getElementById('employeeName').value;
    var title = document.getElementById('title').value;
    var extension = document.getElementById('extension').value;
    
    if(name != "" && name != null)
    {
        if(title != "" && title != null)
        {
            if(extension != "" && extension != null)
            {
                clearAlerts();
                var x = [name, title, extension];
                employeesDetails.push(x);

                var employeeTable = document.getElementById('employeeTable');
                var j, r, button;
                r = employeeTable.insertRow();

                for(j=0;j<x.length;j++)
                    r.insertCell(j).innerHTML = x[j];

                button = document.createElement("input");
                button.style.background = "rgb(92, 168, 222)";
                button.style.color = "#FFFFFF";
                button.style.paddingRight = "30px";
                button.style.paddingLeft = "30px";
                button.style.paddingTop = "5px";
                button.style.paddingBottom = "5px";
                button.style.cursor = "pointer";
                button.style.border = "1px solid #000000";
                button.setAttribute("type", "button");
                button.setAttribute("value", "Delete" );
                button.setAttribute('onclick', 'deleteEmployee(this)');

                r.insertCell(j).appendChild(button);

                populateEmployeeCount();
                clearForm();
            }
            else
            {
                document.getElementById('extensionError').innerHTML = "Extension cannot be empty.";
            }
        }
        else
        {
            document.getElementById('titleError').innerHTML = "Title cannot be empty.";
        }
    }
    else
    {
        document.getElementById('nameError').innerHTML = "Name cannot be empty.";
    }
}

function deleteEmployee(x) {
    r = x.parentNode.parentNode.rowIndex;
    document.getElementById('employeeTable').deleteRow(r);
    employeesDetails.splice(r-1, 1);

    populateEmployeeCount();
    clearForm();
}

function init() {
    document.getElementById('addButton').addEventListener('click', addEmployee);
    generateEmployeeTable();
    clearAlerts();
    clearForm();
}

window.addEventListener("load", init);