// get marker button
const markSunda = document.getElementById("flora1");
const markWallace = document.getElementById("flora2");
const markSahul = document.getElementById("flora3");
const markTugas = document.getElementById("btn-tugas");
const confirmTugas = document.getElementById("btn-ok");

// get box id
const boxSunda = document.getElementById("b-sunda");
const boxWallace = document.getElementById("b-wallace");
const boxSahul = document.getElementById("b-sahul");
const boxTugas = document.getElementById("box-tugas");

// get close button
const clsBtn = document.getElementById("btn-close");

// get popup id
const popup = document.getElementById("popup");

// add event
markSunda.addEventListener("click", () => {
	boxSunda.classList.remove("hidden");
	popup.classList.remove("hidden");
});
markWallace.addEventListener("click", () => {
	boxWallace.classList.remove("hidden");
	popup.classList.remove("hidden");
});
markSahul.addEventListener("click", () => {
	boxSahul.classList.remove("hidden");
	popup.classList.remove("hidden");
});
markTugas.addEventListener("click", () => {
	boxTugas.classList.remove("hidden");
	popup.classList.remove("hidden");
	clsBtn.classList.add("hidden");
});

clsBtn.addEventListener("click", () => {
	boxSunda.classList.add("hidden");
	boxWallace.classList.add("hidden");
	boxSahul.classList.add("hidden");
	boxTugas.classList.add("hidden");

	popup.classList.add("hidden");
});

confirmTugas.addEventListener("click", () => {
	boxTugas.classList.add("hidden");
	popup.classList.add("hidden");
	clsBtn.classList.remove("hidden");
});
