export {};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootNativeStackParamList, RootDrawerParamList {}
  }

  type RootNativeStackParamList = {
    Drawer: undefined;
  };

  type RootDrawerParamList = {
    Categories: undefined;
    Favorites: undefined;
  };
}
