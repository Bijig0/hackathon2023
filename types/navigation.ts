import { NavigatorScreenParams } from "@react-navigation/native";

declare global {
  //   type HomeStackParamList = {
  //     RestaurantDetails: QueueDetailsParams;
  //     RestaurantList: undefined;
  //   };

  type MainAppParamList = {
    Home: undefined;
    CameraScreen: undefined;
    Profile: undefined;
    // Find a way to delete these below types, right now it throws an error
  };

  type AuthStackParamList = {
    SignUp: undefined;
    Login: undefined;
  };
  type TRootParamList = {
    // Auth: NavigatorScreenParams<AuthStackParamList>;
    // MainApp: NavigatorScreenParams<MainAppParamList>;
    Auth: NavigatorScreenParams<AuthStackParamList>;
    MainApp: NavigatorScreenParams<MainAppParamList>;
    Details: undefined;
  };
  type AppParamList = TRootParamList;
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TRootParamList {}
  }
}

export { AppParamList };
