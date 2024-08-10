document.getElementById('start-button').addEventListener('click', function() {
    let circleContainer = document.getElementById('circle-container');
    circleContainer.innerHTML = ''; // Clear existing circles

    let width = parseInt(document.getElementById('circle-width').value);
    let growthAmount = parseInt(document.getElementById('growth-amount').value);
    let growRate = parseInt(document.getElementById('grow-rate').value);
    let numberCircles = parseInt(document.getElementById('number-circles').value);

    for (let i = 0; i < numberCircles; i++) {
        let circle = document.createElement('div');
        circle.className = 'circle';
        circle.style.width = circle.style.height = width + 'px';

        // Random position within container
        let x = Math.floor(Math.random() * (circleContainer.clientWidth - width));
        let y = Math.floor(Math.random() * (circleContainer.clientHeight - width));

        circle.style.left = x + 'px';
        circle.style.top = y + 'px';

        circleContainer.appendChild(circle);

        // Make the circle grow
        let growInterval = setInterval(function() {
            width += growthAmount;
            circle.style.width = circle.style.height = width + 'px';
        }, growRate);

        // Remove the circle on click
        circle.addEventListener('click', function() {
            clearInterval(growInterval);
            circleContainer.removeChild(circle);
        });
    }
});
