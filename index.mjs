const PROGRESS_CONTAINER = ".progress-bars";

function setProgressBars(containerClassName) {
  if (!containerClassName) {
    return;
  }

  // запрашиваем весь контейнер .progress-bars
  const progressContainer = document.querySelector(containerClassName);

  if (!progressContainer) {
    return;
  }
  // запрашиваем из контейнера все элементы progress
  const progressElems = progressContainer.querySelectorAll("progress");

  // для каждого элемента получаем значения value(проценты) и data-title
  progressElems.forEach((progressElem) => {
    const percents = progressElem.getAttribute("value");
    const title = progressElem.getAttribute("data-title");

    // Выполняем функцию и сохраняем ее значение в константу
    const customProgress = createProgress({ percents, title });

    // Добавляет customProgress в конец ноды
    progressContainer.appendChild(customProgress);
  });
}

function createProgress({ percents, title }) {
  const progressWrapper = document.createElement("div"); //Создаем элемент div (обертка)
  progressWrapper.classList.add("progress"); //Добавляем класс progress элементу

  const percentsElem = createProgressPercentage(percents); //Записываем значение функций в константы
  const titleElem = createProgressTitle(title);
  const barElem = createProgressBar(percents);

  progressWrapper.appendChild(titleElem); // Добавляет titleElem (заголовок) в конец ноды
  progressWrapper.appendChild(percentsElem); // Добавляет percentsElem (%) в конец ноды
  progressWrapper.appendChild(barElem); // Добавляет barElem (прогресс бар) в конец ноды

  return progressWrapper;
}

function createProgressPercentage(percents) {
  const percentsElement = document.createElement("span"); //Создаем элемент span (%)
  percentsElement.classList.add("progress__percentage"); // Добавляет класс (progress__percentage) элементу, который создали
  percentsElement.innerText = `${percents}%`; //Задаем текстовое значение элементу (из значения value)

  return percentsElement; //Возвращаем значение value (проценты %)
}

function createProgressTitle(title) {
  const titleElem = document.createElement("h2"); //Создаем элемент h2
  titleElem.classList.add("progress__title"); // Добавляет класс
  titleElem.innerText = title; //Задаем текстовое значение элементу (из значения data-title)

  return titleElem;
}

function createProgressBar(percents) {
  const progressBarElem = document.createElement("div"); //Создаем элемент div
  progressBarElem.classList.add("progress__bar"); // Добавляет класс

  const progressBarInner = document.createElement("div"); //Создаем элемент div
  progressBarInner.classList.add("progress__bar-inner"); // Добавляет класс progress__bar-inner
  progressBarInner.style.width = `${percents}%`; // Ширина элемента с классом progress__bar-inner равна значению value

  progressBarElem.appendChild(progressBarInner); // Добавляет progressBarInner в конец ноды

  return progressBarElem;
}

setProgressBars(PROGRESS_CONTAINER);
