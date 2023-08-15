//const mainPriceConvertToNum=1000;
const discountPersentage=0.99;
document.getElementById('apply-discount').addEventListener('click',function(){
    //console.log('I got cliked')
    const mainPriceElement=document.getElementById('main-price');
    const mainPrice=mainPriceElement.innerText;
    //console.log(typeof mainPrice);
    const mainPriceConvertToNum=parseFloat(mainPrice);//main price converted
    //console.log(mainPriceConvertToNum);
    const discountedPrice=mainPriceConvertToNum*discountPersentage;

    //console.log(discountedPrice);
    const customerNeedToPay=mainPriceConvertToNum-discountedPrice;
    //console.log(customerNeedToPay);
    const customerPay=document.getElementById('you-pay');
    customerPay.innerText=customerNeedToPay;

    //savings ammount
    const savingsAmmount=document.getElementById('you-save');
    savingsAmmount.innerText=discountedPrice;
})


//confusion


const dicountPersenteage=0.99;
        document.getElementById('btn-2').addEventListener('click',function(){
            //console.log('Cliked')
           const mainPriceTo=document.getElementById('main-price2');
           const mainPriceText=mainPriceTo.innerText;
           //console.log(typeof mainPriceText)
           const mainPriceStringToNum=parseFloat(mainPriceText);
           //console.log(typeof mainPriceStringToNum);
           const discountedPrice=mainPriceStringToNum*dicountPersenteage;
           //console.log(discountedPrice);
           const customerNeedToPay=mainPriceStringToNum-discountedPrice;
           //console.log(customerNeedToPay);

            const couponeCode=document.getElementById('input-coupon');
            const couponCodeValue=couponeCode.value;
            couponeCode.value="";
            
            //console.log(couponCodeValue);
            if(couponCodeValue==='FF99'){
                alert('Hurrah!! You got 99% discount');
            }
            else{
                alert('Please Input Valid Coupon');
                return;
            }

           const customerPay=document.getElementById('you-pay2');
           customerPay.innerText=customerNeedToPay;

        })
        
