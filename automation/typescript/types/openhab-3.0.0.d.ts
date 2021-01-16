/// <reference path="openhab-3.0.0-gen.d.ts"/>

declare namespace Java {
    export function extend<T>(clazz: any, methods?: {}): T;
}

declare namespace org.openhab.core.events {

    interface Event {

        getPayload(): string;
        getSource(): string;
        getTopic(): string;
        getType(): string;

    } // end Event

    class AbstractEvent implements org.openhab.core.events.Event {

        equals(arg0: any /*java.lang.Object*/): boolean;
        getPayload(): string;
        getSource(): string;
        getTopic(): string;
        getType(): string;
        toString(): string;

    } // end AbstractEvent
    
} // end namespace org.openhab.core.events

declare namespace org.openhab.core.items.events {

    class ItemEvent extends org.openhab.core.events.AbstractEvent {

        getItemName(): string;

    } // end ItemEvent

    class ItemStatePredictedEvent extends ItemEvent {

        getPredictedState(): org.openhab.core.types.State;
        isConfirmation(): boolean;

    } // end ItemStatePredictedEvent

    class ItemCommandEvent extends ItemEvent {

        getItemCommand(): org.openhab.core.types.Command;

    } // end ItemCommandEvent

    class ItemStateChangedEvent extends ItemEvent {

        getItemState(): org.openhab.core.types.State;
        getOldItemState(): org.openhab.core.types.State;

    } // end ItemStateChangedEvent

    class ItemUpdatedEvent/* extends AbstractItemRegistryEvent*/ {

        getItem(): any /*org.openhab.core.items.dto.ItemDTO*/;
        getOldItem(): any /*org.openhab.core.items.dto.ItemDTO*/;

    } // end ItemUpdatedEvent

    class GroupItemStateChangedEvent extends ItemStateChangedEvent {

        getItemState(): org.openhab.core.types.State;
        getMemberName(): string;
        getOldItemState(): org.openhab.core.types.State;

    } // end GroupItemStateChangedEvent

} // end namespace org.openhab.core.items.events




















declare namespace org.openhab.core.automation.module.script.internal.defaultscope {

    class ScriptBusEvent/* extends java.lang.Object*/ {

        dispose(): void;
        equals(arg0: any /*java.lang.Object*/): boolean;
        postUpdate(arg0: org.openhab.core.items.Item, arg1: number): any /*java.lang.Object*/;
        postUpdate(arg0: org.openhab.core.items.Item, arg1: org.openhab.core.types.State): any /*java.lang.Object*/;
        postUpdate(arg0: org.openhab.core.items.Item, arg1: string): any /*java.lang.Object*/;
        postUpdate(arg0: string, arg1: string): any /*java.lang.Object*/;
        restoreStates(arg0: java.util.Map<org.openhab.core.items.Item, org.openhab.core.types.State>): any /*java.lang.Object*/;
        sendCommand(arg0: org.openhab.core.items.Item, arg1: number /*java.lang.Number*/): any /*java.lang.Object*/;
        sendCommand(arg0: org.openhab.core.items.Item, arg1: org.openhab.core.types.Command): any /*java.lang.Object*/;
        sendCommand(arg0: org.openhab.core.items.Item, arg1: string): any /*java.lang.Object*/;
        sendCommand(arg0: string, arg1: string): any /*java.lang.Object*/;
        storeStates(...arg0: org.openhab.core.items.Item[]): java.util.Map<org.openhab.core.items.Item, org.openhab.core.types.State>;
        toString(): string;

    } // end ScriptBusEvent

} // end namespace org.openhab.core.automation.module.script.internal.defaultscope

declare namespace org.openhab.core.items {

    interface Item/* extends org.openhab.core.common.registry.Identifiable<any>*/ {

        getAcceptedCommandTypes(): java.util.List<java.lang.Class<org.openhab.core.types.Command>>;
        getAcceptedDataTypes(): java.util.List<java.lang.Class<org.openhab.core.types.State>>;
        getCategory(): string;
        getCommandDescription(): org.openhab.core.types.CommandDescription;
        getCommandDescription(arg0: java.util.Locale): org.openhab.core.types.CommandDescription;
        getGroupNames(): java.util.List<string>;
        getLabel(): string;
        getName(): string;
        getState(): org.openhab.core.types.State;
        getStateAs<T>(arg0: T): T;
        getStateDescription(): org.openhab.core.types.StateDescription;
        getStateDescription(arg0: java.util.Locale): org.openhab.core.types.StateDescription;
        getTags(): java.util.Set<string>;
        getType(): string;
        getUID<T>(): T;
        hasTag(arg0: string): boolean;

    } // end Item

    interface ItemRegistry/* extends org.openhab.core.common.registry.Registry<any, any>*/ {

        add<E>(arg0: E): E;
        addRegistryChangeListener(arg0: any /*org.openhab.core.common.registry.RegistryChangeListener*/): void;
        addRegistryHook(arg0: any /*org.openhab.core.items.RegistryHook*/): void;
        get<K, E>(arg0: K): E;
        getAll<E>(): java.util.Collection<E>;
        getItem(arg0: string): Item;
        getItemByPattern(arg0: string): Item;
        getItems(): Item[];
        getItems(arg0: string): Item[];
        getItemsByTag(...arg0: string[]): Item[];
        getItemsByTag<T>(arg0: T, ...arg1: string[]): T[];
        getItemsByTagAndType(arg0: string, ...arg1: string[]): Item[];
        getItemsOfType(arg0: string): Item[];
        remove(arg0: string, arg1: boolean): Item;
        remove<K, E>(arg0: K): E;
        removeRegistryChangeListener(arg0: any /*org.openhab.core.common.registry.RegistryChangeListener*/): void;
        removeRegistryHook(arg0: any /*org.openhab.core.items.RegistryHook*/): void;
        stream<E>(): java.util.stream.Stream<E>;
        update<E>(arg0: E): E;

    } // end ItemRegistry

} // end namespace org.openhab.core.items
declare namespace org.openhab.core.config.core {

    class Configuration/* extends java.lang.Object*/ {

        as<T>(arg0: T): T;
        containsKey(arg0: string): boolean;
        equals(arg0: any /*java.lang.Object*/): boolean;
        get(arg0: string): any /*java.lang.Object*/;
        getProperties(): { [index: string]: any };
        keySet(): string[];
        put(arg0: string, arg1: any /*java.lang.Object*/): any /*java.lang.Object*/;
        remove(arg0: string): any /*java.lang.Object*/;
        setProperties(arg0: { [index: string]: any }): void;
        toString(): string;
        values(): any[];

    } // end Configuration

} // end namespace org.openhab.core.config.core

declare namespace org.openhab.core.common.registry {

    interface Identifiable<T> {
        getUID(): T;
    } // end Identifiable

} // end namespace org.openhab.core.common.registry

declare namespace org.openhab.core.automation.util {

    class ModuleBuilder<B, T> {
        build(): T;
        equals(arg0: any /*java.lang.Object*/): boolean;
        toString(): string;
        withConfiguration(arg0: org.openhab.core.config.core.Configuration): B;
        withDescription(arg0: string): B;
        withId(arg0: string): B;
        withLabel(arg0: string): B;
        withTypeUID(arg0: string): B;
    }

    class TriggerBuilder extends ModuleBuilder<TriggerBuilder, Trigger> {
        build(): org.openhab.core.automation.Trigger;
    }

    class ConditionBuilder extends ModuleBuilder<ConditionBuilder, Trigger> {
        build(): org.openhab.core.automation.Condition;
    }

    class ActionBuilder extends ModuleBuilder<ActionBuilder, Trigger> {
        build(): org.openhab.core.automation.Action;
    }

} // end namespace org.openhab.core.automation.util
declare namespace org.openhab.core.types {

    interface State/* extends Type*/ {
        as<T>(arg0: T): T;
        format(arg0: string): string;
        toFullString(): string;

    } // end State

} // end namespace org.openhab.core.types
declare namespace org.openhab.core.automation {

    interface Rule extends org.openhab.core.common.registry.Identifiable<string> {

        getActions(): Action[];
        getConditions(): Condition[];
        getConfiguration(): any /*org.openhab.core.config.core.Configuration*/;
        getConfigurationDescriptions(): org.openhab.core.config.core.ConfigDescriptionParameter[];
        getDescription(): string;
        getModule(arg0: string): Module;
        getModules(): Module[];
        getName(): string;
        getTags(): string[];
        getTemplateUID(): string;
        getTriggers(): Trigger[];
        getUID(): string;
        getVisibility(): Visibility;

    } // end Rule

} // end namespace org.openhab.core.automation

declare namespace org.openhab.core.automation.module.script.rulesupport.shared.simple {

    interface SimpleRuleActionHandler {
        execute(arg0: org.openhab.core.automation.Action, arg1: { [index: string]: any }): any /*java.lang.Object*/;
    } // end SimpleRuleActionHandler

    class SimpleRule implements org.openhab.core.automation.Rule, SimpleRuleActionHandler {
        equals(arg0: any /*java.lang.Object*/): boolean;
        execute(arg0: org.openhab.core.automation.Action, arg1: { [index: string]: any }): any /*java.lang.Object*/;
        getActions(): org.openhab.core.automation.Action[];
        getConditions(): org.openhab.core.automation.Condition[];
        getConfiguration(): org.openhab.core.config.core.Configuration;
        getConfigurationDescriptions(): org.openhab.core.config.core.ConfigDescriptionParameter[];
        getDescription(): string;
        getModule(arg0: string): org.openhab.core.automation.Module;
        getModules(): org.openhab.core.automation.Module[];
        getModules<T>(arg0: T): T[];
        getName(): string;
        getTags(): string[];
        getTemplateUID(): string;
        getTriggers(): org.openhab.core.automation.Trigger[];
        getUID(): string;
        getVisibility(): org.openhab.core.automation.Visibility;
        setActions(arg0: org.openhab.core.automation.Action[]): void;
        setConditions(arg0: org.openhab.core.automation.Condition[]): void;
        setConfiguration(arg0: org.openhab.core.config.core.Configuration): void;
        setConfigurationDescriptions(arg0: org.openhab.core.config.core.ConfigDescriptionParameter[]): void;
        setDescription(arg0: string): void;
        setName(arg0: string): void;
        setTags(arg0: string[]): void;
        setTags(arg0: java.util.Set<string>): void;
        setTemplateUID(arg0: string): void;
        setTriggers(arg0: org.openhab.core.automation.Trigger[]): void;
        setVisibility(arg0: org.openhab.core.automation.Visibility): void;
        toString(): string;
    } // end SimpleRule

} // end namespace org.openhab.core.automation.module.script.rulesupport.shared.simple