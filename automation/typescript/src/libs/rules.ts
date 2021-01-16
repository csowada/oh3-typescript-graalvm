import { SimpleRule } from './openhab-types';
import { toSet } from './java-utils';

const automationManager: org.openhab.core.automation.module.script.rulesupport.shared.ScriptedAutomationManager = require('@runtime/RuleSupport').automationManager;
// const ThreadsafeWrappingScriptedAutomationManagerDelegate: any = Java.type("org.openhab.automation.jsscripting.internal.threading.ThreadsafeWrappingScriptedAutomationManagerDelegate");
// const automationManager = new ThreadsafeWrappingScriptedAutomationManagerDelegate(automationManager2) as org.openhab.core.automation.module.script.rulesupport.shared.ScriptedAutomationManager;

console.log("-------------->", automationManager.toString());

type ExecuteType = (action: org.openhab.core.automation.Action, input: { [index: string]: any }) => void;

type ExecuteFnType = {

  /** Execution function on trigger events */
  execute: ExecuteType,

  /** Array of triggers */
  triggers?: org.openhab.core.automation.Trigger[],

  /** Tags for rule, also used for sematic stuff ? */
  tags?: string[],

  /** Rule name */
  name?:string

  /** Rule description */
  description?: string,

  /** Set to ``false`` to not automatically add rule via automationManager */
  autoAdd?: boolean
}

/**
 * Creates a rule with all required properties and usually add to automation manager
 * @param params Parameters as object
 */
export const createRule = (params: ExecuteFnType): org.openhab.core.automation.module.script.rulesupport.shared.simple.SimpleRule => {
  const SimpleRuleExt: any = Java.extend(SimpleRule);

  // wrap rule in a final try-catch block to receive the error!
  const execute: ExecuteType = (action, input) => {
    try {
      params.execute(action, input);
    } catch(e) {
      console.error("------------------------------------------")
      console.error("# Error: ", e);
      console.error("------------------------------------------")
    }
  }

  const rule : org.openhab.core.automation.module.script.rulesupport.shared.simple.SimpleRule = new SimpleRuleExt({ execute: execute});

  if (params.triggers && params.triggers.length > 0) {
    rule.setTriggers(params.triggers);
  }

  if (params.name) {
    rule.setName(params.name);
  }

  if (params.description) {
    rule.setDescription(params.description);
  }

  if (params.tags) {
    rule.setTags(toSet(params.tags));
  }

  if (typeof params.autoAdd === 'undefined' || params.autoAdd === true) {
    
    automationManager.addRule(rule)
  }

  return rule;
}