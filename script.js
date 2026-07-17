// ==============================
// SHRI RAM NURSERY & GARDEN
// Premium JavaScript
// ==============================

// Sticky Header
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#ffffff";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";
    } else {
        header.style.background = "#ffffff";
        header.style.boxShadow = "none";
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });

    });

});

// Counter Animation

const counters = document.querySelectorAll(".stats h2");

const runCounter = () => {

    counters.forEach(counter => {

        const target = parseInt(counter.innerText);

        let count = 0;

        const speed = target / 150;

        const update = () => {

            count += speed;

            if(count < target){

                counter.innerText = Math.floor(count)+"+";

                requestAnimationFrame(update);

            }else{

                counter.innerText = target+"+";

            }

        }

        update();

    });

}

const observer = new IntersectionObserver(entries=>{

    if(entries[0].isIntersecting){

        runCounter();

        observer.disconnect();

    }

});

observer.observe(document.querySelector(".stats"));

// Fade Animation

const sections = document.querySelectorAll("section");

const reveal = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

sections.forEach(sec=>{

sec.style.opacity="0";

sec.style.transform="translateY(70px)";

sec.style.transition="1s";

reveal.observe(sec);

});

// Back To Top Button

const topBtn = document.createElement("button");

topBtn.innerHTML="↑";

topBtn.style.position="fixed";
topBtn.style.bottom="100px";
topBtn.style.right="20px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#0b8b39";
topBtn.style.color="#fff";
topBtn.style.fontSize="25px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="999";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// Current Year

const footer = document.querySelector("footer");

const year = new Date().getFullYear();

footer.innerHTML = footer.innerHTML.replace("2026", year);

console.log("Shri Ram Nursery Website Loaded Successfully.");
