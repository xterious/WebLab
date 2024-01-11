const students = [
  { name: "Alice", scores: [85, 90, 88] },
  { name: "Bob", scores: [92, 95, 89] },
  { name: "Charlie", scores: [90, 91, 87] },
  { name: "David", scores: [87, 84, 92] },
];

const averagescores = students.map((student) => ({
	name : student.name,
	averagescore : student.scores.reduce((acc, score) => acc+score,0)/student.scores.length,
	// acc is accumulator similar to sum initalized to 0 in the above line reduce takes 2 parameters acc,score and stores sum of score in acc
}));

const above90 = averagescores.filter((student) => student.averagescore > 90);
console.log(above90);