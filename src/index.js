import React from 'react';

import ReactDOM from 'react-dom';

import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

import CadastroVideo from './pages/cadastro/Video';

import CadastroCategoria from './pages/cadastro/Categoria';

import EditarCategoria from './pages/cadastro/Editar';

// Desafio

const Pagina404 = () => (<div>Página 404</div>);

ReactDOM.render(

  // BrowserRouter: Tudo que tiver dentro é que será roteado

  // Se não usar o "exact", vai ser encontrado a "/" e ele não ira proseguir na rota.

  // Se eu não passar o 'path' ele vai executar o component independente da rota digita no browser

  <BrowserRouter>

    <Switch>

      <Route path="/" component={Home} exact />

      <Route path="/cadastro/video" component={CadastroVideo} />

      <Route path="/cadastro/categoria" component={CadastroCategoria} />

      <Route path="/cadastro/:id" component={EditarCategoria} />

      <Route component={Pagina404} />

    </Switch>

  </BrowserRouter>,

  document.getElementById('root'),

);
