import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from 'store/types';
import { createUser } from 'store/users/actions';

export default () => {
  const users = useSelector((state: AppState) => state.USERS);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleCreate = () => {
    dispatch(createUser({ name, email }));
  };

  return (
    <div className="hero is-fullheight is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            DuBank
          </h1>
          { users.isLoading ? <span>Carregando...</span> : null }

          <ul>
            {users.data.map((user) => (
              <li>{user.name} - {user.email}</li>
            ))}
          </ul>

          <hr />

          <div className="columns">
            <div className="column">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Insira seu nome"
              />
            </div>
            <div className="column">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Insira seu email"
              />
            </div>
            <div className="column">
              <button className="button" type="button" onClick={handleCreate}>Add usuário</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
