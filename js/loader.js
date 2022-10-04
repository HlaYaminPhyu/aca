export function showLoader(){
	const loader=document.createElement('div');
	loader.classList.add('loader','animate__animated','animate__fadeIn');
	loader.innerHTML=`<div style=" background-color:#ffffff80" class=" min-vh-100 d-flex justify-content-center align-items-center fixed-top">
	<div class="spinner-border text-primary data-loadet" role="status">
	  <span class="visually-hidden">Loading...</span>
	</div>
  </div>`;
  document.body.append(loader);
}

export function removeLoader(){
	const selectCurrentLoader=document.querySelector('.loader');
		selectCurrentLoader.classList.replace("animate__fadeIn","animate__fadeOut");
		selectCurrentLoader.addEventListener('animationend',_=>selectCurrentLoader.remove());
}
// showLoader()
// setTimeout(_=>removeLoader(),3000);