import React, { useState } from "react";
import Hero from "../Components/Hero";
import Nav from "../Components/Nav";
import Navbar from "../Components/Navbar";
import Calendar from "react-calendar";
import { gapi } from 'gapi-script';



function Schedule(props) {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  };
  
  var gapi = window.gapi
  var CLIENT_ID = "213289835398-krt13f0gr8c6ralrp9k0qsk85k2ore1l.apps.googleusercontent.com"
  var API_KEY = "AIzaSyBzgIO-BC6ApBOSLFReqS2MGpfI74DsF4s"
  var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
  var SCOPES = "https://www.googleapis.com/auth/calendar.readonly"
  const handleClick = () => {
    gapi.load('client:auth2', () => {
      console.log('loaded client')

      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })

      gapi.client.load('calendar', 'v3', () => console.log('calendar gapi loaded'))

      gapi.auth2.getAuthInstance().signIn()
      .then(() => {

        var event = {
          'summary': 'MoviesTogether: Better Call Saul',
          'location': '1600 Howard St., Arlington, VA 20330',
          'description': 'Chuck invites you to watch Better Call Saul on Netflix @ ',
          'start': {
            'dateTime': '2020-06-23T04:30:00-19:00',
            'timeZone': 'America/New_York'
          },
          'end': {
            'dateTime': '2020-06-23T06:00:00-21:00',
            'timeZone': 'America/New_York'
          },
          'recurrence': [
            'RRULE:FREQ=WEEKLY;COUNT=1'
          ],
          'attendees': [
            {'email': 'chuck@hhm.com'},
            {'email': 'jimmy@bcs.com'}
          ],
          'reminders': {
            'useDefault': false,
            'overrides': [
              {'method': 'email', 'minutes': 24 * 60},
              {'method': 'popup', 'minutes': 10}
            ]
          }
        };

        var request = gapi.client.calendar.events.insert({
          'calendarId': 'primary',
          'resource': event,
        })

        request.execute(event => {
          window.open(event.htmlLink)
        })
        
      })
    })
  }

  return (
<>
<Hero backgroundImage="https://wallpaperplay.com/walls/full/0/f/0/124138.jpg#.XucH0OBWFuY.link">
       
        <div className="container-fluid">
                <div className="row justify-content-md-center">   
                <div className="card col-md-7"  >
          {/*<Navbar />
          
            <Nav/>
          */}
          <Calendar showWeekNumbers onChange={onChange} value={date} style={{width: "500px"}}/>
          {console.log(date)}
          {date.toString()}
          <button onClick={handleClick}>Schedule a MovieTogether</button>
      </div>
                </div>
                </div>
</Hero>
      </>
  );
}

export default Schedule;