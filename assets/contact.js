console.log("hello");
$(document).ready(enigmaEmail);
function enigmaEmail() {
  const myEmail = "mailto:laure" + "nnoel" + "tner@gm" + "ail.com";
  $("#emailCard").attr("action", myEmail);
  console.log(myEmail);
}
