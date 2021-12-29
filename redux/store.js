import { createStore, applyMiddleware } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    // blacklist: [],
};

const pReducer = persistReducer(persistConfig, reducers);

const store = createStore(pReducer, composeWithDevTools( applyMiddleware(thunk)));

const persister = persistStore(store);

export { store, persister };
