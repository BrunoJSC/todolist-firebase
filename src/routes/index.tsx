import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";

import { onAuthStateChanged, User } from "firebase/auth";

import { View } from "react-native";
import { useEffect, useState } from "react";
import { auth, db } from "@utils/firebase";
import { Home } from "@screens/Home";

export function Routes() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "#1c1917" }}>
      <NavigationContainer>
        {user ? <Home /> : <AuthRoutes />}
      </NavigationContainer>
    </View>
  );
}
