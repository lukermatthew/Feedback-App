import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import Card from "./Card";

const FeedbackItem = ({ item, handleDelete }) => {
  const [reverse, setReverse] = useState(false);

  // const [rating, SetRating] = useState(7);
  // const [text, setText] = useState("This is an example of a feedback item");

  return (
    <Card reverse={reverse}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

// Card.defaultProps = {
//   reverse: false,
// };

export default FeedbackItem;
