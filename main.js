"use strict"
// renders coffee html
function renderCoffee(coffee) {
    var html = '<div class="coffee col-6">';
    html += '<h3 class="d-inline-block px-1">' + coffee.name +  '</h3>'
    html += '<p class="d-inline-block px-1 text-muted">' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}

// puts items in ascendng order
function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// updates coffee menu
function updateCoffees() {
    var selectedRoast = roastSelection.value;
    coffees.forEach(function (coffee) {
        if(selectedRoast === "all") filteredCoffees.push(coffee);
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    })
    coffeeMenu.innerHTML = renderCoffees(filteredCoffees);
}

// coffee array
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

// variables
var filteredCoffees = [];
var coffeeMenu = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var nameSearch = document.getElementById("nameSearch");
//sets the HTML
coffeeMenu.innerHTML = renderCoffees(coffees);

// 1st submit button
submitButton.addEventListener('click', ()=> {
    filteredCoffees = [];
    updateCoffees();
})



//text input search for coffee
var coffeeValue = function(){
    let searchName = nameSearch.value;

    coffeeMenu.innerHTML = renderCoffees(
        filteredCoffees.filter(function(coffee) {
            if (coffee.name.toLowerCase().startsWith(searchName.toLowerCase())) {
                return coffee;
            }
        })
    )
}

//seaches while typing
nameSearch.addEventListener("keyup", coffeeValue) ;
roastSelection.addEventListener('change', ()=> {
    filteredCoffees = [];
    updateCoffees();
})

                                     // creating users coffee

//adds user input to menu
var userCoffee = function () {
    console.log(newCoffee.value);
    coffees.push({id: coffees.length+1, name: newCoffee.value, roast: newRoast.value},)
    filteredCoffees = [];
    updateCoffees();
}

//variables
var newCoffee = document.getElementById("newCoffee")
var newRoast = document.getElementById("new-selection")
var submit = document.getElementById("user-submit")

//2ns submit button
submit.addEventListener("click",userCoffee)