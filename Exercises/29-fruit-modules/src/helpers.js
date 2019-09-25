function choice(items){
    return items[Math.floor(Math.random() * items.length)];
}

function remove(items, item){
    let returnArray = [...items];
    returnArray.splice(returnArray.indexOf(item), 1);
    return returnArray;
}

export {choice, remove};