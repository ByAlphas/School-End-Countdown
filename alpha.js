const closingDate = new Date('June 14, 2024 00:00:00').getTime();

const holidays = [
    new Date('June 10, 2024'),
    new Date('June 11, 2024'),
    new Date('June 12, 2024'),
    new Date('June 13, 2024')
];

const isHoliday = date => {
    return holidays.some(holiday => 
        holiday.getDate() === date.getDate() &&
        holiday.getMonth() === date.getMonth() &&
        holiday.getFullYear() === date.getFullYear()
    );
};

const daysBetweenExcluding = (start, end) => {
    let daysCount = 0;
    let currentDate = new Date(start);

    while (currentDate < end) {
        const dayOfWeek = currentDate.getDay();

        if (dayOfWeek !== 5 && dayOfWeek !== 6 && !isHoliday(currentDate)) { // 5: Cuma, 6: Cumartesi
            daysCount++;
        }

        currentDate.setDate(currentDate.getDate() + 1);
    }

    return daysCount;
};

const countdown = () => {
    const now = new Date().getTime();
    const daysLeft = daysBetweenExcluding(now, closingDate);

    const distance = closingDate - now;

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = daysLeft;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    if (distance < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerHTML = "Okullar Kapandı!";
    }
};

const interval = setInterval(countdown, 1000);
countdown();

// Tema değişim fonksiyonu
const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});
