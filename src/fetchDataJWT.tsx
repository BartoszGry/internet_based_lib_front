import axios from 'axios';

const fetchDataWithJwt = async () => {
  try {
 
    if (typeof document !== 'undefined' && document.cookie) {
      const jwtToken = document.cookie
        .split('; ')
        .find((row) => row.startsWith('jwt='))
        ?.split('=')[1];

      if (jwtToken) {
     
        const headers = {
          Authorization: `Bearer ${jwtToken}`,
        };

        //tu wpisac adres jeszce do zrobienia
        const response = await axios.get('', { headers });

        
        console.log(response.data);
      }
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchDataWithJwt();
