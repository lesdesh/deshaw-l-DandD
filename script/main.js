(() => {

	let theThumbnails = document.querySelectorAll("#buttonHolder img");
		gameBoard = document.querySelector(".puzzle-board")

	//event handling here

	function changeBGImg() {
		//debugger;
		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`

	}

	theThumbnails.forEach(thumb => thumb.addEventListener("click", changeBGImg));
	
})();
