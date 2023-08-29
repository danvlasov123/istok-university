const menu = [
  {
    name: "Обучение",
    index: 0,
    children: [
      {
        name: "Направления",
        index: 1,
        children: [
          {
            name: "Терапия идентичности",
            index: 2,
            link: "/pages/therapy.html",
          },
          {
            name: "Системные семейные установки",
            index: 2,
            link: "/pages/systemic-family.html",
          },
          {
            name: "Программа проф. переподготовки",
            index: 2,
            link: "/pages/prof-retraining.html",
          },
        ],
      },
      {
        name: "Формы Обучение",
        index: 1,
        children: [
          {
            name: "Программы повышения квалификации",
            index: 2,
            children: [
              {
                name: "Терапия идентичности",
                index: 3,
                link: "/pages/therapy.html",
              },
              {
                name: "Системные семейные расстановки",
                index: 3,
                link: "/pages/systemic-family.html",
              },
            ],
          },
          {
            name: "Тематические семинары",
            index: 2,
            link: "/pages/thematic-seminars.html",
          },
          {
            name: "Вебинары",
            index: 2,
            link: "/pages/webinars.html",
          },
          {
            name: "Программы в других городах",
            index: 2,
            link: "/pages/programs-cities.html",
          },
        ],
      },
    ],
  },
  {
    name: "Психологическая помощь",
    index: 0,
    children: [
      {
        name: "Групповые программы",
        link: "/pages/group-programs.html",
        index: 1,
      },
      {
        name: "Индивидуальные консультации",
        link: "/pages/consultations-and-recording.html",
        index: 1,
      },
      {
        name: "Онлайн запись",
        link: "/pages/page-developing.html",
        index: 1,
      },
    ],
  },
  {
    name: "Об институте",
    index: 0,
    children: [
      {
        name: "История института / Издательство",
        link: "/pages/about-institute.html",
        index: 1,
      },
      {
        name: "Сотрудники",
        link: "/pages/about-institute.html",
        index: 1,
      },
      {
        name: "Отзывы",
        link: "/pages/page-developing.html",
        index: 1,
      },
      {
        name: "Лицензия на образовательную деятельность",
        link: "/pages/page-developing.html",
        index: 1,
      },
      {
        name: "Документы",
        index: 1,
        children: [
          {
            name: "Устав",
            link: "/pages/page-developing.html",
            index: 2,
          },
          {
            name: "Правила приема",
            link: "/pages/page-developing.html",
            index: 2,
          },
          {
            name: "Порядок приема, приостановления приема",
            link: "/pages/page-developing.html",
            index: 2,
          },
          {
            name: "Порядок контроля успеваемости",
            link: "/pages/page-developing.html",
            index: 2,
          },
          {
            name: "Режим занятий",
            link: "/pages/page-developing.html",
            index: 2,
          },
          {
            name: "Срок действия аккредитации образовательных программ",
            link: "/pages/page-developing.html",
            index: 2,
          },
          {
            name: "Структура преподавателей и программ с электронной подписью",
            link: "/pages/page-developing.html",
            index: 2,
          },
          {
            name: "Этический кодекс ОППЛ+",
            link: "/pages/page-developing.html",
            index: 2,
          },
        ],
      },
    ],
  },
  {
    name: "Контакты",
    index: 0,
    children: [
      {
        name: "Контакты института",
        link: "/pages/contacts.html",
        index: 1,
      },
      {
        name: "Министерство науки и высшего образования",
        link: "https://minobrnauki.gov.ru",
        index: 1,
      },
      {
        name: "Министерство просвещения",
        link: "https://edu.gov.ru/",
        index: 1,
      },
    ],
  },
];

const headerMenu = document.getElementById("header-menu");
const mobileMenu = document.getElementById("mobile-menu");
const headerList = document.getElementById("header-list");

headerMenu.addEventListener("mouseleave", () => handleCloseMenu());

headerMenu.addEventListener("mouseenter", () => handleOpenMenu());

const createUl = (children) => {
  const ul = document.createElement("ul");

  ul.className =
    "h-auto py-4 text-[#222222] font-medium uppercase border-r border-[#95C1E4]";

  children.forEach((c, index) => {
    const li = document.createElement("li");

    li.className = `flex flex-col`;

    let text = null;

    if (c?.link) {
      text = document.createElement("a");
      text.href = c.link;
    }

    if (!c?.link) {
      text = document.createElement("p");
    }
    text.classList =
      "hover:bg-[#87D1FF4D] leading-7 py-4 pl-8 pr-[49px] cursor-pointer";
    text.textContent = c.name;
    li.appendChild(text);
    ul.appendChild(li);

    li.onmouseover = () => {
      if (c.children) {
        if (
          headerList.children.length === c.index + 1 ||
          headerList.children.length > c.index + 1
        ) {
          headerList.removeChild(headerList.children[c.index]);
        }

        if (headerList.children.length < c.index + 1) {
          createUl(c.children);
        }
      }

      if (!c.children && headerList.children.length > c.index) {
        headerList.removeChild(
          headerList.children[headerList.children.length - 1]
        );
      }
    };
  });

  headerList.appendChild(ul);
};

const createMenu = (name) => {
  if (name && headerList.children.length) {
    headerList.innerHTML = "";
  }

  const selectedItem = menu.find((m) => m.name === name);

  if (!selectedItem.children.length) {
    return;
  }

  const children = selectedItem?.children;

  createUl(children);
};

const handleOpenMenu = (name) => {
  if (headerMenu.classList.contains("hidden")) {
    headerMenu.classList.remove("hidden");
  }
  createMenu(name);
};

const handleCloseMenu = () => {
  headerMenu.classList.add("hidden");
};
const handleOpenMobileMenu = () => {
  mobileMenu.classList.remove("hidden");
};

const handleCloseMobileMenu = () => mobileMenu.classList.add("hidden");
