import React from "react";
import { useQueryClient } from "react-query";
import { useWaitersMutation } from "../../queries";
import { useForm } from "react-hook-form";
import { QUERY_KEYS } from "../../queries/queryKeys";
import { Container } from "../../components/Container";
import { Flex } from "../../components/Flex";

function NewWaiter() {
  const mutation = useWaitersMutation();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      gender: "",
      birthdate: "",
      avatar: "",
    },
  });

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("firstname", data.firstname);
    formData.append("lastname", data.lastname);
    formData.append("email", data.email);
    formData.append("birthdate", data.birthdate);
    formData.append("gender", data.gender);
    formData.append("avatar", data.avatar[0]);

    mutation.mutate(formData, {
      onError: () => {
        alert("Something went wrong");
      },
      onSuccess: () => {
        reset();
        alert("Successfully added new waiter");
        queryClient.invalidateQueries(QUERY_KEYS.WAITERS);
      },
    });
  };

  return (
    <Container>
      <Flex>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="">Firstname</label> <br />
            <input
              type="text"
              name="firstname"
              {...register("firstname", {
                required: "This field is required",
                minLength: {
                  value: 2,
                  message: "Value can not be lesser than 2",
                },
              })}
            />
            <br />
            {errors?.firstname?.message && (
              <span style={{ color: "red", fontSize: "0.8rem" }}>
                {errors.firstname.message}
              </span>
            )}
          </div>
          <div>
            <label htmlFor="">Lastname</label> <br />
            <input
              type="text"
              name="lastname"
              {...register("lastname", {
                required: "This field is required",
                minLength: {
                  value: 2,
                  message: "Value can not be lesser than 2",
                },
              })}
            />
            <br />
            {errors?.lastname?.message && (
              <span style={{ color: "red", fontSize: "0.8rem" }}>
                {errors.lastname.message}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="">Email</label> <br />
            <input
              type="email"
              name="email"
              {...register("email", {
                required: "This field is required",
                minLength: {
                  value: 2,
                  message: "Value can not be lesser than 2",
                },
              })}
            />
            <br />
            {errors?.email?.message && (
              <span style={{ color: "red", fontSize: "0.8rem" }}>
                {errors.email.message}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="">Gender</label> <br />
            <label htmlFor="male">
              <input
                type="radio"
                name="gender"
                id="male"
                value="Male"
                {...register("gender", {
                  required: "This field is required",
                })}
              />
              Male
            </label>
            <label htmlFor="female">
              <input
                type="radio"
                name="gender"
                id="female"
                value="Female"
                {...register("gender", {
                  required: "This field is required",
                })}
              />
              Female
            </label>
            <br />
            {errors?.gender?.message && (
              <span style={{ color: "red", fontSize: "0.8rem" }}>
                {errors.gender.message}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="">Birthdate</label> <br />
            <input
              type="date"
              name="birthdate"
              {...register("birthdate", {
                required: "This field is required",
              })}
            />
            <br />
            {errors?.birthdate?.message && (
              <span style={{ color: "red", fontSize: "0.8rem" }}>
                {errors.birthdate.message}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="">Avatar</label> <br />
            <input
              type="file"
              name="avatar"
              {...register("avatar", {
                required: "This field is required",
              })}
            />
            <br />
            {errors?.avatar?.message && (
              <span style={{ color: "red", fontSize: "0.8rem" }}>
                {errors.avatar.message}
              </span>
            )}
          </div>

          <button>Add</button>
        </form>
      </Flex>
    </Container>
  );
}

export default NewWaiter;
