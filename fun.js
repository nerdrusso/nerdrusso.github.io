const resultsDiv = document.getElementById('results'); 

   function bee() {
    var list = JSON.parse(jsonInput.value);
executeCommands(list);

    }
    function executeCommands(list) {
  for (const item of list) {
    if ('print' in item) {
      console.log(item.print);
    }else if ('printkk' in item) {
      console.log(item.printkk + "kk");
    }
 
 
 
 
 
 
  }
}
