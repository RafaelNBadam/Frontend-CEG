import { HeaderApp } from '../App';
import Card from './InstructionsModel';
import '../styles/Body.css';

const CardList = () => {
  const cardsData = [
    {
      image: '/Ada_Tech_logo.png',
      name: 'Ada Tech',
      description: ' Nossa plataforma oferece cursos e trilhas de estudos para formações assíncronas de forma gratuita, sendo atualizada regularmente com novos cursos. Cada curso concluído aumenta suas chances de ser notado por nossas empresas parceiras.',
      link: 'https://ada.tech'
    },
    {
      image: '/PdA_logo.png',
      name: 'Programadores do Amanhã',
      description: 'O Programadores do Amanhã é uma iniciativa que visa capacitar e promover a participação ativa de jovens negros e indígenas na área de tecnologia. Eles recebem treinamento completo em programação, além de instrução em inglês e ferramentas estrangeiras.',
      link: 'https://programadoresdoamanha.org'
    },
    {
      image: '/Pot_Tech_logo.png',
      name: 'Potência Tech',
      description: ' O Potência Tech é uma plataforma online de cursos profissionalizantes gratuitos na área de tecnologia. Com o programa você pode fazer cursos rápidos, ter acesso a bolsas de estudo e vagas de emprego na área de tecnologia',
      link: 'https://potenciatech.com.br'
    },
    {
      image: '/Fund_Bra_logo.png',
      name: 'Fundação Bradesco',
      description: ' Criada em 2001, a Escola Virtual é um portal de e-learning dedicado a oferecer cursos gratuitos e 100% on-line em diferentes áreas de interesse, como Desenvolvimento Pessoal e Profissional, Metodologias de Aprendizagem, Negócios e Inovação, Produtividade, Programação e Tecnologia da Informação.',
      link:'https://www.ev.org.br'
    },
    {
      image: '/Senac_logo.png',
      name: 'Senac (EAD)',
      description: 'O Senac se destaca por oferecer uma experiência excepcional de ensino a distância, com uma variedade impressionante de mais de 380 cursos em diferentes níveis e áreas de conhecimento. Isso possibilita aos alunos construírem uma trajetória educacional e profissional de sucesso.',
      link:'https://www.ead.senac.br'
    },
    // Add more cards as needed
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};



export default CardList;

const Header = () => {
    return (
      <div>
        <HeaderApp />
      </div>
    );
  }

  export { Header,CardList};	