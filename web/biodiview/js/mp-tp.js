// get marker button
const markRT = document.getElementById("p-rt");
const markDT = document.getElementById("p-dt");
const markTB = document.getElementById("p-tb");
const markGP = document.getElementById("p-gp");
const markPP = document.getElementById("p-pp");
const markBL = document.getElementById("p-bl");
const markST = document.getElementById("p-st");
const markSK = document.getElementById("p-sk");
const markHS = document.getElementById("p-hs");
const markPB = document.getElementById("p-pb");
const markWT = document.getElementById("p-wt");
const markRR = document.getElementById("p-rr");
const markNW = document.getElementById("p-nw");
const markPW = document.getElementById("p-pw");
const markCK = document.getElementById("p-ck");
const markPJ = document.getElementById("p-pj");

// get btn tugas
const btnTugas = document.getElementById("btn-tugas");
const confirmTugas = document.getElementById("btn-ok");

// get box id
const boxRT = document.getElementById("b-rt");
const boxDT = document.getElementById("b-dt");
const boxTB = document.getElementById("b-tb");
const boxGP = document.getElementById("b-gp");
const boxPP = document.getElementById("b-pp");
const boxBL = document.getElementById("b-bl");
const boxST = document.getElementById("b-st");
const boxSK = document.getElementById("b-sk");
const boxHS = document.getElementById("b-hs");
const boxPB = document.getElementById("b-pb");
const boxWT = document.getElementById("b-wt");
const boxRR = document.getElementById("b-rr");
const boxNW = document.getElementById("b-nw");
const boxPW = document.getElementById("b-pw");
const boxCK = document.getElementById("b-ck");
const boxPJ = document.getElementById("b-pj");

const boxTugas = document.getElementById("box-tugas");

// get close button
const clsBtn = document.getElementById("btn-close");

// get popup id
const popup = document.getElementById("popup");

// add event
markRT.addEventListener("click", () => {
	boxRT.classList.remove("hidden");
	popup.classList.remove("hidden");
});

markDT.addEventListener("click", () => {
	boxDT.classList.remove("hidden");
	popup.classList.remove("hidden");
});
markTB.addEventListener("click", () => {
	boxTB.classList.remove("hidden");
	popup.classList.remove("hidden");
});
markGP.addEventListener("click", () => {
	boxGP.classList.remove("hidden");
	popup.classList.remove("hidden");
});
markPP.addEventListener("click", () => {
	boxPP.classList.remove("hidden");
	popup.classList.remove("hidden");
});
markBL.addEventListener("click", () => {
	boxBL.classList.remove("hidden");
	popup.classList.remove("hidden");
});
markST.addEventListener("click", () => {
	boxST.classList.remove("hidden");
	popup.classList.remove("hidden");
});
markSK.addEventListener("click", () => {
	boxSK.classList.remove("hidden");
	popup.classList.remove("hidden");
});
markHS.addEventListener("click", () => {
	boxHS.classList.remove("hidden");
	popup.classList.remove("hidden");
});
markPB.addEventListener("click", () => {
	boxPB.classList.remove("hidden");
	popup.classList.remove("hidden");
});
markWT.addEventListener("click", () => {
	boxWT.classList.remove("hidden");
	popup.classList.remove("hidden");
});
markRR.addEventListener("click", () => {
	boxRR.classList.remove("hidden");
	popup.classList.remove("hidden");
});
markNW.addEventListener("click", () => {
	boxNW.classList.remove("hidden");
	popup.classList.remove("hidden");
});
markPW.addEventListener("click", () => {
	boxPW.classList.remove("hidden");
	popup.classList.remove("hidden");
});
markCK.addEventListener("click", () => {
	boxCK.classList.remove("hidden");
	popup.classList.remove("hidden");
});
markPJ.addEventListener("click", () => {
	boxPJ.classList.remove("hidden");
	popup.classList.remove("hidden");
});

btnTugas.addEventListener("click", () => {
	boxTugas.classList.remove("hidden");
	popup.classList.remove("hidden");
	clsBtn.classList.add("hidden");
});

clsBtn.addEventListener("click", () => {
	boxRT.classList.add("hidden");
	boxDT.classList.add("hidden");
	boxTB.classList.add("hidden");
	boxGP.classList.add("hidden");
	boxPP.classList.add("hidden");
	boxBL.classList.add("hidden");
	boxST.classList.add("hidden");
	boxSK.classList.add("hidden");
	boxHS.classList.add("hidden");
	boxPB.classList.add("hidden");
	boxWT.classList.add("hidden");
	boxRR.classList.add("hidden");
	boxNW.classList.add("hidden");
	boxPW.classList.add("hidden");
	boxCK.classList.add("hidden");
	boxPJ.classList.add("hidden");

	popup.classList.add("hidden");
});

confirmTugas.addEventListener("click", () => {
	boxTugas.classList.add("hidden");
	popup.classList.add("hidden");
	clsBtn.classList.remove("hidden");
});
