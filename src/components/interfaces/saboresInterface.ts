export interface ISabor {
    id: number;
    nome: string;
    descricao?: string;
    preco: number;
    imagem_url?: string;
    quant_estoque: number;
    disponivel: boolean;
}