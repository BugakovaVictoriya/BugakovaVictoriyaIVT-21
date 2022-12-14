function Cappuccino(props) {
    const name = props.strName;
    return (
        <div className="about_coffee__container container">
            <h2>{name}</h2>
            <div>
                <h3>Что такое капучино?</h3>
                <p>Напиток на основе эспрессо со вспененным молоком. Вкус капучино идеально сбалансирован. 
                Благодаря свежесваренному эспрессо он насыщенно кофейный, с ярко выраженным ароматом, а из-за молока - мягкий, 
                с натуральной сладостью. Достоверной информации о возникновении капучино и точной версии происхождения названия нет. 
                Существуют легенды о монахах-капуцинах с севера Италии, добавивших молоко в кофе еще в XVI веке; о жителе Гренобля 
                господине Монене, придумавшем напиток в 1685 году; о том, что жители Вены назвали кофе со взбитым молоком в честь 
                капуцинского монаха Марко д'Авиано, вдохновившего христиан на борьбу с армией Оттоманской империи. Возможно, 
                всё дело в цвете напитка, отдаленно напоминающем коричневый цвет одеяния монахов (cappuccino -«капуцин»), или в том, 
                что пышная молочная пена на капучино напоминает капюшон (от итальянского cappuccio). В любом случае, сейчас капучино 
                является одним из самых известных кофейных напитков и пользуется заслуженной популярностью во всем мире.</p>
                <h3>Как готовить капучино?</h3>
                <p>Для стандартной порции капучино (120-150мл) используется чашка демитас с толстыми стенками. 
                Чашку заранее подогреть и приготовить в нее порцию эспрессо (30-50 мл). Капучино состоит из трёх примерно равных частей: 
                1/3 эспрессо, 1/3 молоко, 1/3 молочная пена. В питчер налить холодное молоко (+4○) 0.5-1.5% жирности. Учитывайте, 
                что вспенивание увеличит объем молока примерно вдвое. Вспенить при помощи капучинатора молоко до однородной консистенции, 
                гладкой, без крупных пузырей. Вспененное молоко аккуратно влить в чашку с эспрессо. Время приготовления капучино не 
                должно занять более 1.5 минут. Правильная температура готового капучино – 65○. По желанию, сверху капучино можно посыпать 
                корицей, какао или тертым шоколадом.</p>
            </div>
        </div>
    );
  }
  
  export default Cappuccino;