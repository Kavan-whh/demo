import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Struct from './components/struct.jsx';

class App extends Component {
    render() {
        return (
            <div className="App">
              {/* 头部*/}
              <section className="">
                {/* 左边组织架构 */}
                <Struct className="left">

                </Struct>
                {/*  右边面板*/}


              </section>

            </div>
        );
    }
}

export default App;
