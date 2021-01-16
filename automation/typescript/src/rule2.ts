import { events, ir } from "./libs/items";
import { OnOffType } from "./libs/openhab-types";
import { createRule } from "./libs/rules";
import { GenericCronTrigger } from "./libs/triggers";

const ITEM_SWITCH_NAME = "MySwitch";  // <--- A Switch item x

createRule({
  autoAdd: false,
  name: "JSR223 Example - Switch toggle",
  description: "And here my description",
  tags: ["Office", "Battery", "Other"],
  triggers: [
    GenericCronTrigger("0 * * * * ?", "my-chron-trigger31"), // Run every minute 1
  ],
  execute: (action, input) => {
    const item = ir.get(ITEM_SWITCH_NAME+"x") as org.openhab.core.items.Item;
    // const item = ir.getItem(ITEM_SWITCH_NAME+"x");
    if (item) {
      const newState = item.getState() === OnOffType.ON ? OnOffType.OFF : OnOffType.ON;
      events.postUpdate(item, newState);
    } else {
      console.log(`Sorry, switch item ${ITEM_SWITCH_NAME} not found four our example ...`);
    }
  }
});