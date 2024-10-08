import type { ObservableSyncState } from './observableInterfaces';
import { getNode } from './globals';
import { observable } from './observable';
import type { ObservableParam } from './observableTypes';

export function syncState(obs: ObservableParam) {
    const node = getNode(obs);
    if (!node.state) {
        node.state = observable<ObservableSyncState>({
            isPersistLoaded: false,
            isLoaded: false,
            isPersistEnabled: true,
            isSyncEnabled: true,
            isGetting: false,
            isSetting: false,
            numPendingGets: 0,
            numPendingSets: 0,
            syncCount: 0,
            clearPersist: undefined as unknown as () => Promise<void>,
            reset: () => Promise.resolve(),
            sync: () => Promise.resolve(),
            getPendingChanges: () => ({}),
        });
    }
    return node.state!;
}
