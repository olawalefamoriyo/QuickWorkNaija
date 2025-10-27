import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveToStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log("Error saving to storage", e);
  }
};

export const getFromStorage = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log("Error reading storage", e);
    return null;
  }
};

export const removeFromStorage = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log("Error removing from storage", e);
  }
};