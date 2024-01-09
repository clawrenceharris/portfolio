export async function GET(req, { params }) {
    // filename for the file that the user is trying to download
    const filename = params.filename;
  
    // external file URL
    const URL =
      "https://www.dropbox.com/scl/fi/f12h399p5emkn3c8eibrs/TechResume.pdf?rlkey=u87mc5n3fh5m06www6qkyeuh9&dl=0";
  
    // use fetch to get a response
    const response = await fetch(URL);
  
    // return a new response but use 'content-disposition' to suggest saving the file to the user's computer
    return new Response(response.body, {
      headers: {
        ...response.headers, // copy the previous headers
        "content-disposition": `attachment; filename="${filename}"`,
      },
    });
  }