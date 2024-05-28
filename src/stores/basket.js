import { defineStore } from "pinia";
import { ref, computed } from "vue";
import f from "../assets/posters/f.webp";
import f2 from "../assets/posters/f2.webp";
import f3 from "../assets/posters/f3.webp";
import f4 from "../assets/posters/f4.webp";
import f5 from "../assets/posters/f5.webp";
import f6 from "../assets/posters/f6.webp";
import f7 from "../assets/posters/f7.webp";
import f8 from "../assets/posters/f8.webp";
import f9 from "../assets/posters/f9.webp";
import f10 from "../assets/posters/f10.webp";
import f11 from "../assets/posters/f11.jpg";

export const useBasketStore = defineStore("basket", () => {
  const basketItems = ref([]);
  const addItem = (id) => {
    if (basketItems.value.some((el) => el.film.id == id)) {
      let temp = basketItems.value.findIndex((el) => el.film.id == id);
      increaseAmount(temp);
    } else {
      basketItems.value.push({ film: films[id], amount: 1 });
    }
  };

  const increaseAmount = (index) => {
    return basketItems.value[index].amount++;
  };

  const decreaseAmount = (index) => {
    if (basketItems.value[index].amount <= 1) {
      deleteItem(index);
    }
    return basketItems.value[index].amount--;
  };

  const deleteItem = (index) => {
    return basketItems.value.splice(index, 1);
  };

  const totalSum = computed(() => {
    return basketItems.value.reduce((accumulator, currentValue) => accumulator + currentValue.amount * currentValue.film.price, 0);
  });

  const clearBasket = () => {
    while(basketItems.value.length > 0) {
        basketItems.value.pop();
    }
  };

  const films = [
    {
      id: 0,
      kinopoisk: 522,
      img: f,
      name: "Карты, деньги, два ствола",
      genre: "Боевик, Комедия, Криминал",
      cast: "Джейсон Флеминг, Декстер Флетчер, Ник Моран, Джейсон Стэйтем, Стивен Макинтош, Николас Роу",
      country: "Великобритания, США",
      duration: "107 мин./01:47",
      description:
        "Четверо молодых парней накопили каждый по 25 тысяч фунтов, чтобы один из них мог сыграть в карты с опытным шулером и матерым преступником, известным по кличке Гарри-Топор. Парень в итоге проиграл 500 тысяч, на уплату долга ему дали неделю.",
      price: 500,
      rating: 8.6,
      gallery: [
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/9a68a2d5-03ea-4251-b1e6-eebfa1163b50/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/99473f9a-9043-451a-82c8-89dc1627019d/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/9429112c-5765-4e53-bd2e-8a35e05f28b3/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/85340fc4-d776-4d58-a2ea-e5d956b9f841/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/367bc4e8-cda3-4991-85a6-c52cfa0284bc/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/0ae51810-1656-41dd-bb87-53f589b50816/1920x'
      ]
    },
    {
      id: 1,
      kinopoisk: 526,
      img: f2,
      name: "Большой куш",
      genre: "Криминал, Комедия, Боевик",
      cast: "Джейсон Стэйтем, Стивен Грэм, Брэд Питт, Алан Форд, Робби Ги",
      country: "Великобритания, США",
      duration: "104 мин./01:44",
      description:
        "Фрэнки Четыре Пальца должен был переправить краденый алмаз из Англии в США своему боссу Эви, но, сделав ставку на подпольный боксерский поединок, он попал в круговорот весьма нежелательных событий. Вокруг него и его груза разворачивается сложная интрига с участием множества колоритных персонажей лондонского дна — русского гангстера, троих незадачливых грабителей, хитрого боксера и угрюмого громилы грозного мафиози. Каждый норовит в одиночку сорвать большой куш.",
      price: 500,
      rating: 8.6,
      gallery: [
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/3be09c07-b85e-45d7-8dc0-484515e7a392/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/b259544c-fc24-436e-97c0-9cd4b7ee6b33/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/0849d580-8d18-4d07-9bb3-d02e4c862da6/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/80f24f03-2ebc-45b3-bc26-53667df2158f/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/84b2ce95-14fa-4f00-bcea-3e9cd733ee4c/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/b62bf91b-3b01-4af5-99e3-54da35cb9ac5/1920x'
      ]

    },
    {
      id: 2,
      kinopoisk: 18973,
      img: f3,
      name: "Револьвер",
      genre: "Боевик, Триллер, Драма, Криминал, Детекив",
      cast: "Джейсон Флеминг, Рэй Лиотта, Винсент Пасторое, Андре Бенджамин, Теренс Мэйнард",
      country: "Великобритания, Франция",
      duration: "111 мин./01:51",
      description:
        "Семь лет назад Джейк влип в неприятную историю. Город был помешан на нелегальных азартных играх, организованных преступным боссом Мака. Однажды накануне большой игры Мака потерял своего парня, и Джейку Грину предложили пойти на замену. Под давлением Грин согласился и выиграл за карточным столом. С этого всё и началось.",
      price: 500,
      rating: 7.4,
      gallery: [
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/f68018ae-daa8-4e21-a498-a844a649ced1/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/8735aa85-0299-4eaf-a01b-afcc75c6d07e/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/cfc39bd3-5c51-4c10-9f52-6686b716c8b7/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/06cb57fa-aeeb-4f18-ba6a-489c51f6d51b/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/0e998f38-7cef-4eff-b65b-2a2d8a8b7ced/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/12d4eb7a-76e8-4cd9-b210-1181b4a11caa/1920x'
      ]

    },
    {
      id: 3,
      kinopoisk: 378140,
      img: f4,
      name: "Рок-н-рольщик",
      genre: "Криминал, Боевик, Триллер",
      cast: "Джерард Батлер, Том Уилкинсон, Тандиве Ньютон, Марк Стронг, Идрис Эльба",
      country: "Великобритания, США",
      duration: "114 мин./01:54",
      description:
        "Опасный мир коррупции и жизни криминальных отбросов Лондона, где недвижимость потеснила такого лидера торгового рынка как наркотики, а самыми активными предпринимателями стали преступные группировки. Но каждому, кто хочет проворачивать там свои дела, будь то мелкая сошка Раз-Два или русский теневой миллиардер Юрий Омович, придется сначала договориться с одним человеком – Ленни Коулом.",
      price: 500,
      rating: 7.8,
      gallery: [
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/08124fba-1428-4d38-b137-b9cd4e0790ff/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/d1be3cb1-f58a-4bbb-be69-429b85cc9f88/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/89db55c6-75e9-4b2d-bf62-f97024b1a2e8/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/730be46d-50c7-4e5e-8587-7cbb976219db/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/ee05d988-66a1-461f-9ff0-2e7f68bffc1f/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/71bc9dc7-de35-42d7-aeea-563335c260fa/1920x'
      ]

    },
    {
      id: 4,
      kinopoisk: 420923,
      img: f5,
      name: "Шерлок Холмс",
      genre: "Боевик, Приключения, Триллер, Драма",
      cast: "Роберт Дауни мл., Джуд Лоу, Рэйчел Макадамс, Марк Стронг",
      country: "США, Германия, Великобритания, Австралия",
      duration: "128 мин./02:08",
      description:
        "Величайший в истории сыщик Шерлок Холмс вместе со своим верным соратником Ватсоном вступают в схватку, требующую нешуточной физической и умственной подготовки, ведь их враг представляет угрозу для всего Лондона.",
      price: 500,
      rating: 8.1,
      gallery: [
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/c60459ae-7d46-4b34-988d-f0fe5ad565fc/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/61a76c60-c78f-46b6-b410-71890f59345b/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/4ad80739-86f6-48b8-a850-fa6f213dc1b8/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/5930f501-0cce-4450-a51a-1d4f81168842/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/f7e5667a-9de1-41e9-9471-0f75f233ef49/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/24e519f6-8565-4d9f-ba3c-6c4b2e82aa60/1920x'
      ]

    },
    {
      id: 5,
      kinopoisk: 474953,
      img: f6,
      name: "Шерлок Холмс: Игра теней",
      genre: "Боевик, Приключения, Триллер",
      cast: "Роберт Дауни мл., Джуд Лоу, Нуми Рапас, Джаред Харрис, Пол Андерсон",
      country: "США, Великобритания",
      duration: "128 мин./02:08",
      description:
        "1891 год. В Вене и Страсбурге проходит серия терактов, организованных анархистами или националистами, а по всей Европе происходят таинственные убийства. Шерлок Холмс считает, что за всем этим стоит профессор Джеймс Мориарти — математический гений, автор знаменитых лекций и трудов.",
      price: 500,
      rating: 7.9,
      gallery: [
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/3dde9d6b-c067-4d9b-a1f2-2d2b1a0211bb/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/2e0d1bee-14f9-4215-8e9c-68059faaa587/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/c560c646-16c3-44c8-94f8-aaa922d6a95a/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/3006dcba-d3cc-45c9-8a8d-54532d30f333/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/c7f2b0be-a01a-479c-a3c7-eb64b4d94e00/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/1b1030c5-b9c6-4181-9aed-eab8fa23f9f8/1920x'
      ]

    },
    {
      id: 6,
      kinopoisk: 824437,
      img: f7,
      name: "Меч короля Артура",
      genre: "Фэнтези, Боевик, Драма, Приключения",
      cast: "Чарли Ханнэм, Астрид Берже-Фрисби, Джуд Лоу, Эрик Бана",
      country: "Великобритания, США, Австралия",
      duration: "126 мин./02:06",
      description:
        "Молодой Артур живёт на задворках Лондиниума вместе со своей бандой. Он и понятия не имел о собственном королевском происхождении, пока однажды не взял в руки меч Экскалибур. Меч начинает менять Артура. В результате он присоединяется к сопротивлению и таинственной молодой девушке по имени Гвиневра. Ему предстоит научиться понимать магическое оружие, которым он овладел, преодолеть себя и объединить народ в борьбе против диктатора Вортигерна, убившего его родителей и завладевшего короной.",
      price: 500,
      rating: 7.2,
      gallery: [
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/3d870ed7-f9c7-448e-87b4-6d7b30d075f9/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/8d050857-3057-4068-aeae-310bb8e67dbc/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/8685bad1-dfa5-4a90-a048-d3bdc5b77791/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/16a4146e-1f3b-4505-9610-634cc1c84079/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/01a3a760-e6f0-4e8b-b0bf-0e0c79b1b035/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/a2a5aa7b-6d21-4081-8bf1-f98ca09279eb/1920x'
      ]

    },
    {
      id: 7,
      kinopoisk: 1007049,
      img: f8,
      name: "Алладин",
      genre: "Мюзкл, Фэнтези, Мелодрама, Комедия",
      cast: "Мена Массуд, Наоми Скотт, Уилл Смит, Марван Кензари, Навид Негабан",
      country: "США, Великобритания, Австралия",
      duration: "128 мин./02:08",
      description:
        "Молодой воришка по имени Аладдин хочет стать принцем, чтобы жениться на принцессе Жасмин. Тем временем визирь Аграбы Джафар намеревается захватить власть над Аграбой, а для этого он стремится заполучить волшебную лампу, хранящуюся в пещере чудес, доступ к которой разрешен лишь тому, кого называют «алмаз неограненный», и этим человеком является не кто иной, как сам Аладдин.",
      price: 500,
      rating: 7.3,
      gallery: [
        'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/a7eb81a9-e1a3-40cb-9e8f-88e2bdb4e34d/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/9bf4bcd1-f684-4f99-8cb9-e3660d618ab4/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/c3179123-9b08-47c5-9355-04c13c11a0e5/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/b38d8530-bee8-42f3-a8ca-255b785aa4a2/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/af4979a1-6fa8-4481-b7f7-87a3bf423a68/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/5f8278c4-2dea-438b-9115-90f8e614db29/1920x'
      ]

    },
    {
      id: 8,
      kinopoisk: 1143242,
      img: f9,
      name: "Джентельмены",
      genre: "Криминал, Комедия, Боевик",
      cast: "Мэттью Макконахи, Чарли Ханнэм, Генри Голдинг, Хью Грант, Мишель Докери",
      country: "США, Великобритания, Франция, Япония, Чехия",
      duration: "113 мин./01:53",
      description:
        "Один ушлый американец ещё со студенческих лет приторговывал наркотиками, а теперь придумал схему нелегального обогащения с использованием поместий обедневшей английской аристократии и очень неплохо на этом разбогател. Другой пронырливый журналист приходит к Рэю, правой руке американца, и предлагает тому купить киносценарий, в котором подробно описаны преступления его босса при участии других представителей лондонского криминального мира — партнёра-еврея, китайской диаспоры, чернокожих спортсменов и даже русского олигарха.",
      price: 500,
      rating: 8.6,
      gallery: [
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/a03cad41-5338-4e97-997a-619f130f50d7/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/55c21dd3-036c-451e-b350-41f89cb9045b/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/bf89f1c6-ee08-40ec-a8d8-5dead13790d9/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/cc8753d5-2cb7-4b6c-a376-804b45171402/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/1e0ad1bd-a510-48cc-afe8-bd1b05e74bab/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/550f2c0e-9d26-42c3-a7df-d5d5f2eedd85/1920x'
      ]

    },
    {
      id: 9,
      kinopoisk: 1318972,
      img: f10,
      name: "Гнев человеческий",
      genre: "Боевик, Триллер",
      cast: "Джейсон Стэйтем, Холт Маккэлани, Джеффри Донован, Джош Хартнетт, Лас Алонсо",
      country: "Великобритания, США",
      duration: "119 мин./01:59",
      description:
        "Грузовики лос-анджелесской инкассаторской компании Fortico Security часто подвергаются нападениям, и во время очередного ограбления погибают оба охранника. Через некоторое время в компанию устраивается крепкий немногословный британец Патрик Хилл. Он получает от босса прозвище Эйч и, впритык к необходимому минимуму пройдя тесты по фитнесу, стрельбе и вождению, отправляется на первое задание. Вскоре и его грузовик пытаются ограбить вооруженные налётчики, но Эйч в одиночку расправляется с целой бандой и становится героем. Кажется, слава и уважение коллег его совершенно не интересуют, ведь он преследует свои цели.",
      price: 500,
      rating: 7.6,
      gallery: [
        'https://avatars.mds.yandex.net/get-kinopoisk-image/4483445/7a426954-e3a9-422b-8999-387d881b9a18/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/34b3860e-9074-43a3-8ce6-e9ca50ee4e6d/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/5ffd95f5-d43f-4743-974c-c58902f8efc2/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/75ebfc70-60af-40a5-8375-0507e990acc7/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/6d5586d2-5bcf-430a-8d0b-e52d03593f80/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/08265d10-5dae-4523-90f4-6324d609a316/1920x'
      ]

    },
    {
      id: 10,
      kinopoisk: 927898,
      img: f11,
      name: "Переводчик",
      genre: "Боевик, Триллер, Военный, История, Драма",
      cast: "Джейк Джилленхол, Дар Салим, Джонни Ли Миллер, Александр Людвиг, Энтони Старр",
      country: "Великобритания, Испания, США",
      duration: "123 мин./02:03",
      description:
        "Афганистан, март 2018 года. Во время спецоперации по поиску оружия талибов отряд сержанта армии США Джона Кинли попадает в засаду. В живых остаются только сам Джон, получивший ранение, и местный переводчик Ахмед, который сотрудничает с американцами. Очнувшись на родине, Кинли не помнит, как ему удалось выжить, но понимает, что именно Ахмед спас ему жизнь, протащив на себе через опасную территорию. Теперь чувство вины не даёт Джону покоя, и он решает вернуться за Ахмедом и его семьёй, которых в Афганистане усиленно ищут талибы.",
      price: 500,
      rating: 7.9,
      gallery: [
        'https://avatars.mds.yandex.net/get-kinopoisk-image/4483445/8f8de32b-f5e0-4c7b-9c9b-edbce63f76e6/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/4483445/f57762d6-0fe1-4dfa-82a3-9f28f7f8ab59/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/4483445/edec5884-481c-46cf-a597-b7480e6beb78/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/4483445/3094eb53-09e0-4aed-9bd5-8f68664e3abc/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/4483445/cecf27fe-eed9-40fe-8b7f-d01daefe8f8c/1920x',
        'https://avatars.mds.yandex.net/get-kinopoisk-image/4483445/0d2163a1-7266-4c03-b05a-1699152ddfc8/1920x'
      ]
    
    },
  ];
  return {
    films,
    basketItems,
    addItem,
    increaseAmount,
    decreaseAmount,
    deleteItem,
    totalSum,
    clearBasket,
  };
});
