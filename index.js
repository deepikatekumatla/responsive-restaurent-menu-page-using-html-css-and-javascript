var items=[
    {
        id: 0,
        item_name : "Food Item 1",
        img : "./images/food1.jpg",
        category: "dinner",
        price : "$77.9",
        text : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words."
    },
    {
        id: 1,
        item_name : "Food Item 2",
        img : "./images/food2.jpg",
        category: "breakfast",
        price : "$67.9",
        text : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words."
    },
    {
        id: 2,
        item_name : "Food Item 3",
        img : "./images/food3.jpg",
        category: "breakfast",
        price : "$47.9",
        text : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words."
    },
    {
        id: 3,
        item_name : "Food Item 4",
        img : "./images/food4.jpg",
        category: "breakfast",
        price : "$35.5",
        text : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words."
    },
    {
        id: 4,
        item_name : "Food Item 5",
        img : "./images/food5.jpg",
        category: "lunch",
        price : "$24.7",
        text : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words."
    },
    {
        id: 5,
        item_name : "Food Item 6",
        img : "./images/food6.jpg",
        category: "lunch",
        price : "$37.9",
        text : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words."
    },
    {
        id: 6,
        item_name : "Food Item 7",
        img : "./images/food7.jpg",
        category: "lunch",
        price : "$42.3",
        text : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words."
    },
    {
        id: 7,
        item_name : "Food Item 8",
        img : "./images/food8.jpg",
        category: "dinner",
        price : "$67",
        text : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words."
    },
    {
        id: 8,
        item_name : "Food Item 9",
        img : "./images/food9.jpg",
        category: "dinner",
        price : "$75",
        text : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words."
    },
    {
        id: 9,
        item_name : "Food Item 10",
        img : "./images/food10.jpg",
        category: "dinner",
        price : "$81.4",
        text : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words."
    },
    {
        id: 10,
        item_name : "Food Item 11",
        img : "./images/food11.jpg",
        category: "breakfast",
        price : "$33.1",
        text : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words."
    },
    {
        id: 11,
        item_name : "Food Item 12",
        img : "./images/food12.jpg",
        category: "dinner",
        price : "$67.9",
        text : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words."
    }
];
var menu = [...items];
var btns = document.querySelectorAll(".btn");
var section = document.querySelector(".section-center");
var all = document.querySelector(".all");
var breakfast = document.querySelector(".breakfast");
var lunch = document.querySelector(".lunch");
var snacks = document.querySelector(".snacks");
var dinner = document.querySelector(".dinner");
all.addEventListener("click",function(){
      menu = [...items];
     // all.classList.toggle("active");
     for(var i=0 ; i<btns.length ; i++)
     {
       if(btns[i]!="all")
       {
            btns[i].classList.remove("active");
       }
     }
     all.classList.add("active");
      display_menu(menu);
});
breakfast.addEventListener("click",function(){
    menu = items.filter(food => food.category == "breakfast");
    for(var i=0 ; i<btns.length ; i++)
    {
      if(btns[i]!="breakfast")
      {
           btns[i].classList.remove("active");
      }
    }
    breakfast.classList.add("active");
    display_menu(menu);
    
});
lunch.addEventListener("click",function(){
    menu = items.filter(food => food.category == "lunch");
    for(var i=0 ; i<btns.length ; i++)
    {
      if(btns[i]!="lunch")
      {
           btns[i].classList.remove("active");
      }
    }
    lunch.classList.add("active");
    display_menu(menu);
    
});
snacks.addEventListener("click",function(){
    menu = items.filter(food => food.category == "snacks");
    for(var i=0 ; i<btns.length ; i++)
    {
      if(btns[i]!="snacks")
      {
           btns[i].classList.remove("active");
      }
    }
    snacks.classList.add("active");
    display_menu(menu);
    
});
dinner.addEventListener("click",function(){
    menu = items.filter(food => food.category == "dinner");
    for(var i=0 ; i<btns.length ; i++)
    {
      if(btns[i]!="dinner")
      {
           btns[i].classList.remove("active");
      }
    }
    dinner.classList.add("active");
    display_menu(menu);
    
});
window.addEventListener("DOMContentLoaded",function(){
    for(var i=0 ; i<btns.length ; i++)
    {
      if(btns[i]!="all")
      {
           btns[i].classList.remove("active");
      }
    }
    all.classList.add("active");
    display_menu(menu);
});
function display_menu(menu)
{
    let display = menu.map(function(item)
    {
            return `<article class="menu-item">
            <img class="food-item" src=${item.img} alt="food image"/>
            <div class="right">
                <div class="heading">
                    <h4 class="item-name">${item.item_name}</h4>
                    <h4 class="price">${item.price}</h4>
                </div>
                <div class="underline_2"></div>
            <p class="text">${item.text}</p>
            </div>
        </article>`;});
    display = display.join("");
    section.innerHTML = display;
}



