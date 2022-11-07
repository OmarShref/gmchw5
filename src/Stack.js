import Stack from "react-bootstrap/Stack";
import BasicExample from "./Form";
function VerticalExample() {
  return (
    <Stack gap={5} className="container">
      <div className="bg-light border">
        <BasicExample />
      </div>
      <div className="bg-light border"></div>
      <div className="bg-light border"></div>
    </Stack>
  );
}

export default VerticalExample;
