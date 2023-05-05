import page from "../node_modules/page/page.mjs";
console.log("test")
const main = document.querySelector("main");


page("/", showHome);
page("/catalog", showCatalog);
page("/about", showAbout);

page.start();

function showHome(ctx) {
    console.log(ctx)
    const content = document.createElement("h3");
    content.textContent = "Home";
    main.replaceChildren(content);
}

function showCatalog(ctx) {
    console.log(ctx)
    const content = document.createElement("h3");
    content.textContent = "Catalog";
    main.replaceChildren(content);
}

function showAbout(ctx) {
    console.log(ctx)
    const content = document.createElement("h3");
    content.textContent = "About";
    main.replaceChildren(content);
}
function showNotFound(ctx) {
    console.log(ctx)
    const content = document.createElement("h3");
    content.textContent = "404 not found";
    main.replaceChildren(content);
}
