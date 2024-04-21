import { useState } from "react"

export const ResultContainer = ({ response, SearchParam }) => {
    const [filterData, setFilterData] = useState(response.data[0].PostOffice)

    const handelFlter = (e) => {
        const value = e.target.value.trim().toLowerCase();
        if (!value) {
            setFilterData(response.data[0].PostOffice)
        }
        setFilterData(() => {
            return response.data[0].PostOffice.filter(item => {
                return item.Name.toLowerCase().includes(value)
            })
        })
    }

    return (

        <div className="ResultContainer">

            <div className="filterWrraper">
                <p className="label">Pincode : {SearchParam}</p>
                <p className="label">Message : {response.data[0].Message}</p>
                <input
                    className="filter"
                    type="text"
                    placeholder="Filter"
                    onChange={handelFlter}
                />
            </div>
           <div className="cardwrraper">
           {
                filterData ? filterData.map((postoffice) => {
                    return <div className="card">
                        <p>Name: {postoffice.Name}</p>
                        <p>Branch Type: {postoffice.BranchType}</p>
                        <p>Delivery Status: {postoffice.DeliveryStatus}</p>
                        <p>District: {postoffice.District}</p>
                        <p>Devison: {postoffice.Division}</p>
                    </div>
                }) : <p>No Records Found</p>
            }
           </div>
  

        </div>
    )
}