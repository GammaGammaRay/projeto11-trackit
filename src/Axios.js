import axios from "axios";

// URLS

const URL_LOGIN =
  "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
const URL_SIGNUP =
  "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
const URL_HABITS =
  "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
const URL_GETTODAYHABITS =
  "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
const URL_DELETEHABIT =
  "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/";
const URL_HABITCHECK =
  "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/ID_DO_HABITO/check";
const URL_HABITUNCHECK =
  "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/ID_DO_HABITO/uncheck";

function tokenProvider(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

// AXIOS

export function axiosLoginPost(obj, callbackSuccess, callbackError) {
  axios
    .post(URL_LOGIN, obj)
    .then(({ data }) => callbackSuccess(data))
    .catch((error) => {
      console.log(error);
      callbackError();
    });
}

export function axiosRegisterNewUser(obj, callbackSuccess, callbackFailure) {
  axios
    .post(URL_SIGNUP, obj)
    .then(() => callbackSuccess())
    .catch((error) => {
      console.log(error);
      alert(error.response.data.message);
      callbackFailure();
    });
}

export function axiosPostHabit(obj, callbackSuccess, callbackFailure) {
  axios
    .post(URL_HABITS, obg)
    .then(() => callbackSuccess())
    .catch((error) => {
      console.log(error);
      alert(error.response.data.message);
      callbackFailure();
    });
}

export function axiosGetHabits(token, callbackSuccess ) {
  axios
    .get(URL_HABITS, tokenProvider(token))
    .then(({data}) => callbackSuccess(data))
    .catch((error) => {
      console.log(error);
      alert(error.response.data.message);
      callbackFailure();
    });
}

export function axiosGetTodayTasks(token, callbackSuccess) {
  axios
  .get(URL_GETTODAYHABITS, tokenProvider(token))
  .then((response) => callbackSuccess([...response.data]))
  .catch((error) => {
    console.log(error);
    alert(error.response.data.message);
  })
}

export function axiosDeleteHabit(idHabit, token, callbackSuccess) {
    axios
    .delete(URL_DELETEHABIT, tokenProvider(token))
    .then(() => callbackSuccess())
    .catch((error) => {
        console.log(error);
        alert(error.response.data.message);
    })
}