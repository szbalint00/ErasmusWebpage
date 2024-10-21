var divs = document.querySelectorAll("div.img-container");
var divs2 = document.querySelectorAll("div.scroll-container");
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");


divs.forEach((div) => {
    div.onclick = function() {
        img = div.querySelector("img");
        modal.style.display = "block";
        modalImg.src = img.src;
        modal.onclick = function() {
        modal.style.display = "none";
    } 
    }
    console.log("yes");
});

divs2.forEach((slider)=> {
	let isDown = false;
	let startX;
	let scrollLeft;

	slider.addEventListener('mousedown', (e) => {
	  isDown = true;
	  slider.classList.add('active');
	  startX = e.pageX - slider.offsetLeft;
	  scrollLeft = slider.scrollLeft;
	});
	slider.addEventListener('mouseleave', () => {
	  isDown = false;
	  slider.classList.remove('active');
	});
	slider.addEventListener('mouseup', () => {
	  isDown = false;
	  slider.classList.remove('active');
	});
	slider.addEventListener('mousemove', (e) => {
	  if(!isDown) return;
	  e.preventDefault();
	  const x = e.pageX - slider.offsetLeft;
	  const walk = (x - startX) * 1.5; //scroll-fast
	  slider.scrollLeft = scrollLeft - walk;
	  console.log(walk);
	});
});
