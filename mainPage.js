document.getElementById('calmModeToggle').addEventListener('change', function() {
    const calmAudio = document.getElementById('calmAudio');
    this.checked ? calmAudio.play() : (calmAudio.pause(), calmAudio.currentTime = 0);
});