let lotNumber = 1;

function createProduct() {
    const productName = document.getElementById("productName").value;
    const productDescription = document.getElementById("productDescription").value;
    const productStatus = document.getElementById("productStatus").value;

    if (productName && productDescription && productStatus) {
        addLotToList({
            lot: lotNumber,
            name: productName,
            description: productDescription,
            status: productStatus
        });

        lotNumber++;
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function addLotToList(product) {
    const lotItems = document.getElementById("lotItems");
    const listItem = document.createElement("li");

    const paragraphs = ['name', 'description', 'lot', 'status'].map(property => {
        return `<p><strong>${property.charAt(0).toUpperCase() + property.slice(1)}:</strong> ${product[property]}</p>`;
    });

    listItem.innerHTML = paragraphs.join("");

    // Adicione aqui os botões de edição, exclusão e transferência
    // ...

    listItem.classList.add("product-item");

    lotItems.appendChild(listItem);
}

function searchLots() {
    const input = document.getElementById("searchBar");
    const filter = input.value.toUpperCase();
    const ul = document.getElementById("lotItems");
    const li = ul.getElementsByTagName("li");

    for (let i = 0; i < li.length; i++) {
        const p = li[i].getElementsByTagName("p")[2];
        const txtValue = p.textContent || p.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}