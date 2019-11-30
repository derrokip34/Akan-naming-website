function submition(){
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var century = parseInt(document.getElementById("century").value);
    var year = parseInt(document.getElementById("year").value);
    var dayOfWeek =((((century/4)-2*century-1)+((5*year/4))+((26*(month+1)/10))+day)%7);
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Afa"]

    if (document.getElementById("gender").checked) {
        var gender = "male"
    } else {
        var gender = "female"
    }
    if (month < 1 || month > 12 || month == 2 && day > 29) {
        alert("Enter valid month")
    } else if(day < 1 || day > 31) {
        alert("Enter valid date")
    } else if (Math.round(dayOfWeek) == 1 && gender === "male") {
        alert("Born on Sunday and your Akan name is " + maleNames[0]);
    } else if (Math.round(dayOfWeek) == 2 && gender === "male") {
        alert("Born on Monday and your Akan name is " + maleNames[1]);
    } else if (Math.round(dayOfWeek) == 3 && gender === "male") {
        alert("Born on Tuesday and your Akan name is " + maleNames[2]);
    } else if (Math.round(dayOfWeek) == 4 && gender === "male") {
        alert("Born on Wednesday and your Akan name is " + maleNames[3]);
    } else if (Math.round(dayOfWeek) == 5 && gender === "male") {
        alert("Born on Thursday and your Akan name is " + maleNames[4]);
    } else if (Math.round(dayOfWeek) == 6 && gender === "male") {
        alert("Born on Friday and your Akan name is " + maleNames[5]);
    } else if (Math.round(dayOfWeek) === 7 && gender === "male") {
        alert("Born on Saturday and your Akan name is " + maleNames[6]);
    } else if (Math.round(dayOfWeek) == 1 && gender === "female") {
        alert("Born on Sunday and your Akan name is " + femaleNames[0])
    } else if (Math.round(dayOfWeek) == 2 && gender === "female") {
        alert("Born on Monday and your Akan name is " + femaleNames[1])
    } else if (Math.round(dayOfWeek) == 3 && gender === "female") {
        alert("Born on Tuesday and your Akan name is " + femaleNames[2])
    } else if (Math.round(dayOfWeek) == 4 && gender === "female") {
        alert("Born on Wednesday and your Akan name is " + femaleNames[3])
    } else if (Math.round(dayOfWeek) == 5 && gender === "female") {
        alert("Born on Thursday and your Akan name is " + femaleNames[4])
    } else if (Math.round(dayOfWeek) == 6 && gender === "female") {
        alert("Born on Friday and your Akan name is " + femaleNames[5])
    } else if (Math.round(dayOfWeek) == 7 && gender === "female") {
        alert("Born on Saturday and your Akan name is " + femaleNames[6])
    }
0}