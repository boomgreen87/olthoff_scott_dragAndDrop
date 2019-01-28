(() => {
	// Select the elements that you want to work with
	let theButton = document.querySelector("#buttonHolder img");
	//window.addEventListener("load", changeHeaderText);

	//Functions go in the middle
	function changeHeaderText() {
		document.querySelector("h1").textContent = "The story of Scott";
		document.querySelector("p").textContent = "One of disappointment";
	}

	// Event handling goes at the bottom
	theButton.addEventListener("click", changeHeaderText);
	// set up the puzzle pieces and boards
	
})();
