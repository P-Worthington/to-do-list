
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
};

function addID () {
    let listItems = document.getElementsByClassName("list-item");
    let length = listItems.length;
    return length
}

function addNewItem() {
    let item = getValue(0)
    addToList(item)
};
