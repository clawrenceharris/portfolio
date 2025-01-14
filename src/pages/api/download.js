import fs from "fs";
import path from "path";

export default function handler(req, res) {
  // Replace 'path/to/your/file.txt' with the actual path to your file
  const filePath = path.join(process.cwd(), "public/CalebHarris.pdf");

  // Read the file
  const fileContents = fs.readFileSync(filePath);

  // Set the response headers
  res.setHeader(
    "Content-Disposition",
    'attachment; filename="CalebHarrisResume.pdf"'
  );
  res.setHeader("Content-Type", "application/octet-stream");
  res.setHeader("Content-Length", fileContents.length);

  // Send the file as the response
  res.send(fileContents);
}
