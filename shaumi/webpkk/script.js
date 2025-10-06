const product  = [
    {
        id : "1",
        name : "Sea Star Bracelet",
        price : 6000,
        image : "https://i.pinimg.com/736x/e3/c3/7b/e3c37b0bbd2dc3bb49ac2ef6e715116e.jpg"
    }, 
    {
        id : "2",
        name : "Cherry Lady Bracelet",
        price : 7000,
        image : "https://i.pinimg.com/736x/33/d3/87/33d387e2202737fcde39be8e71c8980b.jpg"
    },
    {
        id : "3",
        name : "Fluttershy Bracelet",
        price : 8000,
       image :  "https://i.pinimg.com/736x/78/ae/18/78ae18b52323aa8717a607a1ca6cf7c8.jpg"
    },
    {
        id : "4",
        name : "Butterfie Bracelet",
        price : 7000,
        image : "https://i.pinimg.com/736x/92/49/4a/92494adb2f0073f2f97db04b370707d3.jpg"
    },
    {
        id : "5",
        name : "Lowkey Bracelet",
        price : 7000,
        image : "https://i.pinimg.com/736x/54/6b/17/546b171ae743531eef8f10bff5ae6c23.jpg" 
    },
    {
        id : "6",
        name : "Fairy bracelet",
        price : 8000,
        image : "https://i.pinimg.com/736x/d0/09/ab/d009abf0168c7efa09aaa958a1445045.jpg" 
    },
];

const divContainer = document.getElementById("product-list");

//buat element div
product.forEach(function(produk ){

const divCard = document.createElement("div");
divCard.className = "product-card";
divCard.innerHTML = ` 
                            <img src="${produk.image}">
                            <h1>${produk.name}</h1>
                            <p>Harga : Rp. ${produk.price.toLocaleString()}</p>
                            <button onclick="tambahkeranjang(${produk.id})">Simpan Ke Keranjang</button>
`

divContainer.append(divCard)
});

const cart = [ ];

function tambahkeranjang(id){
     let produk_yg_dipilih = product.find(product => product.id == id);
     let produk = {
        id : produk_yg_dipilih.id,
        name : produk_yg_dipilih.name,
        price : produk_yg_dipilih.price,
        quantity : 1
     }


    let produk_ada = cart.find(cart => cart.id == id);
    if (produk_ada){
        produk_ada.quantity +=1;
    }

    else{
        cart.push(produk);
    }
    
    let cart_items = document.getElementById("cart-items");
    cart_items.innerHTML = " ";
    cart.forEach(cart => {
        const div = document.createElement("div");

        div.innerHTML = `
        <div>
            <div> <b> ${cart.name} </b>
                <p>Rp.${cart.price} x ${cart.quantity} pcs</p>
                <p>Total : Rp.${cart.price * cart.quantity}</p>
            </div>
        </div>
        `;

        cart_items.append(div)
    });
}