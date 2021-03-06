import { Container } from "./styles";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export function Summary() {
  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt='Entradas' />
        </header>
        <strong>R$10000</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt='Saidas' />
        </header>
        <strong>- R$500,00</strong>
      </div>
      <div className="highlight-background">
        <header >
          <p>Total</p>
          <img src={totalImg} alt='Entradas' />
        </header>
        <strong>R$9500</strong>
      </div>
    </Container>
  )
}