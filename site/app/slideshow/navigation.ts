import { PROJECTS, projectOfSlide, type ProjectKey, type SlideId } from "./deck";

export type MenuHintPhase = "in" | "again" | "out";

export interface MenuHintState {
  phase: MenuHintPhase;
  nonce: number;
}

export interface NavState {
  current: SlideId;
  shown: ProjectKey[];
  hint: MenuHintState | null;
}

export type NavAction =
  | { type: "next"; preselected: ProjectKey | null }
  | { type: "prev" }
  | { type: "menu" }
  | { type: "home" }
  | { type: "digit"; digit: number }
  | { type: "open"; slideId: SlideId }
  | { type: "hint-out" }
  | { type: "hint-gone" };

export const INITIAL_NAV_STATE: NavState = { current: "1", shown: [], hint: null };

const ABOUT_ORDER: SlideId[] = ["1", "2", "3", "M"];
const JOB_SLIDES: SlideId[] = ["2a", "2b"];
const GOFREIGHT_KEY_SLIDE = "2b";
const EXASCEND_KEY_SLIDE = "2a";

function enter(state: NavState, slideId: SlideId): NavState {
  if (slideId === state.current) return state;
  const project = projectOfSlide(slideId);
  const shown =
    project && !state.shown.includes(project.key) ? [...state.shown, project.key] : state.shown;
  return { current: slideId, shown, hint: null };
}

export function isPreselectionPending(state: NavState, preselected: ProjectKey | null): boolean {
  return preselected !== null && !state.shown.includes(preselected);
}

function firstSlideOf(key: ProjectKey): SlideId {
  const project = PROJECTS.find((candidate) => candidate.key === key);
  return project ? project.slideIds[0] : "M";
}

function nextOnMenu(state: NavState, preselected: ProjectKey | null): NavState {
  if (preselected && isPreselectionPending(state, preselected)) {
    return enter(state, firstSlideOf(preselected));
  }
  const nonce = (state.hint?.nonce ?? 0) + 1;
  return { ...state, hint: { phase: state.hint ? "again" : "in", nonce } };
}

function next(state: NavState, preselected: ProjectKey | null): NavState {
  const { current } = state;
  if (JOB_SLIDES.includes(current)) return enter(state, "2");
  if (current === "M") return nextOnMenu(state, preselected);
  const aboutIndex = ABOUT_ORDER.indexOf(current);
  if (aboutIndex >= 0) return enter(state, ABOUT_ORDER[aboutIndex + 1]);
  const project = projectOfSlide(current);
  if (!project) return state;
  const index = project.slideIds.indexOf(current);
  return enter(state, project.slideIds[index + 1] ?? "M");
}

function prev(state: NavState): NavState {
  const { current } = state;
  if (JOB_SLIDES.includes(current)) return enter(state, "2");
  const aboutIndex = ABOUT_ORDER.indexOf(current);
  if (aboutIndex >= 0) return aboutIndex === 0 ? state : enter(state, ABOUT_ORDER[aboutIndex - 1]);
  const project = projectOfSlide(current);
  if (!project) return state;
  const index = project.slideIds.indexOf(current);
  return enter(state, index === 0 ? "M" : project.slideIds[index - 1]);
}

function open(state: NavState, slideId: SlideId): NavState {
  if (state.current === "2" && JOB_SLIDES.includes(slideId)) return enter(state, slideId);
  const project = projectOfSlide(slideId);
  if (state.current === "M" && project && project.slideIds[0] === slideId) {
    return enter(state, slideId);
  }
  return state;
}

function digit(state: NavState, pressed: number): NavState {
  if (state.current === "2") {
    if (pressed === 1) return open(state, GOFREIGHT_KEY_SLIDE);
    if (pressed === 2) return open(state, EXASCEND_KEY_SLIDE);
    return state;
  }
  if (state.current === "M") {
    const project = PROJECTS[pressed - 1];
    return project ? open(state, project.slideIds[0]) : state;
  }
  return state;
}

export function navReducer(state: NavState, action: NavAction): NavState {
  switch (action.type) {
    case "next":
      return next(state, action.preselected);
    case "prev":
      return prev(state);
    case "menu":
      return enter(state, "M");
    case "home":
      return enter(state, "1");
    case "digit":
      return digit(state, action.digit);
    case "open":
      return open(state, action.slideId);
    case "hint-out":
      return state.hint ? { ...state, hint: { ...state.hint, phase: "out" } } : state;
    case "hint-gone":
      return state.hint ? { ...state, hint: null } : state;
  }
}
