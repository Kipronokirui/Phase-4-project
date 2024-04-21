// const user = JSON.parse(localStorage.getItem('user'));

export const fetchUserAppointments = async (user_id) => {
    console.log("Function to fetch user appointments called")
    try {
        const response = await fetch(`http://127.0.0.1:5000/appointments/${user_id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }
        const appointmentsData = await response.json();
        console.log(`Fetched User appointments data is: ${appointmentsData}`)
        return appointmentsData
    } catch (error) {
        console.error('Error fetching services:', error);
        return
    }
}

export const fetchHealthcareProviderAppointments = async (user_id) => {
    console.log("Function to fetch user appointments called")

    try {
        const response = await fetch(`http://127.0.0.1:5000/appointments/${user_id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }
        const appointmentsData = await response.json();
        console.log(`Fetched Healthcare Provider appointments data is: ${appointmentsData}`)
    } catch (error) {
        console.error('Error fetching services:', error);
    }
}