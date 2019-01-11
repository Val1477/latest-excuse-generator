import $ from "jquery";
import "bootstrap"; //breathecode dom for more explicit errors
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = () => {
  document.querySelector("#the-excuse").innerHTML = generatorExcuse();
  console.log("Hello Rigo from the console! ");
};

let generatorExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["jogger", "racoon", "dog", "driver", "comedian", "pinecone"];
  let action = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
  let possesion = ["homework", "toe", "car", "shoe"];
  let where = ["on the street", "in my house", "in my driveway"];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subjIndx = Math.floor(Math.random() * subject.length);
  let actionIndx = Math.floor(Math.random() * action.length);
  let possesionIndx = Math.floor(Math.random() * possesion.length);
  let whereIndx = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndx] +
    " " +
    subject[subjIndx] +
    " " +
    action[actionIndx] +
    " " +
    possesion[possesionIndx] +
    " " +
    where[whereIndx]
  );
};
