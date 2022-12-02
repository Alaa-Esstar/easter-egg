function easterEggConsole() {
  let messages = [
    "Dont forget to use condoms",
    "Use condoms for safe sex",
    "Having sex with a condom is like eating chocolate with the wrap on",
    "Safe sex is an act of self love",
    "Some people have contracted HIV during their separate endeavours to give someone or some people a curable STD.",
  ];
  var random = messages[Math.floor(Math.random() * messages.length)];
  return console.log("%c " + random, "background: #222; color: #bada55");
}
