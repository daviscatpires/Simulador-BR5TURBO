import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import imagemTop from '../../Assets/Logo-Top.png';
import imagemExpertise from '../../Assets/expertise-solu-removebg-preview.png';
import imagemBR5 from '../../Assets/BR5-BENEFICIOS-BRANCO.png';
import imagemBR5T from '../../Assets/BR5-TURBO.png';

// Interfaces para definir a estrutura de dados
interface Produto {
  // ... Definição das propriedades de um produto ...
  nome: string;
  preco: number;
  consultoria360: number;
  resultado1: number;
  resultado2: number;
  resultado3: number;
  formulaResultado1: string;
  formulaResultado2: string;
  formulaResultado3: string;
}

interface Empresa {
   // ... Definição das propriedades de uma empresa ...
  empresa: string;
  produtos: Produto[];
  imagem: string;
}

type FieldName = 'nome' | 'preco' | 'consultoria360' | 'resultado1' | 'resultado2' | 'resultado3';

// Estilizando o componente Td
interface TdProps {
  isEven: boolean;
}

const GlobalStyle = createGlobalStyle`
  /* ... Outros estilos globais ... */

  /* Remova as setas de aumento e diminuição */
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }
`;
// Estilização CSS usando a biblioteca styled-components
const TableContainer = styled.div`
  // ... Estilos para o container da tabela ...
  margin: 20px;
  overflow-x: auto;
`;
const SeparatorRow = styled.tr`
  /* Estilização para a linha de separação */
  height: 2px; /* Altura da linha de separação */
  background-color: #ffd700; /* Cor de fundo da linha de separação */
  margin-top: 10px; /* Espaço acima da linha de separação */
  margin-bottom: 10px; /* Espaço abaixo da linha de separação */
`;

const StyledTable = styled.table`
  // ... Estilos para a tabela ...
  width: 100%;
  border-collapse: collapse;
  border-radius: 15px;
  overflow: hidden;
`;

const TableHeader = styled.thead`
  // ... Estilos para o cabeçalho da tabela ...
  background-color: #000;
  font-weight: bold;
`;

const TableHeaderCell = styled.th`
  // ... Estilos para as células do cabeçalho ...
  background: linear-gradient(135deg, #ffd700, #ffcc00);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0;
  text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
  font-size: 20px;
`;

const TableRow = styled.tr`
  padding: 5px; /* Adicione preenchimento */
  background-color: #000;
  color: #ffd700;
  font-weight: bold;
  text-align: center;
  &:nth-child(even) {
      // ... Estilos para as linhas da tabela ...
    background-color: #ffd700;

  }
`;

const TableCell = styled.td`
  padding: 10px;
  background-color: black;
  border-color: #ffd700;
  margin-bottom: 10px;
  color: #ffd700;
  font-weight: bold;
  text-align: center;

  &.positive {
    background: #4caf50;
    color: white;
  }

  &.negative {
    background: #f44336;
    color: white;
  }
`;

const CustomTd = styled.td<{ isEven: boolean }>`
  // ... Estilos personalizados para as células da tabela com base em uma propriedade isEven ...
  padding: 10px;
  background-color: #000;
  color: #ffd700;
  font-weight: bold;
  text-align: center;
  font-size: 15px;
`;
// Crie um novo componente estilizado para o input
const StyledInput = styled.input`
  border: 1px solid #ffd700; /* Adicione uma borda */
  padding: 5px; /* Adicione preenchimento */
  background-color: #000;
  color: #ffd700;
  font-weight: bold;
  text-align: center;
  border-radius: 5px; /* Adicione borda arredondada */
  &:focus {
    outline: none; /* Remova a borda de foco padrão */
    box-shadow: 0 0 5px #ffd700; /* Adicione uma sombra quando estiver em foco */
  }

  /* Remova as setas de aumento e diminuição */
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;


// Componente React principal
const Planilha: React.FC = () => {
   // Estado para armazenar os dados da empresa e produtos
  const [data, setData] = useState<Empresa[]>([
     // ... Definição dos dados de empresas e produtos ...
    {
      empresa: 'TopSeguros',
      produtos: [
        {
          nome: 'Seguro de carro',
          preco: 0,
          consultoria360: 0,
          resultado1: 0,
          resultado2: 0,
          resultado3: 0,
          formulaResultado1: '((consultoria360 * 0.1) * 0.83) * 0.5', // Fórmula específica para o Seguro de Carro
          formulaResultado2: '-', // Fórmula específica para o Seguro de Carro
          formulaResultado3: '', // Fórmula específica para o Seguro de Carro
        },
        {
          nome: 'Seguro casa',
          preco: 0,
          consultoria360: 0,
          resultado1: 0,
          resultado2: 0,
          resultado3: 0,
          formulaResultado1: '((consultoria360 * 0.3) * 0.83) * 0.5', // Fórmula específica para o Seguro de Casa
          formulaResultado2: '-', // Fórmula específica para o Seguro de Casa
          formulaResultado3: '', // Fórmula específica para o Seguro de Casa
        },
        {
          nome: 'Seguro de Vida Familiar',
          preco: 0,
          consultoria360: 0,
          resultado1: 0,
          resultado2: 0,
          resultado3: 0,
          formulaResultado1: '((consultoria360 * 1) * 0.83) * 0.5', // Fórmula específica para o Seguro de Vida Familia
          formulaResultado2: '((consultoria360 * 0.3) * 0.83) * 0.5', // Fórmula específica para o Seguro de Vida Familia
          formulaResultado3: '', // Fórmula específica para o Seguro de Vida Familia
        },
        {
          nome: 'Plano de Saúde',
          preco: 0,
          consultoria360: 0,
          resultado1: 0,
          resultado2: 0,
          resultado3: 0,
          formulaResultado1: '((consultoria360 * 3) * 0.83) * 0.5', // Fórmula específica para o Plano de Saúde
          formulaResultado2: '((consultoria360 * 0.02) * 0.83) * 0.5', // Fórmula específica para o Plano de Saúde
          formulaResultado3: '', // Fórmula específica para o Plano de Saúde
        },
        {
          nome: 'Seguro de Vida em Grupo',
          preco: 0,
          consultoria360: 0,
          resultado1: 0,
          resultado2: 0,
          resultado3: 0,
          formulaResultado1: '((consultoria360 * 1) * 0.83) * 0.5', // Fórmula específica para o Seguro de Vida em Grupo
          formulaResultado2: '((consultoria360 * 0.3) * 0.83) * 0.5', // Fórmula específica para o Seguro de Vida em Grupo
          formulaResultado3: '', // Fórmula específica para o Seguro de Vida em Grupo
        },
        {
          nome: 'Seguro Transporte',
          preco: 0,
          consultoria360: 0,
          resultado1: 0,
          resultado2: 0,
          resultado3: 0,
          formulaResultado1: '-', // Fórmula específica para o Seguro Transporte
          formulaResultado2: '((consultoria360 * 0.3) * 0.83) * 0.5', // Fórmula específica para o Seguro Transporte
          formulaResultado3: '', // Fórmula específica para o Seguro Transporte
        },
        {
          nome: 'Seguro Frota',
          preco: 0,
          consultoria360: 0,
          resultado1: 0,
          resultado2: 0,
          resultado3: 0,
          formulaResultado1: '((consultoria360 * 0.1) * 0.83) * 0.5', // Fórmula específica para o Seguro Frota
          formulaResultado2: '-', // Fórmula específica para o Seguro Frota
          formulaResultado3: '', // Fórmula específica para o Seguro Frota
        },
        {
          nome: 'Seguro Empresarial',
          preco: 0,
          consultoria360: 0,
          resultado1: 0,
          resultado2: 0,
          resultado3: 0,
          formulaResultado1: '((consultoria360 * 0.3) * 0.83) * 0.5', // Fórmula específica para o Seguro Empresarial
          formulaResultado2: '-', // Fórmula específica para o Seguro Empresarial
          formulaResultado3: '', // Fórmula específica para o Seguro Empresarial
        },
        {
          nome: 'Equipamentos',
          preco: 0,
          consultoria360: 0,
          resultado1: 0,
          resultado2: 0,
          resultado3: 0,
          formulaResultado1: '((consultoria360 * 0.2) * 0.83) * 0.5', // Fórmula específica para o Equipamentos
          formulaResultado2: '-', // Fórmula específica para o Equipamentos
          formulaResultado3: '', // Fórmula específica para o Equipamentos
        },
        {
          nome: 'RC - Responsabilidade Civil',
          preco: 0,
          consultoria360: 0,
          resultado1: 0,
          resultado2: 0,
          resultado3: 0,
          formulaResultado1: '((consultoria360 * 0.2) * 0.83) * 0.5', // Fórmula específica para o Responsabilidade Civil
          formulaResultado2: '-', // Fórmula específica para o Responsabilidade Civil
          formulaResultado3: '', // Fórmula específica para o Responsabilidade Civil
        },
        {
          nome: 'Outros',
          preco: 0,
          consultoria360: 0,
          resultado1: 0,
          resultado2: 0,
          resultado3: 0,
          formulaResultado1: '0', // Fórmula específica para Outros
          formulaResultado2: '0', // Fórmula específica para Outros
          formulaResultado3: '', // Fórmula específica para Outros
        },
        // ... outros produtos ...
      ],
      imagem: imagemTop,
    },
    {
      empresa: 'Expertise',
      produtos: [
        {
          nome: 'Consórcios Tradicionais ou Contemplado',
          preco: 0,
          consultoria360: 0,
          resultado1: 0,
          resultado2: 0,
          resultado3: 0,
          formulaResultado1: '((consultoria360 * (3.8/100)) * 0.83) * 0.5', // Fórmula específica para o Consorcios Tradicionais ou Contemplados
          formulaResultado2: '-', // Fórmula específica para o Consorcios Tradicionais ou Contemplados
          formulaResultado3: '', // Fórmula específica para o Consorcios Tradicionais ou Contemplados
        },
        {
          nome: 'Vale Alimentação',
          preco: 0,
          consultoria360: 0,
          resultado1: 0,
          resultado2: 0,
          resultado3: 0,
          formulaResultado1: '((consultoria360 * 0.25) * 0.83) * 0.5', // Fórmula específica para o Vale Alimentação
          formulaResultado2: '((consultoria360 * (0.3/100)) * 0.83) * 0.5', // Fórmula específica para o Vale Alimentação
          formulaResultado3: '', // Fórmula específica para o Vale Alimentação
        },
        {
          nome: 'Vale Refeição',
          preco: 0,
          consultoria360: 0,
          resultado1: 0,
          resultado2: 0,
          resultado3: 0,
          formulaResultado1: '((consultoria360 * 0.18) * 0.83) * 0.5', // Fórmula específica para o Vale Refeição
          formulaResultado2: '((consultoria360 * 0.02) * 0.83) * 0.5', // Fórmula específica para o Vale Refeição
          formulaResultado3: '', // Fórmula específica para o Vale Refeição
        },
        {
          nome: 'Financiamento de Imóvel ou Automóvel',
          preco: 0,
          consultoria360: 0,
          resultado1: 0,
          resultado2: 0,
          resultado3: 0,
          formulaResultado1: '((consultoria360 * 0.03) * 0.83) * 0.5', // Fórmula específica para Financiamento de Imóvel ou Automóvel
          formulaResultado2: '-', // Fórmula específica para Financiamento de Imóvel ou Automóvel
          formulaResultado3: '', // Fórmula específica para Financiamento de Imóvel ou Automóvel
        },
        {
          nome: 'Outros',
          preco: 0,
          consultoria360: 0,
          resultado1: 0,
          resultado2: 0,
          resultado3: 0,
          formulaResultado1: '0', // Fórmula específica para Outros
          formulaResultado2: '0', // Fórmula específica para Outros
          formulaResultado3: '', // Fórmula específica para Outros
        },

      ],
      imagem: imagemExpertise
    },
    {
      empresa: 'BR5 Benefícios',
      produtos: [
        {
          nome: 'Telemedicina SulAmerica + Funeral + RendaExtra',
          preco: 0,
          consultoria360: 0,
          resultado1: 0,
          resultado2: 0,
          resultado3: 0,
          formulaResultado1: 'consultoria360 * 1', // Fórmula específica para Telemedicina
          formulaResultado2: '(consultoria360 * 0.5)*0.5', // Fórmula específica para Telemedicina
          formulaResultado3: '', // Fórmula específica para Telemedicina
        },
        {
          nome: 'Desconto em Energia',
          preco: 0,
          consultoria360: 0,
          resultado1: 0,
          resultado2: 0,
          resultado3: 0,
          formulaResultado1: '((consultoria360 * 0.9) * 0.83) * 0.5', // Fórmula específica para Desconto de energia
          formulaResultado2: '-', // Fórmula específica para Desconto de energia
          formulaResultado3: '', // Fórmula específica para Desconto de energia
        },
        {
          nome: 'Cartão combustível',
          preco: 0,
          consultoria360: 0,
          resultado1: 0,
          resultado2: 0,
          resultado3: 0,
          formulaResultado1: '((consultoria360 * 1) * 0.83) * 0.5', // Fórmula específica para o Seguro de Vida Familia
          formulaResultado2: '((consultoria360 * (0.3/100)) * 0.83) * 0.5', // Fórmula específica para o Seguro de Vida Familia
          formulaResultado3: '', // Fórmula específica para o Seguro de Vida Familia
        },
        {
          nome: 'Cartão Premiação',
          preco: 0,
          consultoria360: 0,
          resultado1: 0,
          resultado2: 0,
          resultado3: 0,
          formulaResultado1: '-', // Fórmula específica para o Plano de Saúde
          formulaResultado2: '((consultoria360 * 0.02) * 0.83) * 0.5', // Fórmula específica para o Plano de Saúde
          formulaResultado3: '', // Fórmula específica para o Plano de Saúde
        },
        {
          nome: 'Antecipação Vale ou FGTS',
          preco: 0,
          consultoria360: 0,
          resultado1: 0,
          resultado2: 0,
          resultado3: 0,
          formulaResultado1: '-',
          formulaResultado2: '((consultoria360 * 0.02) * 0.83) * 0.5',
          formulaResultado3: '',
        },
        {
          nome: 'Outros',
          preco: 0,
          consultoria360: 0,
          resultado1: 0,
          resultado2: 0,
          resultado3: 0,
          formulaResultado1: '0', // Fórmula específica para o Seguro Transporte
          formulaResultado2: '0', // Fórmula específica para o Seguro Transporte
          formulaResultado3: '', // Fórmula específica para o Seguro Transporte
        },

        // ... outros produtos ...
      ],
      imagem: imagemBR5
    },
    {
      empresa: 'BR5 TURBO',
      produtos: [
        {
          nome: 'Vendas de licenças',
          preco: 0,
          consultoria360: 0,
          resultado1: 0,
          resultado2: 0,
          resultado3: 0,
          formulaResultado1: 'consultoria360 * 0.5', // Fórmula específica para o Vendas de licenças
          formulaResultado2: '-', // Fórmula específica para o Vendas de licenças
          formulaResultado3: '', // Fórmula específica para o Vendas de licenças
        },
        {
          nome: 'Ecossistema de vendedores',
          preco: 0,
          consultoria360: 0,
          resultado1: 0,
          resultado2: 0,
          resultado3: 0,
          formulaResultado1: 'consultoria360 * 0.25', // Fórmula específica para Ecossistema de venvdedores
          formulaResultado2: '-', // Fórmula específica para Ecossistema de venvdedores
          formulaResultado3: '', // Fórmula específica para Ecossistema de venvdedores
        },
        {
          nome: 'Ecossistema de Empresários',
          preco: 0,
          consultoria360: 0,
          resultado1: 0,
          resultado2: 0,
          resultado3: 0,
          formulaResultado1: 'consultoria360 * 0.05', // Fórmula específica para Ecossistema de empresários
          formulaResultado2: '-', // Fórmula específica para Ecossistema de empresários
          formulaResultado3: '', // Fórmula específica para Ecossistema de empresários
        },

      ],
      imagem: imagemBR5T
    },
    // ... outras empresas ...
  ]);

  // Função para lidar com as mudanças nos campos de entrada
  const handleInputChange = (empresaIndex: number, produtoIndex: number, field: FieldName, value: number) => {
    // ... Lógica para atualizar os dados com base nas mudanças de entrada ...
    const newData = data.map((empresa, eIndex) => {
      if (eIndex === empresaIndex) {
        let newProdutos = empresa.produtos.map((produto, pIndex) => {
          if (pIndex === produtoIndex) {
            let newProduto: Produto = {
              ...produto,
              [field]: value,
            };

            if (field === 'consultoria360' && produto.formulaResultado1) {
              // Calcular o valor de resultado1 com base na fórmula correspondente
              newProduto.resultado1 = calcularResultado(produto.formulaResultado1, newProduto);
            }

            if (field === 'consultoria360' && produto.formulaResultado2) {
              // Calcular o valor de resultado2 com base na fórmula correspondente
              newProduto.resultado2 = calcularResultado(produto.formulaResultado2, newProduto);
            }

            if (field === 'consultoria360' || field === 'preco') {
              // Atualizar o "Resultado 3" como a diferença entre "Custo Atual" e "Consultoria 360"
              newProduto.resultado3 = newProduto.preco - newProduto.consultoria360;
            }

            return newProduto;
          }
          return produto;
        });

        return {
          ...empresa,
          produtos: newProdutos,
        };
      }
      return empresa;
    });

    setData(newData);
  };

// Função para calcular o resultado com base na fórmula
const calcularResultado = (formula: string, produto: Produto) => {
  // ... Lógica para calcular o resultado com base na fórmula ...
  try {
    const formulaComVariaveis = formula
      .replace(/consultoria360/g, `${produto.consultoria360}`)
      .replace(/preco/g, `${produto.preco}`)
      .replace(/resultado1/g, `${produto.resultado1}`)
      .replace(/resultado2/g, `${produto.resultado2}`)
      .replace(/resultado3/g, `${produto.resultado3}`);

    const result = eval(formulaComVariaveis);
    return isNaN(result) ? 0 : result; // Retornar 0 se o resultado for NaN
  } catch (error) {
    console.error('Erro ao calcular a fórmula:', error);
    return 0;
  }
};

return (
  <>
  <GlobalStyle/>
    <TableContainer>
      <StyledTable>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Empresa</TableHeaderCell>
            <TableHeaderCell>Produto</TableHeaderCell>
            <TableHeaderCell>Custo Atual</TableHeaderCell>
            <TableHeaderCell>Consultoria 360</TableHeaderCell>
            <TableHeaderCell>Lucro Total</TableHeaderCell>
            <TableHeaderCell>Lucro Vitalício</TableHeaderCell>
            <TableHeaderCell>Economia</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <tbody>
          {data.map((empresa, empresaIndex) => (
            <React.Fragment key={empresaIndex}><br></br><br></br><br></br>
              {empresa.produtos.map((produto: Produto, produtoIndex: number) => (
                <TableRow key={`${empresaIndex}-${produtoIndex}`}>
                  {produtoIndex === 0 && (
                  <TableCell rowSpan={empresa.produtos.length}>
                  <img
                    src={empresa.imagem} // Use a imagem associada à empresa
                    alt={empresa.empresa}
                    style={{ width: '150px', height: 'auto' }} // Adicione um estilo para ajustar o tamanho da imagem
                  />
                </TableCell>
                  )}
                  <TableCell>{produto.nome}</TableCell>
                  <CustomTd isEven={produtoIndex % 2 === 0}>
                    <StyledInput
                      type="number"
                      value={produto.preco}
                      onChange={(e) =>
                        handleInputChange(empresaIndex, produtoIndex, 'preco', parseFloat(e.target.value))
                      }
                    />
                  </CustomTd>
                  <CustomTd isEven={produtoIndex % 2 === 0}>
                    <StyledInput
                      type="number"
                      value={produto.consultoria360}
                      onChange={(e) =>
                        handleInputChange(empresaIndex, produtoIndex, 'consultoria360', parseFloat(e.target.value))
                      }
                    />
                    </CustomTd>
                    <CustomTd isEven={produtoIndex % 2 === 0}>
                    {produto.formulaResultado1 === '-' ? '-' : produto.resultado1.toFixed(2)}
                  </CustomTd>
                  <CustomTd isEven={produtoIndex % 2 === 0}>
                    {produto.formulaResultado2 === '-' ? '-' : produto.resultado2.toFixed(2)}
                  </CustomTd>
                  <CustomTd isEven={produtoIndex % 2 === 0}>{produto.formulaResultado2 === 'Não se aplica'
                      ? 'Não se aplica'
                      : (produto.preco - produto.consultoria360).toFixed(2)}</CustomTd>
                </TableRow>
              ))}<br></br><br></br>
              {empresaIndex < data.length - 1 && (
              <SeparatorRow>
                <td colSpan={7}></td> {/* Colspan deve ser igual ao número de colunas na tabela */}
              </SeparatorRow>
            )}
            </React.Fragment>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  </>
);
};

export default Planilha;
