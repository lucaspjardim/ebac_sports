import { useDispatch } from "react-redux"
import { Produto } from "../../App"
import * as S from './styles'

import { adicionar } from "../../store/reducers/carrinho"
import { favorito } from "../../store/reducers/favorito"

type Props = {
  produto: Produto
  estaNosFavoritos: boolean
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const Produtos = ({ produto, estaNosFavoritos }: Props) => {
  const dispatch = useDispatch()

  const adicionarCarrinho = () => {
    dispatch(adicionar(produto))
  }

  const adicionarFavoritos = () => {
    dispatch(favorito(produto))
  }
  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={adicionarFavoritos} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={adicionarCarrinho} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default Produtos
