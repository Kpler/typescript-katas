https://codingdojo.org/kata/Diamond/# 🧭🚀 Spacecraft Rescue Kata

## 📚 Overview

Welcome, Commander. You’re at the helm of an autonomous 2D spacecraft navigating dangerous asteroid fields. Your mission: **navigate**, **rescue a lost astronaut**, and **return to base** — while managing fuel, dodging obstacles, and completing navigation challenges through clean, testable code.

**Goals**
- Practice the **TDD cycle**: Red → Green → Refactor
- Write clean, modular, and testable TypeScript code
- Solve increasingly complex scenarios by building incrementally

**Rules**
- ⏰ 5 minute cycles
- 👨🏼‍💻🧑🏻‍💻👩🏼‍💻 small peer groups (3-4)

Happy coding, and enjoy navigating the grid! 🚀


👉🏻 [GitHub - Kpler/typescript-katas](https://github.com/Kpler/typescript-katas)

You can already branch from the branch `feature/kata/crew-auth/parcel`

🕰️ [Mob Timer](https://mobti.me)


---

## 🎯 Goals

- Practice command interpretation and grid-based movement
- Model fuel, obstacles, and mission objectives
- Handle game-state transitions (OK → CRASHED / OUT_OF_FUEL / MISSION_COMPLETE)
- Write test-driven, defensive code

---

## 🧭 World & Mechanics

```ts
type Position = [number, number];

type Direction = "N" | "E" | "S" | "W";

type Spacecraft2D = {
  position: Position;
  direction: Direction;
  fuel: number;
  status: "OK" | "OUT_OF_FUEL" | "CRASHED" | "MISSION_COMPLETE";
};

type Command = "F" | "L" | "R";

type Quest = {
  astronaut: Position;
  base: Position;
  bounds?: { x: [number, number]; y: [number, number] }; // Level 4
  noFlyZones?: Position[]; // Level 4
};
```

```ts
function navigate2DSpacecraft(
  initial: Spacecraft2D,
  commands: Command[],
  obstacles: Position[],
  quest?: Quest
): Spacecraft2D;
```

## 🧱 Example World (Used from Level 1 onward)

### 🔹 Grid Visual

```
Y ↑
  ┌─────────────────────┐
5 │ 👨‍🚀             █    │
4 │       █             │
3 │          S          │ ← Start: facing East
2 │    █                │
1 │                     │
0 └─────────────────────┘
    0  1  2  3  4  5  → X
```

- █ = obstacles
- 👨‍🚀 = Astronaut
- S = starting spacecraft location
- Grid bounds: x: \[0, 5], y: \[0, 5]

### 🔹 Obstacles

```ts
const obstacles: Position[] = [
  [2, 4],
  [1, 2],
  [5, 5]
];
```


## 🎮 Quest Levels

### 🌱 Level 0: Basic Movement

✅ Objective: Reach \[4, 3]

- No fuel constraint, obstacles, or astronaut

- Direction updates and forward movement only

### 🌌 Level 1: Avoid Obstacles

✅ Objective: Reach \[4, 3] without crashing into known obstacles

- Use the example world and obstacle list above

- Status must be "CRASHED" if spacecraft tries to enter an obstacle tile


### 🧯 Level 2: Fuel Management

✅ Objective: Same as level 1, but now with a fuel limit

- Each "F", "L", or "R" consumes 1 unit of fuel

- If fuel is exhausted, status becomes "OUT\_OF\_FUEL"

### 👨‍🚀 Level 3: Rescue the Astronaut

✅ Objective:

- Visit \[0, 5] to rescue astronaut
- Then continue to base at \[0, 0]

```ts
const quest: Quest = {
  astronaut: [0, 5],
  base: [0, 0]
};
```
- Mark the astronaut as rescued once position matches
- Final status: "MISSION\_COMPLETE" if both conditions met

### 🚫 Level 4: Bounded Grid + No-Fly Zones

✅ Objective:

- Rescue astronaut at \[2, 2], return to base at \[0, 0]
- Avoid no-fly zones and stay within grid

```ts
const quest: Quest = {
  astronaut: [2, 2],
  base: [0, 0],
  bounds: { x: [0, 5], y: [0, 5] },
  noFlyZones: [[1, 1], [3, 3]]
};
```
- If you enter an invalid cell, status is "CRASHED"
