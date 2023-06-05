import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';


function ReactCalendar() {
  const [value, onChange] = useState(new Date());
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="app">
      <Box display="flex" flexDirection="column" alignItems="center" m="20px">
        {/* CALENDAR */}
        <Box width="70%" mb="15px">
          <Calendar onChange={onChange} value={value} onClickDay={handleDateClick} />
        </Box>

        {/* EVENT LIST */}
        <Box width="30%" p="15px" borderRadius="4px" bgcolor="#eaeaea">
          <Typography variant="h5" mb="10px">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem key={event.id} sx={{ backgroundColor: '#ffffff', margin: '10px 0', borderRadius: '2px' }}>
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {event.date.toDateString()}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>

      {/* POPUP */}
      {showPopup && (
        <div className="popup">
          <h3>Selected Date: {selectedDate.toDateString()}</h3>
          <button onClick={closePopup} style={{ marginTop: '10px' }}>Close</button>
        </div>
      )}
    </div>
  );
}

export default ReactCalendar;