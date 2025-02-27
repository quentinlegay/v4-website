import philipsHue from "./philips-hue.json";
import sonoff from "./sonoff.json";
import zwave from "./zwave.json";
import xiaomi from "./xiaomi.json";
import camera from "./camera.json";
import tpLink from "./tp-link.json";
import zigbee2mqtt from "./zigbee2mqtt.json";

const integrations = zigbee2mqtt
  .concat(sonoff)
  .concat(xiaomi)
  .concat(philipsHue)
  .concat(tpLink)
  .concat(camera);
// .concat(zwave);

export default integrations;
