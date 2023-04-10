let title =document.getElementById('title');

let price =document.getElementById('price');

let taxes =document.getElementById('taxes');

let ads =document.getElementById('ads');

let discount =document.getElementById('discount');

let total =document.getElementById('total');

let count =document.getElementById('count');

let category =document.getElementById('category');

let submit =document.getElementById('submit');

console.log(title,price,taxes,ads,discount,total,count,category,submit)


//get total

function getTotal()
{
    if(price.value != ''){
        let result =(+price.value + +taxes.value + +ads.value)
        - +discount.value;
    

    }
}


//creat 
let dataPro=[]

submit.onclick =function(){
    let newPro ={
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,

    }
    console.log()
}

function isGreater(a,b){
    if (a>b){
        console.log(a+ "is greater than"+b);

    }
}
isGreater(13)