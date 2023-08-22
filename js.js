const cards = document.querySelectorAll('.card');
const cartList = document.getElementById('cart-list');
const cartTotal = document.getElementById('totalPrice');
const button = document.getElementById('purchase-button');
const couponCodeInput = document.getElementById("couponCode");
const applyButton = document.getElementById("applyButton");
const discountSpan  = document.getElementById("discount");
const remainingTotalSpan  = document.getElementById("total");


let itemCount = 0;
let totalPrice = 0;

cards.forEach(card => {
    card.addEventListener('click', () => {
        const itemName = card.dataset.name;
        const itemPrice = parseFloat(card.dataset.price);

        itemCount++;
        const cartItem = document.createElement('li');
        cartItem.textContent = `${itemCount}. ${itemName}`;
        cartList.appendChild(cartItem);

        totalPrice += itemPrice;
        cartTotal.textContent = totalPrice.toFixed(2);
        if(totalPrice > 0){
            button.disabled = false;
        }else{
            button.disabled = true;
        }
       
        if (totalPrice >= 200  ) {
            applyButton.disabled = false;
           
          } else {
            applyButton.disabled = true;
           
          }
    });


applyButton.addEventListener("click", () => {
  const couponCode = couponCodeInput.value;
  const totalPrice = parseFloat(cartTotal.textContent);
  
  if (couponCode === "SELL200") {
    const discountAmount = totalPrice * 0.2; 
   
    const discountedTotal = totalPrice - discountAmount;
    const remainingTotal = discountedTotal;
    discountSpan.textContent = discountAmount.toFixed(2);
    cartTotal.textContent = discountedTotal.toFixed(2);
    remainingTotalSpan.textContent = remainingTotal.toFixed(2);
   
  } else {
    discountSpan.textContent = "0.00";
  }
  
});
});