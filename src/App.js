import logo from './logo.svg';
import './App.css';
import { PowerBIEmbed } from 'powerbi-client-react';
import {models} from 'powerbi-client'
function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <h1>  APRICART </h1>
        <PowerBIEmbed
          embedConfig={{
            type: 'dashboard',   // Supported types: report, dashboard, tile, visual and qna
            id: '729a2d1e-e924-4a97-be24-42ab97592b25',
            embedUrl: 'https://app.powerbi.com/dashboardEmbed?dashboardId=2396e9a5-62ab-4635-b659-febf3d7600f2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUFGUklDQS1OT1JUSC1BLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjpmYWxzZX19',
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNzEyYjVkYmQtM2E5Mi00MTQ2LWEyMTItMjYwZmYwZTdjODc1LyIsImlhdCI6MTY1OTg3ODkyNCwibmJmIjoxNjU5ODc4OTI0LCJleHAiOjE2NTk4ODQwNDgsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFNaGJMZk1PMDVZdTduS2szdzlzMXM2WDdDN0czS3VjcVUrbkZna2JlOW1Eb1NLS1RtUlczMUIyMG16dVo1RGtYIiwiYW1yIjpbInB3ZCIsInJzYSJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImRldmljZWlkIjoiZTcxNmUyODItZThhYi00YTQ3LWE5ODUtOTIzZDg0MGNmZjMyIiwiZmFtaWx5X25hbWUiOiItIEFwcmljYXJ0IiwiZ2l2ZW5fbmFtZSI6IlJlcG9ydHMiLCJpcGFkZHIiOiIzOS41MC4yNTAuMiIsIm5hbWUiOiJSZXBvcnRzIC0gQXByaWNhcnQiLCJvaWQiOiI3YzNlMTM0NS0xZDFhLTQwYzEtYTFlOC1iZDVkNzcyMWYzODAiLCJwdWlkIjoiMTAwMzIwMDFGQUVBQjYyQSIsInJoIjoiMC5BWGtBdlYwcmNaSTZSa0dpRWlZUDhPZklkUWtBQUFBQUFBQUF3QUFBQUFBQUFBQjVBQ2MuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoicnNXV1owYWVkVVI4eTBqbzk4cU5YcFNKNElRbXNEMEJUV3hUdUR6YkdrYyIsInRpZCI6IjcxMmI1ZGJkLTNhOTItNDE0Ni1hMjEyLTI2MGZmMGU3Yzg3NSIsInVuaXF1ZV9uYW1lIjoicmVwb3J0c0BhcHJpY2FydC5wayIsInVwbiI6InJlcG9ydHNAYXByaWNhcnQucGsiLCJ1dGkiOiJET2ZyZ2NqZ29VNlI5QjY2Y0xWWUFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.HAePglYzwb3e1j6_KPKDgkAXGOdZgNZPWsgfYcG0kmQjQgDO1Lgr8w5sOGf56kA7OE1u_HUnGIi_OhtKxlJFtYeq1J_iyvjKXuKF0BwsAqz8xjn7daJG2SENaAqA9v26T_WTfbdkrzZbfPx8UDYMZ8S0WmhuoCBrUsPmedL6CKCCMCZuU7vhunLZ4EPZ_UBzDry3P9jIh-dVMfTR4qGmv2ws5Pn98mAzi2qTURse1iYIRJe1MQM15CCP0PA4-4eFTVT7faKaS1aWd473cI4LLuZaYCmQx0TPeYi7AJHoREFpGwCy4LDQL5uz0SRskTJWxdlzsU6ed4WxBUQ7Gmc9qQ',
                          
            tokenType: models.TokenType.Aad,
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: false
                }
              },
              background: models.BackgroundType.Transparent,
            }
          }}

          eventHandlers={
            new Map([
              ['loaded', function () { console.log('Report loaded'); }],
              ['rendered', function () { console.log('Report rendered'); }],
              ['error', function (event) { console.log(event.detail); }]
            ])
          }

          cssClassName={"Embed-container"}

          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        />
      </header>

    </div>
  );
}

export default App;
