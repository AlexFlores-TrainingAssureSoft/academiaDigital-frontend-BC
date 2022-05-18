import Table from "../common/Table";

const TraineeList = ({ trainees, updateList }) => {
  const headers = ["Firstname", "Lastname", "Email", "Address", "Phone Number", "Actions"];
  return <Table headers={headers} data={trainees} updateList={updateList} />;
};

export default TraineeList;
