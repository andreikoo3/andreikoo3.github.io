document.addEventListener('DOMContentLoaded', function() {
    // Посилання на відеофайли
    var videoUrls = [
        'video/1.mp4',
        'video/2.mp4',
        'video/3.mp4',
        'video/4.mp4',
        'video/5.mp4',
        'video/6.mp4',
        'video/7.mp4',
        'video/8.mp4'
    ];

    // Отримання контейнера для відео
    var videosContainer = document.getElementById('videos-container');

    // Додавання відео на сторінку
    videoUrls.forEach(function(url) {
        var videoElement = document.createElement('video');
        videoElement.src = url;
        videoElement.controls = true; // Додавання кнопок управління відео
        videosContainer.appendChild(videoElement);
    });
});
