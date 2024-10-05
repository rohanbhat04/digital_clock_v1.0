let day = document.querySelector("#day");
let date = document.getElementById("date");
let month = document.getElementById("month");
let year = document.getElementById("year");
let hour = document.getElementById("hours");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");
let am_pm = document.querySelector("#am-pm");

function current_time() {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let present = new Date();

    day.innerHTML = days[present.getDay()];
    date.innerHTML = present.getDate();
    month.innerHTML = months[present.getMonth()];
    year.innerHTML = present.getFullYear();

    function hours() {
        let h = present.getHours();
        return h > 12 ? h - 12 : h;
    }

    hour.innerHTML = (hours() < 10) ? '0' + hours() : hours();
    mins.innerHTML = (present.getMinutes() < 10) ? '0' + present.getMinutes() : present.getMinutes();
    secs.innerHTML = (present.getSeconds() < 10) ? '0' + present.getSeconds() : present.getSeconds();
    am_pm.innerHTML = (present.getHours() >= 12) ? "PM" : "AM";
}

let interval = setInterval(current_time, 500);
