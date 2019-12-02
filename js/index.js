const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//const navigation = document.getElementsByTagName("a")
const navi = document.querySelectorAll('a');
navi[0].textContent= siteContent["nav"]["nav-item-1"];
navi[1].textContent= siteContent["nav"]["nav-item-2"];
navi[2].textContent= siteContent["nav"]["nav-item-3"];
navi[3].textContent= siteContent["nav"]["nav-item-4"];
navi[4].textContent= siteContent["nav"]["nav-item-5"];
navi[5].textContent= siteContent["nav"]["nav-item-6"];
//add nav items

navi.forEach(navi => {
navi.style.color = "green";
}) //turn nav links green

const newNav = document.createElement('a');
newNav.textContent= "Other"
const parent = document.querySelector('nav');
parent.append(newNav)

const newNav2 = document.createElement('a');
newNav2.textContent= "More"
const parent2 = document.querySelector('nav');
parent2.prepend(newNav2)//add items to nav

newNav.style.color = "green";
newNav2.style.color = "green";



//add items to nav

const title = document.querySelector('h1');
title.textContent =  siteContent.cta.h1; //add h1 text
//title.style.alignContent = center;

const buttonText = document.querySelector('button');
buttonText.textContent = "Get Started"; //add button text

let codePic = document.getElementById("cta-img");
codePic.setAttribute('src', siteContent["cta"]["img-src"]) ;//add code snippet pic

const featureTitle = document.querySelectorAll('.top-content, h4')
const featureText = document.querySelectorAll('.top-content, p')
featureTitle[1].textContent = siteContent["main-content"]["features-h4"];

//const featureText = document.querySelectorAll('.top-content, .text-content ,p')
featureText[1].textContent = siteContent["main-content"]["features-content"];

//add features section "main-content/features"

featureTitle[2].textContent = siteContent["main-content"]["about-h4"];


featureText[2].textContent = siteContent["main-content"]["about-content"];

//add about section "main-content/about"


//add banner img "main-content/ middle-img-src"

let bannerPic = document.getElementById("middle-img");
bannerPic.setAttribute('src', siteContent["main-content"]["middle-img-src"]) ;


//add services section "main-content/services"
const bottomTitle = document.querySelectorAll('.bottom-content, h4')
const bottomText = document.querySelectorAll('.bottom-content, p')


bottomTitle[3].textContent = siteContent["main-content"]["services-h4"];
bottomText[3].textContent = siteContent["main-content"]["services-content"];

//add product section "main-content/product"
bottomTitle[4].textContent = siteContent["main-content"]["product-h4"];
bottomText[4].textContent = siteContent["main-content"]["product-content"];

//add vision section "main content/vision"

bottomTitle[5].textContent = siteContent["main-content"]["vision-h4"];
bottomText[5].textContent = siteContent["main-content"]["vision-content"];
//add contact section "contact"

const contact = document.querySelector(".contact h4")

contact.textContent = siteContent["contact"]["contact-h4"];

const contactInfo = document.querySelectorAll(".contact p")


contactInfo[0].textContent = "123 Way 456 Street";
contactInfo[1].textContent = "Somewhere, USA";
contactInfo[2].textContent = siteContent["contact"]["phone"];

contactInfo[3].textContent = siteContent["contact"]["email"];



//add copyright footer "footer"
const foot = document.querySelector('footer')
foot.textContent = siteContent["footer"]["copyright"];
