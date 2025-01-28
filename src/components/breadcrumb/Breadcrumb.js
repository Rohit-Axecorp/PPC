import React from "react";
import "./breadcrumb.css";

export default function Breadcrumb({ pageTitle }) {
  return (
    <section className="breadcrumb-section">
      <div className="container">
        <h1 className="page-title">{pageTitle}</h1>
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <a href="/" className="breadcrumb-link">Home</a>
          <span className="breadcrumb-separator">•</span>
          <span className="breadcrumb-current">{pageTitle}</span>
        </nav>
      </div>
    </section>
  );
}
