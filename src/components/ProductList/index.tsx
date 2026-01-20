import React, { useEffect, useState } from "react";
import api from "../../services/api";
import type { ISabor } from "../../interfaces/saboresInterface";
import styles from './productList.module.css'

export const ProductList: React.FC = () => {
    const [sabores, setSabores] = useState<ISabor[]>([]);

    useEffect(() => {
        const fetchSabores = async () => {
            try {
                const response = await api.get("/sabores")
                const sabores = response.data;
                setSabores(response.data)
                console.log(sabores);
            } catch (error) {
                console.error("Erro ao buscar sabores:", error);
            }
        };
        fetchSabores()
    }, [])

    return (
        <>
            <div className="row row-cols-2 row-cols-md-3 g-4">
                {sabores.map((sabor) => (
                    <div className="col" key={sabor.id}>
                        <div className="card">
                            <img
                                src={sabor.imagem_url}
                                className="card-img-top"
                                alt={sabor.nome}
                            />
                            <div className="card-body">
                                <h5 className={`card-title ${styles.cardTitle}`}>
                                    {sabor.nome}
                                </h5>
                                <p className={`card-text ${styles.cardText}`}>
                                    R$ {(sabor.preco / 100).toFixed(2).replace('.', ',')}
                                </p>
                                <div className={` d-grid mx-auto ${styles.btn_add_carrinho}`}>
                                    <button className={styles.btn_primary} type="button">
                                        <i className="bi bi-cart"></i>
                                        Adicionar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}


