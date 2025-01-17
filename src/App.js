import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProduitListComponent from './components/ProduitListComponent';
import AddProduitComponent from './components/AddProduitComponent';
import UpdateProduitComponent from './components/UpdateProduitComponent';

const App = () => {
    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/" element={<ProduitListComponent />} />
                    <Route path="/produits" element={<ProduitListComponent />} />
                    <Route path="/add-product" element={<AddProduitComponent />} />
                    <Route path="/update-product/:id" element={<UpdateProduitComponent />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;