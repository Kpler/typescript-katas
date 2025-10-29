import { assignTasks } from './autumn';

describe('Autumn Cleaning - Level 0: Basic Matching', () => {
    describe('assignTasks', () => {
        it('should return a volunteer for a matching leaves task type', () => {
            const assignment = assignTasks(
              [{ name: "Lara", stamina: 80, available: true, skillLevel: 3, id: "1" }],
              [{ id: "t1", type: "leaves", difficulty: 2 }],
              [{ match: { type: "leaves" }, team: "Leaf Team" }]
            );

            expect(Object.keys(assignment)).toContain('Leaf Team');
            expect(assignment["Leaf Team"]).toEqual(
                [ { volunteer: {name: "Lara", stamina: 80, available: true, skillLevel: 3, id: "1" },
                task: { id: "t1", type: "leaves", difficulty: 2 } } ]
            );
        });

        it('should return no volunteer for non matching task type', () => {
            const assignment = assignTasks(
              [{ name: "Lara", stamina: 80, available: true, skillLevel: 3, id: "1" }],
              [{ id: "t1", type: "compost", difficulty: 2 }],
              [{ match: { type: "leaves" }, team: "Leaf Team" }]
            );

            expect(assignment).toEqual({'Leaf Team': []});
        });

        it('should return a volunteer for a matching branches task type', () => {
            const assignment = assignTasks(
                [{ name: "Lara", stamina: 80, available: true, skillLevel: 3, id: "1" }],
                [{ id: "t1", type: "branches", difficulty: 2 }],
                [{ match: { type: "branches" }, team: "Leaf Team" }]
            );

            expect(Object.keys(assignment)).toContain('Leaf Team');
            expect(assignment["Leaf Team"]).toEqual(
                [ { volunteer: {name: "Lara", stamina: 80, available: true, skillLevel: 3, id: "1" },
                    task: { id: "t1", type: "branches", difficulty: 2 } } ]
            );
        });
    });
});

