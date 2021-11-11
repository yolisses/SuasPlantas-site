import localforage from "localforage";
import { create } from "mobx-persist";

export const hydrate = create({
  storage: localforage,
  jsonify: false,
});
