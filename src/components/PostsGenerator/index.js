import React from "react";
import AcordaCidadeCard from "../AcordaCidadeCard";
import TwitterCard from "../TwiiterCard";

function PostGenerator(props) {
  if (props.postListAC.length === 0 && props.postListTwitter.length === 0) {
    return (
      <div>
        <h2>Não foram encontrados posts nesse dia</h2>
      </div>
    );
  }
  return (
    <div>
      <ul>
        {props.postListTwitter.map(post => (
          <TwitterCard key={post.id} post={post} />
        ))}
      </ul>
      <ul>
        {props.postListAC.map(post => (
          <AcordaCidadeCard key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}

export default PostGenerator;
