import QRCode from 'qrcode.react';
import { useCookies } from 'react-cookie';

const MyQRCodeComponent = () => {
  // Dane do zakodowania przekazywane jako props.data
  const [cookies] = useCookies(['jwt']); 

  return (
    <div>
      <h2>Twój kod QR:</h2>
      <QRCode value={cookies.jwt}
       size={300} />
    </div>
  );
};

export default MyQRCodeComponent;
