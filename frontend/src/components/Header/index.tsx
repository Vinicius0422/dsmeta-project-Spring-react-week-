import logo from '../../assets/images/logo.svg'

import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <div className='dsmeta-link-container'>
                    <button>
                        <a href="https://www.instagram.com/vinicius__gc/"> Desenvolvido por @vinicius__gc</a>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header