var record = 0;

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA-GUx34_JovDo9Jy2VbtXVDHfiFRQGvcY",
  authDomain: "train-schedule-c00f5.firebaseapp.com",
  databaseURL: "https://train-schedule-c00f5.firebaseio.com",
  projectId: "train-schedule-c00f5",
  storageBucket: "train-schedule-c00f5.appspot.com",
  messagingSenderId: "834612099533"
};
firebase.initializeApp(config);

var database = firebase.database();

$("#new-train").on("click", function (event) {
  console.log("hello world!");
  event.preventDefault();

  var trainName = $("#train-name-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var firstTrain = $("#first-train-input").val().trim();
  var frequency = $("#frequency-input").val().trim();

  record = 0;

  var newTrain = {
    name: trainName,
    destination: destination,
    firstTrain: firstTrain,
    frequency: frequency
  };

  database.ref().push(newTrain);
  console.log(newTrain);
  alert("Train added!");

  //empty inputs once train is added
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#first-train-input").val("");
  $("#frequency-input").val("");
});

