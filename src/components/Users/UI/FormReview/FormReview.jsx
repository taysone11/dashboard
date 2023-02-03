import React, { useState } from "react";
import MyInput from "../../input/MyInput";

export default function FormReview({ addComment }) {
  const [review, setReview] = useState({ body: "", email: "" });

  var myDate = new Date();
  var Month =
    myDate.getMonth() + 1 < 10
      ? "0" + (myDate.getMonth() + 1)
      : myDate.getMonth() + 1;
  var datePublicate =
    myDate.getDate() + "." + Month + "." + myDate.getFullYear();

  function addNewReview(e) {
    e.preventDefault();
    if (review.body.length > 0 && review.email.length > 0) {
      const newComment = {
        ...review,
        id: Date.now(),
        date: datePublicate,
      };
      addComment(newComment);
      setReview({ body: "", email: "" });
    }
  }

  return (
    <div className="user__formReview">
      <form action="">
        <div className="reviews__inputs">
          <MyInput
            value={review.email}
            className="user__reviewFormName"
            onChange={(e) => setReview({ ...review, email: e.target.value })}
            type="text"
            placeholder="Your name"
          />
          <textarea
            value={review.body}
            className="user__reviewFormBody"
            onChange={(e) => setReview({ ...review, body: e.target.value })}
            type="text"
            placeholder="Your review"
          />
        </div>
        <div>
          <button className="userId__btnComment" onClick={addNewReview}>
            publish
          </button>
        </div>
      </form>
      <div></div>
    </div>
  );
}
