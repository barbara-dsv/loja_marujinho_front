import styles from './pedido.module.css';
export const Pedido: React.FC = () => {

    return (
        <div className={styles.conteiner}>
            <header className={styles.header_pedido}>
                <div className={styles.header_icone}>
                    <i className={`bi bi-emoji-wink-fill ${styles.emoji_wink}`}></i>
                    <h1 className={styles.titulo}>Marujinho</h1>
                </div>
                <i className="bi bi-cart"></i>
            </header>
            <hr />
            <div className={styles.capa}>
                <img src="https://res.cloudinary.com/doymbnklx/image/upload/v1752708290/marujinho/xrikkwj08sgwiannuwxa.png" alt="capa do site" className={styles.img_capa} />
                <div className={styles.aviso}>
                    <i className="bi bi-geo-alt"></i>
                    <span>
                        <p className={styles.aviso_importante}>Aviso Importante!</p>
                        <p className={styles.aviso_entregas}>Entregas apenas no bairro Mucuripe, a pé, garantindo frescor e agilidade.</p>
                    </span>
                </div>
            </div>
            <hr />
            <section className={styles.carrinho}>
                <div className={styles.qtd_pedido}>
                    <i className={`bi bi-cart ${styles.cart_icon}`}></i>
                    <p className={styles.itens}>X itens(s) no carrinho</p>
                </div>
                <div className={styles.total_pedido}>
                    <p className={styles.total}>Total: R$ 00.00</p>
                    <button className={styles.btn_finalizar}>
                        Finalizar pedido
                        <i className={`bi bi-arrow-right-short ${styles.arrow_right}`}></i>
                    </button>
                </div>
            </section>
        </div>
    )
}