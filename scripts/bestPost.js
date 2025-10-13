import { posts } from "../scripts/data.js";


const mount = document.querySelector('[data-mount="best"]');

const best = posts.filter(p => p.category === "Best");
console.log(best);


mount.innerHTML = `
<article class ="best-cards">
<img src="${best[0].image}" alt="${best[0].alt}" loading="lazy">
<div class = "text-container">
<div class="head-body">
<h3 class="card__title">${best[0].title}</h3>
<p class="card__excerpt">${best[0].excerpt}</p>
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
<article class ="best-cards">
<img src="${best[1].image}" alt="${best[1].alt}" loading="lazy">
<div class = "text-container">
<div class="head-body">
<h3 class="card__title">${best[1].title}</h3>
<p class="card__excerpt">${best[1].excerpt}</p>
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
<article class ="best-cards">
<img src="${best[2].image}" alt="${best[2].alt}" loading="lazy">
<div class = "text-container">
<div class="head-body">
<h3 class="card__title">${best[2].title}</h3>
<p class="card__excerpt">${best[2].excerpt}</p>
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


