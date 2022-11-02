import { v4 as uuidv4 } from "uuid";
import { useState, useContext } from "react";
import FeedbackForm from "../components/FeedbackForm";
import FeedbackList from "../components/FeedbackList";
import FeedbackStats from "../components/FeedbackStats";
import FeedbackData from "../data/FeedBackData";
import { FeedbackContext } from "../context/FeedbackContext";

const FeedbackPage = () => {
  const { feedback, setFeedback } = useContext(FeedbackContext);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  return (
    <div className="container">
      <FeedbackForm handleAdd={addFeedback} />
      <FeedbackStats />
      <FeedbackList handleDelete={deleteFeedback} />
    </div>
  );
};

export default FeedbackPage;
