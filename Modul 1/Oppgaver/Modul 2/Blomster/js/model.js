const model = {
  selectedPage: "dailyTasks",
  selectedDate: "2020-05-15",
  selectedAction: "water",
  actions: [
    { id: "water", description: "Vanne" },
    { id: "fertilize", description: "Gjødsle" },
    { id: "cut", description: "Vurdere beskjæring" },
    { id: "pot", description: "Vurdere potte om" },
    { id: "all", description: "Alt" },
  ],
  flowers: [
    {
      name: "Tulipaner",
      tasks: {
        water: { frequencyDays: 14, lastDate: "2020-04-30" },
        fertilize: { frequencyDays: 30, lastDate: "2020-04-30" },
      },
    },
    {
      name: "Gladioler",
      tasks: {
        water: { frequencyDays: 5, lastDate: "2020-05-10" },
        fertilize: { frequencyDays: 30, lastDate: "2020-04-30" },
      },
    },
    {
      name: "Peoner",
      tasks: {
        water: { frequencyDays: 7, lastDate: "2020-05-08" },
        fertilize: { frequencyDays: 30, lastDate: "2020-04-30" },
      },
    },
    {
      name: "Roser",
      tasks: {
        water: { frequencyDays: 3, lastDate: "2020-05-13" },
        fertilize: { frequencyDays: 30, lastDate: "2020-03-30" },
      },
    },
  ],
};
console.log(model.flowers);
