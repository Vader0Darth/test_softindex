import UIKernel from "uikernel";
import validator from "../validator/Validator";
import _ from "underscore";

let UIKModel = JSON.parse(localStorage.getItem("model"));

const model = new UIKernel.Models.Grid.Collection({
  data: UIKModel ? UIKModel.data : [
    [
      1,
      {
        name: "Pace",
        surname: "White",
        age: 20,
        gender: "male",
        phone: "380-68-88-91-757",
      },
    ],
    [
      2,
      {
        name: "Evangeline",
        surname: "Terrell",
        age: 72,
        gender: "male",
        phone: "380-68-88-91-757",
      },
    ],
    [
      3,
      {
        name: "Roach",
        surname: "Potts",
        age: 14,
        gender: "male",
        phone: "380-68-88-91-757",
      },
    ],
  ],
  validator,
});

model.delete = function (id) {
  this.data = _.reject(this.data, (record) => record[0] === id);
  localStorage.setItem("model", JSON.stringify(model));
  return Promise.resolve(id);
};

export default model;
