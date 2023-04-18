
function Card({id, image, title, total, onClick }) {
    return (
        <div 
            class="card text-bg-white"
        >
            <img src={image} class="card-img" alt="Card Text" />
            <div 
                class="card-img-overlay"
            >
                <button 
                    type="button" 
                    class="btn btn-primary" 
                    data-bs-toggle="modal" 
                    data-bs-target="#exampleModal"
                    onClick={() => onClick(id)}
                >
                    Salvar <span class="badge text-bg-secondary">{total}</span>
                </button>
            </div>
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
            </div>
        </div>
    );
}

export default Card;