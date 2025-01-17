import React, { useState, useEffect } from 'react';
import ProduitService from '../ProduitService';
import { Link } from 'react-router-dom';

const ProduitListComponent = () => {
    const [produits, setProducts] = useState([]);

    useEffect(() => {
        ProduitService.getProduits().then((res) => {
            setProducts(res.data);
        });
    }, []);

    return (
        <div>
            <h2 className="text-center">Liste de Produits</h2>
            <div className="row">
                <Link to="/add-product" className="btn btn-primary">Ajouter un Produit</Link>
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Nom du Produit  </th>
                            <th>Description du Produit</th>
                            <th>Prix du Produit</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produits.map(produit => (
                            <tr key={produit.id}>
                                <td>{produit.name}</td>
                                <td>{produit.description}</td>
                                <td>{produit.price}</td>
                                <td>
                                    <Link to={`/update-product/${produit.id}`} className="btn btn-info">Modifier</Link>
                                    <button className="btn btn-danger" onClick={() => ProduitService.deleteProduit(produit.id).then(() => setProducts(produits.filter(p => p.id !== produit.id)))}>Supprimer</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProduitListComponent;