
// var settings = document.getElementById('settings');
//
// document.onclick = function(e){
//     var target = (e && e.target) || (event && event.srcElement);
//     var display = 'none';
//     while (target.parentNode) {
//       if (target == settings) {
//         display ='block';
//         break;
//       }
//       target = target.parentNode;
//     }
// settings.style.display = display;
// }
//KLIKANIE POZA - ZAMYKANIE




  const json = [];
  const endpoint = 'http://rafalsebestjanski.pl/Shop-website/data.json';
  fetch(endpoint)
    .then(blob => blob.json())
    .then(data => json.push(...data))





console.log("U mnie działa. Jeśli u Ciebie nie, proszę wyłączyć i włączyć komputer.");
console.log("Taki sucharek.");


////////////////////////////////////////////////////////////////////////////////
//preventDefault() on buttons we can click
let preventDefaultTab = [document.getElementById("categoriesHeader"), document.getElementById("filterHeader"), document.getElementById("topSortContener"), document.getElementById("sizeSmall"), document.getElementById("sizeMedium"), document.getElementById("sizeLarge"), document.getElementById("categoryFirst"), document.getElementById("categorySecond"), document.getElementById("categoryThird"),
document.getElementById("categoryFourth"), document.getElementById("categoryFifth"), document.getElementById("categorySixth"), document.getElementById("categorySeventh"), document.getElementById("brandsFirst"), document.getElementById("brandsSecond"), document.getElementById("brandsThird"), document.getElementById("brandsFourth"), document.getElementById("brandsFifth"),
document.getElementById("brandsSixth"), document.getElementById("brandsSeventh"), document.querySelector(".pageNumber")];

for (let i=0; i < preventDefaultTab.length; i++) {
preventDefaultTab[i].onmousedown = function(event) {
event.preventDefault();
}
}
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
// sorting
let currentSorting = document.getElementById('sortContener--zero');
let sortContenerTab = [document.getElementById("sortContener--first"), document.getElementById("sortContener--second"), document.getElementById("sortContener--third"), document.getElementById("sortContener--fourth")];
let sortContentTab = ["A-Z", "Z-A", "Price asc", "Price des"];

function compareName(sortA,sortB) {
if (sortA.product < sortB.product)
return -1;
if (sortA.product > sortB.product)
return 1;
return 0;
}

function comparePrice(sortA,sortB) {
if (sortA.price < sortB.price)
return -1;
if (sortA.price > sortB.price)
return 1;
return 0;
}

document.getElementById('topSortContener').onclick = function() {
this.classList.toggle('isActive');
for (let i=0; i < sortContenerTab.length; i++) {
sortContenerTab[i].onclick = function() {
currentSorting.innerHTML = sortContentTab[i];
filter();
}
}
}
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
//Slider
let responsiveSlider = function() {

let slider = document.getElementById("slider");
let sliderWidth = slider.offsetWidth;
let slideList = document.getElementById("slideWrap");
let count = 1;
let items = slideList.querySelectorAll("li").length;
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let firstResponsiveButton = document.getElementById("firstResponsiveButton");
let secondResponsiveButton = document.getElementById("secondResponsiveButton");
let thirdResponsiveButton = document.getElementById("thirdResponsiveButton");

firstResponsiveButton.style.background = "#e5e5e5";

window.addEventListener('resize', function() {
sliderWidth = slider.offsetWidth;
});

let prevSlide = function() {
if(count > 1) {
count = count - 2;
slideList.style.left = "-" + count * sliderWidth + "px";
count++;
}
else if(count = 1) {
count = items - 1;
slideList.style.left = "-" + count * sliderWidth + "px";
count++;
}
};

let nextSlide = function() {
firstResponsiveButton.style.background = "#f5f5f5";
secondResponsiveButton.style.background = "#f5f5f5";
thirdResponsiveButton.style.background = "#f5f5f5";
if (count == 3) {
firstResponsiveButton.style.background = "#e5e5e5";
}
if (count == 1) {
secondResponsiveButton.style.background = "#e5e5e5";
}
if (count == 2) {
thirdResponsiveButton.style.background = "#e5e5e5";
}
if(count < items) {
slideList.style.left = "-" + count * sliderWidth + "px";
count++;
}
else if(count = items) {
slideList.style.left = "0px";
count = 1;
}
};

next.addEventListener("click", function() {
nextSlide();
});

prev.addEventListener("click", function() {
prevSlide();
});

firstResponsiveButton.addEventListener("click", function() {
count = 0;
slideList.style.left = "-" + count * sliderWidth + "px";
secondResponsiveButton.style.background = "#f5f5f5";
thirdResponsiveButton.style.background = "#f5f5f5";
firstResponsiveButton.style.background = "#e5e5e5";
});

secondResponsiveButton.addEventListener("click", function() {
count = 1;
slideList.style.left = "-" + count * sliderWidth + "px";
firstResponsiveButton.style.background = "#f5f5f5";
thirdResponsiveButton.style.background = "#f5f5f5";
secondResponsiveButton.style.background = "#e5e5e5";
});

thirdResponsiveButton.addEventListener("click", function() {
count = 2;
slideList.style.left = "-" + count * sliderWidth + "px";
firstResponsiveButton.style.background = "#f5f5f5";
secondResponsiveButton.style.background = "#f5f5f5";
thirdResponsiveButton.style.background = "#e5e5e5";
});

setInterval(function() {
nextSlide()
}, 8000);
}
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
//Price filter mouse drag.
let inputLine = document.getElementById('inputLine');
let inputCircleMin = document.getElementById('inputCircleMin');
let inputCircleMax = document.getElementById('inputCircleMax');

document.getElementById("minPrice").innerHTML = 0;
document.getElementById("maxPrice").innerHTML = 200;

//Click on circle MIN price starts this function
inputCircleMin.onmousedown = function(event) {
event.preventDefault();
let maxPrice = document.getElementById('maxPrice').innerHTML;
function onMouseMove(event) {
let distanceFromLeft = event.clientX - inputLine.getBoundingClientRect().left;
if (distanceFromLeft < 0) {
distanceFromLeft = 0;
}
if (distanceFromLeft > maxPrice*27/20) {
distanceFromLeft = maxPrice*27/20;
}
inputCircleMin.style.left = distanceFromLeft + 'px';
let price = Math.round(distanceFromLeft * 20/27);
document.getElementById("minPrice").innerHTML = price;
}
function onMouseUp() {
document.removeEventListener('mouseup', onMouseUp);
document.removeEventListener('mousemove', onMouseMove);
filter();
}
document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseup', onMouseUp);
}

//Click on circle "MAX price" starts this function
inputCircleMax.onmousedown = function(event) {
event.preventDefault();
let minPrice = document.getElementById('minPrice').innerHTML;
function onMouseMove(event) {
let distanceFromLeft = event.clientX - inputLine.getBoundingClientRect().left;
if (distanceFromLeft < minPrice*27/20) {
distanceFromLeft = minPrice*27/20;
}
if (distanceFromLeft > 270) {
distanceFromLeft = 270;
}
inputCircleMax.style.left = distanceFromLeft + 'px';
let price = Math.round(distanceFromLeft * 20/27);
document.getElementById("maxPrice").innerHTML = price;
}

//When you release the "MIN price" or "MAX price" circle, products are being filtering according to chosen price
function onMouseUp() {
document.removeEventListener('mouseup', onMouseUp);
document.removeEventListener('mousemove', onMouseMove);
filter();
}

document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseup', onMouseUp);
};
////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////
//Toggling clas "isClick" addEventListeners
let tabToggleIsClickedWhatYouClick = [document.getElementById("colorCircleFirst"), document.getElementById("colorCircleSecond"), document.getElementById("colorCircleThird"), document.getElementById("colorCircleFourth"), document.getElementById("colorCircleFifth"), document.getElementById("sizeSmall"), document.getElementById("sizeMedium"), document.getElementById("sizeLarge"), document.getElementById("brandsFirst"),
document.getElementById("brandsSecond"), document.getElementById("brandsThird"), document.getElementById("brandsFourth"), document.getElementById("brandsFifth"), document.getElementById("brandsSixth"), document.getElementById("brandsSeventh")];
let tabToggleIsClickedWhereToPutClass = [document.getElementById("acceptedArrowFirst"), document.getElementById("acceptedArrowSecond"), document.getElementById("acceptedArrowThird"), document.getElementById("acceptedArrowFourth"), document.getElementById("acceptedArrowFifth"), document.getElementById("sizeSmall"), document.getElementById("sizeMedium"), document.getElementById("sizeLarge"), document.getElementById("brandsFirst"),
document.getElementById("brandsSecond"), document.getElementById("brandsThird"), document.getElementById("brandsFourth"), document.getElementById("brandsFifth"), document.getElementById("brandsSixth"), document.getElementById("brandsSeventh")];

for (let i=0; i < tabToggleIsClickedWhatYouClick.length; i++) {
tabToggleIsClickedWhatYouClick[i].addEventListener("click", function() {
tabToggleIsClickedWhereToPutClass[i].classList.toggle("isClicked");
filter();
});
}
////////////////////////////////////////////////////////////////////////////////


document.getElementById("categoriesHeader").addEventListener("click", function() {
document.getElementById("categoriesUl").classList.toggle("isClicked");
if (document.getElementById("filtersFilters").classList.contains("isClicked")) {
document.getElementById("filtersFilters").classList.remove("isClicked");
}
})

document.getElementById("filterHeader").addEventListener("click", function() {
document.getElementById("filtersFilters").classList.toggle("isClicked");
if (document.getElementById("categoriesUl").classList.contains("isClicked")) {
document.getElementById("categoriesUl").classList.remove("isClicked");
}
})








document.getElementById('categoryFirst').addEventListener('click', function() {
this.classList.toggle('isClicked')
if (this.classList.contains('isClicked')) {
document.getElementById('categorySecond').classList.add('isClicked');
document.getElementById('categoryThird').classList.add('isClicked');
document.getElementById('categoryFourth').classList.add('isClicked');
document.getElementById('categoryFifth').classList.add('isClicked');
document.getElementById('categorySixth').classList.add('isClicked');
document.getElementById('categorySeventh').classList.add('isClicked');
}
else {
document.getElementById('categorySecond').classList.remove('isClicked');
document.getElementById('categoryThird').classList.remove('isClicked');
document.getElementById('categoryFourth').classList.remove('isClicked');
document.getElementById('categoryFifth').classList.remove('isClicked');
document.getElementById('categorySixth').classList.remove('isClicked');
document.getElementById('categorySeventh').classList.remove('isClicked');
}
filter ();
});
document.getElementById('categorySecond').addEventListener('click', function() {
this.classList.toggle('isClicked')
if (document.getElementById('categoryFirst').classList.contains('isClicked')) {
document.getElementById('categoryFirst').classList.remove('isClicked');
}
filter ();
});
document.getElementById('categoryThird').addEventListener('click', function() {
this.classList.toggle('isClicked')
if (document.getElementById('categoryFirst').classList.contains('isClicked')) {
document.getElementById('categoryFirst').classList.remove('isClicked');
}
filter ();
});
document.getElementById('categoryFourth').addEventListener('click', function() {
this.classList.toggle('isClicked')
if (document.getElementById('categoryFirst').classList.contains('isClicked')) {
document.getElementById('categoryFirst').classList.remove('isClicked');
}
filter ();
});
document.getElementById('categoryFifth').addEventListener('click', function() {
this.classList.toggle('isClicked')
if (document.getElementById('categoryFirst').classList.contains('isClicked')) {
document.getElementById('categoryFirst').classList.remove('isClicked');
}
filter ();
});
document.getElementById('categorySixth').addEventListener('click', function() {
this.classList.toggle('isClicked')
if (document.getElementById('categoryFirst').classList.contains('isClicked')) {
document.getElementById('categoryFirst').classList.remove('isClicked');
}
filter ();
});
document.getElementById('categorySeventh').addEventListener('click', function() {
this.classList.toggle('isClicked')
if (document.getElementById('categoryFirst').classList.contains('isClicked')) {
document.getElementById('categoryFirst').classList.remove('isClicked');
}
filter ();
});







function filter() {
  let display = [];
  let tabChosenColors = [];
  let arrayChosenSizes = [];
  let arrayChosenProducers = [];
  let arrayChosenCategories = [];
  let minPrice = Number(document.getElementById('minPrice').innerHTML);
  let maxPrice = Number(document.getElementById("maxPrice").innerHTML);
  let priceCount = 0;
  let tabCount = [];
  let color = ["grey", "white", "red", "blue", "green"];
  let sizes = ["Small", "Medium", "Large"];
  let brands = ["Banshu Hamono", "Bower", "Braun", "Elevenplus", "Field", "Henry Wilson", "Menu"];
  let category = ["Living", "Dining", "Furniture", "Lighting", "Technics", "Accessories"];
  let countIdArrayCategory = ["categorySecondQuantity", "categoryThirdQuantity", "categoryFourthQuantity", "categoryFifthQuantity", "categorySixthQuantity", "categorySeventhQuantity"];
  let countIdArraySize = ["sizeSmallQuantity", "sizeMediumQuantity", "sizeLargeQuantity"];
  let countIdArrayBrands = ["brandsFirstQuantity", "brandsSecondQuantity", "brandsThirdQuantity", "brandsFourthQuantity", "brandsFifthQuantity", "brandsSixthQuantity", "brandsSeventhQuantity"];
  let zaraztonazwe = [document.getElementById("acceptedArrowFirst"), document.getElementById('acceptedArrowSecond'), document.getElementById('acceptedArrowThird'), document.getElementById('acceptedArrowFourth'), document.getElementById('acceptedArrowFifth'), document.getElementById('sizeSmall'), document.getElementById('sizeMedium'), document.getElementById('sizeLarge'), document.getElementById("brandsFirst"),
  document.getElementById("brandsSecond"), document.getElementById("brandsThird"), document.getElementById("brandsFourth"), document.getElementById("brandsFifth"), document.getElementById("brandsSixth"), document.getElementById("brandsSeventh"), document.getElementById("categorySecond"), document.getElementById("categoryThird"), document.getElementById("categoryFourth"), document.getElementById("categoryFifth"),
  document.getElementById("categorySixth"), document.getElementById("categorySeventh")];

  ////////////////////////////////////////////////////////////////////////
  //When you pick (click on) category or color or size etc. - these products are being added to displaying array
  for (let i=0; i < zaraztonazwe.length; i++) {
    if (i < color.length) {
      if (zaraztonazwe[i].classList.contains("isClicked")) {
        tabChosenColors.push(color[i]);
      }
    }
    else if (i < (color.length + sizes.length)) {
      if (zaraztonazwe[i].classList.contains("isClicked")) {
        arrayChosenSizes.push(sizes[i - color.length]);
      }
    }
    else if (i < (color.length + sizes.length + brands.length)) {
      if (zaraztonazwe[i].classList.contains("isClicked")) {
        arrayChosenProducers.push(brands[i - color.length - sizes.length]);
      }
    }
    else if (i < (color.length + sizes.length + brands.length + category.length)) {
      if (zaraztonazwe[i].classList.contains("isClicked")) {
        arrayChosenCategories.push(category[i - color.length - sizes.length - brands.length]);
      }
    }
  }
  if (document.getElementById("categoryFirst").classList.contains("isClicked")) {
    arrayChosenCategories.push("Living","Dining","Furniture","Lighting","Technics","Accessories");
  }

  for (let i=0; i < json.length; i++) {
    let productPrice = Number(json[i].price.replace("$", ""));
    if (((minPrice < productPrice) && (maxPrice > productPrice))) {
      priceCount++;
      tabCount.push(json[i]);
      if (((minPrice < productPrice) && (maxPrice > productPrice)) && ((tabChosenColors.includes(json[i].color)) || (tabChosenColors.length == 0)) && ((arrayChosenSizes.includes(json[i].size)) || (arrayChosenSizes.length == 0)) && ((arrayChosenProducers.includes(json[i].producer)) || (arrayChosenProducers.length == 0)) && ((arrayChosenCategories.includes(json[i].category)) || (arrayChosenCategories.length == 0))) {
        display.push(json[i]);
      }
    }
  }

  document.getElementById("categoryFirstQuantity").innerHTML = priceCount;
  ////////////////////////////////////////////////////////////////////////


  ////////////////////////////////////////////////////////////////////////
  //Counting and displaying how many given category (or size etc) products are
  for (let i=0; i < countIdArrayCategory.length; i++) {
    let count = 0;
    for (let j=0; j < tabCount.length; j++) {
      if (tabCount[j].category == category[i]) {
        count++;
      }
    }
    document.getElementById(countIdArrayCategory[i]).innerHTML = count;
  }

  for (let i=0; i < countIdArraySize.length; i++) {
    let count = 0;
    for (let j=0; j < tabCount.length; j++) {
      if (tabCount[j].size == sizes[i]) {
        count++;
      }
    }
    document.getElementById(countIdArraySize[i]).innerHTML = count;
  }

  for (let i=0; i < countIdArrayBrands.length; i++) {
    let count = 0;
    for (let j=0; j < tabCount.length; j++) {
      if (tabCount[j].producer == brands[i]) {
        count++;
      }
    }
    document.getElementById(countIdArrayBrands[i]).innerHTML = count;
  }
  ////////////////////////////////////////////////////////////////////////


  //Default sorting
  if (document.getElementById('sortContener--zero').innerHTML == "") {
    document.getElementById('sortContener--zero').innerHTML = "A-Z";
  }

  ////////////////////////////////////////////////////////////////////////
  //Sorting products alphabethic
  if ((document.getElementById('sortContener--zero').innerHTML == 'A-Z') || (document.getElementById('sortContener--zero').innerHTML == 'Z-A')) {
    display.sort(compareName);
    if (document.getElementById('sortContener--zero').innerHTML == 'Z-A') {
      display.reverse();
    }
  }
  //Sorting products by price
  if ((document.getElementById('sortContener--zero').innerHTML == 'Price asc') || (document.getElementById('sortContener--zero').innerHTML == 'Price des')) {
    let NEWdisplay = [...display];
    for (let i=0; i < NEWdisplay.length; i++) {
      let priceWithoutDolar = Number(NEWdisplay[i].price.replace("$", ""));
      NEWdisplay[i].price = priceWithoutDolar;
    }
    NEWdisplay.sort(comparePrice);
    for (let i=0; i < display.length; i++) {
      NEWdisplay[i].price = "$" + NEWdisplay[i].price;
    }
    display = [...NEWdisplay];
    if (document.getElementById('sortContener--zero').innerHTML == 'Price des') {
      display.reverse();
    }
  }
  ////////////////////////////////////////////////////////////////////////


  ////////////////////////////////////////////////////////////////////////
  //Some info on the page
  if ((display.length % 6) == 0) {
    var howManyProductsPages = Math.floor(display.length / 6);
  }
  else {
    var howManyProductsPages = Math.floor(display.length / 6) + 1;
  }

  document.getElementById('topShowingWhichElementsOnPage').innerHTML = "Showing 1 - 6 of";
  document.getElementById('howManyresults').innerHTML = display.length + " results";
  document.getElementById('howManyProductsFound').innerHTML = display.length + " Products Found";
  if (howManyProductsPages == 1) {
    document.getElementById('topShowingWhichElementsOnPage').innerHTML = "Showing 1 - " + display.length +  " of ";
  }
  if (howManyProductsPages == 0) {
    document.getElementById('topShowingWhichElementsOnPage').innerHTML = "";
  }

  //Showing and hiding arrows and page numbers
  for (let i=1; i <= 17; i++) {
    if ((howManyProductsPages == 1) || (howManyProductsPages == 0)) {
      for (let i=1; i <= 17; i++) {
        document.getElementById('page' + i).style.display = "none";
      }
      document.getElementById('pageArrowRight').style.visibility = "hidden";
    }
    else if (i <= howManyProductsPages) {
      document.getElementById('page' + i).style.display = "inline-block";
      document.getElementById('pageArrowRight').style.visibility = "visible";
    }
    else {
      document.getElementById('page' + i).style.display = "none";
      document.getElementById('pageArrowRight').style.visibility = "visible";
    }
  }
  for (let i=2; i <= howManyProductsPages; i++) {
    document.getElementById('page' + i).style.opacity = "0.4";
  }
  document.getElementById('page1').style.opacity = "1";
  ////////////////////////////////////////////////////////////////////////







document.querySelector(".pageNumber__ul").addEventListener('click', function(event) {
  let display = [];
  let tabChosenColors = [];
  let arrayChosenSizes = [];
  let arrayChosenProducers = [];
  let arrayChosenCategories = [];
  let minPrice = Number(document.getElementById('minPrice').innerHTML);
  let maxPrice = Number(document.getElementById("maxPrice").innerHTML);
  let color = ["grey", "white", "red", "blue", "green"];
  let sizes = ["Small", "Medium", "Large"];
  let brands = ["Banshu Hamono", "Bower", "Braun", "Elevenplus", "Field", "Henry Wilson", "Menu"];
  let category = ["Living", "Dining", "Furniture", "Lighting", "Technics", "Accessories"];
  let zaraztonazwe = [document.getElementById("acceptedArrowFirst"), document.getElementById('acceptedArrowSecond'), document.getElementById('acceptedArrowThird'), document.getElementById('acceptedArrowFourth'), document.getElementById('acceptedArrowFifth'), document.getElementById('sizeSmall'), document.getElementById('sizeMedium'), document.getElementById('sizeLarge'), document.getElementById("brandsFirst"),
  document.getElementById("brandsSecond"), document.getElementById("brandsThird"), document.getElementById("brandsFourth"), document.getElementById("brandsFifth"), document.getElementById("brandsSixth"), document.getElementById("brandsSeventh"), document.getElementById("categorySecond"), document.getElementById("categoryThird"), document.getElementById("categoryFourth"), document.getElementById("categoryFifth"),
  document.getElementById("categorySixth"), document.getElementById("categorySeventh")];


  ////////////////////////////////////////////////////////////////////////
  //When you pick (click on) category or color or size etc. - these products are being added to displaying array
  for (let i=0; i < zaraztonazwe.length; i++) {
    if (i < color.length) {
      if (zaraztonazwe[i].classList.contains("isClicked")) {
        tabChosenColors.push(color[i]);
      }
    }
    else if (i < (color.length + sizes.length)) {
      if (zaraztonazwe[i].classList.contains("isClicked")) {
        arrayChosenSizes.push(sizes[i - color.length]);
      }
    }
    else if (i < (color.length + sizes.length + brands.length)) {
      if (zaraztonazwe[i].classList.contains("isClicked")) {
        arrayChosenProducers.push(brands[i - color.length - sizes.length]);
      }
    }
    else if (i < (color.length + sizes.length + brands.length + category.length)) {
      if (zaraztonazwe[i].classList.contains("isClicked")) {
        arrayChosenCategories.push(category[i - color.length - sizes.length - brands.length]);
      }
    }
  }

  if (document.getElementById('categoryFirst').classList.contains('isClicked')) {
    arrayChosenCategories.push("Living","Dining","Furniture","Lighting","Technics","Accessories");
  }

  for (let i=0; i < json.length; i++) {
    let productPrice = Number(json[i].price.replace("$", ""));
    let color = json[i].color;
    if ((minPrice < productPrice) && (maxPrice > productPrice) && ((tabChosenColors.includes(json[i].color)) || (tabChosenColors.length == 0)) && ((arrayChosenSizes.includes(json[i].size)) || (arrayChosenSizes.length == 0)) && ((arrayChosenProducers.includes(json[i].producer)) || (arrayChosenProducers.length == 0)) && ((arrayChosenCategories.includes(json[i].category)) || (arrayChosenCategories.length == 0))) {
      display.push(json[i]);
    }
  }
  ////////////////////////////////////////////////////////////////////////


  ////////////////////////////////////////////////////////////////////////
  //Sorting products alphabethic
  if ((document.getElementById('sortContener--zero').innerHTML == 'A-Z') || (document.getElementById('sortContener--zero').innerHTML == 'Z-A')) {
    display.sort(compareName);
    if (document.getElementById('sortContener--zero').innerHTML == 'Z-A') {
      display.reverse();
    }
  }
  //Sorting products by price
  if ((document.getElementById('sortContener--zero').innerHTML == 'Price asc') || (document.getElementById('sortContener--zero').innerHTML == 'Price des')) {
    let NEWdisplay = [...display];
    for (let i=0; i < NEWdisplay.length; i++) {
      let priceWithoutDolar = Number(NEWdisplay[i].price.replace("$", ""));
      NEWdisplay[i].price = priceWithoutDolar;
    }
    NEWdisplay.sort(comparePrice);
    for (let i=0; i < display.length; i++) {
      NEWdisplay[i].price = "$" + NEWdisplay[i].price;
    }
    display = [...NEWdisplay];
    if (document.getElementById('sortContener--zero').innerHTML == 'Price des') {
      display.reverse();
    }
  }
  ////////////////////////////////////////////////////////////////////////


  if ((display.length % 6) == 0) {
    var howManyProductsPages = Math.floor(display.length / 6);
  }
  else {
    var howManyProductsPages = Math.floor(display.length / 6) + 1;
  }


  if (event.target && event.target.nodeName == "LI") {
    var page = event.target.dataset.pagenumber;
    for (let i=0; i < howManyProductsPages; i++) {
      document.getElementById('page' + (i + 1)).style.opacity = "0.4";
    }
    document.getElementById('page' + page).style.opacity = "1";
    if (howManyProductsPages == page) {
      for (let i=0; i < 6 ;i++) {
        if (i < (display.length - 6*(howManyProductsPages - 1))) {
          document.getElementById('product' + (i + 1)).innerHTML = '<img class="product__img" src="" alt="" /><p class="product__new">New</p><button class="btn__favourite" type="button">Heart<span class="heart"></span></button><p class="product__name">' + display[i + 6*(page-1)].product + '</p><p class="product__price">' + display[i + 6*(page-1)].price + '</p><button class="btn__addToCart" type="button">Add to Cart</button>';
        }
        else {
          document.getElementById('product' + (i + 1)).style.display = "none";
        }
      }
    }
    else {
      for (let i=0; i < 6; i++) {
        document.getElementById('product' + (i + 1)).style.display = "list-item";
        document.getElementById('product' + (i + 1)).innerHTML = '<img class="product__img" src="" alt="" /><p class="product__new">New</p><button class="btn__favourite" type="button">Heart<span class="heart"></span></button><p class="product__name">' + display[i + 6*(page-1)].product + '</p><p class="product__price">' + display[i + 6*(page-1)].price + '</p><button class="btn__addToCart" type="button">Add to Cart</button>';
      }
    }

    if (page != howManyProductsPages) {
      document.getElementById('pageArrowRight').style.visibility = "visible";
    }
    else {
      document.getElementById('pageArrowRight').style.visibility = "hidden";
    }

    if (page == 1) {
      document.getElementById('pageArrowLeft').style.visibility = "hidden";
    }
    else {
      document.getElementById('pageArrowLeft').style.visibility = "visible";
    }


    document.getElementById('howManyresults').innerHTML = display.length + " results";
    document.getElementById('howManyProductsFound').innerHTML = display.length + " Products Found";
    let onPageProductsFrom = (page - 1)*6 + 1;
    if (page != howManyProductsPages) {
      let onPageProductsTo = page*6;
      let onPageProductsText = "Showing " + onPageProductsFrom + " - " + onPageProductsTo + " of ";
      document.getElementById('topShowingWhichElementsOnPage').innerHTML = onPageProductsText;
    }
    else {
      let onPageProductsTo = display.length;
      let onPageProductsText = "Showing " + onPageProductsFrom + " - " + onPageProductsTo + " of ";
      document.getElementById('topShowingWhichElementsOnPage').innerHTML = onPageProductsText;
    }

  }
});







//////////////////////////////////////////////////////////////////////////
//Displaying first 6 products
for (let i=0; i < 6; i++ ) {
  if (i < display.length) {
    document.getElementById('product' + (i + 1)).style.display = "list-item";
    document.getElementById('product' + (i + 1)).innerHTML = '<img class="product__img" src="" alt="" /><p class="product__new">New</p><button class="btn__favourite" type="button">Heart<span class="heart"></span></button><p class="product__name">' + display[i].product + '</p><p class="product__price">' + display[i].price + '</p><button class="btn__addToCart" type="button">Add to Cart</button>';
  }
  else {
    document.getElementById('product' + (i + 1)).style.display = "none";
  }
}
//////////////////////////////////////////////////////////////////////////




document.getElementById('pageArrowRight').onclick = function() {
  document.getElementById('pageArrowLeft').style.visibility = "visible";
  var pageND = document.querySelectorAll('.as');
  for (let i=0; i < howManyProductsPages; i++) {
    if (pageND[i].style.opacity == 1) {
      var highlightedPage = i + 1;
    }
  }

  if (highlightedPage == (howManyProductsPages - 1)) {
    document.getElementById('pageArrowRight').style.visibility = "hidden";
  }

  if (highlightedPage != howManyProductsPages) {
    for (let i=0; i < 6; i++ ) {
      if (display.length > (highlightedPage*6 + i)) {
        document.getElementById('product' + (i + 1)).style.display = "list-item";
        document.getElementById('product' + (i + 1)).innerHTML = '<img class="product__img" src="" alt="" /><p class="product__new">New</p><button class="btn__favourite" type="button">Heart<span class="heart"></span></button><p class="product__name">' + display[highlightedPage*6 + i].product + '</p><p class="product__price">' + display[highlightedPage*6 + i].price + '</p><button class="btn__addToCart" type="button">Add to Cart</button>';
      }
      else {
        document.getElementById('product' + (i + 1)).style.display = "none";
      }
    }

    for (let i=0; i < howManyProductsPages; i++) {
      document.getElementById('page' + (i + 1)).style.opacity = "0.4";
    }

    document.getElementById('page' + (highlightedPage + 1)).style.opacity = "1";
  }
}


document.getElementById('pageArrowLeft').onclick = function() {
  document.getElementById('pageArrowRight').style.visibility = "visible";
  var pageND = document.querySelectorAll('.as');
  for (let i=0; i < howManyProductsPages; i++) {
    if (pageND[i].style.opacity == 1) {
      var highlightedPage = i + 1;
    }
  }

  if (highlightedPage == 2) {
    document.getElementById('pageArrowLeft').style.visibility = "hidden";
  }

  if (highlightedPage != 1) {
    for (let i=0; i < 6; i++ ) {
        document.getElementById('product' + (i + 1)).style.display = "list-item";
        document.getElementById('product' + (i + 1)).innerHTML = '<img class="product__img" src="" alt="" /><p class="product__new">New</p><button class="btn__favourite" type="button">Heart<span class="heart"></span></button><p class="product__name">' + display[(highlightedPage-2)*6 + i].product + '</p><p class="product__price">' + display[(highlightedPage-2)*6 + i].price + '</p><button class="btn__addToCart" type="button">Add to Cart</button>';
    }

    for (let i=0; i < howManyProductsPages; i++) {
      document.getElementById('page' + (i + 1)).style.opacity = "0.4";
    }

    document.getElementById('page' + (highlightedPage - 1)).style.opacity = "1";
  }
}

document.getElementById('pageArrowLeft').style.visibility = "hidden";

}










window.onload = function() {
responsiveSlider();
filter();
}
