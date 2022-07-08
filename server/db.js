const { faker } = require("@faker-js/faker");

const v4 = require("uuid").v4;

const ORDER_STATUS = {
  COMPLETED: "COMPLETED",
  CANCELLED: "CANCELLED",
  IN_PROGRESS: "IN_PROGRESS",
};

const COMPANY_INFO = {
  title: "Some Restaurant",
  description:
    "This is a restaurant based in Azerbaijan Baku. It has been serving customers for over five years now",
};

const WAITERS = [
  {
    id: v4(),
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email(),
    gender: faker.name.gender(true),
    birthdate: faker.date.birthdate(),
    avatar: faker.image.avatar(),
  },
  {
    id: v4(),
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email(),
    gender: faker.name.gender(true),
    birthdate: faker.date.birthdate(),
    avatar: faker.image.avatar(),
  },
  {
    id: v4(),
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email(),
    gender: faker.name.gender(true),
    birthdate: faker.date.birthdate(),
    avatar: faker.image.avatar(),
  },
];

const FOODS = [
  {
    id: v4(),
    name: "Ash",
    duration: 15,
    price: 2,
  },
  {
    id: v4(),
    name: "Doner",
    duration: 5,
    price: 1.5,
  },
  {
    id: v4(),
    name: "Merci",
    duration: 15,
    price: 3,
  },
  {
    id: v4(),
    name: "Lavash",
    duration: 10,
    price: 5,
  },
  {
    id: v4(),
    name: "Salat",
    duration: 20,
    price: 4,
  },
  {
    id: v4(),
    name: "Qovurma",
    duration: 30,
    price: 15,
  },
  {
    id: v4(),
    name: "Hamburger",
    duration: 20,
    price: 10,
  },
];

const ORDERS = [
  {
    id: v4(),
    tableNumber: 1,
    waiter: WAITERS[Math.round(Math.random() * (WAITERS.length - 1))].id,
    foods: [
      {
        foodId: FOODS[Math.round(Math.random() * (FOODS.length - 1))].id,
        count: Math.round(Math.random() * 5),
        isRemoved: false,
      },
      {
        foodId: FOODS[Math.round(Math.random() * (FOODS.length - 1))].id,
        count: Math.round(Math.random() * 5),
        isRemoved: false,
      },
    ],
    status: ORDER_STATUS.CANCELLED,
    createdAt: Date.now(),
  },
  {
    id: v4(),
    tableNumber: 2,
    waiter: WAITERS[Math.round(Math.random() * (WAITERS.length - 1))].id,
    foods: [
      {
        foodId: FOODS[Math.round(Math.random() * (FOODS.length - 1))].id,
        count: Math.round(Math.random() * 5),
        isRemoved: false,
      },
      {
        foodId: FOODS[Math.round(Math.random() * (FOODS.length - 1))].id,
        count: Math.round(Math.random() * 5),
        isRemoved: false,
      },
    ],
    status: ORDER_STATUS.COMPLETED,
    createdAt: Date.now(),
  },
  {
    id: v4(),
    tableNumber: 3,
    waiter: WAITERS[Math.round(Math.random() * (WAITERS.length - 1))].id,
    foods: [
      {
        foodId: FOODS[Math.round(Math.random() * (FOODS.length - 1))].id,
        count: Math.round(Math.random() * 5),
        isRemoved: true,
      },
      {
        foodId: FOODS[Math.round(Math.random() * (FOODS.length - 1))].id,
        count: Math.round(Math.random() * 5),
        isRemoved: false,
      },
      {
        foodId: FOODS[Math.round(Math.random() * (FOODS.length - 1))].id,
        count: Math.round(Math.random() * 5),
        isRemoved: true,
      },
    ],
    status: ORDER_STATUS.COMPLETED,
    createdAt: Date.now(),
  },
  {
    id: v4(),
    tableNumber: 4,
    waiter: WAITERS[Math.round(Math.random() * (WAITERS.length - 1))].id,
    foods: [
      {
        foodId: FOODS[Math.round(Math.random() * (FOODS.length - 1))].id,
        count: Math.round(Math.random() * 5),
        isRemoved: false,
      },
      {
        foodId: FOODS[Math.round(Math.random() * (FOODS.length - 1))].id,
        count: Math.round(Math.random() * 5),
        isRemoved: false,
      },
      {
        foodId: FOODS[Math.round(Math.random() * (FOODS.length - 1))].id,
        count: Math.round(Math.random() * 5),
        isRemoved: false,
      },
    ],
    status: ORDER_STATUS.IN_PROGRESS,
    createdAt: Date.now(),
  },
];

module.exports = {
  orders: ORDERS,
  companyInfo: COMPANY_INFO,
  waiters: WAITERS,
  foods: FOODS,
};
