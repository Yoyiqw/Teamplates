const swip = document.querySelector(".projects__swiper-wrapper")
const info = document.querySelector(".news__const")

const abouts = [
    {
        img:"./img/base.png",
        date:"26/10/2019",
        name:"Реализации проекта строительства",
        more:"17 июня 2016 г. в рамках XX Петербургского международного экономического форума, между правительством Ленинградской области и руководством ЗАО «Криогаз» состоялось",
        button:"ПОДРОБНЕЕ",
    },
    {
        img:"./img/base.png",
        date:"26/10/2019",
        name:"Реализации проекта строительства",
        more:"17 июня 2016 г. в рамках XX Петербургского международного экономического форума, между правительством Ленинградской области и руководством ЗАО «Криогаз» состоялось",
        button:"ПОДРОБНЕЕ",
    },
    {
        img:"./img/base.png",
        date:"26/10/2019",
        name:"Реализации проекта строительства",
        more:"17 июня 2016 г. в рамках XX Петербургского международного экономического форума, между правительством Ленинградской области и руководством ЗАО «Криогаз» состоялось",
        button:"ПОДРОБНЕЕ",
    },
]

const data = [
    {
        title: "ПРОЕКТЫ",
        desc: "Крупнейшие реализованные проекты",
        info: "В начале 2007 года завершено строительство системы газификации СПГ СХПР-5-63/0,6-1000, входящей в состав комплекса энергоснабжения Терминала по перегрузки светлых нефтепродуктов в Морском торговом порту г. Приморск.",
        photo: "./img/construction.png",
    },
    {
        title: "ПРОЕКТЫ",
        desc: "Крупнейшие реализованные проекты",
        info: "Байкерское движение зародилось в 1950-х годах в США, проникло в Европу и СССР в 1970-х (в СССР в 1980-х годах их называли «рокеры»), какое-то время входило в состав субкультуры[уточнить], когда байкеры были разделены на несколько агрессивных и враждующих группировок.",
        photo: "./img/bike.png",
    },
    {
        title: "ПРОЕКТЫ",
        desc: "Крупнейшие реализованные проекты",
        info: "Кратос (англ. Kratos, др.-греч. Κράτος) — протагонист серии игр God of War, разработанных американской компанией Santa Monica Studio. Помимо игр этой серии, Кратос появляется в основанных на них комиксах и книгах, а также — в виде камео — в ряде других игр.",
        photo: "./img/kratos.png",
    },
    {
        title: "ПРОЕКТЫ",
        desc: "Крупнейшие реализованные проекты",
        info: "Дарт Ве́йдер (англ. Darth Vader, 42 ДБЯ — 4 ПБЯ), также известный под своим настоящим именем как Энакин Скайуокер (англ. Anakin Skywalker) — центральный персонаж первых шести эпизодов саги «Звёздные войны». Также появляется в фильме «Изгой-один». В киноэпопее «Звёздные войны»",
        photo: "./img/darthVader.png",
    },
    {
        title: "ПРОЕКТЫ",
        desc: "Крупнейшие реализованные проекты",
        info: "Мелина появляется во время отдыха Погасшего у места благодати, вскоре после его прибытия в Междуземье. Она просит разрешить ей путешествовать с игроком, а также доставить её к Древу Эрд. За это она обещает помогать, давая возможность повышать уровень. Также она отдаёт костяной свисто.",
        photo: "./img/Melina.png",
    },

    {
        title: "ПРОЕКТЫ",
        desc: "Крупнейшие реализованные проекты",
        info: "Dark Souls (яп. ダークソウル да:ку со:ру, с англ. — «Тёмные души») — компьютерная игра в жанре action/RPG, разработанная японской компанией From Software и выпущенная в 2011 году для PlayStation 3 и Xbox 360. В Японии издателем игры выступала сама From Software.",
        photo: "./img/DarkSouls.png",
    },
]

for (let i = 0; i < data.length; i++) {
    swip.innerHTML +=
        `
    
            <div class="swiper-slide">
                <div class="projects__content">
                    <div class="projects__left">
                        <h2 class="projects__title">${data[i].title}</h2>
                        <p class="projects__description">${data[i].desc}</p>
                        <div class="projects__box">
                            <p class="projects__info">${data[i].info}</p>
                        </div>
                    </div>
                    <div class="projects__right">

                        <img class="projects__photo" src="${data[i].photo}" alt="">
                    </div>
                </div>
            </div>
            </div>
        </div>
    `

}

for (const about of abouts) {
    info.innerHTML +=
        `
        <div class="news__construction">
        <div class="news__box">
            <img class="news__photo" src="${about.img}" alt="">
            <div class="news__info">
                <span class="news__date">${about.date}</span>
                <h2 class="news__name">${about.name}</h2>
                <p class="news__more">${about.more} </p>
                <button class="news__btn">${about.button}</button>
            </div>
        </div>
    </div>
        `

}