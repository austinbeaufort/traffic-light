
$(document).ready(function() {
    changeLights();
});


function changeLights() {
    
    changeGreenLight();
    changeYellowLight();
    changeRedLight();

    setInterval(function() {
        changeGreenLight();
        changeYellowLight();
        changeRedLight();
    }, 5000);
}


function changeGreenLight() {
    setTimeout(function() {
        $('.green').toggleClass('green-active');
    }, 0);
}

function changeYellowLight() {
    setTimeout(function() {
        $('.green').toggleClass('green-active');
        $('.yellow').toggleClass('yellow-active');
    }, 2000);
}

function changeRedLight() {
    setTimeout(function() {
        $('.yellow').toggleClass('yellow-active');
        $('.red').toggleClass('red-active');
    }, 3000);

    setTimeout(function() {
        $('.red').toggleClass('red-active');
    }, 5000);
    
}



