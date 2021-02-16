function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5czTtMIcxgV":
        Script1();
        break;
  }
}

function Script1()
{
  function module_completed() {
// this is for learndash
let np = parent.document.getElementById("sfwd-mark-complete")
if (np != null) {
np.submit();
return;
}
}

module_completed();
}

