var yakin = confirm("Apakah kamu yakin akan mengunjungi Google?");

if (yakin) {
  window.location = "https://www.google.com";
} else {
  document.write("Baiklah, tetap di sini saja ya :)");
}
