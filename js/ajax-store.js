(async function() {

    const getInventory = async () => {
        let response = await fetch('/data/inventory.json');
        let data = await response.json()
        return data;
    }
        let inventory = await getInventory();
        console.log(inventory);

})();

$(document).ready(function() {
    $.get("inventory.json", function(data) {
        $.each(data, function(index, product) {
            let row = $("<tr><td>" + product.title + "</td><td>" + product.quantity + "</td><td>" + product.catergories + "</td></tr>");
            $("#productsTableBody").append(row);
        });
    }, "json");
});
