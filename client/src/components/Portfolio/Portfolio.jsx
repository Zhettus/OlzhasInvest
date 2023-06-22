import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import mainimg from "../../img/mainimg.png";

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
   
      <span style={{color: darkMode?'white': ''}}>Описание</span>
      <span>Программы</span>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <div classname="card"> 
          <span>
    <div>
      <div classname="heading">1 Модуль</div>

      <br /><br />
      ⚜️Основные виды финансовых рынков
      <br />
      ⚜️Инструменты инвестиций
      <br />
      ⚜️Выход на финансовые рынки. Брокеры и кухни
      <br />
      ⚜️Психология инвестиций
      <br />
      ⚜️Искусство инвестиций и спекуляции
      <br /><br />
      В ходе изучения данного модуля, Вы узнаете, какие международные финансовые рынки существуют, какие инструменты на них торгуются, на каких можно заработать, на каких высокие риски.
      <br /><br />
      Кроме того, если Вы уже решили, что инвестиции с Вами на всю жизнь и в будущем они будут Вам приносить «Luxury» продукты, то каких суперкрутых брокеров выбрать? Какие критерии важны при выборе брокера?
      <br /><br />
      Вы узнаете, что значит «надежность» брокера и многое другое. В инвестициях важна психология, поэтому Вы узнаете какой Вы инвестор, сможете практически применять приемы психологии в повседневной жизни и в отношении к деньгам, от которых в немалой степени зависит и наша обычная счастливая жизнь.
      <br /><br />
      Узнаете про самое большое зло на земле — спекуляцию.
    </div>
  </span>
          </div> 
        </SwiperSlide>
        <SwiperSlide>
          <div classname="card"> 
            <span>    
              <div>      
              <div className="heading">2 Модуль</div>
              <br />
              <br />
              ⚜️Учетная ставка
              <br />
              ⚜️Фискальная политика
              <br />
              ⚜️Индексы и бенчмарк
              <br />
                ⚜️Тикеры
                <br />
              ⚜️ETF
              <br />
              <br />
              После изучения данного модуля Вы с легкостью будете применять и разбираться в учетной ставке и уже будете точно знать, что делать с кредитами, депозитами и инвестициями.
              <br />
                <br />
                Узнаете основные инструменты финансовых рынков и будете понимать, почему они надежны, ликвидны и доходны.</div>  </span>
          </div> 
        </SwiperSlide>
        <SwiperSlide>
          <div classname="card"> 
            <span><div>
              <div className="heading">3 Модуль</div>
              <br />
              ⚜️Фундаментальный анализ стран
              <br />
              ⚜️Фундаментальный анализ индустрии
              <br />
              ⚜️Фундаментальный анализ компании
              <br />
              ⚜️VALUE & GROWTH
              <br />
              ⚜️RELATIVE VALUE
              <br />
              ⚜️DCF (DISCOUNTED CASH FLOW)
              <br />
              <br />
              В ходе изучения данного модуля Вы ознакомитесь с фундаментальным анализом и сравнением финансовых моделей конкретных стран, чьи представители «съели собаку» в области финансов и сможете достаточно легко с ними общаться.
              <br />
              <br />
              Вы научитесь применять на практике свои знания и будете точно знать, стоит ли вкладываться в тот или иной бизнес независимо от страны и менталитета.
              <br />
              <br />
              Узнаете финансовые модели от ведущих лауреатов Нобелевской премии и просто миллиардеров, которые сделали капитал благодаря этим моделям.
            </div></span>
          </div> 
        </SwiperSlide>
        <SwiperSlide>
          <div classname="card"> 
          <span>
            <div>
              <div className="heading">4 Модуль</div>
              <br />
              ⚜️Технический анализ
              <br />
              ⚜️Основные постулаты
              <br />
              ⚜️Выбор таймфреймов
              <br />
              ⚜️Как его применять в реальной жизни
              <br />
              ⚜️Плюсы и минусы технического анализа
              <br />
              <br />
              В ходе работы с данным модулем Вы подробно изучите технический анализ финансовых рынков.
              <br />
              Будете достаточно легко разбираться в графическом и компьютерном анализе. Будете с точностью знать, какой именно технический индикатор работает на тех или иных рынках.
              </div></span>
          </div> 
        </SwiperSlide>
        <SwiperSlide>
          <div classname="card"> 
          <span>
            <div>
              <div className="heading">5 Модуль</div>
              <br />
              ⚜️Опционы как средство умных инвестиций
              <br />
              ⚜️Все разработанные стратегии для опционов
              <br />
              ⚜️«Улыбка» волатильности или бабочка «сломанное крыло»
              <br />
              ⚜️Хедж и дополнительный заработок через опционные стратегии
              <br />
              <br />
              После изучения данного модуля Вы будете достаточно основательно обладать знаниями в области опционов.
              <br />
              Научитесь применять их в реальной жизни, хеджируя свои инвестиции, и дополнительно зарабатывать на умных стратегиях.
              <br />
              Многие ученики, прошедшие мое обучение, в последующем начали применять опционы, заменив ими классические инструменты в виде акций.
              <br />
              Это связано с тем, что опционы имеют большое преимущество в сравнении с классическими инструментами.
              <br />
              Возможно, Вы будете одними из них.
              </div>
            </span>
          </div> 
        </SwiperSlide>
        <SwiperSlide>
          <div classname="card"> 
          <span>
            <div>
              <div className="heading">6 Модуль</div>
              <br />
              ⚜️Классические методы создания инвестиционных портфелей
              <br />
              ⚜️Неклассические методы создания инвестиционных портфелей
              <br />
              ⚜️Смарт- создание инвестиционных портфелей
              <br />
              ⚜️Пошаговый план построения смарт- портфелей
              <br />
              ⚜️Хеджирование инвестиционных портфелей
              <br />
              <br />
              После прохождения данного модуля Вы научитесь создавать и проверять свои теории в области инвестиционных стратегий, также станете разрабатывать новые подходы и методы для увеличения своего капитала, а главное, будете точно знать, как обойти риски и всегда быть на шаг впереди 97,3% спекулянтов.
              </div></span>
          </div> 
        </SwiperSlide>
        <SwiperSlide>
          <div classname="card"> 
          <span>
            <div>
              <div className="heading">7 Модуль</div>
              <br />
              ⚜️Теоретическая и практическая работа по каждой авторской модели и стратегии
              <br />
              ⚜️Почему именно данная модель будет работать в данный момент времени
              <br />
              ⚜️Калькуляция и проверка данных с помощью платных ресурсов
              <br />
              ⚜️Выводы и психологические аспекты
              <br />
              ⚜️Совместная работа по данным стратегиям и моделям под Ваши запросы, под Ваш психотип и под Ваши предпочтения
              <br />
              <br />
              В ходе изучения данного модуля Вы познакомитесь практически со всеми моими разработками за 13-летний период.
              Научитесь понимать, как они работают.
              Также будете знать, почему одни модели работают, а другие нет.
              Как правильно делать выводы по каждой из них.
              Будете уверены в своих будущих моделях и методах их разработки.
              </div></span>
          </div> 
        </SwiperSlide>
        <SwiperSlide>
          <div classname="card"> 
          <span>
            <div>
              <div className="heading">8 Модуль</div>
              <br />
              ⚜️Самостоятельный отбор инструментов
              <br />
              ⚜️Ваш собственный анализ и комбинация инструментов
              <br />
              ⚜️Совместная корректировка стратегии
              <br />
              ⚜️Совместная разработка плана действий
              <br />
              ⚜️Самостоятельная покупка инструментов в Ваш собственный инвестиционный портфель
              <br />
              ⚜️Форма для НацБанка, а также налоговая отчетность
              <br />
              <br />
              В ходе изучения данного модуля Вы составите собственный инвестиционный портфель, за которым Вы будете ухаживать и взращивать его без посторонней помощи, советов и консультаций.
              Вы в полной мере овладеете всеми базовыми, продвинутыми и собственно разработанными успешными методами анализа и синтеза инвестиционных портфелей как для собственного счета, так и для корпоративного.
              </div></span>
          </div> 
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
