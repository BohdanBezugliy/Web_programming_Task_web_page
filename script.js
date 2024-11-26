function Move(node,Previous,Next){
    if(node.nextElementSibling && node.previousElementSibling){
        const msg = prompt(`${node.innerText.trim()}; Рухатися далі(Так)(Ні, якщо бажаєте повернутися)? Для виходу натисніть Cancel.`,"Так")
        if(msg === "Так"){
            Next(node);
        }else if(msg === "Ні"){
            Previous(node);
        }else{
            alert("Кінець обходу.");
        }
    }else if(node.previousElementSibling){
        if(prompt(`${node.innerText.trim()}; Кінець вузла, повернутися назад? Для виходу натисніть Cancel.`,"Так") === "Так"){
            Previous(node);
        }else{
            alert("Кінець обходу.")
        }
    }else if(node.nextElementSibling){
        if(prompt(`${node.innerText.trim()}; Рухатися далі? Для виходу натисніть Cancel.`,"Так") === "Так"){
            Next(node);
        }else{
            alert("Кінець обходу.")
        }
    }
}
function Previous(node){
    if(node.previousElementSibling)
        Move(node.previousElementSibling,Previous,Next);
}
function Next(node){
    if(node.nextElementSibling)
        Move(node.nextElementSibling,Previous,Next);
}
if(confirm("Почати обхід дерева?")){
    const firstElementChild = document.body.firstElementChild;
    Move(firstElementChild, Previous, Next);
}

