import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button
} from "@mui/material";

function FoodCard({ item }) {
  return (
    <Card sx={{ width: 320 }}>
      <CardMedia
        component="img"
        height="180"
        image={item.image}
      />

      <CardContent>
        <Typography variant="h6">
          {item.name}
        </Typography>

        <Typography>
          {item.price}
        </Typography>

        <Button
          variant="contained"
          sx={{ mt: 2 }}
        >
          Add
        </Button>
      </CardContent>
    </Card>
  );
}

export default FoodCard;