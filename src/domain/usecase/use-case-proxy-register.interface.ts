import { UsecaseProxyProviderType } from "../common"

export interface UseCaseProxyRegisterInterface {
    registerExports(): Array<string>

    registerProviders(): Array<UsecaseProxyProviderType>
}
