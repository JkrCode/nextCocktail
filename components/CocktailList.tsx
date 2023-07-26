import Cocktail from "./Cocktail"
import Drink from "./Interfaces/Drink"

interface CocktailListProps {
    data: Drink[];
    ingredients: string[]
}

const CocktailList: React.FC <CocktailListProps> = function({ data, ingredients }){

    const ListOfCocktails = data.map((item: Drink, index:number)=>{
        
        return(<div key={index} className="bg-white rounded-md shadow-md p-4 mb-4">
            <Cocktail  ingredients={ingredients} data={item}></Cocktail>
        </div>) 
    })

    return <div>
        {ListOfCocktails}
    </div>
}

export default CocktailList;