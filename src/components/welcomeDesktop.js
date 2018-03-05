import React from 'react';
import Screenshot from './../img/screenshotApp.png';

export default class WelcomeDesktop extends React.Component {
  render() {
    return (
      <div className="welcome">

        <div className="welcomeMessage">

          <div className="title">Bienvenue sur Kiril !</div>

          <div className="description">
            Kiril est une application qui permet d'apprendre l'alphabet bulgare.
          </div>

          <div>
            L'application possède du contenu interactif et a été spécialement développée pour fonctionner sur les
            smartphones et les tablettes.
            <br />
            Pour profiter pleinement de l'application, ouvrez la sur votre mobile/tablette !
            <br />
            Il vous sera proposé d'ajouter une icône à votre fond d'écran. Cliquez et vous pourrez ainsi accéder
            directement à l'application.
            <br />
            Let's get to work ! :)
          </div>

          <div className="screenshotApp">
            <img src={Screenshot} width={300}/>
          </div>

        </div>
      </div>
    )
  }
}