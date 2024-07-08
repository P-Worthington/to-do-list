
function getValue(a) {
    let x = document.getElementById("newItemForm").elements[a].value;
    return x;
};

function addToList(a) {
    const node = document.createElement("li");
    node.classList.add("list-item")
    string = `${a}`
    const textnode = document.createTextNode(string);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
    length = addID();
    node.id = `list-id-${length}`;
    return length
};

function addID () {
    let listItems = document.getElementsByClassName("list-item");
    let length = listItems.length;
    return length
}

function addHandler(a) {
    let item = document.getElementById(`list-id-${length}`);
    item.addEventListener("click", removeItem(item));
}

function removeItem(item) {
    item.remove();
}

function addNewItem() {
    let item = getValue(0);
    number = addToList(item);
    //addHandler(number);
};
