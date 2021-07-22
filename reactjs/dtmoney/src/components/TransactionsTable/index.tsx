import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export function TransactionTable() {
  useEffect(() => {
    api.get('/transactions').then(response => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Webbsite</td>
            <td className="deposit">R$ 5000,00</td>
            <td>Venda</td>
            <td>22/07/2021</td>
          </tr>
          <tr>
            <td>Parcela Casa</td>
            <td className="withdraw">-R$ 500,00</td>
            <td>Casa</td>
            <td>21/07/2021</td>
          </tr>
          <tr>
            <td>Salário</td>
            <td className="deposit">R$ 5000,00</td>
            <td>Trabalho</td>
            <td>20/07/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}