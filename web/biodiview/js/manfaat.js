//get black id
bgBlack = document.getElementById("bg-dark");

// get box id
box1 = document.getElementById("box1");
box2 = document.getElementById("box2");
box3 = document.getElementById("box3");
box4 = document.getElementById("box4");
box5 = document.getElementById("box5");
box6 = document.getElementById("box6");
box7 = document.getElementById("box7");
boxTugas = document.getElementById("box-tugas");

//  get option
opsi1 = document.getElementById("opsi1");
opsi2 = document.getElementById("opsi2");
opsi3 = document.getElementById("opsi3");
opsi4 = document.getElementById("opsi4");
opsi5 = document.getElementById("opsi5");
opsi6 = document.getElementById("opsi6");
opsi7 = document.getElementById("opsi7");
tugas = document.getElementById("btn-tugas");
oke = document.getElementById("ok");

// option click
opsi1.onclick = () => {
	bgBlack.classList.remove("hidden");
	box1.classList.remove("hidden");
};
opsi2.onclick = () => {
	bgBlack.classList.remove("hidden");
	box2.classList.remove("hidden");
};
opsi3.onclick = () => {
	bgBlack.classList.remove("hidden");
	box3.classList.remove("hidden");
};
opsi4.onclick = () => {
	bgBlack.classList.remove("hidden");
	box4.classList.remove("hidden");
};
opsi5.onclick = () => {
	bgBlack.classList.remove("hidden");
	box5.classList.remove("hidden");
};
opsi6.onclick = () => {
	bgBlack.classList.remove("hidden");
	box6.classList.remove("hidden");
};
opsi7.onclick = () => {
	bgBlack.classList.remove("hidden");
	box7.classList.remove("hidden");
};
tugas.onclick = () => {
	bgBlack.classList.remove("hidden");
	boxTugas.classList.remove("hidden");
	document.querySelectorAll(".btn-close")[7].classList.add("hidden");
};

// close click
document.querySelectorAll(".btn-close")[0].onclick = () => {
	bgBlack.classList.add("hidden");
	box1.classList.add("hidden");
};
document.querySelectorAll(".btn-close")[1].onclick = () => {
	bgBlack.classList.add("hidden");
	box2.classList.add("hidden");
};
document.querySelectorAll(".btn-close")[2].onclick = () => {
	bgBlack.classList.add("hidden");
	box3.classList.add("hidden");
};
document.querySelectorAll(".btn-close")[3].onclick = () => {
	bgBlack.classList.add("hidden");
	box4.classList.add("hidden");
};
document.querySelectorAll(".btn-close")[4].onclick = () => {
	bgBlack.classList.add("hidden");
	box5.classList.add("hidden");
};
document.querySelectorAll(".btn-close")[5].onclick = () => {
	bgBlack.classList.add("hidden");
	box6.classList.add("hidden");
};
document.querySelectorAll(".btn-close")[6].onclick = () => {
	bgBlack.classList.add("hidden");
	box7.classList.add("hidden");
};
oke.onclick = () => {
	bgBlack.classList.add("hidden");
	boxTugas.classList.add("hidden");
};
