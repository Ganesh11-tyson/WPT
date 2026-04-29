  function ValidateForEmpty(controlId, errorId, errorMessage, containerId) {
        var refToTxt = document.getElementById(controlId);
        var refToerrorMessageParagraph = document.getElementById(errorId);
        var refToMesssgeParagraph = document.getElementById(containerId);

        if (refToTxt.value == "") {
          refToerrorMessageParagraph.innerText = errorMessage;
        } else {
          refToerrorMessageParagraph.innerText = "";
          refToMesssgeParagraph.innerText =
            refToMesssgeParagraph.innerText + refToTxt.value;
        }
      }
  