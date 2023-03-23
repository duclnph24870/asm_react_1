import CreateProduct from './components/CreateProducts';
import { Route, Routes } from 'react-router';
import { BrowserRouter, Link, NavLink } from 'react-router-dom';
import './App.css';
import ProductEdit from './components/EditProduct';
import Products from './components/Product';

function App() {
    return (
        <div className="App flex h-[100vh] w-[100vw] items-center justify-center">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/create"
                        element={
                            <div className="header">
                                <ul>
                                    <li>
                                        <NavLink activeClassName="text-blue-600" to="/create">
                                            Create
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink activeClassName="text-blue-600" to="/list">
                                            List
                                        </NavLink>
                                    </li>
                                </ul>
                                <CreateProduct />
                            </div>
                        }
                    ></Route>
                    <Route
                        path="/edit"
                        element={
                            <div className="header">
                                <ul>
                                    <li>
                                        <NavLink activeClassName="text-blue-600" to="/create">
                                            Create
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink activeClassName="text-blue-600" to="/list">
                                            List
                                        </NavLink>
                                    </li>
                                </ul>
                                <ProductEdit />
                            </div>
                        }
                    ></Route>
                    <Route
                        path="/list"
                        element={
                            <div className="header">
                                <ul>
                                    <li>
                                        <NavLink activeClassName="text-blue-600" to="/create">
                                            Create
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink activeClassName="text-blue-600" to="/list">
                                            List
                                        </NavLink>
                                    </li>
                                </ul>
                                <Products />
                            </div>
                        }
                    ></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
