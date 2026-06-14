import {
  Card,
  CardContent,
  Typography
} from "@mui/material";

import "../styles/CustomerReviews.css";

function CustomerReviews() {
  const reviews = [
    {
      name: "Raven",
      review: "Amazing food and fast delivery."
    },
    {
      name: "Deva",
      review: "Loved the burgers and fries."
    },
    {
      name: "Aruna",
      review: "Affordable and tasty meals."
    }
  ];

  return (
    <div>
      <h2>Customer Reviews</h2>

      <div className="review-grid">
        {reviews.map((r, index) => (
          <Card key={index}>
            <CardContent>
              <Typography variant="h6">
                {r.name}
              </Typography>

              <Typography>
                {r.review}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CustomerReviews;