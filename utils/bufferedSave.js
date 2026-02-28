let saving = false;

function bufferedSave() {
  if (saving) return;

  saving = true;

  setTimeout(() => {
    console.log("Saving...");
    saving = false;
  }, 2000);
}

module.exports = bufferedSave;