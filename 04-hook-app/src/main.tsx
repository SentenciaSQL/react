import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ScrambleWords } from "./05-useReducer/reducer/ScrambleWords";
// import { TasksApp } from './05-useReducer/TaskApp'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { PokemonPage } from './03-examples/PokemonPage'
// import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook'
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'
// import { TrafficLight } from './01-useState/TrafficLight'
// import { HookApp } from './HookApp'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <HookApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp/> */}
    <ScrambleWords />
  </StrictMode>
);
