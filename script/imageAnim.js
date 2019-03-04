(() => {
	// Variables always come first, functions go in the middle, 
	// and event handling and invoking functions goes at the bottom
	
	// set up the puzzle pieces and boards
	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	let piecesBoard = document.querySelector(".puzzle-pieces"),
		puzzleBoard = document.querySelector(".puzzle-board"),
		puzzleSelectors = document.querySelectorAll("#buttonHolder img");

	let dropZones = document.querySelectorAll('.drop-zone');

	function createPuzzlePieces(pictureIndex) {
		// Generate puzzle pieces for the left hand side
		pieces.forEach((piece, index) => {
			let newPuzzlePiece = `<img draggable id="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="thumbnail">`;

			piecesBoard.innerHTML += newPuzzlePiece;
		});

		puzzleBoard.style.backgroundImage = `url(./images/backGround${pictureIndex}.jpg)`;

		initDrag();
	}

	// Drag and drop functionality goes here
	function initDrag() {
		piecesBoard.querySelectorAll('img').forEach(img => {
			img.addEventListener("dragstart", function(e) {
				console.log('Draggin...');

				e.dataTransfer.setData("text/plain", this.id)
		});
	});
	}

	// Handle dragover and drop
	dropZones.forEach(zone => {
		zone.addEventListener("dragover", function(e) {
		e.preventDefault();
		console.log("You dragged over me!");
		});
		
		zone.addEventListener("drop", function(e) {
			e.preventDefault();
			console.log("You dropped somethin on me!");

			if (zone.children.length > 0) {
				return false;
			}

			let piece = e.dataTransfer.getData("text/plain");
			e.target.appendChild(document.querySelector(`#${piece}`));
		});
	});

	function resetPuzzlePieces() {
		// Swap out all of the images when clicking on a bottom button
		
		// Empty the thumbnail container
		piecesBoard.innerHTML = "";
		createPuzzlePieces(this.dataset.puzzleref)
	}

	puzzleSelectors.forEach(puzzle => puzzle.addEventListener("click", resetPuzzlePieces));

	createPuzzlePieces(0);
})();
