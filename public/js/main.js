var products = [];
var cartItems=[];
var cart_n = document.getElementById('cart_n');

var fruitDiv = document.getElementById("fruitDIV");

var FRUIT=[
    {name:'Apple', price:12},
    {name:'Orange', price:13},
    {name:'Cherry', price:11},
    {name:'Strawberry', price:13},
    {name:'Kiwi', price:11},
    {name:'Banana', price:12}
];

function HTMLfruitProduct(con){
    let btn = `btnFruit${con}`;

    return `<div class="col-md-4">
        <div class="card mb-4 shadow-sm">
            <img src="" class="card-img-top" style="height:16rem;"alt="card">
            <div class="card-body">
                <i style="color:orange;" class="fa fa-star" ></i>
                <i style="color:orange;" class="fa fa-star" ></i>
                <i style="color:orange;" class="fa fa-star" ></i>
                <i style="color:orange;" class="fa fa-star" ></i>
                <i style="color:orange;" class="fa fa-star" ></i>

                <p class="card-text">${FRUIT[con-1].name}</p>
                <p class="card-text">Price: ${FRUIT[con-1].price}.00</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" onclick="cart2('${FRUIT[con-1].name}',
                        '${FRUIT[con-1].price}',', '${con}','${btn}')" 
                        class="btn btn-sm btn-outline-secondary">
                            <a style="color:inherit;" href="/cart">Buy</a></button>
                            <button id="${btn}" type="button" onclick="cart('${FRUIT[con-1].name}','${FRUIT[con-1].price}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">Add to cart</button>
                    </div>
                    <small class="text-muted">Free Shopping</small>
                </div>
            </div>
        </div>
    </div>`;
}
function animation(){
    const toast=swal.mixin({
        toast:true,
        position:'top-end',
        showConfirmButton:false,
        timer:1000
    });
    toast({
        type:'success',
        title:'Added to shopping cart'
    });
}

function cart(name,price,con,btncart){
    var item={
        name:name,
        price:price
    }
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if(storage==null){
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }
    products = JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML = `[${products.length}]`;
    document.getElementById(btncart).style.display="none";
    animation();
}
function cart2(name,price,con,btncart){
    var item={
        name:name,
        price:price
    }
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if(storage==null){
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }
    products = JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML = `[${products.length}]`;
    document.getElementById(btncart).style.display="none";
} 

(()=>{
    for (let index = 1; index <=6 ; index++){
       fruitDiv.innerHTML+=`${HTMLfruitProduct(index)}`;
    }
    if(localStorage.getItem("cart") ==null){

    } else {
        products=JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML=`[${products.length}]`;
    }
})();