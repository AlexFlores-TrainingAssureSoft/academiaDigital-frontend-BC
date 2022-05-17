import Table from "../common/Table";

const TraineeList = ({ trainees, updateList, updateTrainee }) => {
  const headers = ['Firstname', 'Lastname', 'Email', 'Address', 'Phone Number', 'Actions'];
  return (
    <Table headers={headers} data={trainees} updateList={updateList} updateTrainee={updateTrainee} />
  );
}

export default TraineeList;