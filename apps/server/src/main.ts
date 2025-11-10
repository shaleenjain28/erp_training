import { config } from 'dotenv';
import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Load .env file - tries server directory first, then root directory
// This works in a monorepo setup where .env might be in different locations
const serverEnvPath = join(process.cwd(), '.env');
const rootEnvPath = join(process.cwd(), '../../.env');

// Load from server directory (if running from apps/server)
config({ path: serverEnvPath });
// Also try root directory as fallback (for monorepo shared env)
config({ path: rootEnvPath, override: false }); // override: false keeps existing values

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
