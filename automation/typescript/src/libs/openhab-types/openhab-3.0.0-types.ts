/*
 * Project: java2typescript - https://github.com/bsorrentino/java2typescript
 *
 * Author: bsorrentino 
 *
 * TYPESCRIPT EXPORTED DECLARATIONS
 *
 */
//// <reference path="openhab-3.0.0.d.ts"/>

// events
export const ItemStateChangedEvent: org.openhab.core.items.events.ItemStateChangedEvent = Java.type("org.openhab.core.items.events.ItemStateChangedEvent");
export const ItemCommandEvent: org.openhab.core.items.events.ItemCommandEvent = Java.type("org.openhab.core.items.events.ItemCommandEvent");
export const GroupItemStateChangedEvent: org.openhab.core.items.events.GroupItemStateChangedEvent = Java.type("org.openhab.core.items.events.GroupItemStateChangedEvent");
export const ItemEvent: org.openhab.core.items.events.ItemEvent = Java.type("org.openhab.core.items.events.ItemEvent");
export const ItemUpdatedEvent: org.openhab.core.items.events.ItemUpdatedEvent = Java.type("org.openhab.core.items.events.ItemUpdatedEvent");

/** All openhab types */
export const ArithmeticGroupFunction: org.openhab.core.library.types.ArithmeticGroupFunction = Java.type("org.openhab.core.library.types.ArithmeticGroupFunction");
export const DateTimeGroupFunction: org.openhab.core.library.types.DateTimeGroupFunction = Java.type("org.openhab.core.library.types.DateTimeGroupFunction");
export const DateTimeType: org.openhab.core.library.types.DateTimeType = Java.type("org.openhab.core.library.types.DateTimeType");
export const DecimalType: org.openhab.core.library.types.DecimalType = Java.type("org.openhab.core.library.types.DecimalType");
// export const HSBType: org.openhab.core.library.types.HSBType = Java.type("org.openhab.core.library.types.HSBType");
// export const IncreaseDecreaseType: org.openhab.core.library.types.IncreaseDecreaseType = Java.type("org.openhab.core.library.types.IncreaseDecreaseType");
// export const NextPreviousType: org.openhab.core.library.types.NextPreviousType = Java.type("org.openhab.core.library.types.NextPreviousType");
// export const OnOffType: org.openhab.core.library.types.OnOffType = Java.type("org.openhab.core.library.types.OnOffType");
// export const OpenClosedType: org.openhab.core.library.types.OpenClosedType = Java.type("org.openhab.core.library.types.OpenClosedType");
export const PercentType: org.openhab.core.library.types.PercentType = Java.type("org.openhab.core.library.types.PercentType");
// export const PlayPauseType: org.openhab.core.library.types.PlayPauseType = Java.type("org.openhab.core.library.types.PlayPauseType");
export const PointType: org.openhab.core.library.types.PointType = Java.type("org.openhab.core.library.types.PointType");
export const RawType: org.openhab.core.library.types.RawType = Java.type("org.openhab.core.library.types.RawType");
// export const RewindFastforwardType: org.openhab.core.library.types.RewindFastforwardType = Java.type("org.openhab.core.library.types.RewindFastforwardType");
// export const StopMoveType: org.openhab.core.library.types.StopMoveType = Java.type("org.openhab.core.library.types.StopMoveType");
export const StringListType: org.openhab.core.library.types.StringListType = Java.type("org.openhab.core.library.types.StringListType");
export const StringType: org.openhab.core.library.types.StringType = Java.type("org.openhab.core.library.types.StringType");
// export const UpDownType: org.openhab.core.library.types.UpDownType = Java.type("org.openhab.core.library.types.UpDownType");

export const Type: org.openhab.core.types.Type = Java.type("org.openhab.core.types.Type");



interface SimpleRuleStatic {

	readonly class:any;
	new(  ):org.openhab.core.automation.module.script.rulesupport.shared.simple.SimpleRule;
}

export const SimpleRule: SimpleRuleStatic = Java.type("org.openhab.core.automation.module.script.rulesupport.shared.simple.SimpleRule");

interface ConfigurationStatic {

    readonly class: any;
    new(arg0: { [index: string]: any }): org.openhab.core.config.core.Configuration;
    // new(arg0: java.util.Map<string, any /*java.lang.Object*/>): org.openhab.core.config.core.Configuration;
    new(arg0: org.openhab.core.config.core.Configuration): org.openhab.core.config.core.Configuration;
    new(): org.openhab.core.config.core.Configuration;
}

export const Configuration: ConfigurationStatic = Java.type("org.openhab.core.config.core.Configuration");

interface TriggerBuilderStatic {

	readonly class:any;
	create<B,T>( arg0:org.openhab.core.automation.Module ):org.openhab.core.automation.util.ModuleBuilder<B, T>;
	create( arg0:org.openhab.core.automation.Trigger ):org.openhab.core.automation.util.TriggerBuilder;
	create(  ):org.openhab.core.automation.util.TriggerBuilder;
	createAction( arg0:org.openhab.core.automation.Action ):org.openhab.core.automation.util.ActionBuilder;
	createAction(  ):org.openhab.core.automation.util.ActionBuilder;
	createCondition(  ):org.openhab.core.automation.util.ConditionBuilder;
	createCondition( arg0:org.openhab.core.automation.Condition ):org.openhab.core.automation.util.ConditionBuilder;
	createTrigger( arg0:org.openhab.core.automation.Trigger ):org.openhab.core.automation.util.TriggerBuilder;
	createTrigger(  ):org.openhab.core.automation.util.TriggerBuilder;
}

export const TriggerBuilder: TriggerBuilderStatic = Java.type("org.openhab.core.automation.util.TriggerBuilder");

interface ModuleBuilderStatic {

	readonly class:any;
	create<B,T>( arg0:org.openhab.core.automation.Module ):org.openhab.core.automation.util.ModuleBuilder<B, T>;
	createAction( arg0:org.openhab.core.automation.Action ):org.openhab.core.automation.util.ActionBuilder;
	createAction(  ):org.openhab.core.automation.util.ActionBuilder;
	createCondition(  ):org.openhab.core.automation.util.ConditionBuilder;
	createCondition( arg0:org.openhab.core.automation.Condition ):org.openhab.core.automation.util.ConditionBuilder;
	createTrigger( arg0:org.openhab.core.automation.Trigger ):org.openhab.core.automation.util.TriggerBuilder;
	createTrigger(  ):org.openhab.core.automation.util.TriggerBuilder;
}

export const ModuleBuilder: ModuleBuilderStatic = Java.type("org.openhab.core.automation.util.ModuleBuilder");


interface ActionBuilderStatic {

	readonly class:any;
	create<B,T>( arg0:org.openhab.core.automation.Module ):org.openhab.core.automation.util.ModuleBuilder<B, T>;
	create( arg0:org.openhab.core.automation.Action ):org.openhab.core.automation.util.ActionBuilder;
	create(  ):org.openhab.core.automation.util.ActionBuilder;
	createAction( arg0:org.openhab.core.automation.Action ):org.openhab.core.automation.util.ActionBuilder;
	createAction(  ):org.openhab.core.automation.util.ActionBuilder;
	createCondition(  ):org.openhab.core.automation.util.ConditionBuilder;
	createCondition( arg0:org.openhab.core.automation.Condition ):org.openhab.core.automation.util.ConditionBuilder;
	createTrigger( arg0:org.openhab.core.automation.Trigger ):org.openhab.core.automation.util.TriggerBuilder;
	createTrigger(  ):org.openhab.core.automation.util.TriggerBuilder;
}

export const ActionBuilder: ActionBuilderStatic = Java.type("org.openhab.core.automation.util.ActionBuilder");

interface ConditionBuilderStatic {

	readonly class:any;
	create<B,T>( arg0:org.openhab.core.automation.Module ):org.openhab.core.automation.util.ModuleBuilder<B, T>;
	create( arg0:org.openhab.core.automation.Condition ):org.openhab.core.automation.util.ConditionBuilder;
	create(  ):org.openhab.core.automation.util.ConditionBuilder;
	createAction( arg0:org.openhab.core.automation.Action ):org.openhab.core.automation.util.ActionBuilder;
	createAction(  ):org.openhab.core.automation.util.ActionBuilder;
	createCondition(  ):org.openhab.core.automation.util.ConditionBuilder;
	createCondition( arg0:org.openhab.core.automation.Condition ):org.openhab.core.automation.util.ConditionBuilder;
	createTrigger( arg0:org.openhab.core.automation.Trigger ):org.openhab.core.automation.util.TriggerBuilder;
	createTrigger(  ):org.openhab.core.automation.util.TriggerBuilder;
}

export const ConditionBuilder: ConditionBuilderStatic = Java.type("org.openhab.core.automation.util.ConditionBuilder");