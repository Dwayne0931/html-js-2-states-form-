function show_form(){
    document.getElementById("show_name").innerText = document.getElementById("name").value;
    document.getElementById("show_ic").innerText = document.getElementById("ic").value;
    document.getElementById("show_matric").innerText = document.getElementById("matric").value;
    document.getElementById("show_phone").innerText = document.getElementById("phone").value;
    document.getElementById("show_address").innerText = document.getElementById("address").value;

    document.getElementById("input_form").style.display = "none";
    document.getElementById("show_form").style.display = "block";
}

function cancel_form(){
    document.getElementById("input_form").style.display = "block";
    document.getElementById("show_form").style.display = "none";
}