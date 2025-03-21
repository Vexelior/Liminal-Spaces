window.addEventListener('load', function () {
    var song = new Audio('./assets/audio/videoplayback.m4a');
    song.volume = 0.3;

    var playButton = document.getElementById('play-button');
    playButton.addEventListener('click', function () {
        if (song.paused) {
            song.play().catch(function (error) {
                console.log('Audio play failed:', error);
            });
            playButton.innerHTML = 'Pause Audio';
        } else {
            song.pause();
            playButton.innerHTML = 'Play Audio';
        }
    });

    var snowflakeContainer = document.getElementById('snowflake-container');
    for (var i = 0; i < 100; i++) {
        var snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        var randomLeft = Math.floor(Math.random() * window.innerWidth);
        var randomDuration = Math.random() * 3 + 2;
        var randomDelay = Math.random() * 5;
        var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        var randomRotation = Math.floor(Math.random() * 360);
        snowflake.style.left = randomLeft + 'px';
        snowflake.style.animationDuration = randomDuration + 's';
        snowflake.style.animationDelay = randomDelay + 's';
        snowflake.style.borderBottomColor = randomColor;
        snowflake.style.transform = 'rotate(' + randomRotation + 'deg)';
        snowflakeContainer.appendChild(snowflake);
    }

    var learnMoreButton = document.getElementById('learn-more-button');
    learnMoreButton.addEventListener('click', function () {
        window.open('https://aesthetics.fandom.com/wiki/Liminal_Space', '_blank');
    });

    var rows = document.querySelectorAll('.row');
    for (var i = 0; i < rows.length; i++) {
        var col = rows[i].querySelectorAll('.col-md-6');
        if (col.length > 1) {
            var maxHeight = 0;
            for (var j = 0; j < col.length; j++) {
                var height = col[j].offsetHeight;
                if (height > maxHeight) {
                    maxHeight = height;
                    var nextElement = col[j].nextElementSibling;
                    if (nextElement && !nextElement.classList.contains('col-md-6')) {
                        nextElement.style.height = height + 'px';
                    }
                }
            }
            for (var j = 0; j < col.length; j++) {
                col[j].style.height = maxHeight + 'px';
            }
        } else if (col.length === 1) {
            col[0].style.height = 'auto';
        }
    }

    var to_top_button = document.getElementById('to-top');
    to_top_button.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            to_top_button.style.display = 'block';
        } else {
            to_top_button.style.display = 'none';
        }
    });
});