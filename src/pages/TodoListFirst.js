import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Layout/Header";
import "./TodolistFirst.css";

const TodolistFirstPage = () => {
  const navigate = useNavigate();

  const handleRunClick = () => {
    // Çalıştır'a tıklandığında ikinci sayfaya geçiş yapılması için
    navigate("/todolistsecond");
  };

  return (
    <div className="welcome-a">
      <Header />
      <div className="welcome-container">
        <div className="welcome-message">
          <h1>Uygulamaya Hoş Geldiniz</h1>
          {/* Buton yerine bir div kullanarak tıklanabilir metin oluşturuyoruz burada onClick ile */}
          <div className="run-text" onClick={handleRunClick}>
            Çalıştır
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodolistFirstPage;
