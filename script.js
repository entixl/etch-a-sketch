const gridSection = document.querySelector(".grid-section");
for (let i = 0; i < 16 * 16; i++) {
	const gridButton = document.createElement("button");
	gridButton.classList.add("grid-button");
	gridSection.append(gridButton);
}
const gridButtonList = document.querySelectorAll(".grid-button");
gridButtonList.forEach((gridButton) => {
	gridButton.addEventListener("mouseenter", () => {
		console.log(gridButton);
		changeGridColor(gridButton);
	});
});
function changeGridColor(button) {
	button.classList.add("button-black-color");
}
