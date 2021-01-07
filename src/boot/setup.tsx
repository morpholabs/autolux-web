import React, { Component } from 'react';
import App from './App';

export default class Setup extends Component {
    componentDidCatch(error: any): void {
        console.warn(error);
    }

    render(): React.ReactNode {
        return <App />;
    }
}
