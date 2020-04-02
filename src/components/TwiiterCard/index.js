import React from "react";
import Toast from "react-bootstrap/Toast";
import "../global.css";
import Logo from "../../assets/twitter.svg";
function TwitterCard({ post }) {
  if (!post) {
    return <div></div>;
  }
  return (
    <li className="cardConfig mb-2">
      <Toast
        style={{
          maxWidth: "650px"
        }}
      >
        <Toast.Header closeButton={false}>
          <img
            src={Logo}
            className="rounded mr-2 hiperlink"
            rel="noopener noreferrer"
            alt=""
          />
          <strong className="mr-auto">Twitter</strong>
        </Toast.Header>
        <Toast.Body>
          <a
            href={`https://twitter.com/user/status/${post.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="card-text">{post.text}</p>
            <small className="d-flex align-items-end">@{post.user}</small>
          </a>
        </Toast.Body>
      </Toast>
    </li>
  );
}
export default TwitterCard;
