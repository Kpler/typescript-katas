import { assignTasks } from './autumn';

describe('Autumn Cleaning - Level 0: Basic Matching', () => {
    describe('assignTasks', () => {
        it('should assign a task to a team based on simple type matching', () => {
            const assignment = assignTasks(
              [{ name: "Lara", stamina: 80, available: true, skillLevel: 3, id: "1" }],
              [{ id: "t1", type: "leaves", difficulty: 2 }],
              [{ match: { type: "leaves" }, team: "Leaf Team" }]
            );

            expect(assignment ["Leaf Team"])
            expect(assignment["Leaf Team"],[ { volunteer: {name: "Lara", stamina: 80, available: true, skillLevel: 3, id: "1" },
                    task: { id: "t1", type: "leaves", difficulty: 2 } } ] )

        });
    });
});

