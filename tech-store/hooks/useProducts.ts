import { useQuery } from '@tanstack/react-query'
import { Product } from '@/types/Product' // Importamos o "molde" que você criou

// Função pura que busca os dados (igual fazíamos antes)
const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch('https://fakestoreapi.com/products')
  if (!response.ok) {
    throw new Error('Erro ao buscar produtos')
  }
  return response.json()
}

// O Hook Mágico
export function useProducts() {
  return useQuery({
    queryKey: ['products'], // Chave única (como um ID do cache)
    queryFn: fetchProducts, // Quem busca os dados
    staleTime: 1000 * 60 * 5, // (Opcional) Os dados ficam "frescos" por 5 minutos. Não refaz fetch à toa!
  })
}