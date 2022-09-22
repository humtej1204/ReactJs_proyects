import './opinionCard.scss';

export function OpinionCard({ imagen, personLvl, title, description }) {
    
    return (
        <div className="cards">
            <div className="card">
                <img src={imagen} alt=""/>
                <div className="card-content">
                    <h3>{personLvl}</h3>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}