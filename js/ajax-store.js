(async function() {

    const getInventory = async () => {
        let response = await fetch('/data/inventory.json');
        let data = await response.json()
        return data;
    }
        let inventory = await getInventory();
        console.log(inventory);

})();
(function() {
    "use strict";

    let button = document.getElementById('button');
    let insertProducts = document.getElementById('insertProducts');

    button.addEventListener('click', () => {
        $.get('data/inventory.json')
            .done(function(data) {
                insertProducts.innerHTML = '';
                $.each(data, function(index, product) {
                    insertProducts.innerHTML += `
              <tr>
                <td>${product.title}</td>
                <td>${product.quantity}</td>
                <td>${product.price}</td>
                <td>${product.categories.join(', ')}</td>
              </tr>
            `;
                });
            })
            .fail(function() {
                console.log('Fail to load inventory');
            });
    });

})();
