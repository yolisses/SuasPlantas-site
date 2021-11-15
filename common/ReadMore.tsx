import { loremIpsum } from "../mock/loremIpsum";

export function ReadMore() {
  return (
    <div>
      <div>Ver mais</div>
      <div>{loremIpsum}</div>
    </div>
  );
}
