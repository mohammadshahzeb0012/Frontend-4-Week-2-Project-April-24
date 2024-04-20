import axios from "axios"
export const SearchBar = ({ newApiStatus, setLoader }) => {
    const handelSubmit = async (e) => {
        e.preventDefault();
        const pincode = e.target.pincode.value
        setLoader(true)
        try {
            const response = await axios({
                url: `https://api.postalpincode.in/pincode//${pincode}`,
                method: 'GET'
            })

            newApiStatus({ Status: 'Success', data: response.data })
            setLoader(false)
            // console.log(response.data)
        } catch (Error) {
            setLoader(false)
           alert('Something Went Wrong')
        }
    }
    return (
        <div className="searchWrraper">
            <h2>Enter Pincode</h2>
            <form onSubmit={handelSubmit}>
                <input type="text" placeholder='pincode' name="pincode" minLength={6} maxLength={6} required />
                <button type='submit'>Lookup</button>
            </form>
        </div >
    )
}
