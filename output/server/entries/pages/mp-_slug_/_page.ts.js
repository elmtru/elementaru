import { f as fetch_zipped, m as mp_build_bucket } from "../../../chunks/api.js";
const prerender = false;
const load = async ({ params }) => {
  const file = `mp-${params.slug}.json.gz`;
  const summary_url = `${mp_build_bucket}/summary/${file}`;
  const similarity_url = `${mp_build_bucket}/similarity/${file}`;
  const robocrys_url = `${mp_build_bucket}/robocrys/${file}`;
  return {
    summary: fetch_zipped(summary_url),
    similarity: fetch_zipped(similarity_url),
    robocrys: fetch_zipped(robocrys_url)
  };
};
export {
  load,
  prerender
};
