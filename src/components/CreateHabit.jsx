import React from "react";
import { CreateHabitContainer } from "../style/style_newHabit";
import { useState } from "react";
import { axiosPostHabit } from "../Axios";
import { WeekdayButtonsContainer } from "../style/style_weekdayButtons";
import WeekdayButton from "./WeekdayButton";

function CreateHabit({
  token,
  habits,
  setHabits,
  createHabit,
  setCreateHabit,
  newHabitData,
  setNewHabitData,
  setHabitCount,
  weekdays,
}) {
  const [habitTitle, setHabitTitle] = useState("");
  const [selectedDays, setSelectedDays] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const handleNewHabitPost = (e) => {
    e.preventDefault();

    function successPost(data) {
      setHabits((prevState) => [...prevState, data]);
      setHabitCount((prevState) =>
        data.days.includes(dayjs().day())
          ? [...prevState, data]
          : [...prevState]
      );
      setCreateHabit(false);
      setNewHabitData({ name: "", days: [] });
    }

    if (newHabitData.days.length === 0) {
      alert("Selecione pelo menos um dia para o seu Hábito.");
    } else {
      setTryCreateHabit((prevState) => !prevState);
      postHabit(newHabit, token, successPost, setCreateHabit);
    }
  };

  const cancelCreateHabit = () => {
    setCreateHabit(false);
  };

  return (
    <CreateHabitContainer>
      <form onSubmit={handleNewHabitPost}>
        <input
          type="text"
          placeholder="nome do hábito"
          value={habitTitle}
          onChange={(e) => {
            setHabitTitle(e.target.value);
          }}
        />
        <WeekdayButtonsContainer>
          {weekdays.map((day, index) => (
            <WeekdayButton
              data-test="habit-day"
              key={index}
              day={day}
              selectedDays={selectedDays}
              setSelectedDays={setSelectedDays}
              disabled={disabled}
              type="button"
            />
          ))}
        </WeekdayButtonsContainer>
        <div className="handleNewHabitButtonsContainer">
          <button id="cancelButton" onClick={cancelCreateHabit}>
            Cancelar
          </button>
          <button id="submitButton">Submit</button>
        </div>
      </form>
    </CreateHabitContainer>
  );
}

export default CreateHabit;
