let pricePlastic = 200;
let priceTextile = 250;
let priceAluminum = 350;
let price;

let width = parseInt(prompt("Ширина (см)", 45))/100;
let height = parseInt(prompt("Высота (см)", 100))/100;
let material = parseInt(prompt("Материал:\n"+
"1 – Пластик\n"+
"2 – Текстиль\n"+
 "3 – Алюминий\n"+
 "Ваш выбор", 3));
if (material == 1) price = pricePlastic;
else if (material == 2) price = priceTextile;
else if (material == 3) price = priceAluminum;
else price = false;
let squareWindow = width * height;
let priceOut = squareWindow * price;

if (!(price || squareWindow || priceOut)) alert("Расчет не может быть выполнен.");
else alert("Цена за кв. м: "+price.toFixed(2)+" грн.\n"+
"Площадь: "+squareWindow.toFixed(2)+" кв. м.\n"+
"К оплате: "+priceOut.toFixed(2)+" грн.\n");