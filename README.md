<html>
<head>
  <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
  <link rel = "stylesheet" href = "/style.css">
</head>
<body>
  <h1>
    File Service Metadata
  </h1>
  <div>
    <p>
      This is a freeCodeCamp api project.
    </p>
    <h2>
      User Stories:
    </h2>
    <ul>
      <li> I can submit a FormData object that includes a file upload.</li>
      <li> When I submit something, I will receive the file size in bytes within the JSON response</li>
    </ul>
  </div>
<form action="/upload" method="post" enctype="multipart/form-data">
  <input type="file" name="file">
  <input type="submit">
</form>
</body>
</html>
