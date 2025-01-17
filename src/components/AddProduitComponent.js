import React, { useState } from 'react';
import ProduitService from '../ProduitService';
import { useNavigate } from 'react-router-dom';

const AddProduitComponent = () => {
    const [nom, setName] = useState('');
    const [description, setDescription] = useState('');
    const [prix, setPrice] = useState('');
    const navigate = useNavigate();

    const saveProduct = (e) => {
        e.preventDefault();
        const produit = { nom, description, prix };
        ProduitService.createProduct(produit).then(() => {
            navigate('/produits');
        });
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Ajouter un Produit</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> Nom du Produit: </label>
                                    <input placeholder="Nom" name="nom" className="form-control"
                                        value={nom} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label> Description du Produit: </label>
                                    <input placeholder="Description" name="description" className="form-control"
                                        value={description} onChange={(e) => setDescription(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label> Prix du Produit: </label>
                                    <input placeholder="Prix" name="prix" className="form-control"
                                        value={prix} onChange={(e) => setPrice(e.target.value)} />
                                </div>
                                <button className="btn btn-success" onClick={saveProduct}>Sauvegarder</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduitComponent;