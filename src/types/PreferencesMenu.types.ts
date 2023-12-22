/* TitleView Props */
export interface TitleViewProps {
  title: string;
}

/* AddCart Props */

export interface AddCartProps {
  price?: string;
}

/* Ingredient, Dish and Menu types */

type Ingredient = {
  id: number;
  name: string;
};

type Dish = {
  id: number;
  name: string;
  description: string;
  image: string;
  ingredients: Ingredient[];
};

type Menu = {
  id: number;
  name: string;
  description: string;
  dishes: Dish[];
};

export interface MenuProps {
  menu: Menu;
}

export interface DishProps {
  dish: Dish;
}

export interface IngredientProps {
  ingredient: Ingredient;
}
