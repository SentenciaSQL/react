import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";
import "./index.css";
import { ProfessonalApp } from "./09-useContext/ProfessonalApp";
// import { ClientInformation } from "./08-use-suspense/ClientInformation";
// import { getUserAction } from "./08-use-suspense/api/get-user.action";
// import { InstagromApp } from "./07-useOptimistic/InstagromApp";
// import { MemoCounter } from "./06-memos/MemoCounter";
// import { MemoHook } from "./06-memos/MemoHook";
// import { ScrambleWords } from "./05-useReducer/reducer/ScrambleWords";
// import { TasksApp } from './05-useReducer/TaskApp'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { PokemonPage } from './03-examples/PokemonPage'
// import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook'
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'
// import { TrafficLight } from './01-useState/TrafficLight'
// import { HookApp } from './HookApp'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster />
    {/* <HookApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp/> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter /> */}
    {/* <InstagromApp /> */}
    {/* <Suspense fallback={(
      <div className="bg-gradient flex flex-col">
        <h1 className="text-sxl">Cargando</h1>
      </div>
    )}>
      <ClientInformation getUser={getUserAction(1000)} />
    </Suspense> */}
    <ProfessonalApp />
  </StrictMode>
);
