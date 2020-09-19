const columns = {
  tools: {
    width: 50,
    render: [() => '<a href="javascript:void(0)" ref="del">[X]</a>'],
    onClickRefs: {
      del: (event, recordId, record, grid) => {
        // ref="del" click handler
        grid
          .getModel()
          .delete(recordId)
          .then(() => {
            grid.updateTable();
          });
      },
    },
  },
  name: {
    name: "First Name",
    sortCycle: ["asc", "desc", "default"],
    render: ["name", (e) => e.name],
  },
  surname: {
    name: "Last Name",
    sortCycle: ["asc", "desc", "default"],
    render: ["surname", (e) => e.surname],
  },
  phone: {
    name: "phone",
    sortCycle: ["asc", "desc", "default"],
    render: ["phone", (e) => e.phone],
  },
  gender: {
    name: "gender",
    sortCycle: ["asc", "desc", "default"],
    render: ["gender", (e) => e.gender],
  },
  age: {
    name: "age",
    sortCycle: ["asc", "desc", "default"],
    render: ["age", (e) => e.age],
  },
};

export default columns;
