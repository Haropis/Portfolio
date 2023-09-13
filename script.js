function dropdownMenu() {
  var x = document.getElementById("navMenu");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

function formSubmit() {
  var templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "portfolioMessages";
  const templateID = "portfolioForm";
  const publicKey =  "ncIXFYXPcL7HOuFs9";

  emailjs
    .send(serviceID, templateID, templateParams)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Message sent successfully!");
    })
    .catch((err) => {
      console.log(err);
      alert("Something went wrong. Please try again.");
    });
}
