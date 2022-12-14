import { createContext, useState } from "react";

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This item is from context",
      rating: 10,
    },
  ]);
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        setFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
