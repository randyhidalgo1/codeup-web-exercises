"use strict";
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

 let item=  [
        {
            "title": "Hammer",
            "quantity": 25,
            "categories": [
                "tool"
            ],
            "price": 20
        }, {
        "title": "Drill",
        "quantity": 5,
        "categories": [
            "tool",
            "powered"
        ],
        "price": 100
    }, {
        "title": "Mower",
        "quantity": 5,
        "categories": [
            "tool",
            "gas",
            "outdoor"
        ],
        "price": 200
    }, {
        "title": "Screwdrivers",
        "quantity": 25,
        "categories": [
            "tool"
        ],
        "price": 20
    }, {
        "title": "Wrench",
        "quantity": 25,
        "categories": [
            "tool"
        ],
        "price": 25
    }, {
        "title": "Saw",
        "quantity": 15,
        "categories": [
            "tool",
            "powered"
        ],
        "price": 40
    }, {
        "title": "Lawnmower",
        "quantity": 10,
        "categories": [
            "tool",
            "gas",
            "outdoor"
        ],
        "price": 290
    }, {
        "title": "Chainsaws",
        "quantity": 15,
        "categories": [
            "tool",
            "gas",
            "outdoor"
        ],
        "price": 250
    },
    ]
    function newItem(e){
        e.preventDefault()
        let itemValue= newItemSubmit.value
        let itemName= newItemSearch.value

        let item = {id: 0, title:itemName, quantity: itemValue, price:itemValue, categories: itemValue}
        item.unshift(newItem)
        item.forEach(item => {
            newItem.id+=1
        })
        updateStorage()

        tbody.innerHTML = renderItem(item); // update the array with the new item
    }
    function updateStorage() {
        sessionStorage.setItem('item', JSON.stringify(item));
    }

    window.addEventListener('load', function() {
        let oldItems = JSON.parse(sessionStorage.getItem('oldItems'));
        if (oldItems !== null) {
            item = oldItems;
            tbody.innerHTML = renderItem(item);
        }
    });

    let newItemSubmit = document.querySelector('#newItemSubmit')
    let newItemSearch = document.querySelector('#newItemSearch')

})();
