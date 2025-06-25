import { ArrowRightIcon, ChatCircleIcon, MapPinIcon, ShoppingCartIcon } from '@phosphor-icons/react';
import styles from './pedido.module.css';
import capa from '../../assets/capa_site.png'
export const Pedido: React.FC = () => {

    return (
        <div className={styles.container} >
            <header className={styles.header_pedido}>
                <div className={styles.header_icone}>
                    <ChatCircleIcon size={18} />
                    <h1>Marujinho</h1>
                </div>
                <ShoppingCartIcon size={18} color='#8C8D8BFF' />
            </header>

            <hr />

            <div className={styles.capa}>
                <img src={capa} alt="capa do site" className={styles.img_capa} />
                <div className={styles.aviso}>
                    <MapPinIcon size={18} />
                    <span>
                        <p className={styles.aviso_importante}>Aviso Importante!</p>
                        <p className={styles.aviso_entregas}>Entregas apenas no bairro Mucuripe, a pé, garantindo frescor e agilidade.</p>
                    </span>
                </div>
            </div>

            <section className={styles.carrinho}>
                <div className={styles.qtd_pedido}>
                    <ShoppingCartIcon size={18} color='#FFD573' />
                    <p className={styles.itens}>X itens(s) no carrinho</p>
                </div>
                <div className={styles.total_pedido}>
                    <p className={styles.total}>Total: R$ 5.00</p>
                    <button className={styles.btn_finalizar}>
                        Finalizar pedido
                        <ArrowRightIcon size={10} />
                    </button>
                </div>
            </section>
        </div>
    )
}