import AsyncStorage from "@react-native-async-storage/async-storage";

export const getValue = async (key, callback) => {
  const value = await AsyncStorage.getItem(key);
  callback(value);
};

export const setValue = async (key, value, callback) => {
  await AsyncStorage.setItem(key, value);
  callback();
};

export const getValueSynch = async (key) => {
  const value = await AsyncStorage.getItem(key);
  return value;
};

export const setValueSynch = async (key, value) => {
  await AsyncStorage.setItem(key, value);
  return value;
};
