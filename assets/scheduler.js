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
        spaceshipName: $("#spaceship-name").val().trim(),
        destination: $("#destination").val().trim(),
        spaceshipTime: $("#spaceship-time").val().trim(),
        frequency: parseInt($("#frequency").val().trim()),
    }

    // database.ref().set(spaceshipData);

    console.log(spaceshipData);

    database.ref().push(spaceshipData);

    $("#spaceship-name").val("");
    $("#destination").val("");
    $("#spaceship-time").val("");
    $("#frequency").val("");
});

database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());
    console.log(childSnapshot.val().spaceshipName);
    console.log(childSnapshot.val().destination);
    console.log(childSnapshot.val().spaceshipTime);
    console.log(childSnapshot.val().frequency);

    const newTime = moment(childSnapshot.val().spaceshipTime, "HH:mm");
    const convertedTime = newTime.format("HH:mm");

    $("#table").append("<tr><td>" + childSnapshot.val().spaceshipName + "</td><td>" + childSnapshot.val().destination + "</td><td>" + spaceshipTime + "</td><td>" + frequency + "</td>");

});