// Event listener untuk calm mode (tidak ada perubahan)
document.getElementById('calmModeToggle').addEventListener('change', function() {
    const calmAudio = document.getElementById('calmAudio');
    this.checked ? calmAudio.play() : (calmAudio.pause(), calmAudio.currentTime = 0);
});

// Event listener untuk search bar
document.getElementById('search').addEventListener('input', function(event) {
    const searchQuery = event.target.value.toLowerCase();
    const courses = document.querySelectorAll('.course a');

    courses.forEach(course => {
        const courseName = course.textContent.toLowerCase();
        if (courseName.includes(searchQuery)) {
            course.parentElement.style.display = 'block'; // Menampilkan course yang cocok
        } else {
            course.parentElement.style.display = 'none'; // Menyembunyikan course yang tidak cocok
        }
    });
});