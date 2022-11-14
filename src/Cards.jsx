const Cards = (props) => {

	const { cards, handleClick } = props;

	return (
		<div className="cards-container">
				{cards.map((card) => (
					<div className="card" onClick={handleClick} key={card.id} data-key={card.id}>
						<img src={card.src}/>
						<p>{card.text}</p>
					</div>
				))}
		</div>
	)
}

export default Cards
