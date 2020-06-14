import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleClick}>Schedule a MovieTogether</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
