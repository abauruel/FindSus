import SoapRequest from '../utils/soap';

const soapRequest = new SoapRequest({
  security: {
    username: 'CNES.PUBLICO',
    password: 'cnes#2015public',
  },
  targetNamespace: [
    {
      xmlns: 'xmlns:est',
      url: 'http://servicos.saude.gov.br/cnes/v1r0/estabelecimentosaudeservice',
    },
    {
      xmlns: 'xmlns:fil',
      url:
        'http://servicos.saude.gov.br/wsdl/mensageria/v1r0/filtrolocalizacaoestabelecimentosaude',
    },
    { xmlns: 'xmlns:loc', url: 'http://servicos.saude.gov.br/schema/cnes/v1r0/localizacao' },
    { xmlns: 'xmlns:tip', url: 'http://servicos.saude.gov.br/schema/cnes/v1r0/tipounidade' },
    { xmlns: 'xmlns:pag', url: 'http://servicos.saude.gov.br/wsdl/mensageria/v1r0/paginacao' },
  ],

  commonTypes: 'http://soap.acme.com/2.0/soap-common-types',
  requestURL: 'https://servicos.saude.gov.br/cnes/EstabelecimentoSaudeService/v1r0',
});

export default soapRequest;
