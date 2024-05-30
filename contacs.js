   // Ініціалізація карти
   var map = L.map('map').setView([49.8441, 24.0146], 13); // Координати для Львова

   // Додавання підложки (tile layer)
   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(map);

   // Додавання маркера
   L.marker([49.8441, 24.0146]).addTo(map) // Координати для вулиці Джерельна
       .bindPopup("<b>Вулиця Джерельна</b>").openPopup();