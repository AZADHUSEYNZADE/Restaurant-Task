import React from "react";
import "../styles/new-meal.scss";
import { useForm } from "react-hook-form";

function NewMeal() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      duration: 0,
      price: 0,
      name: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            name="duration"
            {...register("duration", { required: true })}
          />
        </div>
        <div>
          <label htmlFor="">Price</label>
          <input
            type="number"
            name="price"
            {...register("price", { required: true })}
          />
        </div>

        <div>
          <label htmlFor="">Name</label>
          <input
            type="number"
            name="name"
            {...register("name", { required: true })}
          />
        </div>

        <button className="addedBtn">Save Meal</button>
      </form>
    </div>
  );
}

export default NewMeal;
