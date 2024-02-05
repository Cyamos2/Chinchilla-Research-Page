import 'zone.js/node';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';

// Import the updated appConfig
import { config } from './src/app/app.config.server';

// Express server
const app = express();

// Angular Express Engine
app.engine(
  'html',
  ngExpressEngine({
    bootstrap: AppServerModule,
    providers: [
      // Pass the merged configuration to the Angular Universal server
      config,
      { provide: APP_BASE_HREF, useValue: '/' }
    ],
  }),
);

app.set('view engine', 'html');
app.set('views', join(process.cwd(), 'dist/chinchilla-research-page/browser'));

// Serve static files from the 'dist' directory
app.get('*.*', express.static(join(process.cwd(), 'dist/chinchilla-research-page/browser')));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
