
    let qrContentInput = document.getElementById("qrcode_value");
    let generate_btn = document.getElementById("generate_btn");
    let qrCode;
     
    function generateQrCode(qrContent) {
      return new QRCode("qr-code", {
        text: qrContent,
        width: 230,
        height: 230,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });
    }
     

    generate_btn.addEventListener("click", ()=> {
      let qrContent = qrContentInput.value;
      if (qrCode == null) {
        qrCode = generateQrCode(qrContent);
      } else {
           
        qrCode.makeCode(qrContent);
      }
    });