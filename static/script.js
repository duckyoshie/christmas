

// elements

// for date
var counter = document.getElementById('counter');
var day = document.getElementById('day');


// creates 'date' object
var date = new Date();

// checks if the date is equal to 25
if (date.getDate() < 25) {
    day.innerText = 25 - date.getDate();
    console.log(`${date.getDay()} / ${date.getMonth()} / ${date.getFullYear()}`)
} else if (date.getDate() == 25) {
    counter.innerText = "It's Christmas!";
} else {
    if (date.getMonth() == 11) {
        counter.innerText = `${date.getDate() - 25} days of Christmas`
    } else if (date.getMonth() == 0) {
        if (date.getDate() >= 4) {
            counter.innerText = `${date.getDate() + 8} days of Christmas`
        }
    } else {
        day.innerText = 365 - date.getDate();
    }
}

//
