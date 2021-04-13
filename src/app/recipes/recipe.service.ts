import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Masala Pasta',
            'This is a Simply a Test',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi87YH5rcTTfIHxoMv1ZTm9-kZdta82ZPKYA&usqp=CAU',
            [
                new Ingredient('Pasta', 1),
                new Ingredient('Masala', 2),
                new Ingredient('Cheese', 1)
            ]
        ),
        new Recipe(
            'Chat Salad',
            'This is a Simply a Test',
            'https://www.seriouseats.com/recipes/images/2016/03/20160328-channa-masala-recipe-6-625x469.jpg',
            [
                new Ingredient('Sprouts', 1),
                new Ingredient('Cheese', 2),
                new Ingredient('Corn', 1)
            ]
        )
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList( ingredients: Ingredient[] ) {
        this.shoppingListService.addIngredients(ingredients);
    }
}