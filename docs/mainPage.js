document.getElementById('calmModeToggle').addEventListener('change', function() {
    var audio = document.getElementById('calmAudio');
    if (this.checked) {
        audio.play();
    } else {
        audio.pause();
    }
});

var searchInput = document.getElementById('searchInput');
var searchForm = document.getElementById('searchForm');

searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var query = searchInput.value.toLowerCase().trim();
    if (query) {
        searchCourses(query);
    } else {
        resetCourses();
    }
});

function searchCourses(query) {
    var courses = document.querySelectorAll('.course');
    var sections = document.querySelectorAll('.subjectSection');
    var hasResult = false;

    sections.forEach(function(section) {
        var sectionHasResult = false;
        var courseContainer = section.querySelector('.courseContainer');
        var courses = courseContainer.querySelectorAll('.course');

        courses.forEach(function(course) {
            var courseTitle = course.querySelector('a').textContent.toLowerCase();
            if (courseTitle.includes(query)) {
                course.style.display = 'block';
                sectionHasResult = true;
            } else {
                course.style.display = 'none';
            }
        });

        if (sectionHasResult) {
            section.style.display = 'block';
            hasResult = true;
        } else {
            section.style.display = 'none';
        }
    });

    if (!hasResult) {
        alert('No courses found matching your search.');
    }
}

function resetCourses() {
    var sections = document.querySelectorAll('.subjectSection');
    sections.forEach(function(section) {
        section.style.display = 'block';
        var courses = section.querySelectorAll('.course');
        courses.forEach(function(course) {
            course.style.display = 'block';
        });
    });
}
