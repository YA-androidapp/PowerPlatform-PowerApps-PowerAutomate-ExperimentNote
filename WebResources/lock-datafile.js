function writeToConsole(message)
{
 if (typeof console != 'undefined') {
  console.log(message);
 }
}

function onChange(executionContext) {
 var formContext = executionContext.getFormContext();
 var isLocked = formContext.getAttribute("ya_islocked");
 if (isLocked) {
  writeToConsole(isLocked);
  formContext.getControl("ya_datafile").setDisabled(true);
 }
}
