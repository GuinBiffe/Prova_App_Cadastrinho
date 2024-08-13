document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const cliente = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        endereco: document.getElementById('endereco').value,
        cpf_cnpj: document.getElementById('cpf_cnpj').value,
        data_cadastro: document.getElementById('data_cadastro').value
    };

    console.log('Cliente cadastrado:', cliente);
    alert('Cliente cadastrado com sucesso!');
});
