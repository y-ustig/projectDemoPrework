const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const MenuGen = document.querySelector('.menu');
const MobileMenu = document.querySelector('.mobile-menu');
const NavbarShoppingCart = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
/*const detailProduct =document.querySelector('.detail-product');
const imgProduct = document.querySelector('img-producto');*/
const ProductDetailContainer = document.querySelector('.detail-product');
const productDetailCloseIcon = document.querySelector('.detail-product-close');

navbarEmail.addEventListener('click', toggleDesktopMenu);
MenuGen.addEventListener('click', toggleMobileMenu);
NavbarShoppingCart.addEventListener('click',toggleCarritoAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside )
// imgProduct.addEventListener('click',toggleDetailProduct);




function toggleDesktopMenu (){
desktopMenu.classList.toggle('inactive');
aside.classList.add('inactive');
ProductDetailContainer.classList.add('inactive');
}

function toggleMobileMenu (){
    MobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
    ProductDetailContainer.classList.add('inactive');
   
}

function toggleCarritoAside(){
    aside.classList.toggle('inactive');
    MobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    ProductDetailContainer.classList.add('inactive');
  
}

// function toggleDetailProduct(){
//     detailProduct.toggle('inactive');
// }

function openProductDetailAside (){
    ProductDetailContainer.classList.remove('inactive');

}

function closeProductDetailAside(){
    ProductDetailContainer.classList.add('inactive');

}

const ProducList = [];

 ProducList.push(
    {
    name : 'Pokemon',
    price: 220,
    image : 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1777JH.img?w=1920&h=1080&q=60&m=2&f=jpg'}
);
ProducList.push(
    {
    name : 'Pokemon',
    price: 220,
    image : 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1777JH.img?w=1920&h=1080&q=60&m=2&f=jpg'}
); 
ProducList.push(
    {
    name : 'Pokemon',
    price: 220,
    image : 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1777JH.img?w=1920&h=1080&q=60&m=2&f=jpg'}
);
 ProducList.push(
    {
    name : 'Pokemon',
    price: 220,
    image : 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1777JH.img?w=1920&h=1080&q=60&m=2&f=jpg'}
);
ProducList.push(
    {
    name : 'Pokemon',
    price: 220,
    image : 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1777JH.img?w=1920&h=1080&q=60&m=2&f=jpg'}
); 
ProducList.push(
    {
    name : 'Pokemon',
    price: 220,
    image : 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1777JH.img?w=1920&h=1080&q=60&m=2&f=jpg'}
);
 ProducList.push(
    {
    name : 'Pokemon',
    price: 220,
    image : 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1777JH.img?w=1920&h=1080&q=60&m=2&f=jpg'}
);
ProducList.push(
    {
    name : 'Pokemon',
    price: 220,
    image : 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1777JH.img?w=1920&h=1080&q=60&m=2&f=jpg'}
); 
ProducList.push(
    {
    name : 'Pokemon',
    price: 220,
    image : 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1777JH.img?w=1920&h=1080&q=60&m=2&f=jpg'}
);
 ProducList.push(
    {
    name : 'Pokemon',
    price: 220,
    image : 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1777JH.img?w=1920&h=1080&q=60&m=2&f=jpg'}
);
ProducList.push(
    {
    name : 'Pokemon',
    price: 220,
    image : 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1777JH.img?w=1920&h=1080&q=60&m=2&f=jpg'}
); 
ProducList.push(
    {
    name : 'Pokemon',
    price: 220,
    image : 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1777JH.img?w=1920&h=1080&q=60&m=2&f=jpg'}
);
 ProducList.push(
    {
    name : 'Pokemon',
    price: 220,
    image : 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1777JH.img?w=1920&h=1080&q=60&m=2&f=jpg'}
);

function renderProducts(array){
    for (produc of array){
    
        //     <div class = "product-card">
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        //     <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1777JH.img?w=1920&h=1080&q=60&m=2&f=jpg" alt="">
        const img = document.createElement('img');
        img.setAttribute('src',produc.image);
        //img.classList.add('img-producto');
        img.addEventListener('click', openProductDetailAside);
        //     <div class="product-info">
        const ProductInfo = document.createElement('div');
        ProductInfo.classList.add('product-info');
        //         <div>
        const productinfoDiv =document.createElement('div');
        //             <p>$120.00</p>
        const productPrice = document.createElement('p');
        productPrice.innerText = '$'+ produc.price;
        //             <p>Pokemon</p>
        const productName = document.createElement('p');
        productName.innerText = produc.name;
        //         </div>
        productinfoDiv.appendChild(productPrice);
        productinfoDiv.appendChild(productName);
        //         <figure>
        const productinfoFigure =document.createElement('figure');
        //             <img src="./icons/bt_add_to_cart.svg" alt="">
        const productImageCart = document.createElement('img');
        productImageCart.setAttribute('src','./icons/bt_add_to_cart.svg');
        //         </figure>
        productinfoFigure.appendChild(productImageCart);
        //     </div>
        ProductInfo.appendChild(productinfoDiv);
        ProductInfo.appendChild(productinfoFigure);
        //     </div> 
        productCard.appendChild(img);
        productCard.appendChild(ProductInfo);
        
        cardsContainer.appendChild(productCard);
        
        }
};

renderProducts(ProducList);
