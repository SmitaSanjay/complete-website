// let contacts={
// india:"+91888888888",
// usa:"+188888888",
// canada:"+1999999999",
// uae: "+97188888888"
// }

let contacts = new Map()
contacts.set('india', '+91888888888')
contacts.set('usa', '+188888888')
contacts.set('canada', '+1999999999')
contacts.set('uae', '+97188888888')

// contacts.get('india')

document.getElementById("select1").addEventListener('change', () => {
    let country = document.getElementById('select1').value;
    document.getElementById('contact').innerHTML = contacts.get(country);
    document.getElementById('flag').src = `images/${country}.png`;
})

// top arrow script
document.getElementById("scrollUp").classList.add("hide");
getYPosition = () => {
    var top = window.pageYOffset || document.documentElement.scrollTop
    return top;
};

document.addEventListener('scroll', () => {
    var scroll = getYPosition();
    var arrow = document.getElementById('scrollUp');
    scrolled = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    // navigation bar sticky
    if (scroll < 250) {
        document.getElementById("header-sticky").classList.remove("sticky-bar");
    } else {
        document.getElementById("header-sticky").classList.add("sticky-bar");
    }
    if (scroll > 1200) {
        arrow.classList.remove("hide");
        arrow.classList.add("show");
        arrow.addEventListener('click', scrolled);
    } else {
        document.getElementById('scrollUp').classList.remove("show");
        document.getElementById('scrollUp').classList.add("hide");
        document.getElementById("scrollUp").removeEventListener("click", scrolled);
    }
})

// get products data
let productsListUrl = 'https://my-json-server.typicode.com/swagofindia/products/db';
var productsList;
let htmlToReturn = "",
    reviews = "",
    lowStar = 0,
    i = 0.
    isNew='';
async function loadProducts(productsListUrl) { // (1)
    // let response = await fetch(productsListUrl); // (2)

    // if (response.status == 200) {
    //   let json = await response.json(); // (3)
    //   return json;
    // }

    fetch('https://my-json-server.typicode.com/swagofindia/products/db')
        .then(response => response.json())
        .then(json => {
            productsList = json;
            productsList.Products.forEach((product) => {
                htmlToReturn = '<div class="col-xl-4 col-lg-4 col-md-6">' +
                    '<div class="single-product" id="product' + product.id + '">' +
                    '<div class="product-img">' +
                    '       <img src="images/product' + product.id + '.png" alt="">';
                    isNew='       <div class="new-product">' +
                    '           <span>New</span>' +
                    '       </div>'
                    if(product.isNew=='TRUE')
                    htmlToReturn+=isNew;
                    isNew="";
                    htmlToReturn+='       <div class="product-hover">' +
                    '            <div class="container">' +
                    '                <div class="row">' +
                    '                    <div class="col-4">' +
                    '                        <a href=""><img src="images/cart.png" alt=""></a>' +
                    '                    </div>' +
                    '                    <div class="col-4">' +
                    '                        <a href=""><img src="images/view.png" alt=""></a>' +
                    '                    </div>' +
                    '                    <div class="col-4">' +
                    '                        <a href=""><img src="images/wishlist.png" alt=""></a>' +
                    '                    </div>' +
                    '                </div>' +
                    '            </div>' +
                    '        </div>' +
                    '    </div>' +
                    '    <div class="product-caption">' +
                    '        <div class="product-rating">';
                lowStar = 6 - product.ratings;
                if(product.ratings==5)
                lowStar=0;
                for (i = 1; i <= product.ratings; i++) {
                    reviews += '<i class="far fa-star"></i>';
                }
                for (i = 1; i <= lowStar; i++) {
                    reviews += '<i class="far fa-star low-star"></i>';
                }
                lowStar=0;
                htmlToReturn += reviews + product.ratings + '/5';
                reviews = "";
                htmlToReturn += '        </div>' +
                    '        <h4><a href="#">' + product.name + '</a></h4>' +
                    '        <div class="price">' +
                    '            <ul>' +
                    '                <li>' + product.priceAfterDiscount + '</li>' +
                    '                <li class="discount">' + product.price + '</li>' +
                    '            </ul>' +
                    '        </div>' +
                    '    </div>' +
                    '</div>' +
                    '</div>';
                document.querySelector('#productsListArea').innerHTML += htmlToReturn;
            });

            //on hover of any product code
            document.querySelectorAll('.product-hover').forEach(product1 => {
                product1.classList.add('hide');
            })

            document.querySelectorAll('div[id^="product"]').forEach(product1 => {
                product1.addEventListener('mouseover', event => {
                    product1.querySelector('.product-img').classList.add('blur');
                    product1.querySelector('.product-img').querySelector('.product-hover').classList.remove('hide');
                    product1.querySelector('.product-img').querySelector('.product-hover').classList.add('show');
                })
                product1.addEventListener('mouseout', event => {
                    product1.querySelector('.product-img').classList.remove('blur');
                    product1.querySelector('.product-img').querySelector('.product-hover').classList.add('hide');
                    product1.querySelector('.product-img').querySelector('.product-hover').classList.remove('show');
                })
            });

        })
}

loadProducts(productsListUrl);