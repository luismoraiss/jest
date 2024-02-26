function concatenaString(str1,str2) {
return str1 + str2;
}

describe("Exercícios de teste", () => {
    test('Verifica se um número é igual  ao outro', ()=>{
        expect(1).toBe(1);
    }),
    test('Verifica se um valor é estritamente igual', ()=>{
        expect('1').not.toBe(1);
    }),
    test('Verifica concatenação de string', ()=>{
        expect(concatenaString('Tudo','Bem?')).toBe('TudoBem?');
    });

});