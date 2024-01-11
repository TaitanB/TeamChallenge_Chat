export const uaTranslation = {
  main: {
    siteName: 'Talkie',
    title: 'Вітаємо у ',
    description:
      "Спілкуйтеся, підключайтеся, залишайтеся на зв'язку і робіть спілкування простим.",
    ourTeem: 'Наша команда',
    version: 'Версія',
    scrollDown: 'cкрол вниз',
  },
  sidebar: {
    publicRooms: 'Публічні кімнати',
    myPublicRooms: 'Мої Публічні кімнати',
    privateRooms: 'Приватні кімнати',
    createRoom: 'Створити кімнату',
  },
  auth: {
    join: 'Приєднатися',
    logout: 'Вихід',
    inputPlaceholder: "Ім'я",
    formText: "Введіть своє ім'я",
    formDesc:
      'Якщо ви хочете приєднатися до кімнати, то ви повинні зареєструватися',
    greetingText: 'Дякуємо, що приєдналися до Talkie',
    logoutWarningTitle: 'Ви впевнені що хочете вийти?',
    logoutWarningDescription: 'Ви більше не зможете зайти в цей акаунт',
    logoutWarningCloseButton: 'Закрити',
    logoutWarningConfirmButton: 'Добре',
  },
  rooms: {
    publicRoom: 'Публічні кімнати',
    privateRoom: 'Приватні кімнати',
    myPublicRooms: 'Мої Публічні кімнати',
    title: 'Назва',
    description: 'Опис',
    topic: 'Тема',
    titlePlaceholder: 'Введіть назву кімнати',
    descriptionPlaceholder: 'Введіть опис кімнати',
    topicPlaceholder: 'Виберіть тему кімнати',
    createPublicRoom: 'Створити мою публічну кімнату',
    editPublicRoom: 'Редагувати мою публічну кімнату',
    btnEditRoom: 'Редагувати кімнату',
    btnCreateRoom: 'Створити кімнату',
    edit: 'Редагувати',
    delete: 'Видалити',
    yes: 'Так',
    doYouWantToDelete: 'Ви хочете видалити',
    room: 'кімнату',
    private: 'приватну',
    public: 'публічну',
    createdRooms: 'Створено кімнат',
    listIsEmpty: 'Список порожній',
    more: 'ще',
  },
  search: {
    title: 'Результати пошуку',
    notFound: 'Результатів не знайдено',
    placeholder: 'Пошук...',
  },
  chat: {
    placeholder: 'Напишіть повідомлення...',
    noMessagesYet: 'Повідомлень ще немає',
    members: 'учасники',
    owner: 'власник',
    today: 'сьогодні',
    yesterday: 'вчора',
  },

  rules: {
    title: 'Правила',
    items: [
      `Будьте ввічливими: Спілкуйтесь з усіма учасниками з люб'язністю та повагою. Уникайте будь-яких форм дискримінації, ненависті або особистих нападів.`,
      `Фокусуйтесь на темі: Ведіть розмову, пов'язану зі здоров'ям і благополуччям. Обговорення, не пов'язані з темою, можуть бути перенаправлені у відповідні канали.`,
      `Уникайте медичних порад: Хоча вітається ділитися особистими досвідами, утримуйтеся від надання медичних порад. Звертайтеся до фахівця з медицини для індивідуальних консультацій.`,
      `Інформація на підґрунті фактів: Діліться точною та обґрунтованою інформацією. Вказуйте джерела, якщо це можливо.`,
      `Профіль конфіденційності: Захищайте свою конфіденційність і конфіденційність інших. Не розголошуйте особисту або конфіденційну інформацію.`,
      `Використовуйте конструктивну мову: Сприяйте позитивним та конструктивним обговоренням. Дискусії вітаються, але ставтеся з повагою до відмінних поглядів.`,
      `Уникайте спаму: Уникайте надмірних або повторюваних повідомлень. Будьте раціональними щодо частоти повідомлень в чаті.`,
    ],
  },
  pageError: {
    pageNotFound: 'сторінку не знайдено',
    returnHome: 'Повернутися на головну сторінку',
  },
  success: {
    publicRoomEdited: 'Відредагована публічна кімната',
    publicRoomCreated: 'Створена публічна кімната',
    privateRoomCreated: 'Створена приватна кімната',
    publicRoomDeleted: 'Видалена публічна кімната',
    privateRoomDeleted: 'Видалена приватна кімната',
  },
  errors: {
    userNameLengthValidation: "Ім'я тільки з 2-30 символів",
    userNameCharacterValidation: "Введіть тільки допустимі символи('’._-)",
    publicRoomTitleLengthValidation: 'Заголовок тільки з 2-30 символів',
    publicRoomTitleCharacterValidation:
      "Введіть тільки допустимі символи('’._-)",
    publicRoomDescriptionLengthValidation: 'Опис тільки з 1-300 символів',
    publicRoomDescriptionCharacterValidation: `Введіть тільки допустимі символи(.,&@'’():;!?"$*+/%-=_)`,
    publicRoomTopicValidation: 'Виберіть тему',
    inputValidation: 'Імя має бути не менше 2 символів і не більше 30',
    publicRoomEdited: 'Помилка редаговання публічної кімнати',
    publicRoomCreated: 'Помилка створення публічної кімнати',
    privateRoomCreated: 'Помилка створення приватної кімната',
    publicRoomDeleted: 'Помилка видалення  публічної кімната',
    privateRoomDeleted: 'Помилка видалення приватної кімната',
    messageLengthValidation: 'Повідомлення тільки з 1-1000 символів',
    messageCharacterValidation: `Повідомлення тільки з допустимими символами(.,&@'’():;!?"$*+/%-=_)`,
  },
} as const;
