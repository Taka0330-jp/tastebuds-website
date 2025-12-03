const items = document.querySelectorAll(".observe");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) =>{
        entry.target.classList.toggle("action", entry.isIntersecting)
    });
},{
    threshold: 0.1
});

items.forEach((item) =>{
    observer.observe(item)
});

console.log(items);
