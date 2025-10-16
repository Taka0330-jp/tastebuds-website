import { posts } from "../scripts/data.js";

const tagList = document.getElementById('tagList');
const cardGrid = document.getElementById('cardGrid');
const cardTpl = document.getElementById('cardTemplate');
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

// State
// let activeTag = "All";
// let query = "";

let state = {
    activeTag: 'All',
    query:""
}

// 全記事データ（posts）からタグ名だけを抜き出して、重複を除き、「All」を先頭に追加した配列を作成
const allTags = ["All", ...new Set(posts.flatMap(p => p.tag))];


function renderTagBtn(){
    tagList.innerHTML = "";
    allTags.forEach(tag => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.className = "tag-btn" + (tag === state.activeTag ? " is-active" : "");
    btn.textContent = tag;
    btn.dataset.tag = tag;
    btn.addEventListener('click', ()=>{
        state.activeTag = tag;
        renderTagBtn();
        renderList();
    });
    li.appendChild(btn);
    tagList.appendChild(li);
    });
};

function createCard(p) {
    const node = cardTpl.content.cloneNode(true);

    node.querySelector(".js-title").textContent = p.title;
    node.querySelector(".js-img").src = p.image;
    node.querySelector(".js-img").alt = p.alt || p.title;
    node.querySelector(".js-excerpt").textContent = p.excerpt;
    node.querySelector(".js-location").textContent = p.location || "";
    node.querySelector(".js-date").textContent = p.date || "";
    node.querySelector(".js-url").href = p.url || "#";

    return node;
    
};


function renderList(){
    const q = (state.query || "").trim().toLocaleLowerCase();
    const filtered = posts.filter(p =>{
        const tagOk = state.activeTag === "All" ? true : (p.tag ?? []).includes(state.activeTag);
        const haystack =[
            p.title, p.excerpt, p.location, (p.tag ?? []).join("")
        ].filter(Boolean).join(" ").toLocaleLowerCase();
        const qOk = q ? haystack.includes(q) : true;
        return tagOk && qOk;
    })
    .sort((a,b) => (b.date || "").localeCompare(a.date || ""));

    cardGrid.innerHTML = "";
    if (filtered.length === 0){
    const empty = document.createElement("p");
    empty.className = "empty-msg";
    empty.textContent = `No results${q ? ` for “${state.query}”` : ""}.`;
    cardGrid.appendChild(empty);
    return;
    }


  const frag = document.createDocumentFragment();
  filtered.forEach(p => frag.appendChild(createCard(p)));
  cardGrid.appendChild(frag);
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  state.query = searchInput.value || "";
  renderList();
});


renderTagBtn();
renderList();
