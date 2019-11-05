console.log(moment().format("MM DD YYYY"));

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCst5ix8CaPhrXojk8bu7t-C9SDuppf2_Q",
    authDomain: "timesheet-group-activity.firebaseapp.com",
    databaseURL: "https://timesheet-group-activity.firebaseio.com",
    projectId: "timesheet-group-activity",
    storageBucket: "timesheet-group-activity.appspot.com",
    messagingSenderId: "12252721423",
    appId: "1:12252721423:web:5c2cf4b42faf246b25ce7a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

console.log(database);

//   let name;
//   let role;
//   let startDate;
//   let rate;

$(document).on("click", "#submission", function (event) {
    event.preventDefault();
    let employeeData = {
        name: $("#employee-name").val().trim(),
        role: $("#role").val().trim(),
        startDate: $("#start-date").val().trim(),
        rate: parseInt($("#monthly-rate").val().trim()),
    }

    // database.ref().set(employeeData);


    console.log(employeeData);

    database.ref().push(employeeData);

    $("#employee-name").val("");
    $("#role").val("");
    $("#start-date").val("");
    $("#monthly-rate").val("");

});

database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().role);
    console.log(childSnapshot.val().startDate);
    console.log(childSnapshot.val().rate);

    const newDate = moment(childSnapshot.val().startDate, "YYYY-MM-DD");
    const convertedDate = newDate.format("MM-DD-YYYY");

    var now = moment();
    let dateDifference = moment(convertedDate);
    let monthsWorked = now.diff(dateDifference, 'months')
    let totalBilled = monthsWorked*childSnapshot.val().rate;
    
    console.log(totalBilled);
    console.log(now.diff(dateDifference, 'months'));

    $("#table").append("<tr><td>" + childSnapshot.val().name + "</td><td>" + childSnapshot.val().role + "</td><td>" + convertedDate + "</td><td>" + monthsWorked + "</td><td>" + childSnapshot.val().rate +  "</td><td>" + totalBilled +  "</td>");

});