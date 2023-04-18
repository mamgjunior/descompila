import { Link } from "react-router-dom";

function HeaderPartial() {
    return (
        <div class="container text-center">
            <div class="row">
                <div class="col">
                    <nav class="navbar navbar-expand-lg bg-body-tertiary">
                        <div class="container-fluid">
                            {/* <a class="navbar-brand" href="#">DescomPlin</a> */}
                            DescomPlin
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/">Home</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="minhas-pastas">Minhas pastas</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default HeaderPartial;