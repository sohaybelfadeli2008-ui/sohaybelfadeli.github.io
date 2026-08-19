function pullCord() {
  document.getElementById("cord").classList.add("pulled");
  document.getElementById("nameCard").classList.add("down");
}

function enterSite() {
  let nom = document.getElementById("nom").value;

  if (nom === "") {
    alert("كتب سميتك أولاً 🙂");
    return;
  }

  document.getElementById("welcomeMessage").innerHTML =
    "أهلاً " + nom + "، مرحباً بك فموقعي ✦";

  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("site").classList.add("show");
}}}