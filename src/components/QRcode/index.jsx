import { Container, Input, Box, Wrapper, Button } from "../UI";
import { useState } from "react";
import QRCode from "react-qr-code";
import QRcodeLink from "qrcode";

const QRcodeBox = () => {
  const [QRcodeData, setQRcodeData] = useState("");
  const [QRcodePng, setQRcodePng] = useState("");

  function handleGenerate(linkURL) {
    QRcodeLink.toDataURL(
      linkURL,
      {
        width: 600,
        margin: 5,
      },
      (error, url) => {
        setQRcodePng(url);
      }
    );
  }

  function handleQRcode(event) {
    setQRcodeData(event.target.value);
    handleGenerate(event.target.value);
  }

  console.log(QRcodeData);
  return (
    <Container>
        <Wrapper>
        <Box>
      <QRCode value={QRcodeData} />
      </Box>
      <br />
      <Button href={QRcodePng} download={`qrcode.png`}>Baixar QR Code</Button>
      <Input
        placeholder="Digite algo..."
        value={QRcodeData}
        onChange={handleQRcode}
      />
      </Wrapper>

    </Container>
  );
};

export default QRcodeBox;
