export const ResultContainer = ({ apiStatus }) => {
    const { Status, data } = apiStatus
    console.log(data[0].Message)
    return (
        <div className="ResultContainer">
            {
                data[0].Status === 'Success' &&                 
                data[0]?.PostOffice?.map((postoffice) => {
                    return <div className="resultCard">
                        <p>Name: {postoffice.Name}</p>
                        <p>Branch Type: {postoffice.BranchType}</p>
                        <p>Delivery Status: {postoffice.DeliveryStatus}</p>
                        <p>District: {postoffice.District}</p>
                        <p>Devison: {postoffice.Division}</p>
                    </div>
                })
            }
            {
                data[0].Status === 'Error' && <p>{data[0].Message}</p>
            }
        </div>
    )
}