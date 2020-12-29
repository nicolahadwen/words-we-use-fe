import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './monitoring/reportWebVitals';
import store from './redux/store'
import { Provider } from 'react-redux'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <App />
        </Provider>
    </ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
