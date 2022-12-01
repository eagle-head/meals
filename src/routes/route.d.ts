export {};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootNativeStackParamList, RootDrawerParamList {}
  }

  type RootNativeStackParamList = {
    Drawer: undefined;
  };

  type RootDrawerParamList = {
    Home: undefined;
    Notifications: undefined;
  };
}
