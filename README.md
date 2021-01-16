# What is this project about

This is just an example how we could enhance OpenHAB 3.0 for JavaScript/TypeScript. This is based on the great work of @jpg0 and his pending requests on the openhab repo. So he it the author of the automation binding - I just modfied it a bit.

More information here: https://github.com/openhab/openhab-addons/pull/8516

# How to use this example

- Prepare a (fresh) OpenHAB 3.0 installtion on you computer
- Copy this into the ``conf`` folder, the interesting part is the folder ``automation``
- Download both files from github https://github.com/csowada/openhab2-addons/releases/tag/jsscripting-example-v1
  - Maybe the ...support.jar file is not required
- Copy my modified version of ``jpg0/openhab-addons:jsscripting`` branch
- Done -> use the ``automation/jsr223-node`` directory for JavaScript rules

## TypeScript

- Install Typescript global on your computer
- Run ``npm install`` from the ``automation/typescript`` directory
- Run the command ``tsc`` or ``tsc -w`` from the ``automation/typescript`` directory
- Check if the rules are woking :-)

Thank you @jpg0 for the great implementation, I really like his work !!!

## Changes to the original jsscripting binding

I've added a custom FileWatcher to ignore the current OpenHab implementation to load files in the automation directory. My implementation only loads files in the root ``automation/jsr223-node`` folder. Due to this change you can have a ``node_modules`` directory in the same directory and also use relative files with ``require`` or ``import``.