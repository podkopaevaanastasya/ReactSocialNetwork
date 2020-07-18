import React from 'react';
import * as serviceWorker from './serviceWorker';
import store from "./Redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";

    //BrowserRouter помогает переключать страницы, нужно оборачивать лишь 1 раз!
//hash router url../#/...
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App
                //state={state}
                //.bind(store) связывает коллбэк с владельцем этой функции
                //если не забиндить коллбэк, то он выполнится от лица объекта, который его вызовет (props в нашем случае)
                //dispatch={store.dispatch.bind(store)}
                />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
