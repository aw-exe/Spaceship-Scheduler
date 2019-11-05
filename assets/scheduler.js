// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDixIxkTbA74OvfGe1aDuGZQ0sSUelIu9Y",
    authDomain: "spaceship-scheduler.firebaseapp.com",
    databaseURL: "https://spaceship-scheduler.firebaseio.com",
    projectId: "spaceship-scheduler",
    storageBucket: "spaceship-scheduler.appspot.com",
    messagingSenderId: "38323310408",
    appId: "1:38323310408:web:19e237fcf2d147cfe8ad7d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

console.log(database);

//   let spaceshipName;
//   let destination;
//   let spaceshipTime;
//   let frequency;

$(document).on("click", "#submission", function (event) {
    event.preventDefault();
    let spaceshipData = {
        name: $("#spaceship-name").val().trim(),
        role: $("#destination").val().trim(),
        startDate: $("#spaceship-time").val().trim(),
        rate: parseInt($("#frequency").val().trim()),
    }

    // database.ref().set(spaceshipData);

    console.log(spaceshipData);

    database.ref().push(spaceshipData);

    $("#spaceship-name").val("");
    $("#destination").val("");
    $("#spaceship-time").val("");
    $("#frequency").val("");
});