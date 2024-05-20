import { e as element_data } from "../../../chunks/index3.js";
import { e as error } from "../../../chunks/index.js";
const load = ({ params }) => {
  const { slug } = params;
  const element = element_data.find((elem) => elem.name.toLowerCase() === slug);
  if (!element)
    throw error(404, `Page '${slug}' not found`);
  return { element };
};
export {
  load
};
