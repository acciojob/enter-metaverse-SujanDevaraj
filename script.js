//your JS code here. If required.

	const para=document.getElementById("status");
	const btn=document.getElementById("enterBtn");

btn.addEventListener('click',()=>{
	let h1= document.createElement("h1");
	h1.innerText="Entered Metaverse";
	document.body.insertBefore(h1,para);
	para.remove();
	
})