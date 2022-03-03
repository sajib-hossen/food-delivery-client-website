import axios from "axios";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AddPruducts.css";

// const products = [
//   {
//     id: 1,
//     name: "Eggs Benedict Burger",
//     describe:
//       "Eggs Benedict, a brunch staple consisting of poached eggs and Canadian bacon or sliced ham on an English muffin, topped with hollandaise sauce (a rich and creamy concoction made with egg yolks, butter, lemon juice or vinegar, and various seasonings).It tastes like rich, creamy, lemony butter. Hollandaise is one of the French “Mother Sauces.” It is made by beating raw egg yolks with a pinch of salt and a squeeze of lemon juice. Then, over a hot water bath, clarified, melted butter is beaten in a thin stream into the egg yolks until you get a rich, creamy sauce.",
//     price: 500,
//     image: "https://i.ibb.co/cC18pDs/eggs-burger.png",
//   },
//   {
//     id: 2,
//     name: "Bief Burger",
//     describe:
//       "Beef burger patties are a very perishable food product with a maximum shelf life of 3 days at 4°C, due to a fast decrease of quality parameters and microbial growth. Although some additives listed in the Regulation EU 601 (2014) are allowed in fresh minced beef and meat preparations with antioxidant functionality, no additive with antimicrobial activity is permitted",
//     price: 450,
//     image: "https://i.ibb.co/F36MznN/bief-burger.png",
//   },
//   {
//     id: 3,
//     name: "Rice Bowl",
//     describe:
//       "Mostly, the rice bowl is convenient, and the ability to take in all the major food groups in one forkful cannot be underestimated. Donburi (丼, literally bowl, also abbreviated to  as a suffix, less commonly spelled domburi) is a Japanese rice-bowl dish consisting of fish, meat, vegetables or other ingredients simmered together and served over rice. Donburi meals are usually served in oversized rice bowls which are also called donburi. People are rushed for time but they still want something satisfying, Katz says.",
//     price: 700,
//     image: "https://i.ibb.co/Fn9Bx9X/rice-bowl.png",
//   },
//   {
//     id: 4,
//     name: "Delicious Pizza",
//     describe:
//       "Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot.The Neapolitan pizza, or Naples-style pizza, is made specifically with buffalo mozzarella (produced from the milk of Italian Mediterranean buffalo",
//     price: 1200,
//     image: "https://i.ibb.co/48q3FSK/delicious-pizza.png",
//   },
//   {
//     id: 5,
//     name: "French Fries",
//     describe:
//       "French fries, chips, finger chips, french-fried potatoes, or simply fries, are batonnet or allumette-cut deep-fried potatoes, originating from either Belgium or France. They are prepared by cutting the potato into even strips, then drying and frying it, usually in a deep fryer.French fries have a lot of fat and salt that could raise the risk of cardiovascular disease. During the years of this study, trans fat (a particularly unhealthy type of fat) had not yet been banned from the US market.",
//     price: 300,
//     image: "https://i.ibb.co/ZJH1CWd/french-fires.png",
//   },
//   {
//     id: 6,
//     name: "Sandwich",
//     describe:
//       "Sandwich, in its basic form, slices of meat, cheese, or other food placed between two slices of bread. Although this mode of consumption must be as old as meat and bread, the name was adopted only in the 18th century for John Montagu, 4th earl of Sandwich.Prepare a work-friendly packed lunch sarnie with added health benefits, including low-calorie, low-fat, calcium-rich and omega-3-rich options. Shop-bought sandwiches can be high in fat, salt and sugar, so making your own allows you to create healthier options",
//     price: 750,
//     image: "https://i.ibb.co/mTHJgMq/sandwich.png",
//   },
// ];

const AddProducts = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/products", data).then((res) => {
      if (res.data.insertedId) {
        alert("Successfully this product added");
        reset();
      }
      console.log(res);
    });
  };
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={6}></Col>
          <Col sm={12} md={6} lg={6}>
            <div className="addform">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  placeholder="Enter your product Name"
                  className="w-75 m-2"
                  type="text"
                  {...register("name", { required: true, maxLength: 20 })}
                />
                <textarea
                  className="w-75 m-2 p-4"
                  placeholder="Enter your  product description"
                  {...register("description")}
                />
                <input
                  className="w-75 m-2"
                  placeholder="Enter your  product price"
                  type="number"
                  {...register("price")}
                />
                <input
                  className="w-75 m-2"
                  placeholder="Enter your product image url"
                  type="text"
                  {...register("image")}
                />
                <input className="w-75 m-2" type="submit" />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddProducts;
