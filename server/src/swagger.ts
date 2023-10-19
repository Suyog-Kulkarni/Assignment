import { DocumentBuilder, SwaggerCustomOptions } from "@nestjs/swagger";

export const swaggerPath = "api";

export const swaggerDocumentOptions = new DocumentBuilder()
  .setTitle(
    "reate a WPF/WinForms application to interact with Fyers API. Your Application  should Place Orders via Fyers API, and show the response received in Logs."
  )
  .setDescription(
    'Sample service for e-commerce\n\n## Congratulations! Your service resource is ready.\n  \nPlease note that all endpoints are secured with JWT Bearer authentication.\nBy default, your service resource comes with one user with the username "admin" and password "admin".\nLearn more in [our docs](https://docs.amplication.com)'
  )
  .addBearerAuth()
  .build();

export const swaggerSetupOptions: SwaggerCustomOptions = {
  swaggerOptions: {
    persistAuthorization: true,
  },
  customCssUrl: "../swagger/swagger.css",
  customfavIcon: "../swagger/favicon.png",
  customSiteTitle:
    "reate a WPF/WinForms application to interact with Fyers API. Your Application  should Place Orders via Fyers API, and show the response received in Logs.",
};
