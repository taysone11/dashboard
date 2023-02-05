import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { Link, useParams } from "react-router-dom";
import UsersApi from "../API/UsersApi";
import FormReview from "../components/Users/UI/FormReview/FormReview";
import Reviews from "../components/Users/UI/Reviews/Reviews";

export default function UserIdPage() {
  const [user, setUser] = useState({});
  const [reviews, setReviews] = useState([]);

  const parap = useParams();

  async function fetchUserId(id) {
    const response = await UsersApi.getIdUser(id);
    setUser(response.data);
  }
  async function fetchUserReviews(id, allRev) {
    const response = await UsersApi.getUserReviews(id);
    setReviews(response.data);
  }

  function addComment(review) {
    setReviews([review, ...reviews]);
  }

  // useEffect(() => {
  //    UsersApi.postReviews(parap.id,reviews)
  // },[reviews])

  useEffect(() => {
    fetchUserId(parap.id);
    fetchUserReviews(parap.id);
  }, []);

  // useEffect(() => {
  //     console.log(JSON.parse(localStorage.getItem('reviews' + parap.id)))
  // },[])
  //     useEffect(() => {
  //         localStorage.setItem('reviews' + parap.id, JSON.stringify(reviews))
  //     },[reviews])

  return (
    <main>
      <h2 style={{ fontFamily: "Unbounded, cursive" }}>Profile</h2>
      <div className="UsersIdPage">
        <div className="userId_PersonInfo">
          <div className="userId__photo">PHOTO</div>
          <div className="userId__wrapper">
            <div className="userId__contacts">
              <Link to="">{user.phone}</Link>
              <Link to="">{user.website}</Link>
            </div>
            <div className="userId__address">
              <strong>city</strong>
              <strong>street</strong>
              <strong>suite</strong>
              <strong>zipcode</strong>
            </div>
          </div>
        </div>

        <div className="userId__company">
          <strong>Name company</strong>
          <span>catchPhrase</span>
          <span>bs</span>
        </div>
        <hr style={{ margin: "10px", width: "100%" }}></hr>
        <FormReview addComment={addComment} />
        <div className="user__reviewList">
          {reviews.map((review) => (
            <Reviews review={review} key={review.name} />
          ))}
        </div>
      </div>
    </main>
  );
}
