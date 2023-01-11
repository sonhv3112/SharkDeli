import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value); 
        console.log('store: ' + jsonValue); 
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        console.error(e); 
    }
}

export const getData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        console.log('load: ', JSON.parse(jsonValue)); 
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        console.error(e); 
    }
    return null; 
}

export const removeData = async (key) => { 
    try {
        await AsyncStorage.removeItem(key)
    } catch(e) {
        console.error(e); 
    }
}