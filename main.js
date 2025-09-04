// Плавна прокрутка
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Кнопка "наверх"
const toTopBtn = document.createElement("button");
toTopBtn.textContent = "↑";
toTopBtn.classList.add("to-top-btn");
document.body.appendChild(toTopBtn);

toTopBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 10px 15px;
  font-size: 20px;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: none;
  transition: var(--transition);
`;

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
});

toTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Інформація для комплектуючих
const componentInfo = {
  cpu: {
    title: "Процесор (CPU)",
    text: "Відповідає за виконання обчислень. Чим більше ядер та вища тактова частота, тим потужніший процесор."
  },
  gpu: {
    title: "Відеокарта (GPU)",
    text: "Відеокарта відповідає за обробку зображення. Використовується у відеоіграх, 3D-моделюванні, відеомонтажі та штучному інтелекті."
  },
  ram: {
    title: "Оперативна пам’ять (RAM)",
    text: "Тимчасове сховище даних. Чим більше RAM, тим швидше працює система при багатозадачності."
  },
  ssd: {
    title: "Накопичувач (SSD/HDD)",
    text: "SSD забезпечує швидке завантаження системи та програм, а HDD підходить для зберігання великих обсягів даних."
  },
  motherboard: {
    title: "Материнська плата (Motherboard)",
    text: "З’єднує всі компоненти ПК: процесор, пам’ять, відеокарту, накопичувачі та периферію. Вона визначає сумісність і можливості апгрейду."
  }
};

// Модальне вікно
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeModal = document.getElementById("closeModal");

// Відкриття по кліку
document.querySelectorAll(".info-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.parentElement;
    const infoKey = card.getAttribute("data-info");
    const info = componentInfo[infoKey];

    modalTitle.textContent = info.title;
    modalText.textContent = info.text;
    modal.style.display = "flex";
  });
});

// Закриття модалки
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

