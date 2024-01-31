

interface NewsTileProps {
  header: string;
  text: string;
  imageBytes: string | null; // Assuming imageBytes is a base64 encoded string or null
}
const NewsTile:React.FC<NewsTileProps> = ({ header, text, imageBytes }) => {
  return (
    <div className="container" style={{ width: '250px',background:'white' }}>
      <div>
        {imageBytes && <img className="img-thumbnail" src={`data:image/png;base64, ${imageBytes}`} alt="News Image" />}
        <h1>{header}</h1>
      </div>
      <p>{text}</p>
    </div>
  );
};
  
  export default NewsTile;