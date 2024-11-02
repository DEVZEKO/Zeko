// الحصول على الزر والفيديو
const video = document.getElementById('video');
const playButton = document.getElementById('playButton');

// وظيفة لتشغيل الفيديو
playButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playButton.textContent = "إيقاف الفيديو"; // تغيير نص الزر إلى إيقاف الفيديو
    } else {
        video.pause();
        playButton.textContent = "تشغيل الفيديو"; // تغيير نص الزر إلى تشغيل الفيديو
    }
});

// حدث عند انتهاء الفيديو
video.addEventListener('ended', () => {
    playButton.textContent = "تشغيل الفيديو"; // إعادة نص الزر إلى تشغيل الفيديو
});

