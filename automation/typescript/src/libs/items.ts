export const itemRegistry: org.openhab.core.items.ItemRegistry = require('@runtime').itemRegistry;
export const ir = itemRegistry;

export const events: org.openhab.core.automation.module.script.internal.defaultscope.ScriptBusEvent = require('@runtime').events;

export const getItemState = <T>(itemName: string, type: T, callback?: (value: T) => void): T|null => {

    const item = ir.getItem(itemName);
    if (item) {
        const state = item.getStateAs(type);

        if (state && callback) {
            callback(state);
        }

        return state;
    }

    return null;
}