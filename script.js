const gridSection = document.querySelector(".grid-section");
for (let i = 0; i < 16 * 16; i++) {
	const gridButton = document.createElement("button");
	gridButton.classList.add("grid-button");
	gridSection.append(gridButton);
}
