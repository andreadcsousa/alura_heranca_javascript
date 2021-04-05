// Ser autenticável significa ter o método "autenticar".
// "ducky type" não interessa o tipo, mas se tem o método.

export class SistemaAutenticacao {
    static login (autenticavel, senha) {
        if (SistemaAutenticacao.eAutenticavel (autenticavel)) {
            return autenticavel.autenticar (senha);
        }
        return false;
    }
    static eAutenticavel (autenticavel) {
        return "autenticar" in autenticavel &&
        autenticavel.autenticar instanceof Function;
    }
}