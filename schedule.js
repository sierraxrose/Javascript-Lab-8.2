$(document).ready(function () {


    $("#form").submit(dayOfTheWeek);

    // create function to hold data
    function dayOfTheWeek (event) {
        
        // create variables to get checked radio button and display schedule
        let day = $('input[name="day"]:checked').val();

        let schedule;

        // code for switch
        switch (day) {
            case "Monday":
                schedule = "Class (12:30 - 4:20 PM)";
                break;
            case "Tuesday":
                schedule = "Work (3-7:30 PM)";
                break;
            case "Wednesday":
                schedule = "Class (12:30 - 4:20 PM)";
                break;
            case "Thursday":
                schedule = "Work (3-7:30 PM)";
                break;
            case "Friday":
                schedule = "Work (3-7:30 PM)";
                break;
            case "Saturday":
                schedule = "Day Off";
                break;
            case "Sunday":
                schedule = "Work (10 AM - 6 PM)";
                break;
    }
        $("p#schedule").text(schedule);
    }
});