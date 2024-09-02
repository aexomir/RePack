import {ScriptManager, Script} from '@callstack/repack/client';

class ModuleResolver {
  public init = () => {
    try {
      ScriptManager.shared.addResolver(async (scriptId, _caller) => {
        // In dev mode, resolve script location to dev server.
        if (__DEV__) {
          console.log('comes here dg');
          return {
            url: Script.getDevServerURL(scriptId),
            cache: false,
          };
        }

        return {
          url: Script.getRemoteURL(
            `http://somewhere-on-the-internet.com/${scriptId}`,
          ),
        };
      });
    } catch (error) {
      console.error('[!] Error Resolving Module: ', error);
    }
  };
}

export default new ModuleResolver();
