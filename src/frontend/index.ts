import { BUNDLE_FILENAME, PAGE_TITLE, ROOT_ELEMENT } from './app.const';

const index = ({ app, state }: { app: string, state: object }): string => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <script>
        GLOBAL_STATE = ${JSON.stringify(state)};
      </script>
      <title>${PAGE_TITLE}</title>
    </head>
    <body>
      <div id="${ROOT_ELEMENT}">
        ${app}
      </div>
      <script src="${BUNDLE_FILENAME}"></script>
    </body>
  </html>
  `;

export default index;
