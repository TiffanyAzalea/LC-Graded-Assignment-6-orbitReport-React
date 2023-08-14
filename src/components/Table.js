

const Table = ({ sat }) => {
  
 
  return (
      <table>
       <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
         {displaySats.map((id, satData) => {
          return 

        <tr key={id}>
          <td>{satData.name}</td>
          <td>{satData.type}</td>
          <td>{satData.launchDate}</td>
          <td>{satData.operational ? "Active" : "Inactive"}</td>
        </tr>
         })};
        </tbody>
      </table>
  );
};

export default Table;

