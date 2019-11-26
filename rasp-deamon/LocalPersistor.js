import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig'

let _db;

const initialize = () => {
  _db = new JsonDB(new Config("detections", true, false, '/'));
};

export default Object.freeze({
  initialize,
});
