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
    console.log(basketItems.value);
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
        deleteItem(index)
    };
    return basketItems.value[index].amount--;
  };

  const deleteItem = (index) => {
    return basketItems.value.splice(index, 1);
  };

  const totalSum = computed(() => {
    return basketItems.value.reduce((accumulator, currentValue) => accumulator + (currentValue.amount * currentValue.film.price), 0);
  });

  const films = [
    {
      id: 0,
      img: f,
      name: "Карты, деньги, два ствола",
      genre: "Боевик, Комедия, Криминал",
      cast: "Джейсон Флеминг, Декстер Флетчер, Ник Моран, Джейсон Стэйтем, Стивен Макинтош, Николас Роу",
      country: "Великобритания, США",
      duration: "107 мин./01:47",
      description:
        "Четверо молодых парней накопили каждый по 25 тысяч фунтов, чтобы один из них мог сыграть в карты с опытным шулером и матерым преступником, известным по кличке Гарри-Топор. Парень в итоге проиграл 500 тысяч, на уплату долга ему дали неделю.",
      price: 500,
    },
    {
      id: 1,
      img: f2,
      name: "Большой куш",
      genre: "Криминал, Комедия, Боевик",
      cast: "Джейсон Стэйтем, Стивен Грэм, Брэд Питт, Алан Форд, Робби Ги",
      country: "Великобритания, США",
      duration: "104 мин./01:44",
      description:
        "Фрэнки Четыре Пальца должен был переправить краденый алмаз из Англии в США своему боссу Эви, но, сделав ставку на подпольный боксерский поединок, он попал в круговорот весьма нежелательных событий. Вокруг него и его груза разворачивается сложная интрига с участием множества колоритных персонажей лондонского дна — русского гангстера, троих незадачливых грабителей, хитрого боксера и угрюмого громилы грозного мафиози. Каждый норовит в одиночку сорвать большой куш.",
      price: 500,
    },
    {
      id: 2,
      img: f3,
      name: "Револьвер",
      genre: "Боевик, Триллер, Драма, Криминал, Детекив",
      cast: "Джейсон Флеминг, Рэй Лиотта, Винсент Пасторое, Андре Бенджамин, Теренс Мэйнард",
      country: "Великобритания, Франция",
      duration: "111 мин./01:51",
      description:
        "Семь лет назад Джейк влип в неприятную историю. Город был помешан на нелегальных азартных играх, организованных преступным боссом Мака. Однажды накануне большой игры Мака потерял своего парня, и Джейку Грину предложили пойти на замену. Под давлением Грин согласился и выиграл за карточным столом. С этого всё и началось.",
      price: 500,
    },
    {
      id: 3,
      img: f4,
      name: "Рок-н-рольщик",
      genre: "Криминал, Боевик, Триллер",
      cast: "Джерард Батлер, Том Уилкинсон, Тандиве Ньютон, Марк Стронг, Идрис Эльба",
      country: "Великобритания, США",
      duration: "114 мин./01:54",
      description:
        "Опасный мир коррупции и жизни криминальных отбросов Лондона, где недвижимость потеснила такого лидера торгового рынка как наркотики, а самыми активными предпринимателями стали преступные группировки. Но каждому, кто хочет проворачивать там свои дела, будь то мелкая сошка Раз-Два или русский теневой миллиардер Юрий Омович, придется сначала договориться с одним человеком – Ленни Коулом.",
      price: 500,
    },
    {
      id: 4,
      img: f5,
      name: "Шерлок Холмс",
      genre: "Боевик, Приключения, Триллер, Драма",
      cast: "Роберт Дауни мл., Джуд Лоу, Рэйчел Макадамс, Марк Стронг",
      country: "США, Германия, Великобритания, Австралия",
      duration: "128 мин./02:08",
      description:
        "Величайший в истории сыщик Шерлок Холмс вместе со своим верным соратником Ватсоном вступают в схватку, требующую нешуточной физической и умственной подготовки, ведь их враг представляет угрозу для всего Лондона.",
      price: 500,
    },
    {
      id: 5,
      img: f6,
      name: "Шерлок Холмс:Игра теней",
      genre: "Боевик, Приключения, Триллер",
      cast: "Роберт Дауни мл., Джуд Лоу, Нуми Рапас, Джаред Харрис, Пол Андерсон",
      country: "США, Великобритания",
      duration: "128 мин./02:08",
      description:
        "1891 год. В Вене и Страсбурге проходит серия терактов, организованных анархистами или националистами, а по всей Европе происходят таинственные убийства. Шерлок Холмс считает, что за всем этим стоит профессор Джеймс Мориарти — математический гений, автор знаменитых лекций и трудов.",
      price: 500,
    },
    {
      id: 6,
      img: f7,
      name: "Меч короля Артура",
      genre: "Фэнтези, Боевик, Драма, Приключения",
      cast: "Чарли Ханнэм, Астрид Берже-Фрисби, Джуд Лоу, Эрик Бана",
      country: "Великобритания, США, Австралия",
      duration: "126 мин./02:06",
      description:
        "Молодой Артур живёт на задворках Лондиниума вместе со своей бандой. Он и понятия не имел о собственном королевском происхождении, пока однажды не взял в руки меч Экскалибур. Меч начинает менять Артура. В результате он присоединяется к сопротивлению и таинственной молодой девушке по имени Гвиневра. Ему предстоит научиться понимать магическое оружие, которым он овладел, преодолеть себя и объединить народ в борьбе против диктатора Вортигерна, убившего его родителей и завладевшего короной.",
      price: 500,
    },
    {
      id: 7,
      img: f8,
      name: "Алладин",
      genre: "Мюзкл, Фэнтези, Мелодрама, Комедия",
      cast: "Мена Массуд, Наоми Скотт, Уилл Смит, Марван Кензари, Навид Негабан",
      country: "США, Великобритания, Австралия",
      duration: "128 мин./02:08",
      description:
        "Молодой воришка по имени Аладдин хочет стать принцем, чтобы жениться на принцессе Жасмин. Тем временем визирь Аграбы Джафар намеревается захватить власть над Аграбой, а для этого он стремится заполучить волшебную лампу, хранящуюся в пещере чудес, доступ к которой разрешен лишь тому, кого называют «алмаз неограненный», и этим человеком является не кто иной, как сам Аладдин.",
      price: 500,
    },
    {
      id: 8,
      img: f9,
      name: "Джентельмены",
      genre: "Криминал, Комедия, Боевик",
      cast: "Мэттью Макконахи, Чарли Ханнэм, Генри Голдинг, Хью Грант, Мишель Докери",
      country: "США, Великобритания, Франция, Япония, Чехия",
      duration: "113 мин./01:53",
      description:
        "Один ушлый американец ещё со студенческих лет приторговывал наркотиками, а теперь придумал схему нелегального обогащения с использованием поместий обедневшей английской аристократии и очень неплохо на этом разбогател. Другой пронырливый журналист приходит к Рэю, правой руке американца, и предлагает тому купить киносценарий, в котором подробно описаны преступления его босса при участии других представителей лондонского криминального мира — партнёра-еврея, китайской диаспоры, чернокожих спортсменов и даже русского олигарха.",
      price: 500,
    },
    {
      id: 9,
      img: f10,
      name: "Гнев человеческий",
      genre: "Боевик, Триллер",
      cast: "Джейсон Стэйтем, Холт Маккэлани, Джеффри Донован, Джош Хартнетт, Лас Алонсо",
      country: "Великобритания, США",
      duration: "119 мин./01:59",
      description:
        "Грузовики лос-анджелесской инкассаторской компании Fortico Security часто подвергаются нападениям, и во время очередного ограбления погибают оба охранника. Через некоторое время в компанию устраивается крепкий немногословный британец Патрик Хилл. Он получает от босса прозвище Эйч и, впритык к необходимому минимуму пройдя тесты по фитнесу, стрельбе и вождению, отправляется на первое задание. Вскоре и его грузовик пытаются ограбить вооруженные налётчики, но Эйч в одиночку расправляется с целой бандой и становится героем. Кажется, слава и уважение коллег его совершенно не интересуют, ведь он преследует свои цели.",
      price: 500,
    },
    {
      id: 10,
      img: f11,
      name: "Переводчик",
      genre: "Боевик, Триллер, Военный, История, Драма",
      cast: "Джейк Джилленхол, Дар Салим, Джонни Ли Миллер, Александр Людвиг, Энтони Старр",
      country: "Великобритания, Испания, США",
      duration: "123 мин./02:03",
      description:
        "Афганистан, март 2018 года. Во время спецоперации по поиску оружия талибов отряд сержанта армии США Джона Кинли попадает в засаду. В живых остаются только сам Джон, получивший ранение, и местный переводчик Ахмед, который сотрудничает с американцами. Очнувшись на родине, Кинли не помнит, как ему удалось выжить, но понимает, что именно Ахмед спас ему жизнь, протащив на себе через опасную территорию. Теперь чувство вины не даёт Джону покоя, и он решает вернуться за Ахмедом и его семьёй, которых в Афганистане усиленно ищут талибы.",
      price: 500,
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
  };
});