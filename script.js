const gridSection = document.querySelector(".grid-section");
const totalGridButtonSection = document.querySelector(
	".total-grid-button-section"
);
const totalGridButtonOptions = [];
for (let i = 1; i < 5; i++) {
	const intialTotalGrid = 4;
	let totalGrid = intialTotalGrid ** i;
	totalGridButtonOptions.push({
		value: totalGrid,
		text: `${totalGrid / 2}x${totalGrid / 2}`,
	});
}
totalGridButtonOptions.forEach((totalButtonOption) => {
	const totalGridButton = document.createElement("button");
	totalGridButton.classList.add("total-grid-button");
	totalGridButton.value = totalButtonOption.value;
	totalGridButton.innerText = totalButtonOption.text;
	totalGridButtonSection.append(totalGridButton);
});
const totalGridButtonList = document.querySelectorAll(".total-grid-button");
totalGridButtonList.forEach((button) => {
	button.addEventListener("click", () => {
		const totalGrid = button.value;
		createNewGrid(totalGrid);
	});
});
function createNewGrids(totalGrid) {
	gridSection.innerHTML = "";
	for (let i = 0; i < totalGrid; i++) {
		const gridButton = document.createElement("button");
		gridButton.classList.add("grid-button");
		gridSection.append(gridButton);
	}
}
