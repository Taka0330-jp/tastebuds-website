import { listComments, addComment } from "/scripts/supabase.js";

const POST_ID = location.pathname;


const cmtList = document.getElementById('commentList');
const cmtTpl = document.getElementById('commentItemTpl');
const cmtForm = document.getElementById('commentForm');

function formatDate(iso){
    const d = new Date(iso);
    const yyyy = d.getFullYear();

    // getMonth() returns a zero-based month (January = 0, December = 11), so add 1.
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
}
window.addEventListener("DOMContentLoaded", init);

async function init() {
    try{
        const rows = await listComments(POST_ID);
        renderComments(rows);
    } catch(err){
        console.error("Failed to load comments:", err);
        cmtList.textContent = "Failed to load comments."
    }
}


function renderComments( rows = []){
    cmtList.innerHTML = "";

    if(!rows.length) return;
    const frag = document.createDocumentFragment();

    for(const row of rows){
        const node = cmtTpl.content.cloneNode(true);

    node.querySelector(".cmt__name").textContent = row.author_name || "Anonymous";
    node.querySelector(".cmt__body").textContent = row.body || "";
    const time = node.querySelector(".cmt__date");
    time.textContent = formatDate(row.created_at);
    time.setAttribute("datetime", row.created_at);

    frag.appendChild(node);
    }

cmtList.appendChild(frag);

}

cmtForm.addEventListener("submit", onsubmit);

async function onsubmit(e) {
    e.preventDefault();

    const formData = new FormData(cmtForm);
    const authorName =(formData.get("name") || "").trim();
    const body = (formData.get("comment") || "").trim();

    if(!body) return;

    const cmtBtn = cmtForm.querySelector("button[type='submit']");
    cmtBtn.disabled = true;
    
    try{
        await addComment({postId: POST_ID, authorName, body});

        cmtForm.reset();

        const rows = await listComments(POST_ID);
        renderComments(rows);
    } catch (err){
        console.error("Failed to add comment:", err);
        alert("Failed to add comment. Please try again.")
        
    } finally{
        cmtBtn.disabled = false;
    }
    
}