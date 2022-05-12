const Trello = require ("./main");
var trello = new Trello (!process.env.TOKEN, !process.env.KEY);
var cardTitle = `Card Nueva ${new Date()}`;

console.log("Ejecutando!!");

trello.addCard(cardTitle, "LaunchX Card Description", "627b34ca21771b63b952a6a1", 
function (error, trelloCard)  {
    if (error){
        console.log("Could not add card: ", error);
    }
    else {
        console.log("Added card: ", trelloCard);
    }
});

