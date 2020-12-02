const API_URL = "https://europe-west1-matters-test.cloudfunctions.net"

export default {
    ///////// GET request /////////
    // Return list of cats data from API
    catsDatas : async () => (await fetch(`${API_URL}/getCats`)).json(),

    ///////// POST request /////////
    // Take appointment for a specific cat of given id.
    // Return date of the appointment and location of the shelter.
    makeAppoint : async (idCat) =>
        (await fetch(`${API_URL}/getAdoptionAppointment`, {
            method: 'POST',    
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({ catId : parseInt(idCat)}
        )})).json()
}
