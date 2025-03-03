import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SigninWithEmail from "../screens/SigninWithEmail";

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="이메일로 시작하기" component={SigninWithEmail} />
    </Stack.Navigator>
  );
};

export default Auth;
