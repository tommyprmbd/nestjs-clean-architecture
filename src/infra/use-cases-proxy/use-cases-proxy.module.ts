import { DynamicModule, Module } from '@nestjs/common';
import { UseCaseProxyRegisterInterface } from 'src/domain/usecase';
import { RepositoriesModule } from '../repositories/repositories.module';
import { EncryptModule } from '../encrypt/encrypt.module';
import { EnvironmentModule } from '../config/environment/environment.module';
import { AuthModule } from '../auth';
import { AuthProxyRegister, PostProxyRegister, UserProxyRegister } from './registers';

@Module({
    imports: [
        RepositoriesModule,
        EncryptModule,
        EnvironmentModule,
        AuthModule,
    ]
})
export class UseCasesProxyModule {
    private static useCaseRegisterList = [
        new AuthProxyRegister(),
        new PostProxyRegister(),
        new UserProxyRegister(),
    ]

    private static providersList = []

    private static exportsList = []

    private static registerProvidersList(proxy: UseCaseProxyRegisterInterface) {
        const providers = proxy.registerProviders()
        for (let index = 0; index < providers.length; index++) {
            this.providersList.push(providers[index])
        }
    }

    private static registerExportsList(proxy: UseCaseProxyRegisterInterface) {
        const exports = proxy.registerExports()
        for (let index = 0; index < exports.length; index++) {
            this.exportsList.push(exports[index])
        }
    }

    static registerList() {
        this.useCaseRegisterList.forEach((v) => {
            this.registerExportsList(v)
            this.registerProvidersList(v)
        })
    }

    static register(): DynamicModule {
        this.registerList()

        return {
            module: UseCasesProxyModule,
            providers: this.providersList,
            exports: this.exportsList,
        }
    }
}
