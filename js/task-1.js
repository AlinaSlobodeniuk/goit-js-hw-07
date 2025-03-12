const categories = document.querySelectorAll("#categories");
const els = document.querySelectorAll(".item");

console.log(`Numbers of categories: ${els.length}`);

els.forEach(el => {

    const title = el.querySelector("h2").textContent;

    const elements = el.querySelectorAll("ul li").length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${elements}`);
    
});