import React from "react";
import "./Error.css";

function Error(props) {
  return (
    <div className="error">
      <p className="error-message">
        Что-то пошло не так, попробуйте перезагрузить страницу.
      </p>
    </div>
  );
}

export default Error;
