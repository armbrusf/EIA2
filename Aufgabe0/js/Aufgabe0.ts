function Namensfeld(): void {
  var name: string = prompt("Wieso ist dein Name", "");
  if (name != null) {
    document.getElementById("input").innerHTML =
      "Dein Name ist " + name + ". Wieso auch nicht?";
  }
    }