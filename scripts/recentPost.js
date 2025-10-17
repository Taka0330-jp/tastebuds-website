import { posts } from "/scripts/data.js";


const recentGrid = document.querySelector('.recent-grid');
const tplFeatured = document.getElementById('tplFeatured');
const tplSmall = document.getElementById("tplSmall");


const recent = posts.filter(p => p.category === "Recent");


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

{
  const frag = tplFeatured.content.cloneNode(true);
  recentGrid.appendChild(fillCard(frag, featured));
}

rest.slice(0, 3).forEach((p, i) => {
  const frag = tplSmall.content.cloneNode(true);
  const filled = fillCard(frag, p);

  const article = filled.querySelector("article.small");
  article.classList.add(`small-${i + 1}`);

  recentGrid.appendChild(filled);
});
