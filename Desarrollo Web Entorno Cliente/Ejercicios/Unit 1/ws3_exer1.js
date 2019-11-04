var nChildren, pName, gLocation, jTitle;

function tellFortune(nChildren, pName, gLocation, jTitle) {
    alert("You will be a " + jTitle + " in " + gLocation + ", and married to " 
            + pName + " with " + nChildren + " kids");
}

for(let i = 0; i < 3; i++) {
    nChildren = prompt("Enter number of children:");
    pName = prompt("Enter a partner's name");
    gLocation = prompt("Enter geographic location:");
    jTitle = prompt("Enter job title:");
    tellFortune(nChildren, pName, gLocation, jTitle);
}