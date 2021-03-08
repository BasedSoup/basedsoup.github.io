let gender = "";

$("input[type='radio']").change(function () {

    if ($(this).val() === "other") {
        $("#otherAnswer").show();
    } else {
        $("#otherAnswer").hide();
    }

});

function Authentication(id) {
    if (document.getElementById(id).value === "") {
        document.getElementById(`${id}field`).style.color = "red";
    } else {
        document.getElementById(`${id}field`).style.color = "green";
    }
}

function PasswordAuth() {
    if (document.getElementById("password").value.length >= 8) {
        document.getElementById("passwordfield").style.color = "green";
        if (document.getElementById("password").value === document.getElementById("confpassword").value) {
            document.getElementById("confpasswordfield").style.color = "green";
        } else {
            document.getElementById("confpasswordfield").style.color = "red";
        }
    } else {
        document.getElementById("passwordfield").style.color = "red";
        document.getElementById("confpasswordfield").style.color = "red";

    }
}

function Colour(id) {
    if (document.getElementById(`${id}field`).style.color === "green") {
        return true;
    }
}

function GenderAuth() {
    if (document.getElementById("male").checked) {
        gender = "Male";
        document.getElementById("genderfield").style.color = "green";
    } else {
        if (document.getElementById("female").checked) {
            document.getElementById("genderfield").style.color = "green";
            gender = "Female";
        } else {
            if (document.getElementById("otherAnswer").value !== "") {
                document.getElementById("genderfield").style.color = "green";
                gender = document.getElementById("otherAnswer").value;
            } else{
                document.getElementById("genderfield").style.color = "red";
            }
        }
    }
}


function Submit() {
    let counter = 0;
    ["username", "cname", "sname", "email", "password", "confpassword"].forEach(Authentication);
    GenderAuth();
    PasswordAuth();
    ["username", "cname", "sname", "email", "password", "confpassword", "gender"].forEach(id => {
        if (Colour(id)){
            counter++;
    }});
    if (counter === 7) {
        alert(`Username:\n${document.getElementById("username").value}\n
Name:\n${document.getElementById("cname").value} ${document.getElementById("sname").value}\n
Email:\n${document.getElementById("email").value}\n
Gender:\n${gender}`)
    }}
