import React from "react";

export default function Reviews({ review }) {
  return (
    <div className="review" key={review.id}>
      <div className="review__nameTime">
        <strong className="user__reviewName">{review.email}</strong>{" "}
        <span className="user__reviewDate">{review.date}</span>
      </div>
      <div className="user__reviewBody">{review.body}</div>
    </div>
  );
}
