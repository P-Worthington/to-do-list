
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

}

function addNewItem() {
    let item = getValue(0)
    addToList(item)
}
