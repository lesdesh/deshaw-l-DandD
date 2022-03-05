(() => {

	let theThumbnails = document.querySelectorAll("#buttonHolder img"),
		gameBoard = document.querySelector(".puzzle-board"),
		puzzlePieces = document.querySelectorAll(".puzzle-pieces *")
		dropZones = document.querySelectorAll(".drop-zone");

	//event handling here

	function changeBGImg() {
		//debugger;
		//gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`

	}

	function dragStarted(event) {
		console.log("started dragging");
		event.dataTransfer.setData("currentItem", event.target.id)
	}
	
	function allowDragOver(event) {
		event.preventDefault();
		console.log("dragged over");
	}

	function allowDrop(event) {
		event.preventDefault();
		console.log("Dropped");

		let droppedEl = event.dataTransfer.getData('currentItem');
		this.appendChild(document.querySelector(`#${droppedEl}`));
		console.log(droppedEl);
	}

	theThumbnails.forEach(thumb => thumb.addEventListener("click", changeBGImg));


	puzzlePieces.forEach(piece => piece.addEventListener("dragstart", dragStarted));
	
	dropZones.forEach(zone => {
		zone.addEventListener("dragover", allowDragOver);
		zone.addEventListener("drop", allowDrop);
	});
})();
