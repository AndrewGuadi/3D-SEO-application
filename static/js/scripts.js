function rotateCube(side) {
    const cube = document.querySelector('.cube');
    let rotateX = 0, rotateY = 0;

    switch(side) {
        case 'front':
            rotateX = 0;
            rotateY = 0;
            break;
        case 'back':
            rotateX = 0;
            rotateY = 180;
            break;
        case 'right':
            rotateX = 0;
            rotateY = -90;
            break;
        case 'left':
            rotateX = 0;
            rotateY = 90;
            break;
        case 'top':
            rotateX = -90;
            rotateY = 0;
            break;
        case 'bottom':
            rotateX = 90;
            rotateY = 0;
            break;
    }

    cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}
