
function openVideo(id) {
    const lightbox = document.getElementById('lightbox');
    const iframe = document.getElementById('lightbox-video');
    iframe.src = "https://player.vimeo.com/video/" + id + "?autoplay=1&title=0&byline=0&portrait=0";
    lightbox.style.display = "flex";
}

function closeVideo() {
    const lightbox = document.getElementById('lightbox');
    const iframe = document.getElementById('lightbox-video');
    iframe.src = "";
    lightbox.style.display = "none";
}
