console.log("checking stock value")

let form_div=document.querySelector("#form")
const output=document.querySelector("#output")
const loader=document.querySelector("#loader")
loader.style.visibility='hidden'
output.style.visibility='hidden'

form_div.addEventListener("submit",(e)=>{
    e.preventDefault()
    let purchase_price=document.querySelector("#purchase_price")
    let current_price=document.querySelector("#current_price")
    let num_of_shares=document.querySelector("#quantity")

    purchase_price=Number(purchase_price.value)
    current_price=Number(current_price.value)
    num_of_shares=Number(num_of_shares.value)

    dataHandler(purchase_price,num_of_shares,current_price)
    
})
function dataHandler(purchase,n,present){
    if(purchase<1 || n<1 || present <1){
        loader.style.visibility="visible"
        output.style.visibility="hidden"

        setTimeout(()=>{
            output.innerHTML="Minimum price and quantity of shares should be 1."
            loader.style.visibility="hidden"
            output.style.visibility="visible"
        },2500)
    }else if(present-purchase>0){
        let profit_precent=(((present-purchase)/purchase)*100).toFixed(2);

        loader.style.visibility="visible"
        output.style.visibility="hidden"
        setTimeout(() => {
            output.innerHTML=`You gained ${profit_precent}% and the amount gained is <i class="fas fa-rupee-sign fa-sm"></i>${(present-purchase)*n}`
            output.classList.add("profit_theme")
            output.classList.remove("lost_theme")
            loader.style.visibility="hidden"
            output.style.visibility="visible"
        }, 2500);
    }else if(present-purchase<0){
        let loss_percent=(((purchase-present)/purchase)*100).toFixed(2);

        loader.style.visibility="visible"
        output.style.visibility="hidden"
        setTimeout(() => {
            output.innerHTML=`You lost ${loss_percent}% and the amount gained is <i class="fas fa-rupee-sign fa-sm"></i>${(purchase-present)*n}`
            output.classList.remove("profit_theme")
            output.classList.add("lost_theme")
            loader.style.visibility="hidden"
            output.style.visibility="visible"
        }, 2500);
    }else if(present-purchase===0){
        loader.style.visibility="visible"
        output.style.visibility="hidden"

        setTimeout(() => {
            loader.style.visibility="hidden"
            output.style.visibility="visible"
            output.innerHTML='OOPS! No Loss No Gain. Take risk Man!'
            output.classList.remove("profit_theme")
            output.classList.remove("lost_theme")
        }, 2500);
    }
}