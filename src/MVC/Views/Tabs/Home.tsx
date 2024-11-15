import { firebase } from "@react-native-firebase/auth";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default function Home() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const signInAnonymously = async () => {
      try {
        const userCredential = await firebase.auth().signInAnonymously();
        setUserId(userCredential.user.uid);  // Set the user ID to display
        console.log("User signed in anonymously with UID:", userCredential.user.uid);
      } catch (error) {
        console.error("Error signing in anonymously:", error);
      }
    };

    // Call the function to sign in as soon as the component mounts
    signInAnonymously();
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-lg font-bold text-black">Home Screen</Text>
      {userId && ( // Display user ID if it is set
        <Text className="text-base text-gray-700">UserID: {userId}</Text>
      )}
    </View>
  );
}
