import { posts } from "/scripts/data.js";

console.log(posts);

const mount = document.querySelector('[data-mount="recent"]');
console.log(mount);

const recent = posts.filter(p => p.category === "Recent");

console.log(recent);

const [featured, ...rest] = recent;

mount.innerHTML = `
  <article class="featured">
    <img src="${featured.image}" alt="${featured.alt}" loading="lazy">
    <h3 class="card__title">${featured.title}</h3>
    <p class="card__excerpt">${featured.excerpt}</p>
  </article>

  ${rest
    .slice(0, 3)
    .map(
      (p, i) => `
      <article class="small small-${i + 1}">
        <img src="${p.image}" alt="${p.alt}" loading="lazy">
        <h3 class="card__title">${p.title}</h3>
        <p class="card__excerpt">${p.excerpt}</p>
      </article>
    `
    )
    .join("")}
`;