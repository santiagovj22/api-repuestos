var products = [];
var cartItems=[];
var cart_n = document.getElementById('cart_n');

var productosDiv = document.getElementById("productosDIV");

var PRODUCTOS=[
    {name:'Banda de frenos TOYOTA', price:120000},
    {name:'Filtro de aire', price:130000},
    {name:'Disco de frenos', price:111000},
    {name:'Chip de potencia', price:13000},
    {name:'Radiadores', price:110000},
    {name:'Amortiguadores', price:120000},
    {name:'Chip de potencia', price:13000},
    {name:'Radiadores', price:110000},
    {name:'Amortiguadores', price:120000}
];

function HTMLproductosProduct(con){
    let btn = `btnProducts${con}`;

    return `<div class="col-md-4">
        <div class="card mb-4 shadow-sm">
            <img src="/img/Producto1.jpeg" class="card-img-top" style="height:16rem;"alt="card">
            <div class="card-body">
                <i style="color:orange;" class="fa fa-star" ></i>
                <i style="color:orange;" class="fa fa-star" ></i>
                <i style="color:orange;" class="fa fa-star" ></i>
                <i style="color:orange;" class="fa fa-star" ></i>
                <i style="color:orange;" class="fa fa-star" ></i>

                <p class="card-text">${PRODUCTOS[con-1].name}</p>
                <p class="card-text">Precio: ${PRODUCTOS[con-1].price}.00</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" onclick="cart2('${PRODUCTOS[con-1].name}',
                        '${PRODUCTOS[con-1].price}',', '${con}','${btn}')" 
                        class="btn btn-sm btn-outline-secondary">
                            <a style="color:inherit;" href="/cart">Comprar</a></button>
                            <button id="${btn}" type="button" onclick="cart('${PRODUCTOS[con-1].name}','${PRODUCTOS[con-1].price}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">Agregar al carrito</button>
                    </div>
                    <small class="text-muted">Producto original</small>
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
        title:'Agregado al carrito'
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
    for (let index = 1; index <=9 ; index++){
       productosDiv.innerHTML+=`${HTMLproductosProduct(index)}`;
    }
    if(localStorage.getItem("cart") ==null){

    } else {
        products=JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML=`[${products.length}]`;
    }
})();