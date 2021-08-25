var time = 2000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img")

    max = images.length;

function nextImage() {
    currentImageIndex++
    
    images[currentImageIndex].classList.add("selected")
}

funciton start() {
    setInterval() => {
        nextImage()
    }, time
}

windows._addTouchEventListeners("load", start)