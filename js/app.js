// Navigation-bar
const burgerBtn = document.querySelector(".fa-bars");
const navMenu = document.querySelector(".nav-menu");

burgerBtn.addEventListener("click", function () {
    navMenu.classList.toggle("show-nav-menu");
})

// Pricing Button
const monthBtn = document.querySelector(".btn-month");
const yearBtn = document.querySelector(".btn-year");
const pricingCard = document.querySelectorAll(".pricing-card-heading");

yearBtn.addEventListener("click", function () {
    pricingCard[0].children[0].innerHTML = `<h1>$28 <span>/Year</span></h1>`;
    pricingCard[1].children[0].innerHTML = `<h1>$399 <span>/Year</span></h1>`;
    yearBtn.classList.add("btn-pricing-active");
    monthBtn.classList.remove("btn-pricing-active");
})
monthBtn.addEventListener("click", function () {
    pricingCard[0].children[0].innerHTML = `<h1>$0 <span>/Month</span></h1>`;
    pricingCard[1].children[0].innerHTML = `<h1>$28 <span>/Month</span></h1>`;
    monthBtn.classList.add("btn-pricing-active");
    yearBtn.classList.remove("btn-pricing-active");
})

// Clients Carousel
const clientHeading = document.getElementById("client-heading");
const clientDetails = document.getElementById("client-details");
const clientName = document.getElementById("client-name");
const ClientTitle = document.getElementById("client-title");
const image = document.getElementById("slider");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

// General:
const images = ["./images/people1.png", "./images/people2.png", "./images/people3.png", "./images/people4.png", "./images/people5.png", "./images/people6.png", "./images/people7.png", "./images/people8.png"];
const headings = [
    "User friendly & Customizable",
    "User friendly & Customizable One",
    "User friendly & Customizable Two",
    "User friendly & Customizable Three",
    "User friendly & Customizable Four",
    "User friendly & Customizable Five",
    "User friendly & Customizable Six",
    "User friendly & Customizable Seven",
    "User friendly & Customizable Eight"
];
const clientsDetails = [
    "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
    "Two to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
    "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
    "Two to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
    "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
    "Two to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
    "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
    "Two to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring."
];
const clientNames = [
    "Zoltan Nemeth",
    "Sufian Sadak",
    "Syful Islam",
    "Tawhid Ahmed",
    "Taifur Rahman",
    "Syed Hamim",
    "Nurul Anwar",
    "Rohan Islam"
];
const clientTitles = [
    "CEO of Pixler Lab",
    "CEO of ColorsQ",
    "Senior Software Engineer of Google",
    "Owner of Malon Group",
    "Marketing Manager of Arla",
    "Business Analyst of Microsft",
    "Data Analyst of Walmart",
    "CFO of Uniliver"
]

let count = 0;

// Event Listener:
next.addEventListener("click", function () {
    count++;
    if (count > images.length - 1) {
        count = 0;
    }
    image.src = images[count];
    clientHeading.innerText = headings[count];
    clientDetails.innerText = clientsDetails[count];
    clientName.innerText = clientNames[count];
    ClientTitle.innerText = clientTitles[count];
});

prev.addEventListener("click", function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    image.src = images[count];
    clientHeading.innerText = headings[count];
    clientDetails.innerText = clientsDetails[count];
    clientName.innerText = clientNames[count];
    ClientTitle.innerText = clientTitles[count];
})

// FAQ
const items = document.querySelectorAll(".faq-cards");

items.forEach(element => {
    element.addEventListener("click", function () {
        // I create it with my own idea:
        for (let i of items) i.children[1].classList.remove("show");
        // removeClasses();
        element.children[1].classList.add("show");

        element.children[0].children[1].style.display = "none";

        for (let i of items) i.children[0].children[2].style.display = "none";
        element.children[0].children[2].style.display = "block";

        for (let i of items) i.children[0].children[1].style.display = "block";
        element.children[0].children[1].style.display = "none";
    })
})