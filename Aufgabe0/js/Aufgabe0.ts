function Namensfeld(): void {
  var name: string = prompt("Wieso ist dein Name?", "Vorname");
  if (name != null) {
    document.getElementById("input").innerHTML =
      "Dein Name ist " + name + ". Wieso auch nicht?";
  }
}