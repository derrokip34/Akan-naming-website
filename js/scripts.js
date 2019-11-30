function submition(){
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var century = parseInt(document.getElementById("century").value);
    var year = parseInt(document.getElementById("year").value);
    var dayOfWeek =(((century/4)-2*century-1)+((5*year/4))+((26*(month+1)/10))+day)%7;
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Afa"]

    if (document.getElementById("gender").checked) {
        var gender = "male"
    } else {
        gender = "female"
    }
    if (month < 1 || month > 12 || month == 2 && day > 29) {
        alert("Enter valid month")
    } else if(day < 1 || day > 31) {
        alert("Enter valid date")
    }
}