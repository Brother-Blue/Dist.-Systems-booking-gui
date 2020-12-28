## BookingGUI High-level description 

The BookingGUI conists of three views each with its own responsibility. 

The Home-page displays a navigable map where all dentist offices are shown as pins. The pins change color indicating available timeslots at each dentist office for the date specified by the user. 

The Offices-page gives an overview of all dentistoffices in the system. Here all information about the dentistoffice is displayed.

The Booking-page displays a calender as well as a booking-form. All available time slots for a date is shown when that date is clicked on the calender. When information has been entered into all fields a bookingrequest can be made. A message will be displayed whether the appointment booking was succefull or not. 

### Communication
All communication between the BookingGUI and the rest of the system is done via a broker, using the MQTT-protocol applying a Publish/Subscribe architectural style. 

### How to run
1. Navigate to the Client folder in the repository
1. Open terminal and run "npm install"
1. Run "npm run serve"
1. The BookingGUI is now running on port 8080
1. Open a browser and enter http://localhost:8080/