import { StackNavigator } from "react-navigation";

import Category from "./Category";
import Recipes from "./Recipes";

export default StackNavigator(
  {
    Category: {
      screen: Category
    },
    Recipes: {
      screen: Recipes
    }
  },
  {
    initialRouteName: "Recipes"
  }
);
