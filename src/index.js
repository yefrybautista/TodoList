import React from "react";
import ReactDom from "react-dom";
import {Provider} from 'react-redux'
import App from "./app";
import store from "./reducers/store.redux";
import 'bulma/css/bulma.css'

const IndexPage = ()=>{

    return (<React.StrictMode>
                <Provider store={store}>
                    <App />
                </Provider>
            </React.StrictMode>)
}
ReactDom.render(<IndexPage/>, document.getElementById('root'))