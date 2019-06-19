import * as dotenv from 'dotenv';
import * as path from 'path';

import * as pkg from './package.json';
import {
    getOsEnv, getOsEnvOptional, getOsPath, getOsPaths, normalizePort, toBool, toNumber
} from './src/lib/env';


export const env = 
{
    db : 
    [
        
        {
            name: 'winstore',
            connectionOptions: 
            {
                type: getOsEnv('TYPEORM_CONNECTION'),
                host: getOsEnvOptional('TYPEORM_HOST'),
                port: toNumber(getOsEnvOptional('TYPEORM_PORT')),
                username: getOsEnvOptional('TYPEORM_USERNAME'),
                password: getOsEnvOptional('TYPEORM_PASSWORD'),
                database: getOsEnv('TYPEORM_DATABASE'),
                synchronize: toBool(getOsEnvOptional('TYPEORM_SYNCHRONIZE')),
                logging: getOsEnv('TYPEORM_LOGGING'),
                schema: getOsEnv('TYPEORM_SCHEMA'),
            }
        }

    ]
}