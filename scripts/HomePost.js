import { posts } from "/scripts/data.js";

//Get DOM Elements

const recentGrid = document.querySelector('.recent-grid');
const tplFeatured = document.getElementById('tplFeatured');
const tplSmall = document.getElementById("tplSmall");
const bestTpl = document.getElementById("tplBest");
const bestGrid = document.querySelector(".best-grid");

//Filtered by Category

const recent = posts.filter(p => p.category === "Recent");
const bestPosts = posts.filter(bp => bp.category === "Best");

//Split the array of Recent items into featured for the first item and rest for the subsequent items.

const [featured, ...rest] = recent;

function fillCard(fragment, p){

  fragment.querySelector(".js-title").textContent = p.title;
  fragment.querySelector(".js-img").src = p.image;
  fragment.querySelector(".js-img").alt = p.alt || p.title;
  fragment.querySelector(".js-excerpt").textContent = p.excerpt;
  fragment.querySelector(".js-location").textContent = p.location || "";
  fragment.querySelector(".js-date").textContent = p.date || "";
  fragment.querySelector(".js-url").href = p.url || "#";

  return fragment;
}

//Recent Featured

  const frag = tplFeatured.content.cloneNode(true);
  recentGrid.appendChild(fillCard(frag, featured));

//Recent Small

rest.slice(0, 3).forEach((p, i) => {
  const frag = tplSmall.content.cloneNode(true);
  const filled = fillCard(frag, p);

  const article = filled.querySelector("article.small");
  article.classList.add(`small-${i + 1}`);

  recentGrid.appendChild(filled);
});

//Best Posts
bestPosts.forEach((bp) =>{
  const frag = bestTpl.content.cloneNode(true);
  const filled = fillCard(frag, bp);
  bestGrid.appendChild(filled)
});
