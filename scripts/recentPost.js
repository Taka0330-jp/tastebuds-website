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
    <div class ="text-container">
      <div class="head-body">
        <h3 class="card__title">${featured.title}</h3>
        <p class="card__excerpt">${featured.excerpt}</p>
      </div>
        <div class="link">
                    <div class="icons">
                      <a href="#"
                                 class="tiktok-link" >
                                <img src="../Assets/icons/TikTok.svg"
                                     alt="TikTok Icon"
                                     class="icon">
                              </a>
                      <a href="#"
                                 class="tiktok-link" >
                                <img src="../Assets/icons/YouTube.svg"
                                     alt="YouTube Icon"
                                     class="icon">
                              </a>
                      <a href="#"
                                 class="tiktok-link" >
                                <img src="../Assets/icons/Instagram Circle.svg"
                                     alt="Instagram Icon"
                                     class="icon">
                              </a>
                    </div>
                              <div class="read-btn"><a href="home.html"><span>Read</span></a></div>
                  </div>
    </div>
  </article>

  ${rest
    .slice(0, 3)
    .map(
      (p, i) => `
      <article class="small small-${i + 1}">
        <img src="${p.image}" alt="${p.alt}" loading="lazy">
        <div class ="text-container">
          <div class="head-body">
            <h3 class="card__title">${p.title}</h3>
            <p class="card__excerpt">${p.excerpt}</p>
          </div>
                  <div class="link">
                    <div class="icons">
                      <a href="#"
                                 class="tiktok-link" >
                                <img src="../Assets/icons/TikTok.svg"
                                     alt="TikTok Icon"
                                     class="icon">
                              </a>
                      <a href="#"
                                 class="tiktok-link" >
                                <img src="../Assets/icons/YouTube.svg"
                                     alt="YouTube Icon"
                                     class="icon">
                              </a>
                      <a href="#"
                                 class="tiktok-link" >
                                <img src="../Assets/icons/Instagram Circle.svg"
                                     alt="Instagram Icon"
                                     class="icon">
                              </a>
                    </div>
                              <div class="read-btn"><a href="home.html"><span>Read</span></a></div>
                  </div>
        </div>
      </article>
    `
    )
    .join("")}
`;