import React from "react";
import Toast from "react-bootstrap/Toast";
import "../global.css";
import Logo from "../../assets/acorda-cidade.png";
function AcordaCidadeCard({ post }) {
  if (!post) {
    return <div></div>;
  }
  return (
    <li className="cardConfig">
      <Toast
        style={{
          maxWidth: "650px"
        }}
      >
        <Toast.Header closeButton={false}>
          <img src={Logo} className="rounded mr-2" alt="Acorda Cidade" />
          <strong className="mr-auto">Acorda Cidade</strong>
        </Toast.Header>

        <Toast.Body>
          <a href={post.link} target="_blank" rel="noopener noreferrer">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.content}</p>
          </a>
        </Toast.Body>
      </Toast>
    </li>
  );
}
export default AcordaCidadeCard;
