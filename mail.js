const firebaseConfig = {
    apiKey: "AIzaSyDxDS52PZBrEmlpi671fn5znFB8aAxM3fM",
    authDomain: "fir-bc5e9.firebaseapp.com",
    projectId: "fir-bc5e9",
    storageBucket: "fir-bc5e9.appspot.com",
    messagingSenderId: "21975891971",
    appId: "1:21975891971:web:f8fe5ac8c73a14d215ce36",
    measurementId: "G-DLLXLFHREG"
  };
  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
