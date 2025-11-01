import { Config } from '@config';
import { MainApp } from './app/main';

MainApp.listen(Config.server.port, async () => {
  console.log(`[server]: Server is running at http://localhost:${Config.server.port}`);
});
