const mp_build_bucket = `https://materialsproject-build.s3.amazonaws.com/collections/2022-10-28`;
async function decompress(blob) {
  const unzip = new DecompressionStream(`gzip`);
  const stream = blob.pipeThrough(unzip);
  return await new Response(stream).text();
}
async function fetch_zipped(url, { unzip = true } = {}) {
  const response = await fetch(url);
  if (!response.ok) {
    console.error(
      `${response.status} ${response.statusText} for ${response.url}`
    );
    return null;
  }
  if (!unzip)
    return await response.blob();
  return JSON.parse(await decompress(response.body));
}
export {
  fetch_zipped as f,
  mp_build_bucket as m
};
