import React, { useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Contacto enviado:', form);
    alert('Mensaje enviado (revisa la consola)');
    setForm({ name: '', email: '', message: '' });
  }

  return (
    <div className="site">
      <header className="site-header">
        <div className="header-top">
          <div className="logo-circle" aria-hidden></div>
          <nav className="main-nav" aria-label="main navigation">
            <ul>
              <li>inicio</li>
              <li>programas</li>
              <li>acerca</li>
              <li>contacto</li>
            </ul>
          </nav>
        </div>
        <div className="hero">
          <p className="hero-sub">sena</p>
          <h1 className="hero-title">centro de gestion de mercadeo, logistica y tecnologias</h1>
        </div>
      </header>

      <main>
        <section className="programs">
          <h2>programas</h2>
          <div className="program-cards">
            <div className="card">adso</div>
            <div className="card">redes de datos</div>
            <div className="card">logistica</div>
          </div>
        </section>

        <section className="contact-section">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="nombre"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              name="email"
              type="email"
              placeholder="correo"
              value={form.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="mensaje"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
            />

            <button type="submit" className="btn-send">enviar</button>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <small>© {new Date().getFullYear()} Centro de Gestión</small>
      </footer>
    </div>
  );
}

export default App;
