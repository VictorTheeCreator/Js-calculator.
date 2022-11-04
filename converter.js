
function convert() {
  var input1 = document.querySelector("#input1");
  var input2 = document.querySelector("#input2");
  var input3 = document.querySelector("#input3");
  
  var country1 = document.querySelector("#country1").value;
  var country2 = document.querySelector("#country2").value;
  var country3 = document.querySelector("#country3").value;

  if (country1 == "usd") {
    if (country2 == "ngr") { 
      var result = input1.value * 365;
      input2.setAttribute("value", result);
    }
  }
}
