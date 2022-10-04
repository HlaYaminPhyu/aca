import './style.scss';
import { removeLoader, showLoader } from './js/loader';

let items=[];
let itemRow=document.querySelector(".item-row");
let cardBtn=document.querySelector(".cart-btn");

showLoader()
fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
				items=json
				items.forEach(item=>{
					let itemDiv=document.createElement('div');
					itemDiv.classList.add("col-md-6","col-lg-4");
					itemDiv.innerHTML=`
					<div class="card item-card">
					  <div class=" card-body d-flex flex-column">
					  <div class=" mb-3">
						<img src="${item.image}" class=" item-img" alt="">
					</div>
						<p class=" card-title fw-bold text-truncate">${item.title}</p>
						<p class=" card-text small">
						${item.description.substring(0,100)}
						</p>
						<div class=" d-flex mt-auto justify-content-between align-items-center">
						<p class="fw-bold mb-0">$<span>100</span></p>
						<button class=" btn btn-outline-primary add-cart">
						<i class="bi bi-cart-plus pe-none"></i>Add Cart
						</button>
						</div>
					  </div>
					</div>`;
					itemRow.append(itemDiv)
				})
				console.log(json)
				removeLoader()
			})

		// window.addToCart=event=>{
		// 		console.log('add-to cart',event.target)
		// 	}
itemRow.addEventListener("click",e =>{
	if(e.target.classList.contains('add-cart')){
		
		let currentItemCard=e.target.closest('.item-card');
		let currentImg=currentItemCard.querySelector('.item-img');
		let newImg=new Image();
		newImg.src=currentImg.src;
		
		newImg.style.position="fixed";
		newImg.style.transition=1+'s';
		newImg.style.height=100+"px";
		newImg.style.zIndex=2000;
		newImg.style.top=currentImg.getBoundingClientRect().top+"px";
		newImg.style.left=currentImg.getBoundingClientRect().left+"px";

		document.body.append(newImg)
		setTimeout(_=>{
			newImg.style.top=(cardBtn.getBoundingClientRect().top+20)+"px";
			newImg.style.left=(cardBtn.getBoundingClientRect().left+30)+"px";
			newImg.style.height=0+"px";
			newImg.style.transform="rotate(360deg)"
		},10)
		setTimeout(_=>{
			cardBtn.classList.add("animate__tada");
			cardBtn.addEventListener("animationend",_=>cardBtn.classList.remove("animate__tada"));
		},800)
		console.log(newImg);
		
	};
})

// const addCartBtn=document.querySelectorAll(".add-carts");
// addCartBtn.forEach(addCartBtn=>{
// 	addCartBtn.addEventListener('click',function(){
// 		console.log('add-to-cart');
// 	})
// })