(() => {
	// Variables always come first, functions go in the middle, 
	// and event handling and invoking functions goes at the bottom
	
	// set up the puzzle pieces and boards
	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	let piecesBoard = document.querySelector(".puzzle-pieces"),
		puzzleBoard = document.querySelector(".puzzle-board"),
		puzzleSelectors = document.querySelectorAll("#buttonHolder img");

	function createPuzzlePieces(pictureIndex) {
		// Generate puzzle pieces for the left hand side
		pieces.forEach((piece, index) => {
			let newPuzzlePiece = `<img id="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="thumbnail">`;

			piecesBoard.innerHTML += newPuzzlePiece;
		});

		puzzleBoard.style.backgroundImage = `url(./images/backGround${pictureIndex}.jpg)`;
	}

	function resetPuzzlePieces() {
		// Swap out all of the images when clicking on a bottom button
		
		// Empty the thumbnail container
		piecesBoard.innerHTML = "";
		createPuzzlePieces(this.dataset.puzzleref)
		
	}

	puzzleSelectors.forEach(puzzle => puzzle.addEventListener("click", resetPuzzlePieces));

	createPuzzlePieces(0);
})();
