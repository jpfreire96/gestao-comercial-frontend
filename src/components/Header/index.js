import'./header.css';

function Header() {
    return (
        <header className='menu'>
            <a href='/'>
                <div className='area-logo'>
                    <div className='logo'> </div>
                </div>
            </a>
            <div className='area-titulo'>
                <div className='titulo'>SISTEMA DE GESTÃO DE ESTOQUE</div>
            </div>
        </header>
    )
}

export default Header;