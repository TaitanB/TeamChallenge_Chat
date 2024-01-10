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
      'Будьте шанобливі: Ставтеся до всіх учасників з добротою та повагою. Уникайте будь-яких форм дискримінації, мови ворожнечі та особистих нападів',
      "Залишайтеся в темі: Підтримуйте розмову на тему здоров'я та благополуччя. Обговорення, що не стосуються теми, можуть бути перенаправлені на відповідні канали",
      'Уникайте медичних порад: Хоча обмін особистим досвідом вітається, утримайтеся від надання медичних порад. Зверніться до медичного працівника за індивідуальною консультацією.',
      'Інформація, заснована на фактах: Діліться точною та науково обґрунтованою інформацією. Посилайтеся на джерела, якщо це доречно',
      'Конфіденційність має значення: Захищайте свою приватність та приватність інших. Не діліться особистою або конфіденційною інформацією',
      'Використовуйте конструктивну мову: Заохочуйте позитивні та конструктивні дискусії. Дебати вітаються, але з повагою ставтеся до різних думок',
      'Без спаму: уникайте надмірних або повторюваних повідомлень. Слідкуйте за частотою спілкування в чаті',
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
  },
} as const;
