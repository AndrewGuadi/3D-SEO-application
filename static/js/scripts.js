document.addEventListener('DOMContentLoaded', function() {
    const cube = document.querySelector('.cube');
    const side = cube.getAttribute('data-side');
    rotateCube(side);
});

function rotateCube(side) {
    const cube = document.querySelector('.cube');
    let rotateX = 0, rotateY = 0;

    switch(side) {
        case 'home':
            rotateX = 0;
            rotateY = 0;
            break;
        case 'about-us':
            rotateX = 0;
            rotateY = 180;
            break;
        case 'contact-us':
            rotateX = 0;
            rotateY = -90;
            break;
        case 'services':
            rotateX = 0;
            rotateY = 90;
            break;
        case 'reviews':
            rotateX = -90;
            rotateY = 0;
            break;
        case 'blog':
            rotateX = 90;
            rotateY = 0;
            break;
    }

    cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}
