//common js for all pages
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
// header flag change
function showChange() {
    var selected_country = document.getElementById("select1").value;
    //    console.log(selected_country );
    if (selected_country == "INDIA") {
        document.getElementById("phone-no").innerText = "+91 8861873442";
        document.getElementById("country-logo").src = "images/india (3).png"
    } else if (selected_country == "USA") {
        document.getElementById("phone-no").innerText = "+1 1230456789";
        document.getElementById("country-logo").src = "images/usa.png"
    } else if (selected_country == "CANADA") {
        document.getElementById("phone-no").innerText = "+1 1209347685";
        document.getElementById("country-logo").src = "images/canada.png"
    } else if (selected_country == "UAE") {
        document.getElementById("phone-no").innerText = "+971 45365789";
        document.getElementById("country-logo").src = "images/uae.png"
    }

}

//end of common js for all pages



// icon on hover change
function onHover1() {
    $(".icon1").attr('src', 'images/cart-small.png', 'height', '60px', 'width', '60px');
}

function onHover2() {
    $(".icon2").attr('src', 'images/view-small.png', 'height', '60px', 'width', '60px');
}

function onHover3() {
    $(".icon3").attr('src', 'images/wishlist-small.png', 'height', '60px', 'width', '60px');
}

function onOut1() {
    $(".icon1").attr('src', 'images/cart.png');
}

function onOut2() {
    $(".icon2").attr('src', 'images/view.png');
}

function onOut3() {
    $(".icon3").attr('src', 'images/wishlist.png');
}

//end of icon hover change



// faq js 
$(document).ready(function () {
    $('[id = "anime"]').click(function () {
        $(this).text(function (i, text) {
            return text === "+" ? "-" : "+";


        });
        $(this).next(".anim1").toggle(1000);

    });

    $(".anim1").hide();

})

//end of faq js page





var lsContent = []; //cart area array
let lsContent1 = []; //wishlist area aaray
let lscon = []; // homepage area array

//homepage filling area through Json
let productsListUrl5 = 'https://my-json-server.typicode.com/SmitaSanjay/product-list1/db';
var productsList5;
let htmlToReturn5 = "",
    reviews5 = "",
    lowStar5 = 0,
    i5 = 0.
isNew5 = '';
async function loadProducts5(productsListUrl5) { // (1)
    // let response = await fetch(productsListUrl); // (2)

    // if (response.status == 200) {
    //   let json = await response.json(); // (3)
    //   return json;
    // }

    fetch('https://my-json-server.typicode.com/SmitaSanjay/product-list1/db')
        .then(response => response.json())
        .then(json => {
            productsList5 = json;

            productsList5.Products.forEach((element) => {




                htmlToReturn5 = '<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">' +
                    '<div class="single-product" id="product' + element.id + '">' +
                    '<div class="card"> ' +
                    ' <div class="product-img">' +
                    ' <img src="images/product' + element.id + '.png" class="card-img-top" alt="#">';
                isNew5 = ' <div class="new-product"> ' +
                    ' <span>New</span> ' +
                    '</div>'
                if (element.isNew == 'TRUE')
                    htmlToReturn5 += isNew5;
                isNew5 = "";
                htmlToReturn5 += '<div class="product-hover hide">' +
                    '  <div class="container">' +
                    '  <div class="row">' +
                    '  <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 product-caption">' +
                    ' <img class="icon1" src="images/cart.png"  onmouseover="setTimeout(onHover1,300)" onclick="return addcart('+element.id+')"  onmouseout="setTimeout(onOut1,300)"   alt="#">' +
                    '   </div>' +
                    ' <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4">' +
                    ' <a href="ProductView.html"> <img class="icon2" src="images/view.png"  onmouseover="setTimeout(onHover2,300)" onmouseout="setTimeout(onOut2,300)" onclick="productview('+element.id+')"  alt="#"></a>' +
                    ' </div>' +
                    '  <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4">' +
                    ' <img class="icon3" src="images/wishlist.png" onmouseover="setTimeout(onHover3,300)" onmouseout="setTimeout(onOut3,300)" onclick="return addwishlist(this,' + element.id + ')" alt="#">' +
                    ' </div>' +
                    ' </div>' +
                    ' </div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="card-body">' +
                    '<div class="product-caption">' +
                    '<div class="product-rating">';
                lowStar5 = 5 - element.ratings;
                if (element.ratings == 5)
                    lowStar5 = 0;
                for (i5 = 1; i5 <= element.ratings; i5++) {
                    reviews5 += '<i class="far fa-star"></i>';
                }
                for (i5 = 1; i5 <= lowStar5; i5++) {
                    reviews5 += '<i class="far fa-star low-star"></i>';
                }
                lowStar5 = 0;
                htmlToReturn5 += reviews5 + element.ratings + '/5';
                reviews5 = "";
                htmlToReturn5 += '</div>' +
                    '<span id="c">' + element.name + '</span>' +
                    '<div class = "row">' +
                    '<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 price">' +
                    ' <ul >' +
                    '<li>Rs. ' + element.priceAfterDiscount + '</li>' +
                    '<li class="discount">' + element.price + '</li>' +
                    '<li class="disc-per">( ' + element.Discount + ' off)</li>' +
                    '</ul>' +
                    ' </div>' +
                    ' </div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
                document.querySelector('#homepage').innerHTML += htmlToReturn5;

            });






        })
}

loadProducts5(productsListUrl5);
//end of json filling for home page

// cart retrive data for homegae
// function addcart1(e) {

//     let clickedBtn = $(e).parent().parent().parent().parent().parent().parent().parent().attr("id");
//     alert(clickedBtn);
//     setLSContentHome(clickedBtn);


// }

// function getLSContentHome() {

//     let lsContent1 = JSON.parse(localStorage.getItem("products1")) || [];


//     return lsContent1;
// }



// function setLSContentHome(ls) {


//     let res1 = ls.match(/\d+/g);
//     // let res1 = toString(res);
//     pushHome(res1);

// }




// function pushHome(res1) {

//     lscon.push(res1);
//     setstorageHome(lscon);

// }

// function setstorageHome(lscon) {
//     localStorage.setItem("products1", JSON.stringify(lscon));

// }

// end of retrive data from homepage




//data filling in product list through json

let productsListUrl = 'https://my-json-server.typicode.com/SmitaSanjay/product-list1/db';
var productsList;
let htmlToReturn = "",
    reviews = "",
    lowStar = 0,
    i = 0.
isNew = '';
async function loadProducts(productsListUrl) { // (1)
    // let response = await fetch(productsListUrl); // (2)

    // if (response.status == 200) {
    //   let json = await response.json(); // (3)
    //   return json;
    // }

    fetch('https://my-json-server.typicode.com/SmitaSanjay/product-list1/db')
        .then(response => response.json())
        .then(json => {
            productsList = json;
            productsList.Products.forEach((element) => {
                htmlToReturn = '<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">' +
                    '<div class="single-product" id="product' + element.id + '">' +
                    '<div class="card"> ' +
                    ' <div class="product-img">' +
                    ' <img src="images/product' + element.id + '.png" class="card-img-top" alt="#">';
                isNew = ' <div class="new-product"> ' +
                    ' <span>New</span> ' +
                    '</div>'
                if (element.isNew == 'TRUE')
                    htmlToReturn += isNew;
                isNew = "";
                htmlToReturn += '<div class="product-hover hide">' +
                    '  <div class="container">' +
                    '  <div class="row">' +
                    '  <div class="col-4 product-caption">' +
                    ' <img class="icon1" src="images/cart.png"  onmouseover="setTimeout(onHover1,300)"  onmouseout="setTimeout(onOut1,300)" onclick="return addcart('+element.id+')" alt="#">' +
                    '   </div>' +
                    ' <div class="col-4">' +
                    ' <a href = "ProductView.html"><img class="icon2" src="images/view.png"  onmouseover="setTimeout(onHover2,300)" onmouseout="setTimeout(onOut2,300)" onclick="productview('+element.id+')" alt="#"></a>' +
                    ' </div>' +
                    '  <div class="col-4">' +
                    ' <img class="icon3" src="images/wishlist.png" onmouseover="setTimeout(onHover3,300)" onmouseout="setTimeout(onOut3,300)" onclick="return addwishlist(this,' + element.id + ')" alt="#">' +
                    ' </div>' +
                    ' </div>' +
                    ' </div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="card-body">' +
                    '<div class="product-caption">' +
                    '<div class="product-rating">';
                lowStar = 5 - element.ratings;
                if (element.ratings == 5)
                    lowStar = 0;
                for (i = 1; i <= element.ratings; i++) {
                    reviews += '<i class="far fa-star"></i>';
                }
                for (i = 1; i <= lowStar; i++) {
                    reviews += '<i class="far fa-star low-star"></i>';
                }
                lowStar = 0;
                htmlToReturn += reviews + element.ratings + '/5';
                reviews = "";
                htmlToReturn += '</div>' +
                    ' <h4><a href="#" aria-label="product details" id = "a">' + element.name + '</a></h4>' +
                    '<div class = "row">' +
                    '<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 price">' +
                    ' <ul style="display:inline-block">' +
                    '<li>Rs. ' + element.priceAfterDiscount + '</li>' +
                    '<li class="discount">' + element.price + '</li>' +
                    '<li class="disc-per">( ' + element.Discount + ' off)</li>' +
                    '</ul>' +
                    ' </div>' +
                    ' </div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
                document.querySelector('#productsListArea').innerHTML += htmlToReturn;
            });





        })
}

loadProducts(productsListUrl);

//end of product list filling through json



//start of product view
let productsListUrl7 = 'https://my-json-server.typicode.com/SmitaSanjay/cart-list1/db';
// var productsListUrl4;
let htmlToReturn7 = "",
    reviews7 = "",
    lowStar7 = 0,
    i7 = 0.
isNew7 = '';

function loadProducts7(productsListUrl7) {

    var element7 ;
    fetch('https://my-json-server.typicode.com/SmitaSanjay/cart-list1/db')
        .then(response => response.json())
        .then(json => {
            // const lsContent1 = JSON.parse(localStorage.getItem("products")) || [];
            productsList7 = json;
            element7 = getLSContentview();

            productsList7.Products.forEach((element) => {

                for (let i = 0; i < element7.length; i++) {
                    if (element.id == element7[i] ) {




                        htmlToReturn7 = '<div class="col-xl-1 col-lg-1 col-md-0 col-sm-0">'+
                        '<div class="row" style="padding-bottom: 10px;padding-left: 20px;">'+
                            '<img src="images/product' + element.id + '.png" alt="product" height="80px" width="60px"'+
                                'style="border: 1px solid #dddddd;">'+
                        '</div>'+
                        '<div class="row" style="padding-bottom: 10px;padding-left: 20px;">'+
                            '<img src="images/product' + element.id + '.png" alt="product" height="80px" width="60px"'+
                                'style="border: 1px solid #dddddd;">'+
                        '</div>'+
                        '<div class="row" style="padding-bottom: 10px;padding-left: 20px;">'+
                            '<img src="images/product' + element.id + '.png" alt="product" height="80px" width="60px"'+
                                'style="border: 1px solid #dddddd;">'+
                        '</div>'+
                        '<div class="row" style="padding-bottom: 10px;padding-left: 20px;">'+
                            '<img src="images/product' + element.id + '.png" alt="product" height="80px" width="60px"'+
                                'style="border: 1px solid #dddddd;">'+
                        '</div>'+
                    '</div>'+
                    '<div class="col-xl-5 col-lg-5 col-md-5 col-sm-5">'+
                        '<img src="images/product' + element.id + '.png" alt="product" height="450px" width="400px"'+
                            'style="border: 1px solid #dddddd;">'+
                    '</div>'+
                    '<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">'+
                        '<div class="row">'+
                            '<h5 style="font-family: poppins,sans-serif;font-weight: 600;">'+element.name+' </h5>'+
                        '</div>'+
                        '<div class="row">'+
                            '<div class="col product-rating" style="padding-left: 0px;">'+
                                '<a href="#">';
                                lowStar7 = 5 - element.ratings;
                                if (element.ratings == 5)
                                    lowStar7 = 0;
                                for (i = 1; i <= element.ratings; i++) {
                                    reviews7 += '<i class="far fa-star"></i>';
                                }
                                for (i = 1; i <= lowStar7; i++) {
                                    reviews7 += '<i class="far fa-star low-star"></i>';
                                }
                                lowStar7 = 0;
                                htmlToReturn7 += reviews7 + element.ratings + '/5';
                                reviews7 = "";
                                htmlToReturn7 += '</a>'+
                                '<span class="rating">39,112 rating</span><span class="bar">&nbsp;|</span>'+
                                '<span class="rating">1000+ answered questions</span>'+
    
    
                            '</div>'+
    
    
                        '</div>'+
    
                        '<div class="row" style="padding-bottom: 20px;padding-top: 8px;">'+
                            '<span style="font-weight: 700;">'+element.priceAfterDiscount+' &nbsp;</span>'+
                            '<span style="text-decoration: line-through;color: #a6a9b6;">'+element.price+'</span>'+
                            '<span style="color: #f8880f; font-weight:700;"> &nbsp; ('+element.Discount+' OFF)</span>'+
                        '</div>'+
                        '<div class="row">'+
                            '<h6 style="font-family: poppins,sans-serif; font-weight: 600;">Short Description</h6>'+
                            '<P style="font-size: 13px;color: #a6a9b6;font-weight: 500;text-align: justify;">'+
                             'Yellow and Grey casual sweatshirt,has a round collar,long sleeves,button placket,curved hem'+
                                'and 1 patch pocket'+
    
                                'Yellow and Grey casual sweatshirt,has a round collar,long sleeves,button placket,curved hem'+
                                'and 1 patch pocket'+
                            '</P>'+
                        '</div>'+
                        '<div class="row">'+
                            '<div class="col">'+
                                '<div style="font-size: 16px;font-weight: 600;padding-bottom: 5px;">Select Size</div>'+
                                '<span>'+
                                    '<button class="sizing"><span style="font-size: 12px;">39</span></button>&nbsp;'+
                                    '<button class="sizing"><span style="font-size: 12px;">40</span></button>&nbsp;'+
                                    '<button class="sizing"><span style="font-size: 12px;">42</span></button>&nbsp;'+
                                    '<button class="sizing"><span style="font-size: 12px;">44</span></button>'+
                                '</span>'+
                            '</div>'+
                            '<div class="col">'+
                                '<div style="font-size: 16px;font-weight: 600;padding-bottom: 8px;">QTY</div>'+
                                '<div class="row" style="width: 70%;">'+
                                    '<div class="col-3" style="border: 1px solid;">'+
                                        '<button class="qty" onclick="increment()">+</button>'+
                                    '</div>'+
                                    '<div class="col-6" style="border: 1px solid; padding-left: 35px; ">'+
    
                                        '<input style="width: 50px; ;" class="qty" id=demoInput type=number min=0 max=100'+
                                           ' placeholder=0>'+
                                    '</div>'+
                                    '<div class="col-3" style="border: 1px solid;">'+
                                        '<button class="qty" onclick="decrement()">-</button>'+
                                    '</div>'+
    
    
    
                                '</div>'+
    
                            '</div>'+
                        '</div>'+
                        '<div class="row" style="padding-top: 20px;">'+
                            '<div class="col"><button class="btn" style="border-radius: 0px;" onclick="return addcart('+element.id+')">ADD TO CART</button></div>'+
                            '<div class="col"><button class="btn" style="border-radius: 0px;" >BUY NOW</button></div>'+
                            '<div class="col"><img src="images/wishlist.png" height="70px" width="70px" onclick="return addwishlist(this,' + element.id + ')"></div>'+
                        '</div>'+
                        '<div class="row" style="padding-top: 10px;padding-bottom: 10px;">'+
                            '<span style="padding-top: 14px;font-size: 14px;font-weight: 600;">SHARE THIS</span>'+
                            '<span style="padding-left:10px;">'+
                                '<img src="images/facebook-logo.png" alt="" height="40px" width="40px">'+
                                '<img src="images/youtube-logotype.png" alt="" height="40px" width="40px">'+
                                '<img src="images/twitter-social-logotype.png" alt="" height="40px" width="40px">'+
                            '</span>'+
                        '</div>'+
                        '<div class="row">'+
                            '<div class="col">'+
                               ' <img src="images/truck.png" alt="" height="40px" width="50px">'+
                                '<span style="font-size: 14px;font-weight: 600;padding-left: 10px;">Delivery</span>'+
                            '</div>'+
                            '<div class="col">'+
                               ' <img src="images/online-support (1).png" alt="" height="40px" width="50px">'+
                                '<span style="font-size: 14px;font-weight: 600;padding-left: 10px;">Online Support'+
                                    '24/7</span>'+
                            '</div>'+
                       ' </div>'+
                    '</div>';
                        document.querySelector('#product-view-details').innerHTML += htmlToReturn7;
                        // add(element.priceAfterDiscount);


                    }

                }




            });

        })
}

loadProducts7(productsListUrl7);

//end of product view
function productview(e){
    let clickedBtn = e;
    // alert(clickedBtn);
    setLSContentview(clickedBtn);

}


function getLSContentview() {

    let lsContent1 = JSON.parse(localStorage.getItem("products-view")) || [];


    return lsContent1;
}



function setLSContentview(ls) {
     
    let res = ls
    pushView(res);


}
let lsContentview = [];
function pushView(res) {
    lsContentview.push(res);
    setstorageView(lsContentview);

}

function setstorageView(lsContentview) {
    localStorage.setItem("products-view", JSON.stringify(lsContentview));

}


//add to cart from product list page
function addcart(id) {

    let clickedBtn = id
    // alert(clickedBtn);
    setLSContent(clickedBtn);


}

function getLSContent() {

    let lsContent1 = JSON.parse(localStorage.getItem("products")) || [];
   

    return lsContent1;
}



function setLSContent(ls) {
    let res = ls
    
    push(res);


}

function push(res) {
    lsContent.push(res);
    setstorage(lsContent);

}

function setstorage(lsContent) {
    localStorage.removeItem("products");
    localStorage.setItem("products", JSON.stringify(lsContent));
    

}
//end of add to cart from product list page




//data filling to cart area through json
let productsListUrl1 = 'https://my-json-server.typicode.com/SmitaSanjay/cart-list1/db';
var productsList1;
let htmlToReturn1 = "",
    reviews1 = "",
    lowStar1 = 0,
    i1 = 0.
isNew1 = '';
var element1 = [];
var elementList = [];
var elementHome = [];
var allElement = [];

function loadProducts1(productsListUrl1) {


    fetch('https://my-json-server.typicode.com/SmitaSanjay/cart-list1/db')
        .then(response => response.json())
        .then(json => {
            // const lsContent1 = JSON.parse(localStorage.getItem("products")) || [];
            productsList1 = json;
            element1 = getLSContent();
            // elementHome = getLSContentHome();

            // element1 = elementList.concat(elementHome);
            // // element1 = allElement;
            // element1 = element4;
            // element1 = cartAfterRemove();
            //     var names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];
            //    var uniqueNames = [];
            // $.each(allElement, function (i, el) {
            //     if ($.inArray(el, element1) === -1) element1.push(el);
            // });
             
            productsList1.Products.forEach((element) => {

                for (let i = 0; i < element1.length; i++) {
                    if (element.id == element1[i]) {

                        


                        htmlToReturn1 =
                            '<div class="card" id=' + element.id + '>' +
                            '<div class="card-body">' +
                            '<div class="row">' +
                            '<div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">' +
                            '<a href="#"><img class="card-img-top" src="images/product' + element.id + '.png"></a>' +
                            '</div>' +
                            '<div class="col-xl-5 col-lg-5 col-md-6 col-sm-6">' +
                            '<div class="row"><h4><a href="#" aria-label="product details" id = "name" >' + element.name + '</a></h4></div>' +
                            '<div class="row" style="color:#C9CCD5;font-weight:600"><span>Color :White</span></div>' +
                            '<div class="row " style="color:#C9CCD5;font-weight:600">Sold by:Smita S</div>' +
                            '<div class="row" style="margin-top:10px">' +
                            '<div class="col-xl-6 col-lg-6 col-sm-12 col-md-12">'+
                            '<span style="background-color:#ccc;border-radius:10px;margin-right:15px" >'+
                            '<form action="#"  role="presentation">' +
                            '<span id="size1">Size:</span>' +
                            '<select name="select2" id="size"  >' +
                            '<option value="1">1</option>' +
                            '<option value="2">2</option>' +
                            '<option value="3">3</option>' +
                            '<option value="4">4</option>' +
                            '</select>' +
                            '</form>' +
                            '</span>'+
                            '</div>'+
                            '<div class="col-xl-6 col-lg-6 col-sm-12 col-md-12">'+
                            '<span style="background-color:#ccc;border-radius:10px">'+
                            '<form action="#"  role="presentation">' +
                            '<span id="size1">QTY:</span>' +
                            '<select name="select3" id="qty" onchange = showSize(' + element.priceAfterDiscount + ',this)>' +
                            '<option value="1">1</option>' +
                            '<option value="2">2</option>' +
                            '<option value="3">3</option>' +
                            '<option value="4">4</option>' +
                            '</select>' +
                            '</form>' +
                            '</span>'+
                            '</div>'+
                            '</div>' +
                            '</div>' +
                            '<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 price">' +

                            '<div class="row" style="font-weight:600">Rs. ' + element.priceAfterDiscount + '</div>' +
                            '<div class="row "><span class="discount"style="font-weight:600">Rs. ' + element.price + '</span><span style="color:#f8880f;font-weight:600">( ' + element.Discount + ' off)</span></div>' +
                            '<div class="row disc-per" style="font-size:12px">Delivery in 4-6 days</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '<div class="card-footer" style="background-color:white">' +
                            '<div class="row">' +
                            '<div class="col-12">' +

                            '<a><button id="remove" onclick = "removeCart(' + element.id +')" >Remove</button></a>' +
                            '<span id="diff">|</span>' +
                            '<button id="wishlist1" onclick = "movetowishlist(' + element.id +')" >Move To WishList</button>' +
                            '</div>' +

                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '<br>';

                        document.querySelector('#cartArea').innerHTML += htmlToReturn1;
                        add(element.priceAfterDiscount);
                       
                       

                    }
                   
                    TotalNo(element1.length);
                    
                }




            });

        })
}

loadProducts1(productsListUrl1);

//end of data filling in cart area through json
function TotalNo(x){
    localStorage.setItem("num",x);

    document.getElementById("totalNo").innerHTML=x;

}

//remove cart js
var element4 = [];


function removeCart(id) {
    var div = document.getElementById(id);
    div.remove();
    lsContent = [];
    // removelscontent(id);
    var arr = [];
    var arr1 = [];
    var id1 = id;
    arr = JSON.parse(localStorage.getItem("products")) || [];
    localStorage.removeItem("products");
    //    alert(arr);
       for(let i = 0;i<arr.length;i++){
           if(arr[i] != id1)
           arr1.push(arr[i]);
           lsContent.push(arr[i]);
       }


}

function movetowishlist(id){
    var div = document.getElementById(id);
    div.remove();
    lsContent = [];
    // removelscontent(id);
    var arr = [];
    var arr1 = [];
    var id1 = id;
    arr = JSON.parse(localStorage.getItem("products")) || [];
    localStorage.removeItem("products");
    //    alert(arr);
       for(let i = 0;i<arr.length;i++){
           if(arr[i] != id1)
           arr1.push(arr[i]);
           lsContent.push(arr[i]);
       }

      setLSContent1(id);

}
var total = 0;

function add(price) {
    total = total + price;
    var subtotal = total-20;
    // x += element.priceAfterDiscount;
    document.getElementById("pricedetails").innerHTML = total;
    document.getElementById("total").innerHTML = subtotal;
   document.getElementById("ordertotal").innerHTML = subtotal;
   document.getElementById("total1").innerHTML = subtotal;
    localStorage.setItem("total",subtotal);
    // document.getElementById("total2").innerHTML = total;
}

var total3,extra;
function showSize(price, e) {
    var price1 = parseInt(price);
    // var valuesize = $(e:selected).value();
    var valuesize = $(e).children("option").filter(":selected").text()

    var value = parseInt(valuesize);
     extra = value * price1;
    

    // alert(extra);
     total3 = document.getElementById("total1").innerHTML;

    total3 = total3 - price1;

    total3 = total3 + extra;
    document.getElementById("pricedetails").innerHTML = total3 +20;
    // alert(total3);
    localStorage.setItem("total",total3);
   
    document.getElementById("total1").innerHTML = total3;
    document.getElementById("total").innerHTML = total3;
    // document.getElementById("total3").innerHTML = total3


}

// window.onload = checkout;
function checkout(){
    document.getElementById("total2").innerHTML = localStorage.getItem("total");
    document.getElementById("total1").innerHTML = localStorage.getItem("total");
    document.getElementById("num").innerHTML = localStorage.getItem("num");
    var tota1 = parseInt(localStorage.getItem("total"));
    document.getElementById("pricedetails").innerHTML = tota1+20;
    document.getElementById("ordertotal").innerHTML = tota1;
    


}
//end of total in cart



// adding data to the wishlist



let productsListUrl2 = 'https://my-json-server.typicode.com/SmitaSanjay/cart-list1/db';
var productsList2;
let htmlToReturn2 = "",
    reviews2 = "",
    lowStar2 = 0,
    i2 = 0.
isNew2 = '';
var element2 = [];

function loadProducts2(productsListUrl2) {


    fetch('https://my-json-server.typicode.com/SmitaSanjay/cart-list1/db')
        .then(response => response.json())
        .then(json => {
            // const lsContent1 = JSON.parse(localStorage.getItem("products")) || [];
            productsList2 = json;
            element2 = getLSContent1();

            productsList2.Products.forEach((element) => {

                for (let i = 0; i < element2.length; i++) {
                    if (element.id == element2[i]) {




                        htmlToReturn2 = '<div class="card" class="wishlist" id=' + element.id + ' style="border-left:none;border-right:none;">' +
                            '<div class="card-body">' +
                            '<div class="row">' +
                            '<div class="col-3">' +
                            '<img class="card-img-top" src="images/product' + element.id + '.png">' +
                            '</div>' +
                            '<div class="col-9">' +
                            '<div class="row">' +
                            '<h4><a href="#" aria-label="product details" id="name" style="max-width:50px">' + element.name +
                            '</a></h4>' +
                            '</div>' +
                            '<div class="row">' +
                            '<div class="product-caption">' +
                            '<div class="product-rating">';
                        lowStar2 = 5 - element.ratings;
                        if (element.ratings == 5)
                            lowStar2 = 0;
                        for (i = 1; i <= element.ratings; i++) {
                            reviews2 += '<i class="far fa-star"></i>';
                        }
                        for (i = 1; i <= lowStar2; i++) {
                            reviews2 += '<i class="far fa-star low-star"></i>';
                        }
                        lowStar2 = 0;
                        htmlToReturn2 += reviews2 + element.ratings + '/5';
                        reviews2 = "";
                        htmlToReturn2 += '</div>' +
                            // '</div>'+
                            '<div class="row">' +
                            '<div class="col-12">' +
                            '<span style="background-color:#ccc;border-radius:15px">'+
                            '<form action="#"  role="presentation">' +
                            '<span id="size1">QTY:</span>' +
                            '<select name="select3" id="qty" onchange = showSize(' + element.priceAfterDiscount + ',this)>' +
                            '<option value="1">1</option>' +
                            '<option value="2">2</option>' +
                            '<option value="3">3</option>' +
                            '<option value="4">4</option>' +
                            '</select>' +
                            '</form>' +
                            '</span>'+
                            '</div>' +
                            '</div>' +
                            // '<br>'+
                            '<div class="row">' +
                            '<div class="col-3 style="font-weight:600">Rs. ' + element.priceAfterDiscount + '</div>' +
                            '<div class="col-3 discount" style="font-weight:600">' + element.price + ' </div>' +
                            '<div class="col-6 disc-per" style="color:#f8880f;font-weight:600">( ' + element.Discount + ' off)</div>' +
                            '</div>' +
                            '<br>' +
                            '<div class="row align-items-center" >' +
                            // '<div class="col">'+
                            '<button class="btn-apply1" onclick = "movetoCart(' + element.id +')">Add to Cart</button></span>' +
                            // '</div>'+
                            // '<div class="col">'+
                            '<span id = "diff" style="padding-left:5px">|</span>' +
                            // '</div>'+
                            // '<div class="col-6">'+
                            '<button class = "btn-apply2" onclick = "removeFromWishList(' + element.id +')">Remove from wishlist</button>' +
                            // '</div>'+

                            '</div>' +

                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '<br>';
                        document.querySelector('#wishlist').innerHTML += htmlToReturn2;



                    }

                }




            });

        })
}

loadProducts2(productsListUrl2);

//end of adding data to the wishlist


function movetoCart(id){
    var div = document.getElementById(id);
    div.remove();
    lsContent1 = [];
    // removelscontent(id);
    var arr = [];
    var arr1 = [];
    var id1 = id;
    arr = JSON.parse(localStorage.getItem("products-list")) || [];
    localStorage.removeItem("products-list");
    //    alert(arr);
       for(let i = 0;i<arr.length;i++){
           if(arr[i] != id1)
           arr1.push(arr[i]);
           lsContent1.push(arr[i]);
       }

      push(id);
}

function removeFromWishList(id){
    var div = document.getElementById(id);
    div.remove();
    lsContent1 = [];
    // removelscontent(id);
    var arr = [];
    var arr1 = [];
    var id1 = id;
    arr = JSON.parse(localStorage.getItem("products-list")) || [];
    localStorage.removeItem("products-list");
    //    alert(arr);
       for(let i = 0;i<arr.length;i++){
           if(arr[i] != id1)
           arr1.push(arr[i]);
           lsContent1.push(arr[i]);
       }
}

//add to wishlist from home page
function addwishlist(e, obj) {
    let clickedBtn = obj;
    // alert(clickedBtn);
    setLSContent1(clickedBtn);

}

function setLSContent1(ls) {

    // let res = ls.charAt(ls.length-1);
    lsContent1.push(ls);
    setstorage1(lsContent1);


}

function setstorage1(lsContent1) {
    localStorage.setItem("products-list", JSON.stringify(lsContent1));

}

function getLSContent1() {

    let lsContent1 = JSON.parse(localStorage.getItem("products-list")) || [];


    return lsContent1;
}

//end of add to wishlist from homepage


// adding data  to the Myorder page

let productsListUrl3 = 'https://my-json-server.typicode.com/SmitaSanjay/cart-list1/db';
var productsList3;
let htmlToReturn3 = "",
    reviews3 = "",
    lowStar3 = 0,
    i3 = 0.
isNew3 = '';

function loadProducts3(productsListUrl3) {

    var element3 = [];
    fetch('https://my-json-server.typicode.com/SmitaSanjay/cart-list1/db')
        .then(response => response.json())
        .then(json => {
            // const lsContent1 = JSON.parse(localStorage.getItem("products")) || [];
            productsList3 = json;
            element3 = getLSContent();

            productsList3.Products.forEach((element) => {

                for (let i = 0; i < element3.length; i++) {
                    if (element.id == element3[i]) {




                        htmlToReturn3 = '<div class="card" style="margin-bottom:15px;border-left:none;border-right:none">' +
                            '<div class="card-body">' +
                            '<div class="row">' +
                            '<div class="col-3 ">' +
                            '<img class="card-img-top" src="images/product' + element.id + '.png">' +
                            '</div>' +
                            '<div class="col-3">' +
                            '<div class="row" >' +
                            '<h4 style="text-overflow: ellipsis;overflow: hidden;white-space: nowrap;"><a href="#" aria-label="product details"  id="name">' + element.name + '</a></h4>' +
                            '</div>' +
                            '<div class="row"><span style="color:#ccc;font-weight:600">Color:</span><span style="color:#ccc;font-weight:600">red</span></div>' +
                            '<div class="row"><span style="color:#ccc;font-weight:600">Seller:</span><span style="color:#ccc;font-weight:600">Smita S</span></div>' +
                            '</div>' +
                            '<div class="col-2">' +
                            '<span style="font-weight:600">Rs.</span> <span style="font-weight:600">' + element.priceAfterDiscount + '</span> ' +
                            '</div>' +
                            '<div class="col-4">' +
                            '<div class="row">' +
                            '<span style="margin-right:5px"><img src="images/Ellipse 30.png"></span><span style="font-size:14px;font-weight:600">Delivery expected by 28 Jul</span>' +
                            '</div>' +
                            '<div class="row">' +
                            '<span style="font-size:14px;color:#ccc;margin-top:10px;margin-left:5px">Your order has been placed</span>' +
                            '</div>' +
                            '<div class="row">' +
                            '<a href="track-order-details.html"  style="color: blue;text-decoration: underline;"><span onclick="sendDetails(' + element.id + ')" >TRACK YOUR ORDER</span></a>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>'+
                            '</div>'+
                            '<br>' ;
                            
                        document.querySelector('#myorder').innerHTML += htmlToReturn3;
                        // add(element.priceAfterDiscount);


                    }

                }




            });

        })
}

loadProducts3(productsListUrl3);

//end of adding data to the myorder page

// productview
increment = () => {
    document.getElementById('demoInput').stepUp();
}
decrement = () => {
    document.getElementById('demoInput').stepDown();
}
// productview



// adding data to the rack-order
let productsListUrl4 = 'https://my-json-server.typicode.com/SmitaSanjay/cart-list1/db';
// var productsListUrl4;
let htmlToReturn4 = "",
    reviews4 = "",
    lowStar4 = 0,
    i4 = 0.
isNew4 = '';

function loadProducts4(productsListUrl4) {

    var element4 = [];
    fetch('https://my-json-server.typicode.com/SmitaSanjay/cart-list1/db')
        .then(response => response.json())
        .then(json => {
            // const lsContent1 = JSON.parse(localStorage.getItem("products")) || [];
            productsList4 = json;
            element4 = getLSContent();

            productsList4.Products.forEach((element) => {

                for (let i = 0; i < element4.length; i++) {
                    if (element.id == element4[i]) {




                        htmlToReturn4 ='<div class="card" style="margin-bottom:15px;border-left:none;border-right:none">' +
                        '<div class="card-body">' +
                        '<div class="row">' +
                        '<div class="col-3 ">' +
                        '<img class="card-img-top" src="images/product' + element.id + '.png">' +
                        '</div>' +
                        '<div class="col-3">' +
                        '<div class="row" >' +
                        '<h4 style="text-overflow: ellipsis;overflow: hidden;white-space: nowrap;"><a href="#" aria-label="product details"  id="name">' + element.name + '</a></h4>' +
                        '</div>' +
                        '<div class="row"><span style="color:#ccc;font-weight:600">Color:</span><span style="color:#ccc;font-weight:600">red</span></div>' +
                        '<div class="row"><span style="color:#ccc;font-weight:600">Seller:</span><span style="color:#ccc;font-weight:600">Smita S</span></div>' +
                        '</div>' +
                        '<div class="col-2">' +
                        '<span style="font-weight:600">Rs.</span> <span style="font-weight:600">' + element.priceAfterDiscount + '</span> ' +
                        '</div>' +
                        '<div class="col-4">' +
                        '<div class="row">' +
                        '<span style="margin-right:5px"><img src="images/Ellipse 30.png"></span><span style="font-size:14px;font-weight:600">Delivery expected by 28 Jul</span>' +
                        '</div>' +
                        '<div class="row">' +
                        '<span style="font-size:14px;color:#ccc;margin-top:10px;margin-left:5px">Your order has been placed</span>' +
                        '</div>' +
                        '<div class="row">' +
                        '<a href="track-order-details.html"  style="color: blue;text-decoration: underline;"><span onclick="sendDetails(' + element.id + ')" >TRACK YOUR ORDER</span></a>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>'+
                        '</div>'+
                        '<br>' ;
                        document.querySelector('#track-order').innerHTML += htmlToReturn4;
                        // add(element.priceAfterDiscount);


                    }

                }




            });

        })
}

loadProducts4(productsListUrl4);

//end of adding data to the track-order

//start of adding data to track-order-details page
let productsListUrl6 = 'https://my-json-server.typicode.com/SmitaSanjay/cart-list1/db';
// var productsListUrl4;
let htmlToReturn6 = "",
    reviews6 = "",
    lowStar6 = 0,
    i6 = 0.
isNew6 = '';

function loadProducts6(productsListUrl6) {

    var element6 ;
    fetch('https://my-json-server.typicode.com/SmitaSanjay/cart-list1/db')
        .then(response => response.json())
        .then(json => {
            // const lsContent1 = JSON.parse(localStorage.getItem("products")) || [];
            productsList6 = json;
            element6 = getLSContentTrack();

            productsList6.Products.forEach((element) => {

                for (let i = 0; i < element6.length; i++) {
                    if (element.id == element6[i] ) {




                        htmlToReturn6 = '<div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 ">'+
                        '<img class="card-img-top" src="images/product' + element.id + '.png">'+
                    '</div>'+
                    '<div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">'+
                        '<div class="row">'+
                            '<h5 id="track-order-name">'+element.name+'</h5>'+
                        '</div>'+
                        '<div class="row productdet1">'+
                            '<div class="product-caption">'+
                                '<div class="product-rating">';
                                lowStar6 = 5 - element.ratings;
                                if (element.ratings == 5)
                                    lowStar2 = 0;
                                for (i = 1; i <= element.ratings; i++) {
                                    reviews6 += '<i class="far fa-star"></i>';
                                }
                                for (i = 1; i <= lowStar6; i++) {
                                    reviews6 += '<i class="far fa-star low-star"></i>';
                                }
                                lowStar2 = 0;
                                htmlToReturn6 += reviews6 + element.ratings + '/5';
                                reviews6 = "";
                                htmlToReturn6 += '<span style="color:#a6a9b6; font-weight: 200;">(2850)</span>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="row productdet1">'+
                            '<div class="productdet">Color : Yellow</div>'+
                        '</div>'+
                        '<div class="row productdet1">'+
                            '<div class="productdet">Seller : Smita S</div>'+
                        '</div>'+
                        '<div class="row productdet1">'+
                            '<span style="font-weight: 700;">Rs 1099 &nbsp;</span>'+
                            '<span style="text-decoration: line-through;color: #a6a9b6;">Rs'+
                                '2748</span>'+
                            '<span style="color: #f8880f; font-weight:700;"> &nbsp; (60%'+
                                'OFF)</span>'+
                        '</div>'+

                    '</div>'+
                    '<div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">'+

                        '<div class="row" style="font-weight: 600;">'+
                            'Delivery expected by Wed Jul 22,2021'+
                        '</div>'+
                        '<div class="row">'+
                            '<div class="col-6">'+
                                '<img src="images/Group 2608.png"><span style="font-size: 15px;">&nbsp;Cancel Item</span>'+
                            '</div>'+
                            '<div class="col-6">'+
                                '<img src="images/Group 2609.png"><span'+
                                    'style="font-size: 15px;">&nbsp;Need Help?</span>'+
                            '</div>'+

                        '</div>'+

                    '</div>';
                        document.querySelector('#track-order-details').innerHTML += htmlToReturn6;
                        // add(element.priceAfterDiscount);


                    }

                }




            });

        })
}

loadProducts6(productsListUrl6);

//start of track-details js
function sendDetails(e) {

    let clickedBtn = e;
    // alert(clickedBtn);
    setLSContentTrack(clickedBtn);


}

function getLSContentTrack() {

    let lsContent1 = JSON.parse(localStorage.getItem("products-track")) || [];


    return lsContent1;
}



function setLSContentTrack(ls) {

    let res = ls
    pushTrack(res);


}
let lsContentTrack = [];
function pushTrack(res) {
    lsContentTrack.push(res);
    setstorageTrack(lsContentTrack);

}

function setstorageTrack(lsContentTrack) {
    localStorage.setItem("products-track", JSON.stringify(lsContentTrack));

}
//end of track-details js


// var mobile1
//profile editable
function savedata(){
    var mobile = document.getElementById("mobile").value;
    localStorage.setItem("mobile",mobile);
    var fullname = document.getElementById("fullname").value;
    localStorage.setItem("fullname",fullname);
    var email1 = document.getElementById("email1").value;
    localStorage.setItem("email1",email1);
   
    var birthday = document.getElementById("birthday").value;
    localStorage.setItem("birthday",birthday);
    var location = document.getElementById("location").value;
    localStorage.setItem("location",location);
    var alt = document.getElementById("altmobile").value;
    localStorage.setItem("altmobile",alt);
    var nickname = document.getElementById("Nickname").value;
    localStorage.setItem("Nickname",nickname);

     
}


function displayProfile(){
    // mobile1 = 
    if(localStorage.getItem("mobile") == ""){
        document.getElementById("mobileNo").innerHTML = "- not added -";
    }
    else{
        document.getElementById("mobileNo").innerHTML = localStorage.getItem("mobile");
    }
       
    if(localStorage.getItem("fullname") == ""){
        document.getElementById("nameofuser").innerHTML = "- not added -";
    }
    else{
        document.getElementById("nameofuser").innerHTML = localStorage.getItem("fullname");
    }
   if(localStorage.getItem("email1") == ""){
    document.getElementById("emailid").innerHTML = "- not added -";
   }
   else{
    document.getElementById("emailid").innerHTML = localStorage.getItem("email1");
   }
  
//    if(localStorage.getItem("male") == ""){
//     female();
//    }
//    else{
//     male();
//    }
   if(localStorage.getItem("birthday") == ""){
    document.getElementById("dateofbirth").innerHTML = "- not added -";
   }
   else{
    document.getElementById("dateofbirth").innerHTML = localStorage.getItem("birthday");
   }
   if(localStorage.getItem("location") == ""){
    document.getElementById("location").innerHTML = "- not added -";
   }
   else{
    document.getElementById("location").innerHTML = localStorage.getItem("location");
   }
   if(localStorage.getItem("altmobile") == ""){
    document.getElementById("alt").innerHTML = "- not added -";
   }
   else{
    document.getElementById("alt").innerHTML = localStorage.getItem("altmobile");
   }
   if(localStorage.getItem("Nickname") == ""){
    document.getElementById("nickname1").innerHTML =  "- not added -";
   }
   else{
    document.getElementById("nickname1").innerHTML = localStorage.getItem("Nickname");
   }   
  
}
// function male(){
//     var male = document.getElementById("male").innerHTML;
    
//     localStorage.setItem("male",male);
//     document.getElementById("genderofuser").innerHTML = "male";
// }
// function female(){
//     var female = document.getElementById("female").innerHTML;
//     localStorage.setItem("female",female);
//     document.getElementById("genderofuser").innerHTML = "female";
// }

function savedData(){
   
    document.getElementById("mobile").value = localStorage.getItem("mobile");
    document.getElementById("fullname").value = localStorage.getItem("fullname");
    document.getElementById("email1").value = localStorage.getItem("email1");
    
    document.getElementById("birthday").value = localStorage.getItem("birthday");
    document.getElementById("location").value = localStorage.getItem("location");
    document.getElementById("altmobile").value = localStorage.getItem("altmobile");
    document.getElementById("Nickname").value = localStorage.getItem("Nickname");
    

   
}
//end of edit profile


//checkout page 


// $(document).ready(function(){

    $('#deliveryAddrc').click(function(){
        $("#deliveryAddr").attr("readonly", false); 
    });
   
    

//  });

//  $(document).ready(function(){
    $('#summary1').click(function(){
        $("#summary").attr("readonly", false); 
    });
// });


// $(document).ready(function(){
    $('#login3').click(function(){
        $("#login2").attr("readonly", false); 
    });
// });



//end of checkout

