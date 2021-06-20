# Adobe CEP

### Installation
- CEP X.0 (X - version) is installed while the installation of a certain adobe creative cloud product which comes with the relevant CEP support.

<br>

### Development setup 
<br>

> Visual Studio Code

1. **Running an extended script on a adobe application**

    - Making the working folder a `workspace`.
    - Install `ExtendScript Debugger` extension.
    - From `Debug` tab click create `launch.json` file.
    - Then click `Start Debugging [>]` icon.
    - Select the relevant Abode programme and type in the entry point `[name].jsx` file.
    - Adding a configuration : add a new `json` object inside `configurations` field.

    <br>

    ```
        {
            "type": "extendscript-debug",
            "request": "launch",
            "name": "[name for launch option]",
            "program": "${workspaceFolder}/[path to jsx file]",
            "stopOnEntry": false
        }
    ```
    <br>

1. **Adding a plugin to the extensions panel**

    - Open the `Registry Editor` in windows.
    - Follow path `HKEY_CURRENT_USER > SOFTWARE > Adobe > CSXS.[version]`.
    - In selected CSXS version add a new `String value` named `PlayerDebugMode` and set its value to `1`.
    - Use [CEP HTML Extension Cookbook](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_9.x/Documentation/CEP%209.0%20HTML%20Extension%20Cookbook.md#applications-integrated-with-cep) to refer the relevant CEP version with a given creative cloud product.
    - Changing `manifest.xml` file.

    <br>

    ```
    <ExtensionManifest Version="[CEP version]" ...>
    ...

    <ExecutionEnvironment>

		<HostList>
            <Host Name="[Host ID]" Version="[Host version]" />
		</HostList>
        ...

        <RequiredRuntimeList>
			<RequiredRuntime Name="CSXS" Version="[CEP version]" />
		</RequiredRuntimeList>
        
    ...
    ```
    <br>

> Getting started

<br>

> Debugging

- [Documentation](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_8.x/Documentation/CEP%208.0%20HTML%20Extension%20Cookbook.md#remote-debugging)
- Create a `.debug` file in root folder
- Follow the given xml structure in the documentation.

    <br>

    ```
        <?xml version="1.0" encoding="UTF-8"?>
        <ExtensionList>
            <Extension Id="TESTID">
                <HostList>
                    <Host Name="PHXS" Port="8002"/>
                    <Host Name="PHSP" Port="8003"/>
                    <Host Name="PPRO" Port="8004"/>
                </HostList>
            </Extension>
        </ExtensionList>
    ```
    <br>

- Use the correct `Extension ID` from `manifest.xml`
- When the extension is opened, go to `http://localhost:[relevant port]/` from browser.
- Go to the `console` menu provided by the browser that extension is running on. <br> *`NOTE`: This is not referring to the console in chrome(browser) dev-tools, it is refering to the console window provided by the chromium engine that extension is actively running on.* 

<br>

> Market

- Adobe creative cloud market place does not seem to support plug-ins.
- Best solution is to try some third-party market place like `envato market`.
    - [Best sellers](https://videohive.net/category/premiere-pro-templates?sort=sales#content) in envato.
    - [Earnings](https://help.author.envato.com/hc/en-us/articles/360000472943) policy in envato.







