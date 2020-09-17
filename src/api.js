import {mockEvents} from './mock-events'; 
import axios from 'axios';





function getAccessToken(){
  const accessToken = localStorage.getItem('access_token');
  console.log(accessToken);
  if (!accessToken) 
  {
    const searchParams = new URLSearchParams(window.location.search);
    let code = searchParams.get('code');

    if (!code) {
      
      window.location.href = 'https://secure.meetup.com/oauth2/authorize?client_id=g98oji2r0tj027dcu7712vtepd&response_type=code&redirect_uri=https://skouroufexis.github.io/meetup/';
      
      return null;  
    }
    
    return getOrRenewAccessToken('get', code);
  }  
  const lastSavedTime = localStorage.getItem('last_saved_time');
  
  
  if (accessToken && (Date.now() - lastSavedTime < 3600000))
   {
     console.log(accessToken);
     return accessToken;
    }
  // If the access_token is expired, we try to renew it by using refresh_token
  const refreshToken = localStorage.getItem('refresh_token');
  return getOrRenewAccessToken('renew', refreshToken); 
}


async function getOrRenewAccessToken(type, key) {
  let url;
  if (type === 'get') {
    // Lambda endpoint to get token by code
    url = 'https://3lasqwgywb.execute-api.eu-central-1.amazonaws.com/dev/api/token/'+key;
  } else if (type === 'renew') {
    // Lambda endpoint to get token by refresh_token
    url = 'https://3lasqwgywb.execute-api.eu-central-1.amazonaws.com/dev/api/refresh/'+key;
  }

  // Use Axios to make a GET request to the endpoint
  const tokenInfo = await axios.get(url);

  // Save tokens to localStorage together with a timestamp
  localStorage.setItem('access_token', tokenInfo.data.access_token);
  localStorage.setItem('refresh_token', tokenInfo.data.refresh_token);
  localStorage.setItem('last_saved_time', Date.now());

  // Return the access_token
  return tokenInfo.data.access_token;
}

async function getSuggestions(query) {
  if (window.location.href.startsWith('http://localhost')) {

    
    return [
      {
        city: 'Munich',
        country: 'de',
        localized_country_name: 'Germany',
        name_string: 'Munich, Germany',
        zip: 'meetup3',
        lat: 48.14,
        lon: 11.58
      },
      {
        city: 'Munich',
        country: 'us',
        localized_country_name: 'USA',
        state: 'ND',
        name_string: 'Munich, North Dakota, USA',
        zip: '58352',
        lat: 48.66,
        lon: -98.85
      }
    ];
  }
  
    const token = await getAccessToken();
    
    if (token) {
      const url = 'https://cors-anywhere.herokuapp.com/https://api.meetup.com/find/locations?&sign=true&photo-host=public&query='
      + query+ '&access_token=' + token;
      
    const result = await axios.get(url);
    return result.data;
    }
    return [];
  }


  async function getEvents(lat, lon) {
    if (window.location.href.startsWith('http://localhost')) {
    return mockEvents.events;
    }
    else
    {
      if (!navigator.onLine) {
        const events = localStorage.getItem('lastEvents');
        console.log('offline');
        
        return JSON.parse(events);
        
        
      }
      const token = await getAccessToken();

      if (token) {
        let url = 'https://cors-anywhere.herokuapp.com/https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public'
          + '&access_token=' + token;
        // lat, lon is optional; if you have a lat and lon, you can add them
        if (lat && lon) {
          url += '&lat=' + lat + '&lon=' + lon;
        }
        const result = await axios.get(url);
        
        const events = result.data.events;
        
        if (events.length) { // Check if the events exist

        localStorage.setItem('lastEvents', JSON.stringify(events));
        } 

       return events;


      }  
    }
  }

  export { getSuggestions,getEvents };