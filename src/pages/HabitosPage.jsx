import React from "react";
import { useState, useEffect } from "react";
import { HabitosPageContainer } from "../style/PagesStyle";
import { axiosDeleteHabit, axiosPostHabit, axiosGetHabits } from "../Axios";
import CreateHabit from "../components/CreateHabit";
import { useUserContext, useHabitCount } from "../components/ContextProvider";

function Habitos() {
  const {
    user: { token },
  } = useUserContext();

  const [habits, setHabits] = useState([]);
  const [createHabit, setCreateHabit] = useState(false);
  const [newHabitData, setNewHabitData] = useState({ name: "", days: [] });
  const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
  const { setHabitCount } = useHabitCount();

  useEffect(() => {
    function getHabitsSuccess(data) {
      setHabits(data);
      setHabitCount(data.filter((habit) => habit.days.includes(dayjs().day())));
    }
    axiosGetHabits(token, getHabitsSuccess);
  }, []);

  function toggleNewHabit() {
    setCreateHabit(!createHabit);
  }

  return (
    <HabitosPageContainer>
      <div className="habitsHeader">
        <h2>Meus hábitos</h2>
        <button id="addNewHabitButton" onClick={toggleNewHabit}>
          {createHabit ? "-" : "+"}
        </button>
      </div>
      {createHabit && (
        <CreateHabit
          token={token}
          habits={habits}
          setHabits={setHabits}
          createHabit={createHabit}
          setCreateHabit={setCreateHabit}
          newHabitData={newHabitData}
          setNewHabitData={setNewHabitData}
          setHabitCount={setHabitCount}
          weekdays={weekdays}
        />
      )}
      {habits.length === 0 && (
        <div className="habitsListContainer">
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </div>
      )}

      {habits.map((h, index) => (
        <div className="habitsListContainer">
          <Habit
            key={index}
            habitName={h.name}
            habitDays={h.days}
            habitId={h.id}
            getHabits={getHabits}
          />
        </div>
      ))}
    </HabitosPageContainer>
  );
}

export default Habitos;
