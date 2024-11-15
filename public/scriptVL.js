document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Input pengguna
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    // Kalkulasi BMI
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

    // Menampilkan hasil kalkulasi BMI pengguna
    const resultText = getBMIResultText(bmi);
    const advice = getBMIResultAdvice(bmi);

    document.getElementById('bmiResult').innerText = `Your BMI is ${bmi} (${resultText}) \n"${advice}`;
    drawBMICanvas(bmi);
});

// Mendapatkan hasil kalkulasi BMI pengguna
function getBMIResultText(bmi) {
    if (bmi < 18.5) return 'Underweight';
    else if (bmi >= 18.5 && bmi <= 24.9) return 'Normal weight';
    else if (bmi >= 25 && bmi <= 29.9) return 'Overweight';
    else return 'Obesity';
}

function getBMIResultAdvice(bmi) {
    if (bmi < 18.5) return 'JUST EAT MORE!';
    else if (bmi >= 18.5 && bmi <= 24.9) return 'GOOD FOOD GOOD MOOD!';
    else if (bmi >= 25 && bmi <= 29.9) return 'A MONTH FROM NOW YOU WILL WISH YOU HAD STARTED TODAY!';
    else return 'STOP SAYING TOMORROW!';
}

// Fungsi untuk menampilkan skala BMI
function drawBMICanvas(bmi) {
    const canvas = document.getElementById('bmiCanvas');
    const bmiScale = canvas.getContext('2d');

    // Membersihkan skala sebelumnya
    bmiScale.clearRect(0, 0, canvas.width, canvas.height);

    // Menggambar skala BMI
    const categories = [
        { range: [0, 18.5], color: '#1E90FF' },  // Biru Muda untuk Berat Badan Kurang
        { range: [18.5, 24.9], color: '#03AC13' },  // Hijau untuk Berat Badan Normal
        { range: [25, 29.9], color: '#FFA500' },  // Emas untuk Kelebihan Berat Badan
        { range: [29.9, 40], color: '#FF0000' }   // Merah untuk Obesitas
    ];

    let startX = 0;

    categories.forEach(category => {
        const endX = (category.range[1] / 40) * canvas.width;
        bmiScale.fillStyle = category.color;
        bmiScale.fillRect(startX, 40, endX - startX, 20);
        startX = endX;  // Perbarui posisi awal untuk bagian berikutnya
    });

    // Menggambar posisi BMI pengguna pada skala
    let bmiPosition = (bmi / 40) * canvas.width;

    if (bmiPosition < 0) {
        bmiPosition = 0;
    } else if (bmiPosition > canvas.width) {
        bmiPosition = canvas.width;
    }

    bmiScale.beginPath();
    bmiScale.moveTo(bmiPosition, 20);
    bmiScale.lineTo(bmiPosition, 80);
    bmiScale.strokeStyle = '#000000';
    bmiScale.lineWidth = 4;
    bmiScale.stroke();
}

// Fungsi untuk menghapus BMI result
document.getElementById('resetButton').addEventListener('click', function() {
    const canvas = document.getElementById('bmiCanvas');
    const bmiScale = canvas.getContext('2d');
    bmiScale.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('bmiResult').innerText = '';
});