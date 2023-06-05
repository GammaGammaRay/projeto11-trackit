import { useState, createContext, useContext } from "react";

export const UserContext = createContext();
export const HabitContext = createContext();
export const HabitCount = createContext();

export function useUserContext() {
  return useContext(UserContext);
}
export function useHabitContext() {
  return useContext(HabitContext);
}
export function useHabitCount() {
  return useContext(HabitCount);
}

export default function PageContextProvider({ children }) {
  const userDataStringify = localStorage.getItem("UserData");
  let UserData = {};
  if (userDataStringify !== null) {
    UserData = { ...JSON.parse(userDataStringify) };
  }
  const [user, setUser] = useState(UserData);
  const [habitDone, setHabitDone] = useState(0);
  const [habitCount, setHabitCount] = useState([]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <HabitContext.Provider value={{ habitDone, setHabitDone }}>
        <HabitCount.Provider value={{ habitCount, setHabitCount }}>
          {children}
        </HabitCount.Provider>
      </HabitContext.Provider>
    </UserContext.Provider>
  );
}
