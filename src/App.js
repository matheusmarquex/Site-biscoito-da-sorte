import React, {Component} from 'react'
import biscoito from './assets/biscoito.png'
import './estilo.css'

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      textoFrase: ''
    }
    this.quebraBiscoito = this.quebraBiscoito.bind(this)
    this.frases = ['Procrastinar é acreditar no potencial do seu eu do amanhã!', 'Nada é tão horrível que não possa piorar muito!','O não você já tem. Agora falta buscar a humilhação!','Não deixe para desistir amanhã do que você pode desistir ainda hoje!', 'Se zona de conforto fosse ruim não se chamaria zona de conforto!','Procure saber antes se é impossível, porque daí você não precisa nem tentar!','Você é mais fraco do que pensa', 'Nunca deixe ninguém dizer que você não consegue. Diga você mesmo: EU NÃO CONSIGO!', 'Lute como nunca. Perca como sempre.','Nenhum obstáculo é grande para quem desiste.','O recomeço é a oportunidade de um novo fracasso.']
  
  }

    quebraBiscoito(){
      let state = this.state
      let numeroAleatorio = Math.floor(Math.random() * this.frases.length)
      state.textoFrase = this.frases[numeroAleatorio]
      this.setState(state)
    }
  
  render(){
    return(
    
    <div className="container">
        <h1>MOTIVAÇÃO DIÁRIA! :D</h1>
        <img src={biscoito} className="img" />
        <Botao nome="ABRIR BISCOITO" acaoBtn={this.quebraBiscoito}/>
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
    </div>

    )
  }
}

class Botao extends Component {
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    )
  }
} 








export default App;
