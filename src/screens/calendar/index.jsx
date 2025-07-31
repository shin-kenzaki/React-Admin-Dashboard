import { useState } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { formatDate } from '@fullcalendar/core';
import listPlugin from '@fullcalendar/list';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme
} from '@mui/material';
import Header from "../../components/Header";
import { tokens } from '../../theme';

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([
    { id: "1234", title: "All-day event", start: "2022-09-14" },
    { id: "4321", title: "Timed event", start: "2022-09-28" }
  ]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      const newEvent = {
        id: `${selected.startStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay
      };
      calendarApi.addEvent(newEvent);
      setCurrentEvents((prev) => [...prev, newEvent]);
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(`Are you sure you want to delete the event '${selected.event.title}' ?`)
    ) {
      selected.event.remove();
      setCurrentEvents((prev) =>
        prev.filter((event) => event.id !== selected.event.id)
      );
    }
  };

  return (
    <Box m="20px">
      <Header title="CALENDAR" substitle="Full Calendar Interactive Page" />
      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[700]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px"
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography variant="body2">
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric"
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            events={currentEvents}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
