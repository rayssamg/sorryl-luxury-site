document.getElementById('formAtendimento').addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const preferencia = document.getElementById('preferencia').value;
  const tamanho = document.getElementById('tamanho').value;
  const pagamento = document.getElementById('pagamento').value;
  const contato = document.getElementById('contato').value;

  const mensagem = `
Obrigado, ${nome}!

✔ Preferência: ${preferencia}
✔ Tamanho: ${tamanho}
✔ Forma de Pagamento: ${pagamento}
✔ Contato informado: ${contato}

Em breve entraremos em contato para finalizar seu atendimento.`;

  alert(mensagem);
});
