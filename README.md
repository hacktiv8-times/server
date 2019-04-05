## Hacktiv8 Times

#### List of basic routes:

| Route           | HTTP | Header(s)                  | Body                            | Description                                                  |
| --------------- | ---- | -------------------------- | ------------------------------- | ------------------------------------------------------------ |
| /google-login   | POST | none                       | email: String, password: String | Login using Oauth2 (Google)<br />success:<br />(200), example: {object}<br />errors:<br />(500), error |
| /weather        | GET  | Authentication:<br />token | none                            | Get weather information<br />success:<br />(200), example: {object}<br />errors:<br />(500), error |
| /news           | GET  | Authentication:<br />token | none                            | Get all news information<br />success:<br />(200), example: {object}<br />errors:<br />(500), error |
| /news/:keyword  | GET  | Authentication:<br />token | none                            | Get all news information based on keyword<br />success:<br />(200), example: {object}<br />errors:<br />(500), error |
| /youtube/:title | GET  | Authentication:<br />token | none                            | Get all youtube video information<br />success:<br />(200), example: {object}<br />errors:<br />(500), error |

