export {};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootNativeStackParamList, RootDrawerParamList {}
  }

  type RootNativeStackParamList = {
    Drawer: undefined;
    MealsOverview: undefined;
    MealDetail: undefined;
  };

  type RootDrawerParamList = {
    Categories: undefined;
    Favorites: undefined;
  };
}
