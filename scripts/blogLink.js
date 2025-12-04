import { posts } from "../scripts/data.js";

const RECENT_CATEGORY = "Recent";
const SIDEBAR_LIST_SELECTOR = ".sidebar__list";

function renderRecentPosts() {
  const list = document.querySelector(SIDEBAR_LIST_SELECTOR);
  if (!list) return;

  const recentPosts = posts
    .filter((post) => post.category === RECENT_CATEGORY)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);
  const fragment = document.createDocumentFragment();

  recentPosts.forEach((post) => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = post.url;
    link.textContent = post.title;
    li.append(link);
    fragment.append(li);
  });

  list.innerHTML = "";
  list.append(fragment);
}

document.addEventListener("DOMContentLoaded", renderRecentPosts);
