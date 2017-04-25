$(document).ready(function() {
    var currentTime = new Date ( );
    var currentHours = currentTime.getHours ( );
    var currentMinutes = currentTime.getMinutes ( )
    if (currentMinutes < 10) {
        $("#clock").html(currentHours + " : 0" + currentMinutes);
    } else {
        $("#clock").html(currentHours + " : " + currentMinutes);
    }
});
