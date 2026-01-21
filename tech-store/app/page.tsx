'use client' // <--- Obrigatório quando usa Hooks

import { useProducts } from "@/hooks/useProducts"

export default function Home() {
  // Olha como o código fica limpo! 
  // O hook já devolve: data (os dados), isLoading (carregando) e isError (erro)
  const { data: products, isLoading, isError } = useProducts()

  if (isLoading) return <div className="text-center p-10">Carregando loja...</div>
  if (isError) return <div className="text-center p-10 text-red-500">Erro ao carregar!</div>

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">
        TechStore 🛒
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {/* O TypeScript sabe que 'product' tem id, title, price, etc. */}
        {products?.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center">
            
            <img src={product.image} alt={product.title} className="w-32 h-32 object-contain mb-4" />
            
            <h2 className="font-bold text-sm text-gray-700 text-center line-clamp-2">
              {product.title}
            </h2>
            
            <p className="text-green-600 font-bold mt-2">
              $ {product.price.toFixed(2)}
            </p>
            
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 w-full">
              Adicionar
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}