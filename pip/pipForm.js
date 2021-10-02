const pipForms = [
  {
    id: 123456,
    startDate: "20210101",
    endDate: "20210331",
    objectives: [
      {
        objId: 0,
        objDescr: "do this thing",
        weight: 50,
        points: 0,
        measures: [
          { measId: 0, measDescr: "1st level" },
          { measId: 1, measDescr: "2nd level" },
          { measId: 2, measDescr: "3rd level" },
        ],
      },
      {
        objId: 1,
        objDescr: "do that thing",
        weight: 50,
        points: 0,
        measures: [
          { measId: 0, measDescr: "1st level" },
          { measId: 1, measDescr: "2nd level" },
          { measId: 2, measDescr: "3rd level" },
        ],
      },
    ],
  },
  {
    id: 987654,
    startDate: "20210101",
    endDate: "20210331",
    objectives: [
      {
        objId: 0,
        objDescr: "special project",
        weight: 80,
        points: 0,
        measures: [
          { measId: 0, measDescr: "bronze" },
          { measId: 1, measDescr: "silver" },
          { measId: 2, measDescr: "gold" },
        ],
      },
      {
        objId: 1,
        objDescr: "regular project",
        weight: 20,
        points: 0,
        measures: [
          { measId: 0, measDescr: "dum" },
          { measId: 1, measDescr: "dum" },
          { measId: 2, measDescr: "duhh" },
        ],
      },
    ],
  },
];
