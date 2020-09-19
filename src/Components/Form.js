import React, { useEffect, useState } from "react";
import UIKernel from "uikernel";
import model from ".././Model/Model";
import columns from "../Model/Columns";

import "./style/form.css";

export const Form = () => {
  const [isInit, setIsInit] = useState(false);
  const [form, setForm] = useState(new UIKernel.Form());
  const [formData, setFormData] = useState();

  useEffect(() => {
    form.init({
      fields: ["name", "surname", "phone", "age", "gender"],
      model: new UIKernel.Adapters.Grid.ToFormCreate(model, {
        name: "",
        surname: "",
        phone: "",
        age: 18,
        gender: 1,
      }),
      submitAll: true,
      partialErrorChecking: true,
    });
    form.addChangeListener(onFormChange);
    setFormData(form.getAll());
    setIsInit(true);
  }, [form]);

  function onFormChange(e) {
    setFormData(e);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    form.submit().then(() => {
      localStorage.setItem("model", JSON.stringify(model));
    });
  }
  
  if (!isInit) {
    return <p>Wait...</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={"formEllement"}>
        <div className={"formEllement_control"}>
          <label>First Name</label>
          <div>
            <input
              type="text"
              placeholder="Alyx"
              className="form-control"
              onChange={form.updateField.bind(form, "name")}
              onFocus={form.clearError.bind(form, "name")}
              onBlur={form.validateForm}
              value={formData.fields.name.value}
            />
          </div>
        </div>
        {formData.fields.name.errors && (
          <small className="control-label">
            {formData.fields.name.errors[0]}
          </small>
        )}
      </div>

      <div className={"formEllement"}>
        <div className={"formEllement_control"}>
          <label>Last Name</label>
          <div>
            <input
              type="text"
              placeholder="Alyx"
              className="form-control"
              onChange={form.updateField.bind(form, "surname")}
              onFocus={form.clearError.bind(form, "surname")}
              onBlur={form.validateForm}
              value={formData.fields.surname.value}
            />
          </div>
        </div>

        {formData.fields.surname.errors && (
          <small className="control-label">
            {formData.fields.surname.errors[0]}
          </small>
        )}
      </div>

      <div className={"formEllement"}>
        <div className={"formEllement_control"}>
          <label>Phone</label>
          <div>
            <input
              type="text"
              placeholder="Alyx"
              className="form-control"
              onChange={form.updateField.bind(form, "phone")}
              onFocus={form.clearError.bind(form, "phone")}
              onBlur={form.validateForm}
              value={formData.fields.phone.value}
            />
          </div>
        </div>

        {formData.fields.phone.errors && (
          <small className="control-label">
            {formData.fields.phone.errors[0]}
          </small>
        )}
      </div>

      <div className={"formEllement"}>
        <label>Gender</label>
        <div>
          <UIKernel.Editors.Select
            options={[
              [1, "Male"],
              [2, "Female"],
            ]}
            className="form-control"
            onChange={form.updateField.bind(form, "gender")}
            onFocus={form.clearError.bind(form, "gender")}
            onBlur={form.validateForm}
            value={formData.fields.gender.value}
          />
        </div>
      </div>

      <div className={"formEllement"}>
        <label>Age</label>
        <div>
          <UIKernel.Editors.Number
            placeholder="18"
            className="form-control"
            onChange={form.updateField.bind(form, "age")}
            onFocus={form.clearError.bind(form, "age")}
            onBlur={form.validateForm}
            value={formData.fields.age.value}
          />
          {formData.fields.age.errors && (
            <small className="control-label">
              {formData.fields.age.errors[0]}
            </small>
          )}
        </div>
      </div>

      <button type={handleSubmit}>add</button>
    </form>
  );
};
