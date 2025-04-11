# 📦 🚮 Parcel Sorter Kata

## 🧭 Introduction
The **Parcel Sorter Kata** challenges you to implement a flexible, rules-driven engine to sort parcels into bins based on attributes like weight, fragility, or destination. Through small iterations, you’ll build a fully testable and extensible rule evaluation system.


**Goals**
- Practice the **TDD cycle**: Red → Green → Refactor
- Write clean, modular, and testable TypeScript code
- Solve increasingly complex scenarios by building incrementally

**Rules**
- ⏰ 7 minute cycles
- 👨🏼‍💻🧑🏻‍💻👩🏼‍💻 small peer groups (3-4)
- 2 hours timeslot
- ☕️ don't forget to take breaks after 45 minutes

Happy coding, and enjoy navigating the grid! 🚀


👉🏻 [GitHub - Kpler/typescript-katas](https://github.com/Kpler/typescript-katas)

You can already branch from the branch `kata/crew-auth/parcel`

🕰️ [Mob Timer](https://mobti.me)


## 🔧 Parcel & Rule Definitions

### 📦 Parcel

```ts
interface Parcel {
  id: string;
  weight: number;       // in kilograms
  destination: string;  // e.g. "Berlin"
  fragile: boolean;
}

interface Rule {
  match: Partial<Parcel> & {
    minWeight?: number;
    maxWeight?: number;
  };
  bin: string;
  priority?: number; // Optional. Lower = higher priority.
}

export function sortParcels(
  parcels: Parcel[],
  rules: Rule[],
  defaultBin?: string
): { [bin: string]: Parcel[] }

```

## Levels

## ✅ Level 0: Basic Rule Matching

Implement:

- Match parcels using fields like destination, fragile, and weight
- Use the **first matching rule******
- Return an object grouping parcels by bin name

🧪 Example
```ts
sortParcels([{ destination: "Berlin", fragile: true }], [
  { match: { destination: "Berlin" }, bin: "berlin" }
]);
// → { berlin: [...] }
```

## 🪜 Level 1: Rule Priorities

Rules can now include a priority field.

- Sort rules by ascending priority before matching.
- If two rules match, the one with lower priority applies.

🧪 Edge Cases:

- No priority = lower than any assigned priority (i.e., acts last).
- Handle multiple matching rules by applying only the **highest-priority** one.


## ⚠️ Level 2: Default Bin

What happens if **no rule matches**?

- Introduce a fallback defaultBin, defaulting to "unmatched".
- Parcels with no matching rule go there.

🧪 Example
```ts
sortParcels([{ destination: "Oslo" }], [], "overflow");
// → { overflow: [...] }
```

## 🌍 Level 3: Zoned Rule Sets

Now, rules are grouped **per zone** (e.g., “EU”, “US”).

Each parcel includes a zone field and is matched against its zone’s rules.

**🔄 Updated Types**

```ts
interface ZonedParcel extends Parcel {
  zone: string;
}

interface ZonedRules {
  [zone: string]: Rule[];
}

export function sortZonedParcels(
  parcels: ZonedParcel[],
  zoneRules: ZonedRules,
  defaultBin?: string
): { [bin: string]: Parcel[] }
```

🧪 Consider

- Parcels with missing zones
- Parcels with zones but no rules defined