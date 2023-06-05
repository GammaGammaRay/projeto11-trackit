import React from "react";
import { WeekdayButton } from "../style/style_weekdayButtons";

function WeekdayButtons({ day, index, disabled, selectedDays, setSelectedDays }) {
  return (
    <WeekdayButton
      data-test="habit-day"
      selected={selectedDays.includes(index)}
      disabled={disabled}
      type="button"
      onClick={() => setSelectedDays(index)}
    >
      {day}
    </WeekdayButton>
  );
}

export default WeekdayButtons;
