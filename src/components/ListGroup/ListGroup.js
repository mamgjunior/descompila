function ListGroup({ items = [] }) {
    return (
        <ul class="list-group ">
            {
                items.map(item => (
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                            <div class="fw-bold">{item.title}</div>
                        </div>
                        <span class="badge bg-primary rounded-pill">{item.total}</span>
                    </li>
                ))
            }
        </ul>
    );
}

export default ListGroup;