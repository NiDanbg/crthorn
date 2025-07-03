// Изчакваме целият HTML документ да се зареди, преди да изпълним скрипта
document.addEventListener('DOMContentLoaded', function() {

  // Намираме контейнера, в който ще показваме новините
  const newsContainer = document.getElementById('news-container');

  // Извличаме данните от JSON файла
  fetch('novini.json')
    .then(response => {
      // Проверяваме дали заявката е успешна
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json(); // Преобразуваме отговора в JSON
    })
    .then(data => {
      // Изчистваме съобщението "Зареждам новини..."
      newsContainer.innerHTML = ''; 

      // Обхождаме всяка новина от файла
      data.forEach(item => {
        // Създаваме HTML елементи за всяка новина
        const newsItem = document.createElement('article');
        newsItem.className = 'news-item';

        const newsDate = document.createElement('p');
        newsDate.className = 'news-date';
        newsDate.textContent = new Date(item.date).toLocaleDateString('bg-BG'); // Форматираме датата

        const newsTitle = document.createElement('h3');
        newsTitle.className = 'news-title';
        
        const newsContent = document.createElement('p');
        newsContent.className = 'news-content';
        newsContent.textContent = item.content;

        // Ако има линк, правим заглавието кликаемо
        if (item.link && item.link !== '#') {
          const titleLink = document.createElement('a');
          titleLink.href = item.link;
          titleLink.textContent = item.title;
          // ако линкът е външен, отваряй в нов таб
          if (item.link.startsWith('http')) {
            titleLink.target = '_blank';
          }
          newsTitle.appendChild(titleLink);
        } else {
          newsTitle.textContent = item.title;
        }

        // Добавяме създадените елементи в контейнера за новината
        newsItem.appendChild(newsDate);
        newsItem.appendChild(newsTitle);
        newsItem.appendChild(newsContent);
        
        // Добавяме готовата новина в главния контейнер на страницата
        newsContainer.appendChild(newsItem);
      });
    })
    .catch(error => {
      // Ако има грешка (напр. файлът не е намерен), показваме съобщение
      console.error('Грешка при зареждане на новините:', error);
      newsContainer.innerHTML = '<p>В момента не можем да заредим новините. Моля, опитайте по-късно.</p>';
    });
});