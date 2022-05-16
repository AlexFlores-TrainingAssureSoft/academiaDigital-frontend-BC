import Table from "../common/Table";

const TraineeList = (data) => {
  const headers = ['Firstname', 'Lastname', 'Email', 'Address', 'Phone Number', 'Actions'];
  return (
    <Table headers={headers} data={data.trainees} />
  );
}

export default TraineeList;