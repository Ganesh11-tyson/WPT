 function ValidateEmpty(id, errid, errMessage) {
        var refTotxtControl = document.getElementById(id);
        var refToerrorControl = document.getElementById(errid);
        var refTomypara = document.getElementById("mypara");

        if (refTotxtControl.value == "") {
          refToerrorControl.innerText = errMessage;
        } else {
          refToerrorControl.innerText = "";
          refTomypara.innerText = refTomypara.innerText + refTotxtControl.value;
        }
      }
