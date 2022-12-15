// 705.484.450-52
class ValidaCpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    eSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) == this.cpfLimpo;
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digitoUm = ValidaCpf.geraDigito(cpfSemDigitos);
        const digitoDois = ValidaCpf.geraDigito(cpfSemDigitos + digitoUm);
        this.novoCPF = cpfSemDigitos + digitoUm + digitoDois;
    }

    static geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for (let stringNumerica of cpfSemDigitos) {
            total += reverso * Number(stringNumerica);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0'
    }
    
    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.eSequencia()) return false;
        this.geraNovoCpf();

        return this.novoCPF == this.cpfLimpo;
    }
}

let validaCpf = new ValidaCpf('705.484.450-52');
// validaCpf = new ValidaCpf('999.999.999-99');

if (validaCpf.valida()) {
    console.log('CPF valido');
} else {
    console.log('CPF invalido');
}