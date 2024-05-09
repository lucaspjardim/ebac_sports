import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Produto } from "../../App";

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritoSlice = createSlice({
  name:'favorito',
  initialState,
  reducers: {
    favorito: (state, action: PayloadAction<Produto>) => {
      const f = action.payload

      if(state.itens.find(produto => produto.id === f.id)) {
        alert('Item já adicionado!')
      } else {
        state.itens.push(f)
      }
    }
  }
})

export const { favorito } = favoritoSlice.actions
export default favoritoSlice.reducer
