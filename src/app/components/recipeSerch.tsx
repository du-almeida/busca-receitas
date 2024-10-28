"use client";

import { useState } from "react";
import axios from "axios";

interface Recipe {
  label: string;
  image: string;
  ingredientLines: string[];
  url: string;
}

interface RecipeHit {
  recipe: Recipe;
}

// Dicionário simples para traduzir ingredientes
const ingredientDictionary: { [key: string]: string } = {
  maçã: "apple",
  banana: "banana",
  laranja: "orange",
  morango: "strawberry",
  abacaxi: "pineapple",
  uva: "grape",
  limão: "lemon",
  pêssego: "peach",
  tomate: "tomato",
  cebola: "onion",
  alho: "garlic",
  cenoura: "carrot",
  batata: "potato",
  brócolis: "broccoli",
  espinafre: "spinach",
  couve: "kale",
  arroz: "rice",
  quinoa: "quinoa",
  aveia: "oats",
  "farinha de trigo": "flour",
  milho: "corn",
  feijão: "bean",
  frango: "chicken",
  "carne bovina": "beef",
  porco: "pork",
  peixe: "fish",
  camarão: "shrimp",
  leite: "milk",
  queijo: "cheese",
  iogurte: "yogurt",
  manteiga: "butter",
  "creme de leite": "cream",
  sal: "salt",
  pimenta: "pepper",
  "azeite de oliva": "olive oil",
  vinagre: "vinegar",
  mostarda: "mustard",
  "molho de soja": "soy sauce",
  amêndoas: "almonds",
  "castanha de caju": "cashew",
  nozes: "walnuts",
  "semente de chia": "chia seeds",
  linhaça: "flaxseed",
  açúcar: "sugar",
  chocolate: "chocolate",
  mel: "honey",
  baunilha: "vanilla",
  gelatina: "gelatin",
  // Adicione mais ingredientes conforme necessário
};

const RecipeSearch: React.FC = () => {
  const [ingredient, setIngredient] = useState<string>("");
  const [recipes, setRecipes] = useState<RecipeHit[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const apiId = "3604410a"; // Substitua com sua API ID
  const apiKey = "5709e285216615e66b3338490856617d"; // Substitua com sua API KEY

  const translateIngredient = (input: string): string => {
    return ingredientDictionary[input.toLowerCase()] || input; // Retorna a tradução ou o próprio ingrediente
  };

  const fetchRecipes = async () => {
    setLoading(true);
    setError(null);
    try {
      const translatedIngredient = translateIngredient(ingredient.trim());
      const response = await axios.get(
        `https://api.edamam.com/search?q=${translatedIngredient}&app_id=${apiId}&app_key=${apiKey}`
      );
      setRecipes(response.data.hits);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        const message = err.response.data.message || "Erro desconhecido.";
        setError(`Erro: ${message}`);
      } else {
        setError("Erro ao buscar receitas. Tente novamente mais tarde.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (ingredient.trim()) {
      fetchRecipes();
    } else {
      setError("Por favor, insira um ingrediente.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-start h-screen font-sans">
      <section className="mt-8">
        <h1 className="text-3xl text-[#7C9473]">Buscador de Receitas</h1>
        <div className="flex flex-col justify-start items-center ">
          <input
            className="flex flex-col w-52 text-[#9D9D9D] rounded-lg  border-gray-300 p-2 m-5 transition-colors text-center placeholder:text-center"
            type="text"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
            placeholder="Digite um ingrediente"
          />
          <button
            className=" bg-[#7C9473] text-[#F0EBE3] w-52 h-10 rounded-lg p-2 mt-3"
            onClick={handleSearch}
            disabled={loading}
          >
            {loading ? "Carregando..." : "Buscar Receitas"}
          </button>
        </div>
      </section>
      <div className="w-[720px] flex flex-col justify-center items-center">
        {error && <p style={{ color: "red" }}>{error}</p>}
        {/* {recipes.length === 0 && !loading && <p>Nenhuma receita encontrada.</p>} */}
        {recipes.map(({ recipe }, index) => (
          <div
            key={index}
            className="flex flex-col m-5 p-4 items-center justify-center font-sans"
          >
            <h3 className="text-3xl text-[#A5B68D]">{recipe.label}</h3>
            <div className="flex items-center justify-start">
              <img
                src={recipe.image}
                alt={recipe.label}
                style={{ width: "100px", height: "auto", margin: "20px" }}
              />
              <p>
                <strong>Ingredientes:</strong>{" "}
                {recipe.ingredientLines.join(", ")}
              </p>
            </div>
            <a
              className="w-28 h-8 flex items-center justify-center rounded-lg m-5 bg-[#7C9473] text-[#F0EBE3]"
              href={recipe.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Receita
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSearch;
