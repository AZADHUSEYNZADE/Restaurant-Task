import React from "react";
import "../../styles/new-meal.scss";
import { useForm } from "react-hook-form";
import { Container } from "../../components/Container";
import { Flex } from "../../components/Flex";
import { useFoodsMutation } from "../../queries";
import { useQueryClient } from "react-query";
import { QUERY_KEYS } from "../../queries/queryKeys";

function NewFood() {
  const mutation = useFoodsMutation();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      duration: 1,
      price: 1,
      name: "",
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data, {
      onError: () => {
        alert("Something went wrong");
      },
      onSuccess: () => {
        reset();
        alert("Successfully added new food");
        queryClient.invalidateQueries(QUERY_KEYS.FOODS);
      },
    });
  };

  return (
    <Container>
      <Flex>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="">Duration (in minutes)</label> <br />
            <input
              type="number"
              name="duration"
              {...register("duration", {
                required: "This field is required",
                min: { value: 1, message: "Value can not be lesser than 1" },
                max: {
                  value: 100,
                  message: "Value can not be greater than 100",
                },
              })}
            />
            <br />
            {errors?.duration?.message && (
              <span style={{ color: "red", fontSize: "0.8rem" }}>
                {errors.duration.message}
              </span>
            )}
          </div>
          <div>
            <label htmlFor="">Price</label> <br />
            <input
              type="number"
              name="price"
              {...register("price", {
                required: "This field is required",
                min: { value: 1, message: "Value can not be lesser than 1" },
                max: {
                  value: 100,
                  message: "Value can not be greater than 100",
                },
              })}
            />
            <br />
            {errors?.price?.message && (
              <span style={{ color: "red", fontSize: "0.8rem" }}>
                {errors.price.message}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="">Name</label> <br />
            <input
              type="text"
              name="name"
              {...register("name", {
                required: "This field is required",
                minLength: {
                  value: 2,
                  message: "Length can not be lesser than or equal to 2",
                },
                maxLength: {
                  value: 100,
                  message: "Length can not be greater than 100",
                },
              })}
            />
            <br />
            {errors?.name?.message && (
              <span style={{ color: "red", fontSize: "0.8rem" }}>
                {errors.name.message}
              </span>
            )}
          </div>

          <button>Add</button>
        </form>
      </Flex>
    </Container>
  );
}

export default NewFood;
