import Table from "../common/Table";

const TraineeList = ({trainees, filter}) => {
  const headers = ['Firstname', 'Lastname', 'Email', 'Address', 'Phone Number', 'Actions'];
  return (
    <Table headers={headers} data={trainees} filters={filter} />
  );
}

export default TraineeList;