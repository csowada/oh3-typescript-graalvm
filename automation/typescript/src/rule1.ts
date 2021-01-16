import { events, getItemState, ir } from "./libs/items";
import { DecimalType, ItemStateChangedEvent, OnOffType } from "./libs/openhab-types";
import { createRule } from "./libs/rules";
import { GenericCronTrigger, ItemStateChangeTrigger2 } from "./libs/triggers";

const ITEM_NAME = "AstronomischeSonnendaten_Azimut";  // <--- A DeciamlType item
const ITEM_SWITCH_NAME = "MySwitch";  // <--- A Switch item

const getTriggeredEvent = <T>(input: { [index: string]: any }, type: T, cb?: (event: T) => void): T | null => {

  if (input && input.get("event") && input.get("event").class === type) {

    if (cb) {
      cb(input.get("event"));
    }

    return input.get("event");
  }

  return null;
}

createRule({
  autoAdd: false,
  name: "JSR223 Example - Get state",
  description: "And here my description",
  tags: ["Office", "Battery", "Other"],
  triggers: [
    GenericCronTrigger("0 * * * * ?", "3my-chrxon-trigger2"), // Run every minute
    ItemStateChangeTrigger2({ itemName: ITEM_NAME, triggerName: 'my-change-trigger23' })
  ],
  execute: (action, input) => {

    console.log("Executing rule ..................");

    getTriggeredEvent(input, ItemStateChangedEvent, event => {
      console.log("Found event!", event);
      console.log("Old state: ", event.getOldItemState().as(DecimalType).floatValue());
      console.log("Current state: ", event.getItemState().as(DecimalType).floatValue());
    });

    // 1. long way to get an item state
    const item1 = ir.getItem(ITEM_NAME);
    if (item1) {
      const state1 = item1.getStateAs(DecimalType);

      if (state1) {
        console.log("My state1 -> ", state1.floatValue());
      }
    }

    const state2 = getItemState(ITEM_NAME, DecimalType);
    if (state2) {
      console.log("My state2 -> ", state2.floatValue());
    }

    // use it with callback if type is valid
    getItemState(ITEM_NAME, DecimalType, v => {
      console.log("My state3 -> ", v.floatValue());
    });

    const item = ir.getItem(ITEM_SWITCH_NAME);
    events.postUpdate(item, OnOffType.OFF);
  }
});

createRule({
  autoAdd: false,
  name: "JSR223 Example - Switch toggle",
  description: "And here my description",
  tags: ["Office", "Battery", "Other"],
  triggers: [
    GenericCronTrigger("0 * * * * ?", "my-chron-trigger31"), // Run every minute 2
  ],
  execute: (action, input) => {
    console.log("1!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  }
});