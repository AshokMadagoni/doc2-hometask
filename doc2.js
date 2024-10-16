
// 1.Answer E -commerce shoping

// var carteditems=["bag","belt","watch","t-shirt","mobile","laptop","headphones"];
// function purchase(){
//     var userselect=prompt("select your carted items to buy ").tolowercase().trim();
// if(userselect){
//     if(carteditems.includes(userselect)){
//         alert(`you selected ${userselect} item from your cart`);
//         conform=` are you sure to purchase ${userselect} item`
//         if(confirm(conform)==true){
//             alert("your purchase is conformed")
//         }
//         else{
//             alert("you cancelled your purchase")
//         }
//     }
//     else{
//         alert(` your selected item ${userselect} not in your cart`)
//         purchase()
//     }
// }
// else{
//     console.log("please select any item to buy");
//     purchase()
// }
// }
// purchase()

//another senario

const cartItems = ["Laptop", "Phone", "Headphones"];
let totalCost = 0;
let items=[]
for (let i=0; i < cartItems.length; i++) {
let price = prompt(`Enter the price of ${cartItems[i]}:", "0"`);
if(price>=10 ) {
totalCost += Number(price);
items.push(cartItems[i])
}
else{
    alert("enter proper amount")
}
}
if(totalCost==0){
    alert("try agin with valid")
}
else{
    if (confirm("Your total is $" + totalCost +"for"+ items+ "Do you want to proceed to checkout?")) {
        alert("Thank you for your purchase!");
        } else {
        alert("Purchase canceled.");
        }
}

// 2.Answer Hotstar subscription plan

var plan=prompt("enter your subscription plan ex:(mobile,super,premium)").toLowerCase().trim();
switch(plan){
    case "mobile":
        alert(`Rs 149/3 months and Rs 499/ year, Access content on "1" mobile device at a time`);
        break;
        case "super":
            alert(`Rs 299/3 months and Rs 899/year , Access content on any "2" devices at a time `);
            break;
            case "premium":
                alert(`Rs 299/month Rs 499/3 months and Rs 1499/year , Access content on any "4" devices at a time`);
                break;
            default:
                alert("enter a valid plan")
}

// 3.Answer uber ride booking

function booking(){
var userbookingconformaton=prompt("are you ready to book your ride YES / NO").toUpperCase().trim();
if(userbookingconformaton){
    if(userbookingconformaton==="YES"){
        conform=("wiat for 3 seconds we are conforming your booking");
        if(confirm(conform)==true){
            setTimeout(function(){
                alert("booking conformed")
            },3000)
        }
        else{
            alert("booking cancelled")
        }
    }
    else{
        alert("you cancelled your booking")
    }
}
else{
    alert("enter Yes/No")
    booking()
}
}
booking()

// 4.Answer Amazon Product Rating Feature

const products = ["Laptop", "Phone", "Headphones"];
let ratings = [];
for (let i=0; i < products.length; i++) {
let rating = prompt("Rate the " + products[i] + "out of 5:", "5");
if (rating >= 0 && rating <= 5) {
ratings.push(`${products[i]}: ${rating}/5`);
} else {
alert("Invalid rating for + products[i]");
}
}
alert("Thanks for rating! Here are your ratings:\n" + ratings.join("\n"));


// 5.Answer hotstar video quality selecton

var userrequiredquality=prompt("enter required video quality ex(480p,720p etc...").toLowerCase();
switch(userrequiredquality){
    case "480p":
        alert(`your video is playing with ${userrequiredquality} quality`);
        break;
        case "720p":
            alert(`your video is playing with ${userrequiredquality} quality`);
            break;
            case "1080p":
                alert(` your video is playing with ${userrequiredquality} quality `);
                break;
                case "4k":
                    alert(`your video is playing with ${userrequiredquality} quality`);
                    break;
                default:
                    alert("please enter quality 480p or 720p or 1080p or 4k")
}

// 6.Answer logging out

logout="are sure to logout";
if(confirm(logout)==true){
    setTimeout(function(){
        alert("logouted successfully")
    },2000)
}
else{
    alert("back to login page");
    login=("enter password to login again");
    if(confirm(login)==true){
        alert("login successfull")
    }
    else{
        alert("login cancelled")
    }
}
    
    