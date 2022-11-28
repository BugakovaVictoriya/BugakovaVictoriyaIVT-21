function Espresso(props) {
    const name = props.strName;
    return (
        <div className="about_coffee__container container">
            <h2>{name}</h2>
            <div>
                <h3>Что такое эспрессо?</h3>
                <p>Эспрессо — это небольшое количество концентрированного кофе (30-40мл), 
                приготовленного в кофемашине путём прохождения через фильтр с молотым кофе горячей воды под давлением. 
                Вкус правильно приготовленного эспрессо поистине великолепен! Эспрессо раскрывает все уникальные 
                оттенки и нотки вкуса различных кофейных зерен. Именно с эспрессо начинается практически любая кофейная фантазия.</p>
                <h3>Откуда происходит эспрессо?</h3>
                <p>Эспрессо родом из Италии. Название кофе произошло от итальянского слова, 
                одно из значений которого - «выраженный». При приготовлении эспрессо, кофе «прессуется» под высоким 
                давлением для получения насыщенного, выраженного вкуса. Когда итальянцы заказывают кофе, они говорят 
                именно об эспрессо.</p>
                <h3>Виды эспрессо</h3>
                <p>Помимо традиционного эспрессо, существуют и другие виды напитка. 
                Самыми известными являются эспрессо макиато, ристретто и доппио.</p>
            </div>
        </div>
    );
  }
  
  export default Espresso;