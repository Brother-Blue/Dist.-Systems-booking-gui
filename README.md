## BookingGUI High-level description 

The BookingGUI conists of three views each with its own responsibility. The Homepage displays a navigable map where all dentist offices are shown as pins. The pins change color indicating available timeslots at each dentist registry for the date specified by the user. 

Clicking the "Book a time"-button on the homepage will redirect the user to an overview of all the dentist offices. This page displays all relevant information about the dentist offices. 

Via the pins on the map or the "Go to the office"-button on the Offices-page, one can go to the Booking-page where a calender is shown as well as a booking-form. By clicking a date on the calender all available timeslots for that day will be displayed. When information has been entered into all fields a user can submit the booking request. A message will be shown to the user depending whether the appointment booking was succefull or not. 

### Communication
All communication between the BookingGUI and the rest of the system is done via a broker, using the MQTT-protocol applying a Publish/Subscribe architectural style. 

#